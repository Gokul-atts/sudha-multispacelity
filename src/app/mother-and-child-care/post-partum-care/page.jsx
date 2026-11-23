import PostPartumCare from '@/pages/postpartumcare/postpartumcare';
import React from 'react';
import Script from "next/script";



export const metadata = {
  title: "Best Hospital for Postpartum Care in Erode | Sudha Multispeciality Hospital",
  description: "Recover comfortably at Sudha, the Best Hospital for Postpartum Care in Erode, providing essential mental and body therapy. Request an appointment.",
  keywords: "Best Hospital for Postpartum Care in Erode",
  alternates: {
    canonical: "https://sudhahospitals.com/mother-and-child-care/postpartum-care/",
    
    languages: {
      "en-IN": "https://sudhahospitals.com/mother-and-child-care/postpartum-care/",
      en: "https://sudhahospitals.com/mother-and-child-care/postpartum-care/",
      "x-default": "https://sudhahospitals.com/mother-and-child-care/postpartum-care/",
    },
  },
};


const Page = () => {


  // <Head>
  //   {/* Canonical */}
  //   <link
  //     rel="canonical"
  //     href="https://sudhahospitals.com/mother-and-child-care/postpartum-care/"
  //   />

  //   {/* Hreflang */}
  //   <link
  //     rel="alternate"
  //     href="https://sudhahospitals.com/mother-and-child-care/postpartum-care/"
  //     hreflang="en-in"
  //   />
  //   <link
  //     rel="alternate"
  //     href="https://sudhahospitals.com/mother-and-child-care/postpartum-care/"
  //     hreflang="en"
  //   />
  //   <link
  //     rel="alternate"
  //     href="https://sudhahospitals.com/mother-and-child-care/postpartum-care/"
  //     hreflang="x-default"
  //   />
  // </Head>


  return (
    <div>

      <Script
        id="postpartum-care-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Postpartum Care – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/mother-and-child-care/postpartum-care",
            "description": "Best hospital for postpartum care in Erode offering expert maternal support, health monitoring, and guidance for smooth post-delivery recovery.",
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
                  "name": "Mother and Child Care",
                  "item": "https://sudhahospitals.com/mother-and-child-care-centre"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Postpartum Care",
                  "item": "https://sudhahospitals.com/mother-and-child-care/postpartum-care"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Postpartum Care",
              "url": "https://sudhahospitals.com/mother-and-child-care/postpartum-care",
              "department": {
                "@type": "MedicalClinic",
                "name": "Postpartum Care"
              }
            }
          })
        }}
      />
      <PostPartumCare />
    </div>
  );
}

export default Page;
