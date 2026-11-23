"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  Ambulance,
  Bone,
  Brain,
  CalendarDays,
  ClipboardList,
  Ear,
  HeartHandshake,
  HeartPulse,
  MapPin,
  MessagesSquare,
  Phone,
  Quote,
  ScanLine,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Wallet,
  Wind,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import hospitalBuilding from "@/assets/aboutus/why-about-sudha.webp";
import overviewConsultation from "@/assets/karur/overview-consultation.webp";
import Accordion from "@/components/Accordion";
import KarurDoctors from "@/components/KarurDoctors";

const branchStats = [
  { label: "Patient beds", value: "50+" },
  { label: "Departments", value: "15+" },
  { label: "Emergency care", value: "24/7" },
  { label: "Years of Sudha care", value: "40+" },
];

const careReasons = [
  {
    icon: ShieldCheck,
    title: "Credibility",
    description:
      "Sudha Hospitals brings more than 40 years of experience in caring for families to its new Karur branch.",
  },
  {
    icon: MessagesSquare,
    title: "Listening that Cares",
    description:
      "Share your concerns, ask questions and talk through the next steps in your care with your doctor in Karur.",
  },
  {
    icon: Wallet,
    title: "Affordability",
    description:
      "Speak with our team about expected consultation and test costs so you can plan your visit.",
  },
  {
    icon: ScanLine,
    title: "Cutting Edge Technology",
    description:
      "Diagnostic imaging in Karur helps your doctors assess your condition and discuss the next steps with you.",
  },
  {
    icon: HeartHandshake,
    title: "Care Beyond Treatment",
    description:
      "Return to Karur for follow-up care. If you need advanced treatment in Erode, the team can help coordinate your referral.",
  },
];

const specialities = [
  {
    icon: HeartPulse,
    title: "Cardiology",
    description: "Heart check-ups and care for heart-related concerns.",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description: "Care for fractures, joint pain, back pain and sports injuries.",
  },
  {
    icon: Syringe,
    title: "General Surgery",
    description: "Surgical consultations for hernias, gallstones and other common conditions.",
  },
  {
    icon: Stethoscope,
    title: "General Medicine",
    description: "Care for fever, infections, high blood pressure and other common health concerns.",
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Consultations for headaches, seizures and conditions affecting the nervous system.",
  },
  {
    icon: Ambulance,
    title: "Emergency Care",
    description: "24/7 urgent care for injuries, accidents and sudden illness.",
  },
  {
    icon: Wind,
    title: "Pulmonology",
    description: "Care for asthma, persistent cough and other breathing or lung concerns.",
  },
  {
    icon: Ear,
    title: "ENT",
    description: "Care for conditions affecting the ear, nose and throat.",
  },
  {
    icon: Activity,
    title: "Endocrinology",
    isNew: true,
    description: "Specialist consultations for diabetes, thyroid and other hormone-related conditions.",
  },
  {
    icon: ScanLine,
    title: "Radiology",
    description: "Diagnostic imaging to help your care team assess and plan treatment.",
  },
];

const sampleTestimonials = [
  {
    name: "K. Meenakshi",
    initials: "KM",
    topic: "Booking a visit",
    quote:
      "When I called to book a visit, the team explained which appointment to request and what to bring. Knowing the plan made it easier to prepare.",
  },
  {
    name: "S. Arul",
    initials: "SA",
    topic: "At a consultation",
    quote:
      "I had a few questions about the tests my doctor suggested. We went through them one by one, and I had time to ask about anything I did not understand.",
  },
  {
    name: "R. Kavitha",
    initials: "RK",
    topic: "Planning a follow-up",
    quote:
      "Before I left, we talked about when to come back and which reports to bring. I knew what to do before the next visit.",
  },
];

