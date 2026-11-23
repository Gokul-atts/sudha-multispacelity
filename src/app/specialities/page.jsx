import Speciality from '@/pages/Specialities/Specialities'
import React from 'react';
import Script from "next/script";

export const metadata = {
  title: "Specialities | Sudha Multispeciality Hospital",
  description: "From neurology to plastic surgery, explore solutions at Sudha, the Best Multispeciality Hospital in Erode, under a single roof. Book a consult.",
  keywords: " Best Multispeciality Hospital in Erode"
};


function page() {
  return (
    <div>

      <Script
        id="specialities-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Specialities – Sudha Multispeciality Hospital",
            "headline": "Centres of Excellence – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/specialities",
            "inLanguage": "en-IN",
            "description":
              "Sudha Multispeciality Hospital in Erode features Centres of Excellence with advanced technology, expert doctors, and specialized care across medical specialities.",
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
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Specialities",
              "url": "https://sudhahospitals.com/specialities",
              "department": {
                "@type": "MedicalClinic",
                "name": "Specialities"
              }
            }
          })
        }}
      />

      <Speciality />
    </div>
  )
}

export default page
