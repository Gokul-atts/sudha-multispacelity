"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import WhatsApp from "@/assets/footer/socialIcons/whatsapp.svg";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "@/assets/home/whiteLogo.svg"; // Replace with your actual path
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { Facebook, Instagram } from "lucide-react";
import { SiYoutube } from "react-icons/si";
import { ChevronUp, CalendarDays } from "lucide-react";
import BookAppointmentModal from "@/components/bookappointmentmodal";
import FindDoc from "@/assets/footer/socialIcons/doctor.svg";
import Emergency from "@/assets/footer/socialIcons/emergency.svg";
import branchLogo1 from "@/assets/home/footer-nabh.webp";
import { FaAmbulance } from "react-icons/fa";

const Footer = () => {
  const [showEmergencyText, setShowEmergencyText] = useState(false);
  const [showDocText, setShowDocText] = useState(false);
  const [showCalendarText, setShowCalendarText] = useState(false);
  const [showMessageText, setShowMessageText] = useState(false);

  const [visible, setVisible] = useState(false);

  //  Modal state
  const [openModal, setOpenModal] = useState(false);

  // Show modal on first visit
  useEffect(() => {
    setOpenModal(true);
  }, []);

  // Show button when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const specialties = [
    "Centre of Excellence",
    "Anaesthesiology",
    "Cardiology",
    "Cardiothoracic Surgery",
    "Dentistry & Oral Surgery",
    "Dermatology",
    "ENT",
    "Emergency Care",
    "Gastroenterology",
    "General Medicine",
    "General Surgery",
    "Hepatology",
    "Intensive Care Unit",
  ];

  const specialties2 = [
    "Imaging & Diagnostic Services",
    "Laryngology",
    "Neonatology",
    "Nephrology",
    "Neurology",
    "Obstetrics & Gynaecology",
    "Orthopaedics",
    "Paediatrics ",
    "Pain Medicine",
    "Plastic Surgery",
    "Pulmonology",
    "Radiology",
    "Urology",
  ];

  const about = [
    // { name: "Our Growth Story", link: "our-growth-story" },
    { name: "Board of Management", link: "board-of-management" },
    { name: "Awards & Honours", link: "awards-and-honours" },
    // { name: "News & Events", link: "/news-and-events" },
    { name: "Gallery", link: "gallery" },
    { name: "Why Choose Sudha Hospital?", link: "why-choose-sudha-hospital" },
  ];

  const academicLinks = [
    {
      name: "Fellow of National Board (FNB)",
      link: "fellow-of-national-board",
    },
    {
      name: "Post MBBS Diploma Courses (DNB)",
      link: "post-mbbs-diploma-courses",
    },
    {
      name: "Ethics Committee",
      link: "ethics-committee",
    },
    {
      name: "Vocational Degree Courses",
      link: "vocational-degree-courses",
    },
    {
      name: "BSS Vocational Courses",
      link: "bss-vocational-courses",
    },
  ];

  const facilityLinks = [
    {
      name: "Insurance",
      link: "insurance",
    },
    {
      name: "Ambulance",
      link: "ambulance-services",
    },
    {
      name: "Pharmacy",
      link: "pharmacy",
    },
    {
      name: "Laboratory",
      link: "laboratory",
    },
    {
      name: "Health Packages",
      link: "health-package",
    },
    {
      name: "Organ Transplant",
      link: "organ-transplant",
    },
  ];

  const careersLinks = [
    { name: "Careers", link: "careers" },
    { name: "Contact Us", link: "contact-us" },
  ];

  const contactLinks = [];

  const mediaLinks = [
    { name: "Blogs", link: "" },

    // { name: "News & Events", link: "/news-and-events" },
  ];

  const importantLinks = [
    { name: "Privacy Policy", link: "privacy-policy" },
    { name: "Terms & Conditions", link: "terms-and-conditions" },
    { name: "Disclaimer", link: "disclaimer" },
  ];

  const grouphospitalLinks = [
    {
      name: "Sudha Fertility Centre",
      link: "https://sudhafertilitycentre.com/",
    },
    { name: "Sudha Mother & Child Care", link: "/mother-and-child-care" },
    { name: "Sudha Cancer Centre", link: "https://sudhacancercentre.com/" },
  ];

  return (
    <footer>
      <BookAppointmentModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

      <div className="relative z-20 px-4 pt-6 sm:px-6 sm:pt-9">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-[#2A3D90] to-[#0C122A] p-5 text-white sm:p-8">
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {/* Left: About + Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex min-w-0 flex-col items-center text-center md:col-span-2 lg:col-span-1 lg:items-start lg:text-left"
            >
              <Image
                src={logo}
                alt="Sudha Hospital Logo"
                className="h-12 w-auto max-w-full object-contain sm:h-14"
              />

              <p className="text-[#FFF] mb-4 mt-4 max-w-sm">
                Sudha Hospital is a leading multispeciality hospital in Erode,
                known for its exceptional healthcare services.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 lg:justify-start">
                <div>
                  <h4 className="font-bold text-[#FFF] mb-4">Social Media</h4>
                  <div className="flex justify-center gap-3 lg:justify-start">
                    <Link
                      href="https://www.facebook.com/simserode"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Facebook
                          className="w-4 h-4 text-blue-900 fill-current"
                          stroke="none"
                        />
                      </div>
                    </Link>
                    <Link
                      href="https://www.youtube.com/@SudhaHospital-o7c"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <SiYoutube className="w-4 h-4 text-blue-900" />
                      </div>
                    </Link>
                    <Link
                      href="https://www.instagram.com/sudhahospitals/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Instagram className="w-4 h-4 text-blue-900" />
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Middle: NABH Accreditation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex shrink-0 items-center"
                >
                  {/* <h4 className="font-bold text-[#FFF] mb-4">Accredited By</h4> */}
                  <div className="rounded-md mb-2 mt-2">
                    <Image
                      src={branchLogo1}
                      alt="NABH Accreditation"
                      className="h-[70px] w-auto object-contain rounded-xl"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Hospital Location & Contact */}
            <motion.div
              className="mx-auto w-full max-w-sm min-w-0 border-t border-white/25 pt-5 text-left lg:border-t-0 lg:pt-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-lg leading-snug">Sudha Multispeciality Hospital Erode</h4>

              <p className="mt-4 grid grid-cols-[1.5rem_minmax(0,1fr)] items-start gap-x-3 text-white">
                <MdOutlineLocationOn className="size-6 flex-shrink-0" />
                No. 162, 181, Perundurai Rd, Edayankattuvalsu, Erode, Tamil Nadu
                638011
              </p>

              <p className="mt-4 grid grid-cols-[1.5rem_minmax(0,1fr)] items-center gap-x-3 text-white">
                <IoMail aria-hidden="true" className="size-5" />
                <span className="min-w-0 break-words">care@sudhahospitals.com</span>
              </p>

              <div className="mt-4 grid grid-cols-[1.5rem_minmax(0,1fr)] items-center gap-x-3 text-white">
                <IoCall className="size-6 flex-shrink-0" />
                <div>
                  <Link
                    href="tel:04242454545"
                    className="text-white font-semibold text-sm block"
                  >
                    0424-245-4545
                  </Link>
                  <Link
                    href="tel:04243514545"
                    className="text-white font-semibold text-sm block"
                  >
                    0424-351-4545
                  </Link>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-[1.5rem_minmax(0,1fr)] items-center gap-x-3 text-white">
                <FaAmbulance className="size-6 flex-shrink-0" />
                <Link
                  href="tel:+9042065454"
                  className="block text-sm font-semibold text-white"
                >
                  +91-90-4206-5454
                </Link>
              </div>
            </motion.div>
            {/* Right: Hospital Location & Contact */}
            <motion.div
              className="mx-auto w-full max-w-sm min-w-0 border-t border-white/25 pt-5 text-left lg:border-t-0 lg:pt-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-lg leading-snug">Sudha Multispeciality Hospital Karur</h4>

              <p className="mt-4 grid grid-cols-[1.5rem_minmax(0,1fr)] items-start gap-x-3 text-white">
                <MdOutlineLocationOn className="size-6 flex-shrink-0" />
                Sudha hospitals Pvt Ltd, 108A, Erode Main Road, Vadivelu Nagar,
                Karur - 639002
              </p>

              <p className="mt-4 grid grid-cols-[1.5rem_minmax(0,1fr)] items-center gap-x-3 text-white">
                <IoMail aria-hidden="true" className="size-5" />
                <span className="min-w-0 break-words">care@sudhahospitals.com</span>
              </p>

              <div className="mt-4 grid grid-cols-[1.5rem_minmax(0,1fr)] items-center gap-x-3 text-white">
                <IoCall className="size-6 flex-shrink-0" />
                <div>
                 
                  <Link
                    href="tel:04324-240200"
                    className="text-white font-semibold text-sm block"
                  >
                    04324-240200
                  </Link>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-[1.5rem_minmax(0,1fr)] items-center gap-x-3 text-white">
                <FaAmbulance className="size-6 flex-shrink-0" />
                <Link
                  href="tel:+8270000800"
                  className="block text-sm font-semibold text-white"
                >
                  +91-82-7000-0800
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Action Icons */}

      <section className="bg-[#FFFFFF] rounded-t-3xl -z-20 pt-40 -mt-36">
        {/* Top Grid Section */}
        <div className="max-w-7xl  mx-auto px-4 py-10 md:text-start text-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 ">
          {/* Specialties */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className=""
          >
            <h4 className="text-[18px] mb-3">Specialties</h4>
            <div className="">
              <ul className="column-1 gap-8 space-y-3 text-[16px] ">
                {specialties.map((item, i) => {
                  const slug = item
                    .toLowerCase()
                    .replace(/&/g, "and")
                    .replace(/\s+/g, "-");
                  return (
                    <li
                      key={i}
                      className="text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue cursor-pointer flex gap-2 items-center justify-center md:justify-start"
                    >
                      <div className="w-2 h-2 rounded-lg bg-[#2B3990] hidden md:block"></div>
                      <Link href={`/specialities/${slug}`}>{item}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className=" column-1 gap-8 space-y-3 text-[16px] md:mt-10 mt-1">
              {specialties2.map((item, i) => {
                // Convert name to slug (lowercase, replace & with 'and', spaces with '-')
                const slug = item
                  .toLowerCase()
                  .replace(/&/g, "and")
                  .replace(/\s+/g, "-");
                return (
                  <li
                    key={i}
                    className="text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue cursor-pointer flex gap-3 items-center justify-center md:justify-start"
                  >
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990] hidden md:block"></div>
                    <Link href={`/specialities/${slug}`}>{item}</Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* About Sudha, Academics, Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-[18px] mb-3">About Sudha Hospital</h4>
              <ul className="space-y-3 gap-8">
                {about.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue cursor-pointer justify-center md:justify-start"
                  >
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990] hidden md:block"></div>
                    <Link href={`/about-us/${item.link}`}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[18px] mb-3">Academics</h4>
              <ul className="space-y-3 gap-8">
                {academicLinks.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue cursor-pointer justify-center md:justify-start"
                  >
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990] hidden md:block"></div>
                    <Link href={`/academics/${item.link}`}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[18px] mb-3">Facility Insight</h4>
              <ul className="space-y-3 gap-8">
                {facilityLinks.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue cursor-pointer justify-center md:justify-start"
                  >
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990] hidden md:block"></div>
                    <Link href={`/facilities/${item.link}`}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Careers, Contact, Media, Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-[18px] mb-3">Careers & Contact Us</h4>
              <ul className="space-y-3 gap-8">
                {careersLinks.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue cursor-pointer justify-center md:justify-start"
                  >
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990] hidden md:block"></div>
                    <Link href={`/${item.link}`}>{item.name}</Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3 gap-8">
                {contactLinks.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue"
                  >
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990] hidden md:block"></div>
                    <Link href={`/resources/${item.link}`}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[18px] mb-3 ">Media Centre</h4>
              <ul className="space-y-3 gap-8">
                {mediaLinks.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue cursor-pointer justify-center md:justify-start"
                  >
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990] hidden md:block"></div>
                    <Link href={`/${item.link}`}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[18px] mb-3">Important link</h4>
              <ul className="space-y-3 gap-8">
                {importantLinks.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue cursor-pointer justify-center md:justify-start"
                  >
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990] hidden md:block"></div>
                    <Link href={`/${item.link}`}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[18px] mb-3">Sudha Group of Hospitals</h4>
              <ul className="space-y-3 gap-8">
                {grouphospitalLinks.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue cursor-pointer justify-center md:justify-start"
                  >
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990] hidden md:block"></div>
                    <Link target="_blank" href={item.link}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 text-xs text-center text-gray-500 py-4">
          <div className="max-w-7xl mx-auto  flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-black text-[14px]">
              © Copyright 2026 Sudha Hospital. All rights reserved.
            </p>
            <p className="text-black text-[14px]">
              Designed & Developed by{" "}
              <Link
                href="https://arionmediacorp.com/"
                target="_blank"
                className="text-primary-blue underline"
              >
                Arion Media Corp
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className=" fixed bottom-0  right-0   flex justify-around items-center py-2 bg-white shadow-md border-t sm:bg-transparent sm:shadow-none sm:border-0 z-40 sm:bottom-3 mb-footer sm:right-2 sm:w-auto sm:flex-col sm:items-end sm:space-y-2 sm:py-0  ">
          {/* Emergency Button */}
          <Link href="tel:04242454545">
            <button
              onMouseEnter={() => setShowEmergencyText(true)}
              onMouseLeave={() => setShowEmergencyText(false)}
              className={` flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs font-semibold text-gray-700 transition-all duration-300 sm:h-10 md:h-12 sm:shadow-md sm:border-2 sm:border-red-500 sm:rounded-full sm:overflow-hidden ${showEmergencyText ? "sm:bg-white sm:px-3 sm:w-56 md:w-64" : "sm:w-10 sm:h-10 md:w-12 md:h-12 sm:bg-white sm:justify-center"}`}
            >
              {/* Icon */}
              <span className="flex items-center justify-center w-6 h-6">
                <Image
                  src={Emergency}
                  alt="Emergency"
                  className="w-6 h-6 object-contain"
                />
              </span>

              {/* Mobile Label */}
              <span className="block sm:hidden mt-1 text-center">
                Emergency <br /> Contact
              </span>

              {/* Desktop Hover Label */}
              {showEmergencyText && (
                <span className="hidden sm:block text-red-600 text-sm md:text-[14px] whitespace-nowrap transition-opacity duration-300">
                  Emergency Contact
                </span>
              )}
            </button>
          </Link>

          {/* Find Doctor Button */}
          <Link href="/find-a-doctor">
            <button
              onMouseEnter={() => setShowDocText(true)}
              onMouseLeave={() => setShowDocText(false)}
              className={` flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs font-semibold text-gray-700 transition-all duration-300 sm:h-10 md:h-12 sm:shadow-md sm:border-2 sm:border-blue-80 sm:rounded-full sm:overflow-hidden ${showDocText ? "sm:bg-white sm:px-4 sm:w-56 md:w-64" : "sm:w-10 sm:h-10 md:w-12 md:h-12 sm:bg-white sm:justify-center"} `}
            >
              <span className="flex items-center justify-center w-6 h-6">
                <Image
                  src={FindDoc}
                  alt="Find Doctor"
                  className="w-6 h-6 object-contain"
                />
              </span>
              {/* Mobile Label */}
              <span className="block sm:hidden mt-1 text-center">
                Find a<br />
                Doctor
              </span>
              {/* Desktop Hover Label */}
              {showDocText && (
                <span className="hidden sm:block text-black text-sm md:text-[14px] leading-snug transition-opacity duration-300 sm:max-w-[120px] md:max-w-[150px]">
                  Find a Doctor
                </span>
              )}
            </button>
          </Link>

          {/* Appointment Button */}
          <Link href="/contact-us">
            <button
              onMouseEnter={() => setShowCalendarText(true)}
              onMouseLeave={() => setShowCalendarText(false)}
              className={` flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs font-semibold text-gray-700 transition-all duration-300 sm:h-10 md:h-12 sm:shadow-md sm:border-2 sm:border-green-50 sm:rounded-full sm:overflow-hidden ${showCalendarText ? "sm:bg-white sm:px-3 sm:w-56 md:w-64" : "sm:w-10 sm:h-10 md:w-12 md:h-12 sm:bg-white sm:justify-center"} `}
            >
              <span className="flex items-center justify-center w-6 h-6">
                <CalendarDays className="w-6 h-6 text-primary-blue" />
              </span>
              {/* Mobile Label */}
              <span className="block sm:hidden mt-1 text-[12px] leading-tight text-center">
                Book
                <br />
                Appointment
              </span>
              {/* Desktop Hover Label */}
              {showCalendarText && (
                <span className="hidden sm:block text-black text-sm md:text-[14px] leading-snug transition-opacity duration-300 whitespace-nowrap">
                  Book an Appointment
                </span>
              )}
            </button>
          </Link>
          {/* WhatsApp Button */}
          <Link href="https://wa.me/917670076006">
            <button
              onMouseEnter={() => setShowMessageText(true)}
              onMouseLeave={() => setShowMessageText(false)}
              className={` flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs font-semibold text-gray-700 transition-all duration-300 sm:h-10 md:h-12 sm:shadow-md sm:border-2 sm:border-green-50 sm:rounded-full sm:overflow-hidden ${showMessageText ? "sm:bg-white sm:px-3 sm:w-56 md:w-64" : "sm:w-10 sm:h-10 md:w-12 md:h-12 sm:bg-white sm:justify-center"} `}
            >
              <span className="flex items-center justify-center w-6 h-6">
                <Image
                  src={WhatsApp}
                  alt="WhatsApp"
                  className="w-6 h-6 object-contain"
                />
              </span>
              {/* Mobile Label */}
              <span className="block sm:hidden mt-1 text-center">
                Chat with <br /> WhatsApp
              </span>
              {/* Desktop Hover Label */}
              {showMessageText && (
                <span className="hidden sm:block text-blue-900 text-sm md:text-[14px] whitespace-nowrap transition-opacity duration-300">
                  Chat with WhatsApp
                </span>
              )}
            </button>
          </Link>

          {/* Scroll To Top */}
          {visible && (
            <>
              {/* Mobile (outside bottom navbar) */}
              <button
                onClick={scrollToTop}
                className=" sm:hidden fixed bottom-24 right-4  w-10 h-10 rounded-full bg-white shadow-md  flex items-center justify-center hover:bg-blue-900 transition z-[10000]"
              >
                <ChevronUp className="w-6 h-6 text-blue-900 hover:text-white" />
              </button>

              {/* Desktop (inside floating stack) */}
              <button
                onClick={scrollToTop}
                className=" hidden sm:flex  w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md  items-center justify-center  hover:bg-blue-900 transition "
              >
                <ChevronUp className="w-6 h-6 md:w-7 md:h-7 text-blue-900 hover:text-white" />
              </button>
            </>
          )}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
