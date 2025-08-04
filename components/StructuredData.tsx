import Script from 'next/script'

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'product' | 'breadcrumb'
  data?: any
}

export default function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "La'Moniega Integrated Services Ltd",
          "description": "Professional printing services including business cards, banners, books, custom merchandise, embroidery, and digital printing.",
          "url": "https://www.lamoneiqa.ng",
          "logo": "https://www.lamoneiqa.ng/logo v1.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          "sameAs": [
            // Add your social media URLs here
            // "https://www.facebook.com/lamoniega",
            // "https://www.twitter.com/lamoniega",
            // "https://www.instagram.com/lamoniega"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "NG" // Update with your actual country
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Printing Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Business Card Printing",
                  "description": "Professional business card printing services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Banner Printing",
                  "description": "Custom banner printing for events and advertising"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Book Printing",
                  "description": "Professional book printing and binding services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom Merchandise",
                  "description": "Custom printed merchandise and promotional products"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Embroidery Services",
                  "description": "Professional embroidery services for clothing and accessories"
                }
              }
            ]
          }
        }

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "La'Moniega Integrated Services Ltd",
          "description": "Professional printing services including business cards, banners, books, custom merchandise, embroidery, and digital printing.",
          "url": "https://www.lamoneiqa.ng",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.lamoneiqa.ng/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        }

      case 'product':
        return data ? {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": data.name,
          "description": data.description,
          "image": data.image,
          "brand": {
            "@type": "Brand",
            "name": "La'Moniega Integrated Services Ltd"
          },
          "offers": {
            "@type": "Offer",
            "price": data.price,
            "priceCurrency": data.currency || "NGN",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "La'Moniega Integrated Services Ltd"
            }
          }
        } : null

      case 'breadcrumb':
        return data ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        } : null

      default:
        return null
    }
  }

  const structuredData = getStructuredData()

  if (!structuredData) return null

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}