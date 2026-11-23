import VocationalDegree from '@/pages/vocationaldegree/vocationaldegree';
import React from 'react';
import Script from "next/script";


export const metadata = {
    title: "Vocational Degree Courses | Sudha Multispeciality Hospital",
    description: "Step directly into healthcare professions by selecting the Best Medical Courses in Erode at Sudha Medical Institute. Enrol in the course today.",
    keywords: "Best Medical Courses in Erode",
    alternates: {
        canonical: "https://sudhahospitals.com/academics/vocational-degree-courses/",

        languages: {
            "en-IN": "https://sudhahospitals.com/academics/vocational-degree-courses/",
            en: "https://sudhahospitals.com/academics/vocational-degree-courses/",
            "x-default": "https://sudhahospitals.com/academics/vocational-degree-courses/",
        },
    },
};

const Page = () => {

    // <Head>
        
    //     <link
    //         rel="canonical"
    //         href="https://sudhahospitals.com/academics/vocational-degree-courses/"
    //     />

      
    //     <link
    //         rel="alternate"
    //         href="https://sudhahospitals.com/academics/vocational-degree-courses/"
    //         hreflang="en-in"
    //     />
    //     <link
    //         rel="alternate"
    //         href="https://sudhahospitals.com/academics/vocational-degree-courses/"
    //         hreflang="en"
    //     />
    //     <link
    //         rel="alternate"
    //         href="https://sudhahospitals.com/academics/vocational-degree-courses/"
    //         hreflang="x-default"
    //     />
    // </Head>



    return (
        <div>

            <Script
                id="vocational-degree-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Vocational Degree Courses – Sudha Multispeciality Hospital",
                        "url": "https://sudhahospitals.com/academics/vocational-degree-courses",
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
                                    "name": "Vocational Degree Courses",
                                    "item": "https://sudhahospitals.com/academics/vocational-degree-courses"
                                }
                            ]
                        },
                        "mainEntity": {
                            "@type": "MedicalClinic",
                            "name": "Sudha Multispeciality Hospital – Vocational Degree Courses",
                            "url": "https://sudhahospitals.com/academics/vocational-degree-courses",
                            "department": {
                                "@type": "MedicalClinic",
                                "name": "Vocational Degree Courses"
                            }
                        }
                    })
                }}
            />
            <VocationalDegree />
        </div>
    );
}

export default Page;
