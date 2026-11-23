import Anaesthesiology from '@/pages/Anaesthesiology/Anaesthesiology'
import React from 'react';
import Script from "next/script";

export const metadata = {
  title: "Best Anaesthesiology Hospital in Erode | Sudha Multispeciality Hospital",
  description: "Connect with the Best Anaesthesia Doctor in Erode at Sudha Hospital for continuous perioperative pain relief and life support. Book a consult now.",
  keywords: "Best Anaesthesia Doctor in Erode",
  alternates: {
    canonical: "https://sudhahospitals.com/specialities/anaesthesiology/",

    languages: {
      "en-IN": "https://sudhahospitals.com/specialities/anaesthesiology/",
      en: "https://sudhahospitals.com/specialities/anaesthesiology/",
      "x-default": "https://sudhahospitals.com/specialities/anaesthesiology/",
    },
  },
};

function page() {

  // <Head>
  //   <link
  //     rel="canonical"
  //     href="https://sudhahospitals.com/specialities/anaesthesiology/"
  //   />
  //   <link
  //     rel="alternate"
  //     href="https://sudhahospitals.com/specialities/anaesthesiology/"
  //     hreflang="en-in"
  //   />
  //   <link
  //     rel="alternate"
  //     href="https://sudhahospitals.com/specialities/anaesthesiology/"
  //     hreflang="en"
  //   />
  //   <link
  //     rel="alternate"
  //     href="https://sudhahospitals.com/specialities/anaesthesiology/"
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
            name: "Anaesthesiology",
            url: "https://sudhahospitals.com/specialities/anaesthesiology/",
            description:
              "Sudha Multispeciality Hospital delivers the best anaesthesia treatments with advanced support and care, making it the best anaesthesiology hospital in Erode.",
            provider: {
              "@type": "Hospital",
              name: "Sudha Multispeciality Hospital",
              url: "https://sudhahospitals.com/",
            },
            serviceType: ["General Anaesthesia", "Cardiac Anaesthesia"],
            areaServed: {
              "@type": "City",
              name: "Erode",
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://sudhahospitals.com/#book-appointment",
              description: "Book an anaesthesia consultation appointment",
            },
          }),
        }}
      />


      <Script
        id="anaesthesiology-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Anaesthesiology – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/specialities/anaesthesiology",
            "description": "Sudha Multispeciality Hospital delivers the best anaesthesia treatments with advanced support and care, making it the best anaesthesiology hospital in Erode.",
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
                  "name": "Anaesthesiology",
                  "item": "https://sudhahospitals.com/specialities/anaesthesiology"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Anaesthesiology",
              "url": "https://sudhahospitals.com/specialities/anaesthesiology",
              "department": {
                "@type": "MedicalClinic",
                "name": "Anaesthesiology"
              }
            }
          })
        }}
      />
      <Anaesthesiology />
    </div>
  )
}

export default page
