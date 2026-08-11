import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const contactEmail = process.env.CONTACT_EMAIL || 'info@touchcreativeagency.com'
const fromEmail =
  process.env.CONTACT_FROM_EMAIL || 'Touch Creative Agency <onboarding@resend.dev>'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json()

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 })
    }
    if (!email || typeof email !== 'string' || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Please tell us a bit more about your project.' },
        { status: 400 }
      )
    }

    if (!resend) {
      return NextResponse.json(
        { error: 'The contact form is not configured yet. Email us directly instead.' },
        { status: 503 }
      )
    }

    const subject = `New project inquiry from ${name.trim()}`
    const body = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Company: ${(company || '').trim() || 'N/A'}`,
      '',
      message.trim(),
    ].join('\n')

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      subject,
      text: body,
      replyTo: email.trim(),
    })

    if (error) {
      console.error('Resend contact error:', error)
      return NextResponse.json(
        { error: 'Could not send your message. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
