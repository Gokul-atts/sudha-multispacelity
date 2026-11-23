import PainLessDelivery from '@/pages/painlessdelivery/painlessdelivery';
import React from 'react';
import Script from "next/script";

export const metadata = {
  title: "Best Hospital for Painless Delivery in Erode | Sudha Multispeciality Hospital",
  description:" Experience childbirth with ease at Sudha, the Best Hospital for Painless Delivery in Erode, backed by top anesthesiologists. Book your slot now.",
  keywords: "Best Hospital for Painless Delivery in Erode",
  alternates: {
    canonical: "https://sudhahospitals.com/mother-and-child-care/painless-delivery/",
    
    languages: {
      "en-IN": "https://sudhahospitals.com/mother-and-child-care/painless-delivery/",
      en: "https://sudhahospitals.com/mother-and-child-care/painless-delivery/",
      "x-default": "https://sudhahospitals.com/mother-and-child-care/painless-delivery/",
    },
  },
};


const Page = () => {

  // <Head>
  //   {/* Canonical */}
  //   <link
  //     rel="canonical"
  //     href="https://sudhahospitals.com/mother-and-child-care/painless-delivery/"
  //   />

  //   {/* Hreflang */}
  //   <link
  //     rel="alternate"
  //     href="https://sudhahospitals.com/mother-and-child-care/painless-delivery/"
  //     hreflang="en-in"
  //   />
  //   <link
  //     rel="alternate"
  //     href="https://sudhahospitals.com/mother-and-child-care/painless-delivery/"
  //     hreflang="en"
  //   />
  //   <link
  //     rel="alternate"
  //     href="https://sudhahospitals.com/mother-and-child-care/painless-delivery/"
  //     hreflang="x-default"
  //   />
  // </Head>

  return (
    <div>

      

      <Script
        id="painless-delivery-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Painless Delivery – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/mother-and-child-care/painless-delivery",
            "description": "Sudha Multispeciality, the best hospital for painless delivery in Erode, ensures safe, comfortable delivery with expert maternal and baby care.",
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
                  "name": "Painless Delivery",
                  "item": "https://sudhahospitals.com/mother-and-child-care/painless-delivery"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Painless Delivery",
              "url": "https://sudhahospitals.com/mother-and-child-care/painless-delivery",
              "department": {
                "@type": "MedicalClinic",
                "name": "Painless Delivery"
              }
            }
          })
        }}
      />
      <PainLessDelivery />
    </div>
  );
}

export default Page;
