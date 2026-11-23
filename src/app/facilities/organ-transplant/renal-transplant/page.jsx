import Organtransplant from '@/pages/renaltransplant/renaltransplant'
import React from 'react';
import Script from "next/script";

export const metadata = {
  title: "Best Hospital for Renal Transplant in Erode | Sudha Multispeciality Hospital",
  description:"Discover premium surgical pathways at Sudha, the Best hospital for Renal Transplant in Erode, built on elite medical science. Book a consult now.",
  keywords: "Best hospital for Renal Transplant in Erode",
   alternates: {
    canonical: "https://sudhahospitals.com/facilities/renal-transplant/",
    
    languages: {
      "en-IN": "https://sudhahospitals.com/facilities/renal-transplant/",
      en: "https://sudhahospitals.com/facilities/renal-transplant/",
      "x-default": "https://sudhahospitals.com/facilities/renal-transplant/",
    },
  },

};

function page() {

  // <Head>
  //   {/* Canonical */}
  //   <link
  //     rel="canonical"
  //     href="https://sudhahospitals.com/facilities/renal-transplant/"
  //   />

  //   {/* Hreflang */}
  //   <link
  //     rel="alternate"
  //     href="https://sudhahospitals.com/facilities/renal-transplant/"
  //     hreflang="en-in"
  //   />
  //   <link
  //     rel="alternate"
  //     href="https://sudhahospitals.com/facilities/renal-transplant/"
  //     hreflang="en"
  //   />
  //   <link
  //     rel="alternate"
  //     href="https://sudhahospitals.com/facilities/renal-transplant/"
  //     hreflang="x-default"
  //   />
  // </Head>

  return (
    <div>


      <Script
        id="renal-transplant-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Renal Transplant – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/facilities/renal-transplant",
            "description": "Explore Sudha Multispeciality Hospital in Erode, known for its expert medical team, advanced facilities, and dedication to compassionate healthcare.",
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
                  "name": "Facilities",
                  "item": "https://sudhahospitals.com/#facilities"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Organ Transplant",
                  "item": "https://sudhahospitals.com/facilities/organ-transplant"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Renal Transplant",
                  "item": "https://sudhahospitals.com/facilities/renal-transplant"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Renal Transplant",
              "url": "https://sudhahospitals.com/facilities/renal-transplant",
              "department": {
                "@type": "MedicalClinic",
                "name": "Renal Transplant"
              }
            }
          })
        }}
      />
      <Organtransplant />
    </div>
  )
}

export default page