const karurFaq = [
  {
    title: "How do I book an appointment at the Karur branch?",
    answer: (
      <>
        Use the{" "}
        <Link href="/contact-us" className="font-semibold text-[#2b3990] underline underline-offset-4">
          contact form
        </Link>{" "}
        or call the Sudha Hospitals helpline at{" "}
        <a href="tel:+914242454545" className="font-semibold text-[#2b3990] underline underline-offset-4">
          0424-245-4545
        </a>
        . Mention Karur and the speciality you need when requesting your appointment.
      </>
    ),
  },
  {
    title: "Where is the Karur hospital?",
    answer:
      "The new branch is in Karur, Tamil Nadu. Contact the hospital team for the exact address and directions before you travel.",
  },
  {
    title: "Which specialities can I ask about at Karur?",
    answer: (
      <>
        See the{" "}
        <Link
          href="#specialities-and-services"
          className="font-semibold text-[#2b3990] underline underline-offset-4"
        >
          specialities section
        </Link>{" "}
        for the current Karur departments. Check with the Karur team about
        consultant availability when booking.
      </>
    ),
  },
  {
    title: "What are the outpatient consultation hours in Karur?",
    answer:
      "Consultation hours vary by speciality and doctor. Call the hospital team to confirm an outpatient appointment time before visiting.",
  },
  {
    title: "Does the Karur branch offer 24/7 emergency care?",
    answer: "Yes. Emergency care is available 24 hours a day at the Karur branch.",
  },
  {
    title: "What if I need advanced treatment in Erode?",
    answer:
      "If your doctor recommends care available at Sudha Hospitals in Erode, the Karur team can help coordinate your referral and explain the next steps.",
  },
].map(({ title, answer }) => ({
  title,
  content: <p className="text-base leading-relaxed text-slate-600">{answer}</p>,
}));

