"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Banner from "@/assets/about/board-of-directors.webp";
import Contactusmain from "@/components/contactusmain";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Chairmen from "@/assets/Ourmanagement/kandhasami.webp";
import Managingdirector from "@/assets/Ourmanagement/managing-director.jpg";
import President from "@/assets/Ourmanagement/president-new.jpg";
import Vicepresident from "@/assets/Ourmanagement/vice-president.webp";
import HospitalCard from "@/components/Hospital";
import Executiveteam from "@/components/Executiveteam";
import "./Ourmanagement.css";
import Sudha from "@/assets/Ourmanagement/Sudha.png";
import hospitalOne from "@/assets/home/cards/c1.svg";
import hospitalTwo from "@/assets/home/cards/c2.svg";
import hospitalThree from "@/assets/home/cards/c3.svg";
import hospitalFour from "@/assets/home/cards/c4.svg";
import Breadcrumb from "@/components/Breadcrumb";
import one from "@/assets/aboutus/why-about-sudha.webp";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "" },
  { label: "Board of Management", href: "/about-us/board-of-management" },
];

const Ourmanagement = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <div>
      <section className="relative px-7 hero-section -mt-28 mb-hero-section">
        {/* Banner Container */}
        <div
          className="relative top-6 max-w-full mx-auto px-4 pt-36 pb-24 z-10 text-white bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-400"
          style={{ backgroundImage: `url(${Banner.src})` }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm mb-4 text-white"
            >
              <Breadcrumb items={breadcrumbItems} />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[40px] mb-4"
            >
              Board of Management
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[16px] text-white max-w-xl mb-6 tracking-wide"
            >
              The Visionaries behind the Quality Healthcare Service
            </motion.p>
          </div>

          {/* Bottom floating box */}

          <div className="absolute bottom-0 right-0  z-30 hidden md:block">
            <div className="w-[220px] overflow-hidden rounded-tl-3xl rounded-br-3xl">
              <div className="h-[30%] bg-transparent" />
              <div className="bg-white p-5">
                <p className="text-[16px] text-black font-bold mb-2">
                  Excellence in healthcare, <br />
                  always by your side
                </p>
                <h3 className="text-[20px] font-extrabold text-[#2B3990]">
                  Since 1985
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-16 py-12  pb-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="bg-white text-[#2B3990] px-6 py-2 rounded-full text-md font-bold">
              Our Growth Story
            </span>
            <h2 className="text-[30px] mb-4 mt-5">
              Sudha Multispeciality Hospital
            </h2>
            <p className="">
              Established in 1985 by Dr. D. Kandasamy, Sudha Multispeciality
              Hospital was born out of a vision to bring world-class healthcare
              to his homeland. With a strong commitment to serve, he began with
              a heart care centre in Erode, focusing on cardiac health. As
              community trust grew, the hospital expanded to include specialised
              services in mother and childcare. Building on its reputation for
              quality and compassion, Sudha Hospitals further broadened its
              expertise into fertility care and multispeciality services. Today,
              it stands as one of South India’s leading centres for
              multispeciality care, mother and child health, and fertility
              treatment.
            </p>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <Image
              src={one}
              alt="Sudha Hospital Overview"
              className="rounded-3xl w-full object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row gap-4 max-w-7xl mx-auto px-4  py-5 relative text-white bg-center bg-no-repeat bg-cover md:bg-contain">
        <div className="w-full  md:w-[30%] bg-black-500 relative">
          <div className="relative">
            <Image
              src={Chairmen}
              alt="Image"
              className="rounded-3xl w-full h-auto object-cover"
              style={{ height: "350px", width: "650px" }}
            />
          </div>
          <div className="absolute md:top-16 top-2 left-0 md:left-10 w-full h-full flex items-end justify-start p-5 ">
            <div className="bg-white w-full px-2 py-4 rounded-2xl  text-center items-center justify-center">
              <h4 className=" text-black text-md mb-2 font-bold">Founder</h4>
              <h2 className="text-[#2B3990] text-[18px] mb-2 ">
                Dr. D. Kandasamy
              </h2>
              <p className="text-[12px] ">MD, DTCD Preventive Cardiologist</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[70%] rounded-3xl px-4 mb-pt">
          <h2 className="text-[#000000] text-[24px]  pb-5">
            Chairman’s Message
          </h2>
          <p className="text-[#2B3990] font-bold  pb-5">
            {" "}
            "My dream was to ensure no one had to leave my hometown for quality
            medical care"
          </p>
          <p className="pb-5">
            Sudha Hospitals has proudly served people for more than four
            decades, offering dependable, cost-effective, ethical,
            compassionate, advanced, inclusive, and patient-centred care. Our
            strength lies in the unwavering dedication of our doctors, nurses,
            and paramedical staff, whose service continues to earn trust and
            admiration across generations.
          </p>
          <p className="">
            We have always delivered, and will continue to deliver, healthcare
            that people can rely on with trust and confidence through evolving
            technologies, continuous learning, compassionate service, and an
            unwavering commitment to improving lives every day.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 max-w-7xl mx-auto px-4  py-5 relative text-white bg-center bg-no-repeat bg-cover md:bg-contain mt-14">
        
        <div className="w-full  md:w-[30%] bg-black-500 relative">
          <div className="relative">
            <Image
              src={Managingdirector}
              alt="Image"
              className="rounded-3xl w-full h-auto object-cover"
              style={{ height: "350px", width: "650px" }}
            />
          </div>
          <div className="absolute md:top-16 top-2 left-0 md:left-10 w-full h-full flex items-end justify-start p-5 ">
            <div className="bg-white w-full px-2 py-4 rounded-2xl  text-center items-center justify-center">
              <h4 className=" text-black text-md mb-2 font-bold">
                Managing Director
              </h4>
              <h2 className="text-[#2B3990] text-[18px] mb-2 ">
                Dr. K. Sudhakar MD., DNB
              </h2>
              <p className="text-[12px] ">Cardiologist</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[70%] rounded-3xl px-4 mb-pt">
          {/* <h1 className="text-[#000000] text-[24px]  pb-5">Vision</h1> */}
          {/* <p className='text-[#2B3990] font-bold  pb-5'> "My dream was to ensure no one had to leave my hometown for quality medical care"</p> */}
          <p className="pb-5 mt-20">
            Dr. K. Sudhakar’s vision is to build a trusted healthcare
            institution that blends clinical excellence with compassionate care,
            making quality treatment accessible to all. As a doctor and managing
            director, he leads with integrity, innovation, and empathy, focused
            on delivering world-class fertility and women’s healthcare through
            an ethical, patient-centred, and holistic approach. Under his
            leadership, Sudha Hospitals continues to grow with purpose, bringing
            advanced care, hope, and better health outcomes to communities today
            while shaping a healthier tomorrow.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 max-w-7xl mx-auto px-4  py-5 relative text-white bg-center bg-no-repeat bg-cover md:bg-contain mt-14">
        <div className="w-full  md:w-[30%] bg-black-500 relative">
          <div className="relative">
            <Image
              src={President}
              alt="Image"
              className="rounded-3xl w-full h-auto object-cover"
              style={{ height: "350px", width: "650px" }}
            />
          </div>
          <div className="absolute md:top-16 top-2 left-0 md:left-10 w-full h-full flex items-end justify-start p-5 ">
            <div className="bg-white w-full px-2 py-4 rounded-2xl  text-center items-center justify-center">
              <h4 className=" text-black text-md mb-2 font-bold">President</h4>
              <h2 className="text-[#2B3990] text-[18px] mb-2 ">
                Dr. S. Dhanabagyam MD, (O&G), ART
              </h2>
              <p className="text-[12px] ">Senior Consultant & ART Specialist</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[70%] rounded-3xl px-4 mb-pt">
          {/* <h1 className="text-[#000000] text-[24px]  pb-5">Vision</h1> */}
          {/* <p className='text-[#2B3990] font-bold  pb-5'> "My dream was to ensure no one had to leave my hometown for quality medical care"</p> */}
          <p className="pb-5 mt-20">
            Dr. S. Dhanabagyam’s vision for Sudha Hospitals is to strengthen the
            hospital’s commitment to advanced, ethical, and patient-focused
            women’s healthcare, with a special focus on fertility care and ART
            treatments. With her expertise in Obstetrics & Gynaecology and
            Assisted Reproductive Technology, she aims to ensure that every
            woman and couple receives the right diagnosis, the best treatment
            plan, and continuous support throughout their journey.
          </p>
          <p className="">
            Her vision is to make Sudha Hospitals a trusted centre where modern
            fertility advancements are combined with compassionate care,
            transparency, and clinical excellence, helping families achieve
            their dream of parenthood with confidence and hope.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 max-w-7xl mx-auto px-4  py-5 relative text-white bg-center bg-no-repeat bg-cover md:bg-contain mt-14">
        <div className="w-full  md:w-[30%] bg-black-500 relative">
          <div className="relative">
            <Image
              src={Vicepresident}
              alt="Image"
              className="rounded-3xl w-full h-auto object-cover"
              style={{ height: "350px", width: "650px" }}
            />
          </div>
          <div className="absolute md:top-16 top-2 left-0 md:left-10 w-full h-full flex items-end justify-start p-5 ">
            <div className="bg-white w-full px-2 py-4 rounded-2xl  text-center items-center justify-center">
              <h4 className=" text-black text-md mb-2 font-bold">
                Vice President
              </h4>
              <h2 className="text-[#2B3990] text-[18px] mb-2 ">
                Dr. S. Pradeepa DGO, DNB(OG), MNAMS, FICOG
              </h2>
              <p className="text-[12px] ">Senior Consultant & ART Specialist</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[70%] rounded-3xl px-4 mb-pt">
          {/* <h1 className="text-[#000000] text-[24px]  pb-5">Vision</h1> */}
          {/* <p className='text-[#2B3990] font-bold  pb-5'> "My dream was to ensure no one had to leave my hometown for quality medical care"</p> */}
          <p className="pb-5 mt-20">
            Dr. S. Pradeepa’s vision for Sudha Hospitals is to build a centre of
            excellence in women’s health and fertility care, where every patient
            receives advanced treatment with empathy, safety, and trust. With
            her strong experience in IVF, ultrasound, and ICSI, she aims to
            ensure high-quality outcomes through ethical practices, modern
            technology, and continuous medical learning.
          </p>
          <p className="">
            She also envisions Sudha Hospitals as a place that not only treats,
            but also educates and empowers women through awareness programs and
            health guidance, creating healthier families and stronger
            communities.
          </p>
        </div>
      </div>

      {/* <div className='max-w-7xl mx-auto  md:px-0 px-4  relative'>
        <Executiveteam />
      </div> */}

      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={true}
        className="py-16"
      >
        <span className="mx-4 text-[#D5DAE5] font-extrabold text-[76px]">
          Trusted Healthcare Partners Trusted Healthcare Partners
        </span>
      </Marquee>

      <section>
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 md:px-8 lg:px-0 py-8  h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Vision */}
            <div className="bg-[#CBE1FB] rounded-2xl p-8 text-left">
              <h3 className="text-[20px] mb-3">Our Vision</h3>
              <p className="text-black text-[14px]">
                Become a trusted healthcare leader by providing compassionate,
                advanced, and accessible care, empowering healthier communities
                through excellence and innovation.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-[#D5F2E3] rounded-2xl p-8 text-left">
              <h3 className="text-[20px] mb-3">Our Mission</h3>
              <p className="text-black text-[14px]">
                To make quality healthcare accessible by blending innovation,
                medical excellence, and compassion while ensuring value-driven
                treatment for all.
              </p>
            </div>

            {/* Values */}
            <div className="bg-[#DAD3F9] rounded-2xl p-8 text-left">
              <h3 className="text-[20px] mb-3">Our Values</h3>
              <p className="text-black text-[14px]">
                We believe in ethical care, compassion, medical excellence,
                respect, innovation, teamwork, and putting every patient’s needs
                at the heart.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ourmanagement;
