import Gallery from '@/pages/gallery/Gallery'
import React from 'react';
import Script from "next/script";

export const metadata = {
  title: "gallery  | Sudha Multispeciality Hospital",
  description: "Take a visual legacy tour of our advanced modular operation theatres and multi-speciality patient bed wards at Sudha Hospital. Explore now.",
  keywords: " None assigned",
  alternates: {
    canonical: "https://sudhahospitals.com/about-us/gallery/",

    languages: {
      "en-IN": "https://sudhahospitals.com/about-us/gallery/",
      en: "https://sudhahospitals.com/about-us/gallery/",
      "x-default": "https://sudhahospitals.com/about-us/gallery/",
    },
  },
};


function page() {

  // <Head>
  //   {/* Canonical */}
  //   <link
  //     rel="canonical"
  //     href="https://sudhahospitals.com/about-us/gallery/"
  //   />

  //   {/* Hreflang */}
  //   <link
  //     rel="alternate"
  //     href="https://sudhahospitals.com/about-us/gallery/"
  //     hreflang="en-in"
  //   />
  //   <link
  //     rel="alternate"
  //     href="https://sudhahospitals.com/about-us/gallery/"
  //     hreflang="en"
  //   />
  //   <link
  //     rel="alternate"
  //     href="https://sudhahospitals.com/about-us/gallery/"
  //     hreflang="x-default"
  //   />
  // </Head>



  return (
    <div>
      <Script
        id="gallery-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "gallery – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/about-us/gallery",
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
                  "name": "About Us",
                  "item": "https://sudhahospitals.com/#about-us"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "gallery",
                  "item": "https://sudhahospitals.com/about-us/gallery"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – gallery",
              "url": "https://sudhahospitals.com/about-us/gallery",
              "department": {
                "@type": "MedicalClinic",
                "name": "gallery"
              }
            }
          })
        }}
      />
      <Gallery />
    </div>
  )
}

export default page
