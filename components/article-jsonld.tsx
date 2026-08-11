const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://touchcreative.agency'

export default function ArticleJsonLd({
  title,
  description,
  datePublished,
  dateModified,
  author,
  image,
  url,
}: {
  title: string
  description: string
  datePublished: string
  dateModified: string
  author: string
  image: string
  url: string
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: `${SITE_URL}${image}`,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: author,
      worksFor: {
        '@type': 'Organization',
        name: 'Touch Creative Agency',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Touch Creative Agency',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${url}`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
