"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/hepatology/hepatology-1.webp";
import Accordion from "../../components/Accordion";
import DoctorSlider from "../../components/Slicksliderdoctor";
import Faq from "../../components/Faq";
import one from "@/assets/about/1.svg";
import Link from "next/link";
import BookAppointmentModal from "@/components/bookappointmentmodal";

import sidebar2 from "@/assets/organtransplant/overview-liver.webp";

import Checklight from "@/assets/home/check-light.svg";
const serviceSections = [
  { id: "overview", label: "Overview" },
  { id: "facilities", label: "Facilities" },
  { id: "services", label: "Services" },
  { id: "livertransplant", label: "Liver Transplant" },
  // { id: "doctors", label: "Doctors" },
  { id: "faqs", label: "FAQs" },
];

const rightbar = [
  {
    head: "Liver Transplant",
    label: "Transforming lives with safe, advanced Liver Transplant.",
    image: sidebar2,
    link: "/facilities/organ-transplant/liver-transplant",
  },
];

const faq = [
  {
    title: (
      <>
        <div className="flex gap-3">
          Which hospital is best for treating Liver disease?{" "}
        </div>
      </>
    ),
    content: (
      <p>
        A hospital best suited for liver disease treatment should have
        specialized hepatology services, advanced diagnostic technology, and
        comprehensive care for conditions such as hepatitis, fatty liver,
        cirrhosis, and liver-related complications. Sudha Multispeciality
        Hospital is known for its dedicated liver care services and experienced
        specialists who provide personalized and advanced treatment.
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          Can liver disease be treated without surgery?
        </div>
      </>
    ),
    content: (
      <p>
        Yes. Many liver conditions can be managed with medications, lifestyle
        changes, and regular monitoring. Surgery is only needed in advanced or
        specific cases.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3"> When should I consult a hepatologist?</div>
      </>
    ),
    content: (
      <p>
        You should consult a hepatologist if you experience symptoms such as
        persistent fatigue, yellowing of the skin or eyes, abdominal pain or
        swelling, unexplained weight loss, or if your liver blood tests are
        abnormal, especially if you have a history of alcohol use, viral
        hepatitis, obesity, or other risk factors for liver disease.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          How does fatty liver affect overall health?
        </div>
      </>
    ),
    content: (
      <p>
        Fatty liver disease can impact overall health if left untreated. It may
        lead to persistent fatigue, digestive issues, and over time can progress
        to liver inflammation, scarring, and even liver failure. However, in
        many cases, fatty liver can be reversed with timely lifestyle changes, a
        healthy diet, and regular medical follow-up.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the process for diagnosing liver disease?
        </div>
      </>
    ),
    content: (
      <p>
        At Sudha Multispeciality Hospital, we employ a comprehensive and
        technology-driven approach to accurately diagnose liver conditions. Our
        dedicated hepatology team uses a combination of advanced laboratory
        screenings, high-definition imaging, and specialized bedside procedures
        to create a precise treatment plan for every patient.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What health conditions are treated under hepatology?
        </div>
      </>
    ),
    content: (
      <p>
        The hepatology manages a wide range of liver-related health conditions
        such as fatty liver disease, hepatitis, jaundice, liver cirrhosis,
        alcohol-related liver disease, liver infections, and liver failure.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          How can lifestyle changes improve liver health?
        </div>
      </>
    ),
    content: (
      <p>
        Lifestyle changes play a vital role in improving liver health. Healthy
        eating, regular physical activity, avoiding alcohol, staying
        well-hydrated, and taking prescribed medications help reduce liver
        stress, support liver repair, and prevent further damage.{" "}
      </p>
    ),
  },
];

