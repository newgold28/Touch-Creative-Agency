import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const resendAudienceId = process.env.RESEND_AUDIENCE_ID
const adminEmail = process.env.CONTACT_EMAIL || 'info@touchcreativeagency.com'
const fromEmail =
  process.env.NEWSLETTER_FROM_EMAIL || 'Touch Creative Agency <onboarding@resend.dev>'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || typeof email !== 'string' || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    if (!resend) {
      return NextResponse.json(
        { error: 'The newsletter signup is not configured yet.' },
        { status: 503 }
      )
    }

    const subscriberEmail = email.trim().toLowerCase()

    if (resendAudienceId) {
      const { error } = await resend.contacts.create({
        audienceId: resendAudienceId,
        email: subscriberEmail,
      })
      if (error) {
        console.error('Resend contacts error:', error)
      }
    } else {
      await resend.emails.send({
        from: fromEmail,
        to: [adminEmail],
        subject: 'New newsletter subscriber',
        text: `Add ${subscriberEmail} to the Touch Creative Agency newsletter list.`,
      })
    }

    await resend.emails.send({
      from: fromEmail,
      to: [subscriberEmail],
      subject: "You're on the list — welcome to Touch Creative Agency",
      text: "Thanks for subscribing to the Touch Creative Agency newsletter. We'll send design ideas and agency insights for brands in Nigeria and Africa.\n\n— The Touch Creative Agency team",
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Newsletter form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
