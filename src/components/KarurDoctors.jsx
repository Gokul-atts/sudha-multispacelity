"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { doctorskarur } from "@/constants/doctorDetails";

const appointmentSlide = doctorskarur.length;
const slideCount = appointmentSlide + 1;

const controlStyle =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#bbc9e8] bg-white text-[#2b3990] transition-colors enabled:hover:border-[#2b3990] enabled:hover:bg-[#2b3990] enabled:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b3990] disabled:opacity-40";

export default function KarurDoctors() {
  const slider = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="doctors"
      aria-labelledby="karur-doctors-heading"
      className="border-t border-[#dce5f0] bg-[linear-gradient(125deg,#eaf3ff_0%,#f5f9ff_62%,#f0f7fd_100%)]"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0.78, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto grid max-w-7xl items-center gap-7 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14 lg:px-8 lg:py-20"
      >
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-[#2b3990]">
            Our Doctors
          </p>
          <h2
            id="karur-doctors-heading"
            className="mt-3 max-w-lg text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl"
          >
            Meet the Karur medical team
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600 md:text-lg">
            Browse our Karur doctor profiles and find out how to arrange a
            consultation.
          </p>

          {slideCount > 1 && (
            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous slide"
                aria-controls="karur-doctor-slides"
                className={controlStyle}
                disabled={currentSlide === 0}
                onClick={() => slider.current?.slickPrev()}
              >
                <ChevronLeft aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                aria-controls="karur-doctor-slides"
                className={controlStyle}
                disabled={currentSlide === slideCount - 1}
                onClick={() => slider.current?.slickNext()}
              >
                <ChevronRight aria-hidden="true" className="h-5 w-5" />
              </button>
              <p aria-live="polite" className="ml-1 text-sm font-semibold tabular-nums text-slate-600">
                <span className="sr-only">Slide </span>
                {currentSlide + 1} of {slideCount}
              </p>
            </div>
          )}
        </div>

        <div
          id="karur-doctor-slides"
          className="w-full min-w-0 max-w-md justify-self-center overflow-hidden rounded-3xl border border-[#dce5f0] bg-white shadow-sm"
        >
          <Slider
            ref={slider}
            accessibility
            arrows={false}
            infinite={false}
            speed={reduceMotion ? 0 : 460}
            slidesToShow={1}
            slidesToScroll={1}
            afterChange={setCurrentSlide}
          >
            {doctorskarur.map((doctor) => (
              <div key={doctor.id}>
                <article className="min-h-[24rem] sm:min-h-[26rem]">
                  <div className="relative h-[13rem] w-full bg-[#e7effd] sm:h-[15rem]">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      sizes="(min-width: 480px) 448px, calc(100vw - 2rem)"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="px-6 py-5 text-center sm:px-8 sm:py-6">
                    <p className="text-sm font-bold text-[#2b3990]">{doctor.speciality}</p>
                    <h3 className="mt-2 text-2xl font-extrabold leading-tight text-slate-900">
                      {doctor.name}
                    </h3>
                    <p className="mt-3 text-base font-semibold text-slate-700">{doctor.degrees}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{doctor.qualification}</p>
                  </div>
                </article>
              </div>
            ))}

            <div>
              <div className="flex min-h-[24rem] items-center justify-center bg-[#f9fbff] p-6 text-center sm:min-h-[26rem] sm:p-8">
                <div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#e7effd] text-[#2b3990]">
                    <CalendarDays aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-2xl font-extrabold leading-tight text-slate-900">
                    Plan your Karur visit
                  </h3>
                  <p className="mt-2 max-w-sm text-base leading-relaxed text-slate-600">
                    Contact our team to check specialist availability and request
                    an appointment at the Karur branch.
                  </p>
                  <Link
                    href="/contact-us"
                    tabIndex={currentSlide === appointmentSlide ? 0 : -1}
                    className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#2b3990] px-5 text-sm font-bold text-white transition-colors hover:bg-[#202b72] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b3990]"
                  >
                    Request an appointment
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </motion.div>
    </section>
  );
}