const accordionData = [
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Generalsurgery"/> */}
          Comprehensive Liver Function Tests (LFTs)
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          These blood tests evaluate how well the liver is functioning by
          measuring enzymes, proteins, and bilirubin levels. LFTs help detect
          liver inflammation, infection, damage, and monitor disease progression
          or response to treatment.
        </p>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Generalsurgery" /> */}
          Viral Hepatitis Screening
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Specialized blood tests are used to identify Hepatitis A, B, C, and
          other viral infections affecting the liver. Early detection allows
          timely treatment, prevents complications, and reduces the risk of
          transmission.
        </p>
      </div>
    ),
  },

  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Generalsurgery" /> */}
          Imaging Studies (Ultrasound, CT, MRI)
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          Advanced imaging techniques provide detailed visualization of the
          liver and surrounding organs. These tests help identify fatty liver
          changes, tumors, cysts, bile duct problems, cirrhosis-related
          complications, and vascular abnormalities.
        </p>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Generalmedicine" /> */}
          FibroScan& Non-Invasive Liver Fibrosis Assessment
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          FibroScan is a painless, non-invasive test that measures liver
          stiffness to assess fibrosis (scarring) and fat content. It helps
          stage liver disease and reduces the need for invasive procedures in
          many patients.
        </p>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Generalmedicine" /> */}
          Liver Biopsy (When Indicated)
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          In selected cases, a liver biopsy may be performed to obtain a small
          tissue sample for microscopic examination. This provides definitive
          information about the extent and cause of liver damage and guides
          precise treatment planning.
        </p>
      </div>
    ),
  },
];

