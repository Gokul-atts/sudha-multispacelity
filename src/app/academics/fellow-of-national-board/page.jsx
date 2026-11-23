import Fellownationalboard from '@/pages/Fellownationalboard/Fellownationalboard';
import React from 'react';
import Script from "next/script";

export const metadata = {
    title: "Fellow of National Board | Sudha Multispeciality Hospital",
    description: "Earn prestigious post-graduate clinical fellowships at Sudha, known as the Best Hospital for Medical Courses in Erode. Book your application now.",
    keywords: "Best Hospital for Medical Courses in Erode",
    alternates: {
        canonical: "https://sudhahospitals.com/academics/fellow-of-national-board/",

        languages: {
            "en-IN": "https://sudhahospitals.com/academics/fellow-of-national-board/",
            en: "https://sudhahospitals.com/academics/fellow-of-national-board/",
            "x-default": "https://sudhahospitals.com/academics/fellow-of-national-board/",
        },
    },
};


const Page = () => {


    // <Head>
    //     {/* Canonical */}
    //     <link
    //         rel="canonical"
    //         href="https://sudhahospitals.com/academics/fellow-of-national-board/"
    //     />

    //     {/* Hreflang */}
    //     <link
    //         rel="alternate"
    //         href="https://sudhahospitals.com/academics/fellow-of-national-board/"
    //         hreflang="en-in"
    //     />
    //     <link
    //         rel="alternate"
    //         href="https://sudhahospitals.com/academics/fellow-of-national-board/"
    //         hreflang="en"
    //     />
    //     <link
    //         rel="alternate"
    //         href="https://sudhahospitals.com/academics/fellow-of-national-board/"
    //         hreflang="x-default"
    //     />
    // </Head>
    return (
        <div>

            <Script
                id="fnb-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Fellow of National Board – Sudha Multispeciality Hospital",
                        "headline": "Fellow of National Board",
                        "url": "https://sudhahospitals.com/academics/fellow-of-national-board",
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
                                    "name": "Academics",
                                    "item": "https://sudhahospitals.com/#academics"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Fellow of National Board",
                                    "item": "https://sudhahospitals.com/academics/fellow-of-national-board"
                                }
                            ]
                        },
                        "mainEntity": {
                            "@type": "MedicalClinic",
                            "name": "Sudha Multispeciality Hospital – Fellow of National Board",
                            "url": "https://sudhahospitals.com/academics/fellow-of-national-board",
                            "department": {
                                "@type": "MedicalClinic",
                                "name": "Fellow of National Board"
                            }
                        }
                    })
                }}
            />



            <Fellownationalboard />
        </div>
    );
}

export default Page;
