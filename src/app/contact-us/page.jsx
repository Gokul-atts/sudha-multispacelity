
import Contactus from '@/pages/contactus'
import React from 'react';
import Script from "next/script";

export const metadata = {
  title: "Contact Us | Sudha Multispeciality Hospital",
  description: "Wondering how to get appointment in Sudha Multispecialty Hospital in Erode? Connect directly with our dispatch desk to book a slot now.",
  keywords: "How to get Appointment in Sudha Multispecialty Hospital in Erode",
  alternates: {
    canonical: "https://sudhahospitals.com/contact-us/",

    languages: {
      "en-IN": "https://sudhahospitals.com/contact-us/",
      en: "https://sudhahospitals.com/contact-us/",
      "x-default": "https://sudhahospitals.com/contact-us/",
    },
  },

};


function page() {

  // <Head>
  //   {/* Canonical */}
  //   <link rel="canonical" href="https://sudhahospitals.com/contact-us/" />

  //   {/* Hreflang */}
  //   <link
  //     rel="alternate"
  //     href="https://sudhahospitals.com/contact-us/"
  //     hreflang="en-in"
  //   />
  //   <link
  //     rel="alternate"
  //     href="https://sudhahospitals.com/contact-us/"
  //     hreflang="en"
  //   />
  //   <link
  //     rel="alternate"
  //     href="https://sudhahospitals.com/contact-us/"
  //     hreflang="x-default"
  //   />
  // </Head>

  return (
    <div>

      <Script
        id="contact-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Contact Us – Sudha Multispeciality Hospital",
            "headline": "Contact Us",
            "url": "https://sudhahospitals.com/contact-us",
            "inLanguage": "en-IN",
            "description":
              "Explore Sudha Multispeciality Hospital in Erode, known for its expert medical team, advanced facilities, and dedication to compassionate healthcare.",
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
                  "name": "Contact Us",
                  "item": "https://sudhahospitals.com/contact-us"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Contact Us",
              "url": "https://sudhahospitals.com/contact-us",
              "department": {
                "@type": "MedicalClinic",
                "name": "Contact Us"
              }
            }
          })
        }}
      />
      <Contactus />
    </div>
  )
}

export default page