export default function SidebarTabs() {
  const [activeSection, setActiveSection] = useState("");
  const [openModal, setOpenModal] = useState(false);

  console.log("openModal", openModal);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    serviceSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="flex md:mt-0 mt-4 flex-col lg:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 lg:sticky top-24 h-fit space-y-6">
        {/* Tabs Box */}
        <div className="bg-white  rounded-2xl p-4 sm:p-6">
          <h3 className="text-[16px]  text-center font-bold  mb-5">
            Comprehensive Surgical Services
          </h3>
          <ul className="space-y-3">
            {serviceSections.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className="flex justify-between items-center group transition duration-300 ease-in-out"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          isActive ? "bg-[#2b3990]" : "bg-gray-300"
                        }`}
                      />
                      <span
                        className={`text-[15px]  font-bold transition-colors duration-300 ${
                          isActive ? "text-[#2b3990]" : "text-black"
                        } group-hover:text-[#2A3D90]`}
                      >
                        {item.label}
                      </span>
                    </div>

                    {isActive ? (
                      <div className="w-8 h-8 rounded-full bg-[#2A3D90] flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                        <ArrowUpRight className="w-4 h-4 text-white transition" />
                      </div>
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-black group-hover:text-[#2b3990] transition-all duration-300 transform group-hover:scale-110" />
                    )}
                  </a>
                  <hr className="my-3 border-t border-gray-100" />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden md:block">
          {/* Sudha Hospital Box */}
          <div
            className="relative rounded-2xl overflow-hidden text-white text-center px-6 py-10"
            style={{
              backgroundImage: `linear-gradient(to bottom right, rgba(42, 61, 144, 0.9), rgba(12, 18, 42, 0.9)), url(${Frame.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="text-[20px] font-bold mb-2">
              Sudha Multispeciality Hospital
            </h3>
            <hr className="border-light" />
            <ul className="space-y-4 text-start mt-4">
              <li className="flex items-start  gap-1 text-[14px] font-semibold">
                {" "}
                <Image
                  className="mt-1"
                  src={Checklight}
                  alt="tick"
                  width={12}
                  height={10}
                />{" "}
                Round-the-Clock Surgical & Post-Operative Care
              </li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">
                {" "}
                <Image
                  className="mt-1"
                  src={Checklight}
                  alt="tick"
                  width={12}
                  height={10}
                />{" "}
                Advanced Operation Theatres with Infection Control Systems
              </li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">
                {" "}
                <Image
                  className="mt-1"
                  src={Checklight}
                  alt="tick"
                  width={12}
                  height={10}
                />
                Specialised Surgical Team for Routine & Emergency Cases
              </li>
            </ul>

            <button
              className="btn-white mt-5 flex items-center gap-2 mx-auto"
              onClick={() => {
                window.location.href = "tel:04242454545";
              }}
            >
              Book an Appointment <ArrowUpRight className="w-5 h-5" />
            </button>
            <BookAppointmentModal
              open={openModal}
              onClose={() => setOpenModal(false)}
            />
          </div>

          {/* Find a Doctor Box */}
          <Link href="/find-a-doctor">
            <div
              className="mt-2 rounded-2xl md:px-6 px-6 md:py-6 py-6  flex flex-col md:flex-row flex-row items-center justify-between text-white"
              style={{
                background: "radial-gradient(circle, #9EB36A 0%, #333C22 100%)",
              }}
            >
              {/* Text Section */}
              <div className="text-center sm:text-left mb-4 sm:mb-0 sm:mr-4">
                <h3 className="text-[24px] sm:text-xl  font-bold leading-snug">
                  Find a <br className="hidden sm:block" /> Doctor?
                </h3>
              </div>

              {/* Image Section */}
              <div className="">
                <Image
                  src={doctorImg}
                  alt="Doctor"
                  className="rounded-lg w-full customposition  h-auto object-cover"
                />
              </div>
            </div>
          </Link>
        </div>
      </aside>

      {/* Content Sections */}
      <div className="flex-1 space-y-0">
        {serviceSections.map(({ id, label }) => (
          <section key={id} id={id} className="scroll-mt-32 rounded-xl">
            {id === "overview" && (
              <>
                <Image
                  src={aboutOverview}
                  alt="aboutOverview"
                  className="w-full h-[400px] rounded-2xl object-cover"
                />
                <h2 className="text-[24px] mb-2 mt-4">
                  Best Hospital in
                  <span className="text-[#2B3990]"> Erode</span> Hepatology
                </h2>
                <p className="mb-4">
                  The Department of Hepatology is dedicated to the prevention,
                  diagnosis, treatment, and long-term management of liver,
                  gallbladder, bile duct, and pancreatic disorders. Our team
                  combines clinical expertise with advanced diagnostic
                  facilities to deliver comprehensive liver care tailored to
                  each patient’s needs.
                </p>
                <p className="mb-4">
                  <p className="mb-4">
                    We manage a wide spectrum of liver-related conditions,
                    ranging from common and treatable disorders to complex and
                    chronic liver diseases.
                  </p>
                </p>
              </>
            )}

            {id === "facilities" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px] mt-5">Facilities</h2>
                <ul>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>
                    Advanced Liver Diagnostic Laboratory
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>
                    FibroScan& Elastography Suite
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    High-Resolution Imaging Facilities
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Endoscopy & Interventional Support
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Day
                    Care Procedure Unit
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Advanced Medical Therapy Services
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Critical Care Support
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Liver Transplant Evaluation Support
                  </li>
                </ul>
              </div>
            )}

            {id === "services" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px] mt-5 ">Services</h2>

                <Accordion accordionData={accordionData} />
              </div>
            )}

            {/* {id === "doctors" && (
              <>
                <h2 className="text-[24px] mt-5 pb-3">Doctors</h2>
                <DoctorSlider specialty="General Medicine" counter={3} />
              </>
            )} */}

            {id === "faqs" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px]  mt-5 ">
                  Frequently Asked Questions
                </h2>
                <Faq faq={faq} />
              </div>
            )}
            {id === "livertransplant" && (
              <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
                <div className="">
                  {rightbar.map((item, index) => (
                    <div className="relative group" key={index}>
                      <div className="bg-white md:h-auto h-[340px] rounded-3xl p-4 sm:p-6 flex flex-col sm:flex-row gap-4 items-start">
                        {/* Image */}
                        <Image
                          src={item.image}
                          alt={item.head}
                          className="w-full sm:w-60 h-[220px] sm:h-[260px] object-cover rounded-3xl mx-auto"
                        />

                        {/* Text Content */}
                        <div className="flex flex-col flex-1 justify-between h-full w-full">
                          <div className="flex justify-between items-end w-full">
                            <h3 className="text-[20px] sm:text-[22px]">
                              {item.head}
                            </h3>
                            {/* <Image
                          height={40}
                          width={40}
                          alt="Logo"
                          src={Logo}
                          className="hidden sm:block"
                        /> */}
                          </div>
                          <p>
                            Sudha Multispeciality Hospital is recognized as one
                            of the best hospitals for liver transplant in Erode,
                            offering advanced care for patients with severe
                            liver disease and failure. Our team of experienced
                            transplant surgeons, hepatologists, anaesthetists,
                            and intensive care specialists provide comprehensive
                            treatment tailored to each patient’s needs. Liver
                            transplantation is a highly specialized procedure
                            that requires world-class expertise, modern
                            infrastructure, and continuous post-surgical care.
                            At Sudha Multispeciality Hospital, we follow
                            international protocols to ensure the highest
                            success rates, faster recovery, and long-term
                            wellness.
                          </p>
                          <Link
                            href={item.link}
                            className="text-[#2B3990] font-bold"
                          >
                            {" "}
                            Read More...
                          </Link>
                          <div className="bottom-6 mr-4">
                            <div className="border-t border-gray-200 mt-4 mb-2" />
                            <p className="text-[14px]">{item.label}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      <div className="block md:hidden">
        {/* Sudha Hospital Box */}
        <div
          className="relative rounded-2xl overflow-hidden text-white text-center px-6 py-10"
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(42, 61, 144, 0.9), rgba(12, 18, 42, 0.9)), url(${Frame.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="text-[20px] font-bold mb-2">
            Sudha Multispeciality Hospital
          </h3>
          <hr className="border-light" />
          <ul className="space-y-4 text-start mt-4">
            <li className="flex items-start  gap-1 text-[14px] font-semibold">
              {" "}
              <Image
                className="mt-1"
                src={Checklight}
                alt="tick"
                width={12}
                height={10}
              />{" "}
              Round-the-clock surgical and post-operative care
            </li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">
              {" "}
              <Image
                className="mt-1"
                src={Checklight}
                alt="tick"
                width={12}
                height={10}
              />{" "}
              Advanced operation theatres with infection control systems
            </li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">
              {" "}
              <Image
                className="mt-1"
                src={Checklight}
                alt="tick"
                width={12}
                height={10}
              />
              Specialised surgical team for routine and emergency cases
            </li>
          </ul>

          <button
            className="btn-white mt-5 flex items-center gap-2 mx-auto"
            onClick={() => {
              window.location.href = "tel:04242454545";
            }}
          >
            Book an Appointment <ArrowUpRight className="w-5 h-5" />
          </button>
          <BookAppointmentModal
            open={openModal}
            onClose={() => setOpenModal(false)}
          />
        </div>

        {/* Find a Doctor Box */}
        <Link href="/find-a-doctor">
          <div
            className="mt-2 rounded-2xl md:px-6 px-6 md:py-6 py-6  flex flex-col md:flex-row flex-row items-center justify-between text-white"
            style={{
              background: "radial-gradient(circle, #9EB36A 0%, #333C22 100%)",
            }}
          >
            {/* Text Section */}
            <div className="text-center sm:text-left mb-4 sm:mb-0 sm:mr-4">
              <h3 className="text-[24px] sm:text-xl  font-bold leading-snug">
                Find a <br className="hidden sm:block" /> Doctor?
              </h3>
            </div>

            {/* Image Section */}
            <div className="">
              <Image
                src={doctorImg}
                alt="Doctor"
                className="rounded-lg w-full customposition  h-auto object-cover"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