const entrance = {
  hidden: { opacity: 0.75, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Karur() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : "hidden";

  return (
    <main className="bg-[#f0f7fd] font-[family-name:var(--font-plus-jakarta)] text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <section
          aria-labelledby="karur-heading"
          className="grid items-center gap-8 lg:grid-cols-[1.08fr_1fr] lg:gap-12"
        >
          <motion.div
            initial={initial}
            animate="visible"
            variants={entrance}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-bold uppercase tracking-widest text-[#2b3990]">
                Karur Branch
              </p>
              <span className="rounded-full bg-[#c13d0a] px-3 py-1 text-xs font-bold uppercase text-white">
                New Branch
              </span>
            </div>

            <h1
              id="karur-heading"
              className="mt-5 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl xl:text-5xl"
            >
              Sudha Multispeciality Hospital in{" "}
              <span className="text-[#2b3990]">Karur</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Sudha specialist care, now close to home in Karur. See a
              specialist, get tests done and receive follow-up care, with the
              Sudha team in Erode ready for advanced treatment.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-[#2b3990] bg-[#2b3990] px-5 text-sm font-bold text-white transition-colors hover:bg-[#202b72] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b3990]"
              >
                <CalendarDays aria-hidden="true" className="h-5 w-5" />
                Book Appointment
              </Link>
              <a
                href="tel:+914242454545"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-[#2b3990] bg-white px-5 text-sm font-bold text-[#2b3990] transition-colors hover:bg-[#e5ecfc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b3990]"
              >
                <Phone aria-hidden="true" className="h-5 w-5" />
                Call Sudha Hospitals
              </a>
            </div>

            <div className="mt-7 space-y-3 text-sm leading-relaxed sm:text-base">
              <p className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#2b3990]" />
                Karur, Tamil Nadu
              </p>
              <p className="flex items-start gap-3">
                <ClipboardList aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#2b3990]" />
                Bring any previous prescriptions and test reports
              </p>
            </div>
          </motion.div>

          <motion.figure
            className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[#e5edf8] shadow-lg"
            initial={initial}
            animate="visible"
            variants={entrance}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          >
            <Image
              src={hospitalBuilding}
              alt="Exterior of Sudha Hospitals in Erode"
              fill
              preload
              sizes="(min-width: 1280px) 560px, (min-width: 1024px) 46vw, calc(100vw - 2rem)"
              className="object-cover"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-lg bg-slate-950/80 px-3 py-2 text-sm font-semibold text-white">
              Sudha Hospitals, Karur
            </figcaption>
          </motion.figure>
        </section>

        <dl className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-10 lg:grid-cols-4">
          {branchStats.map(({ label, value }, index) => (
            <motion.div
              key={label}
              className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 sm:p-6"
              initial={initial}
              animate="visible"
              variants={entrance}
              transition={{ duration: 0.4, delay: 0.14 + index * 0.07, ease: "easeOut" }}
            >
              <dt className="order-2 text-sm text-slate-600">{label}</dt>
              <dd className="text-2xl font-extrabold text-[#2b3990] sm:text-3xl">
                {value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>

      <section
        id="overview"
        aria-labelledby="karur-overview-heading"
        className="border-t border-slate-200 bg-white"
      >
        <motion.div
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={entrance}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:px-8 lg:py-20"
        >
          <Image
            src={overviewConsultation}
            alt="Illustration of a doctor listening to a patient during a consultation"
            sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, calc(100vw - 2rem)"
            className="order-2 aspect-[4/3] w-full rounded-3xl object-cover lg:order-none"
          />

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#2b3990]">
              Overview
            </p>
            <h2
              id="karur-overview-heading"
              className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl"
            >
              Specialist care closer to home
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 md:text-lg">
              <p>
                Sudha Multispecialty Hospital in Karur has been providing comprehensive healthcare services since 1985, with over 40 years of experience. The hospital offers specialised care across multiple departments, including Cardiology, Neurology, Pulmonology, Orthopedics, ENT, General Medicine, General Surgery, Endocrinology, and Radiology, along with 24/7 Emergency Care.
Sudha Hospitals brings diverse healthcare services together under one roof. Committed to providing safe, high-quality healthcare through transparent practices and compassionate patient care, Sudha Hospitals strives to build lasting trust with every patient and family.
              </p>
             
            </div>

            <div className="mt-6 rounded-2xl bg-[#eef8ff] p-4 text-sm leading-relaxed text-slate-700 sm:p-5">
              <p>
                <span className="font-bold text-slate-900">Planning a visit?</span>{" "}
                Ask our team about specialist availability and outpatient hours.
              </p>
              <Link
                href="/contact-us"
                className="mt-2 inline-block font-bold text-[#2b3990] underline decoration-1 underline-offset-4 transition-colors hover:text-[#202b72]"
              >
                Contact our team
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="why-choose-us"
        aria-labelledby="karur-why-heading"
        className="bg-[#f0f7fd] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      >
        <div className="relative isolate mx-auto max-w-[76rem] overflow-hidden rounded-3xl bg-[#202b72] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <motion.div
            aria-hidden="true"
            initial={reduceMotion ? false : { rotate: -12, scale: 0.88 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 2.4, ease: "easeOut" }}
            className="pointer-events-none absolute -right-24 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full border border-white/15 bg-[radial-gradient(circle_at_center,rgba(132,170,255,0.28),transparent_68%)]"
          >
            <div className="absolute inset-10 rounded-full border border-white/15" />
            <div className="absolute inset-20 rounded-full border border-white/15" />
          </motion.div>

          <motion.h2
            id="karur-why-heading"
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={entrance}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
          >
            Why Choose Sudha Hospitals in Karur?
          </motion.h2>

          <ul className="mt-7 grid auto-rows-fr gap-4 sm:mt-9 sm:grid-cols-4 lg:grid-cols-6 lg:gap-5">
            {careReasons.map(({ icon: Icon, title, description }, index) => (
              <motion.li
                key={title}
                initial={initial}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={entrance}
                transition={{
                  duration: 0.45,
                  delay: reduceMotion ? 0 : (index % 3) * 0.07,
                  ease: "easeOut",
                }}
                className={
                  "rounded-2xl border border-white/60 bg-white p-5 shadow-sm sm:col-span-2 sm:p-6" +
                  (index === careReasons.length - 2 ? " lg:col-start-2" : "") +
                  (index === careReasons.length - 1 ? " sm:col-start-2 lg:col-start-4" : "")
                }
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef8ff] text-[#2b3990]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                  {title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  {description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="specialities-and-services"
        aria-labelledby="karur-specialities-heading"
        className="border-t border-[#e5edf8] bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <motion.div
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={entrance}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-[#2b3990]">
              Specialities and Services
            </p>
            <h2
              id="karur-specialities-heading"
              className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl"
            >
              Specialities at Sudha Multispeciality Hospital, Karur
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              Explore specialist care for everyday health needs.{" "}
              <Link
                href="/contact-us"
                className="font-semibold text-[#2b3990] underline underline-offset-4 hover:text-[#202b72]"
              >
                Contact our team
              </Link>{" "}
              to confirm availability in Karur.
            </p>
          </motion.div>

          <ul className="mt-8 grid auto-rows-fr gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {specialities.map(({ icon: Icon, title, description, isNew }, index) => (
              <motion.li
                key={title}
                initial={initial}
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
                variants={entrance}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : (index % 5) * 0.075,
                  ease: "easeOut",
                }}
                className="group flex h-full min-w-0 flex-col gap-3 rounded-2xl border border-[#dce5f0] bg-white p-5 shadow-sm transition-colors hover:border-[#b8c9ed] hover:bg-[#f8fbff] lg:p-4 xl:p-5"
              >
                <div className="flex h-12 items-center justify-between gap-2">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eef8ff] text-[#2b3990] transition-colors group-hover:bg-[#2b3990] group-hover:text-white">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  {isNew && (
                    <span className="rounded-full bg-[#c13d0a] px-2 py-0.5 text-xs font-bold uppercase text-white">
                      New
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="min-h-6 text-lg font-bold leading-6 text-slate-900 lg:min-h-12 lg:text-base lg:leading-6 xl:min-h-6 xl:text-lg xl:leading-6">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-base leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={initial}
            whileInView="visible"
            viewport={{ once: true }}
            variants={entrance}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mt-8 text-center sm:mt-10"
          >
            <Link
              href="/specialities"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-[#2b3990] px-6 text-sm font-bold text-[#2b3990] transition-colors hover:bg-[#2b3990] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b3990]"
            >
              View all specialities
            </Link>
          </motion.div>
        </div>
      </section>

      <KarurDoctors />

      <section
        id="testimonials"
        aria-labelledby="karur-testimonials-heading"
        className="border-t border-[#e5edf8] bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <motion.div
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={entrance}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-[#2b3990]">
              Testimonials
            </p>
            <h2
              id="karur-testimonials-heading"
              className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl"
            >
              Patient Experience Examples
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              The names and quotes below are fictional examples.
            </p>
          </motion.div>

          <ul className="mt-8 grid auto-rows-fr gap-4 sm:mt-10 lg:grid-cols-3 lg:gap-5">
            {sampleTestimonials.map(({ name, initials, topic, quote }, index) => (
              <motion.li
                key={name}
                initial={initial}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={entrance}
                transition={{
                  duration: 0.45,
                  delay: reduceMotion ? 0 : index * 0.08,
                  ease: "easeOut",
                }}
                className="rounded-2xl border border-[#dce5f0] bg-white p-5 shadow-sm sm:p-7"
              >
                <figure className="flex h-full flex-col">
                  <Quote aria-hidden="true" className="h-7 w-7 text-[#2b3990]" />
                  <blockquote className="mb-5 mt-4 text-base leading-relaxed text-slate-700">
                    <p>{quote}</p>
                  </blockquote>
                  <figcaption className="mt-auto flex items-center gap-3 border-t border-[#dce5f0] pt-4">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef8ff] text-sm font-bold text-[#2b3990]"
                    >
                      {initials}
                    </span>
                    <div>
                      <p className="font-bold text-slate-900">{name}</p>
                      {/* <p className="mt-0.5 text-sm text-slate-600">{topic}</p> */}
                    </div>
                  </figcaption>
                </figure>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="faq"
        aria-labelledby="karur-faq-heading"
        className="border-t border-[#dce5f0] bg-[#f0f7fd]"
      >
        <motion.div
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={entrance}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        >
          <h2
            id="karur-faq-heading"
            className="mb-8 text-center text-3xl font-extrabold leading-tight tracking-tight sm:mb-10 sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <Accordion accordionData={karurFaq} />
        </motion.div>
      </section>
    </main>
  );
}
