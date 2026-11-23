import VocationalEducation from '@/pages/bssvocationaleducation/bssvocationaleducation';
import React from 'react';
import Script from "next/script";

export const metadata = {
    title: "BSS Vocational Courses | Sudha Multispeciality Hospital",
    description: "Sudha Hospital offers the best medical courses in Erode, featuring certified vocational training and practical healthcare programs. Enrol now.",
    keywords: "Best Medical Courses in Erode",
  
    alternates: {
        canonical: "https://sudhahospitals.com/academics/bss-vocational-courses/",

        languages: {
            "en-IN": "https://sudhahospitals.com/academics/bss-vocational-courses/",
            en: "https://sudhahospitals.com/academics/bss-vocational-courses/",
            "x-default": "https://sudhahospitals.com/academics/bss-vocational-courses/",
        },
    },
};


const Page = () => {


    // <Head>
    //     {/* Canonical */}
    //     <link
    //         rel="canonical"
    //         href="https://sudhahospitals.com/academics/bss-vocational-courses/"
    //     />

    //     {/* Hreflang */}
    //     <link
    //         rel="alternate"
    //         href="https://sudhahospitals.com/academics/bss-vocational-courses/"
    //         hreflang="en-in"
    //     />
    //     <link
    //         rel="alternate"
    //         href="https://sudhahospitals.com/academics/bss-vocational-courses/"
    //         hreflang="en"
    //     />
    //     <link
    //         rel="alternate"
    //         href="https://sudhahospitals.com/academics/bss-vocational-courses/"
    //         hreflang="x-default"
    //     />
    // </Head>



    return (
        <div>

            <Script
                id="bss-vocational-courses-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "BSS Vocational Courses – Sudha Multispeciality Hospital",
                        "url": "https://sudhahospitals.com/academics/bss-vocational-courses",
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
                                    "name": "BSS Vocational Courses",
                                    "item": "https://sudhahospitals.com/academics/bss-vocational-courses"
                                }
                            ]
                        },
                        "mainEntity": {
                            "@type": "MedicalClinic",
                            "name": "Sudha Multispeciality Hospital – BSS Vocational Courses",
                            "url": "https://sudhahospitals.com/academics/bss-vocational-courses",
                            "department": {
                                "@type": "MedicalClinic",
                                "name": "BSS Vocational Courses"
                            }
                        }
                    })
                }}
            />

            <Script
                id="bss-vocational-courses-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "BSS Vocational Courses – Sudha Multispeciality Hospital",
                        "headline": "BSS Vocational Courses",
                        "url": "https://sudhahospitals.com/academics/bss-vocational-courses",
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
                                    "name": "Academics",
                                    "item": "https://sudhahospitals.com/#academics"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "BSS Vocational Courses",
                                    "item": "https://sudhahospitals.com/academics/bss-vocational-courses"
                                }
                            ]
                        },
                        "mainEntity": {
                            "@type": "EducationalOccupationalProgram",
                            "name": "BSS Vocational Courses – Sudha Multispeciality Hospital",
                            "url": "https://sudhahospitals.com/academics/bss-vocational-courses",
                            "provider": {
                                "@type": "MedicalClinic",
                                "name": "Sudha Multispeciality Hospital"
                            },
                            "educationalCredentialAwarded": "BSS Vocational Certification"
                        }
                    })
                }}
            />


            <VocationalEducation />
        </div>
    );
}

export default Page;
