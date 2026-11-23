import Careers from '@/pages/career/careers';
import React from 'react';
import Script from "next/script";


export const metadata = {
    title: "Careers at Sudha Hospitals | Sudha Multispeciality Hospital",
    description: "Grow your medical practice by exploring rewarding clinical Hospital Job Vacancies in Erode with our growing Sudha medical team. Apply online today.",
    keywords: "Hospital Job Vacancies in Erode",
    alternates: {
        canonical: "https://sudhahospitals.com/careers/",

        languages: {
            "en-IN": "https://sudhahospitals.com/careers/",
            en: "https://sudhahospitals.com/careers/",
            "x-default": "https://sudhahospitals.com/careers/",
        },
    },
};


const Page = () => {

    // <Head>
       
    //     <link
    //         rel="canonical"
    //         href="https://sudhahospitals.com/careers/"
    //     />

        
    //     <link
    //         rel="alternate"
    //         href="https://sudhahospitals.com/careers/"
    //         hreflang="en-in"
    //     />
    //     <link
    //         rel="alternate"
    //         href="https://sudhahospitals.com/careers/"
    //         hreflang="en"
    //     />
    //     <link
    //         rel="alternate"
    //         href="https://sudhahospitals.com/careers/"
    //         hreflang="x-default"
    //     />
    // </Head>

    return (
        <div>

            <Script
                id="careers-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Careers – Sudha Multispeciality Hospital",
                        "headline": "Careers",
                        "url": "https://sudhahospitals.com/careers",
                        "inLanguage": "en-IN",
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
                                    "name": "Careers",
                                    "item": "https://sudhahospitals.com/careers"
                                }
                            ]
                        },
                        "mainEntity": {
                            "@type": "MedicalClinic",
                            "name": "Sudha Multispeciality Hospital – Careers",
                            "url": "https://sudhahospitals.com/careers",
                            "department": {
                                "@type": "MedicalClinic",
                                "name": "Careers"
                            }
                        }
                    })
                }}
            />

            <Careers />
        </div>
    );
}

export default Page;
