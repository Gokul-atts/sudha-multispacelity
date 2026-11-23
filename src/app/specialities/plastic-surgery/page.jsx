import Plasticsurgery from '@/pages/Plasticsurgery/Plasticsurgery'
import React from 'react';
import Script from "next/script";

export const metadata = {
  title: "Best Hospital in Erode for Plastic Surgery | Sudha Multispeciality Hospital",
  description: "Restore natural anatomy at Sudha, the Best Hospital for Plastic Surgery in Erode, delivering world-class micro-reconstructive care. Contact us.",
  keywords: "Best Hospital for Plastic Surgery in Erode",
  alternates: {
    canonical: "https://sudhahospitals.com/specialities/plastic-surgery/",

    languages: {
      "en-IN": "https://sudhahospitals.com/specialities/plastic-surgery/",
      en: "https://sudhahospitals.com/specialities/plastic-surgery/",
      "x-default": "https://sudhahospitals.com/specialities/plastic-surgery/",
    },
  }, 
};


function page() {

  // <Head>
  //   {/* Canonical */}
  //   <link
  //     rel="canonical"
  //     href="https://sudhahospitals.com/specialities/plastic-surgery/"
  //   />

  //   {/* Hreflang */}
  //   <link
  //     rel="alternate"
  //     href="https://sudhahospitals.com/specialities/plastic-surgery/"
  //     hreflang="en-in"
  //   />
  //   <link
  //     rel="alternate"
  //     href="https://sudhahospitals.com/specialities/plastic-surgery/"
  //     hreflang="en"
  //   />
  //   <link
  //     rel="alternate"
  //     href="https://sudhahospitals.com/specialities/plastic-surgery/"
  //     hreflang="x-default"
  //   />
  // </Head>




  return (
    <div>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Plastic Surgery",
            url: "https://sudhahospitals.com/specialities/plastic-surgery/",
            description:
              "Best Hospital for Plastic Surgery delivering advanced cosmetic and reconstructive treatments with expert surgeons and patient-focused care.",
            provider: {
              "@type": "Hospital",
              name: "Sudha Multispeciality Hospital",
              url: "https://sudhahospitals.com/",
            },
            serviceType: [
              "Reconstructive Surgery",
              "Cosmetic Surgery",
              "Burns Management",
              "Maxillofacial Surgery",
            ],
            areaServed: {
              "@type": "City",
              name: "Erode",
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://sudhahospitals.com/#book-appointment",
              description: "Book a Plastic Surgery Consultation appointment",
            },
          }),
        }}
      />

      <Script
        id="plastic-surgery-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Plastic Surgery – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/specialities/plastic-surgery",
            "description":
              "Best Hospital for Plastic Surgery delivering advanced cosmetic and reconstructive treatments with expert surgeons and patient-focused care.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://sudhahospitals.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Specialities",
                  "item": "https://sudhahospitals.com/specialities"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Plastic Surgery",
                  "item": "https://sudhahospitals.com/specialities/plastic-surgery"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Plastic Surgery",
              "url": "https://sudhahospitals.com/specialities/plastic-surgery",
              "department": {
                "@type": "MedicalClinic",
                "name": "Plastic Surgery"
              }
            }
          })
        }}
      />

      <Plasticsurgery />
    </div>
  )
}

export default page
