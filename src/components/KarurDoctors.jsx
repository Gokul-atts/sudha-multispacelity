"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { doctorskarur } from "@/constants/doctorDetails";

const slideCount = doctorskarur.length + 1;

const controlStyle =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#bbc9e8] bg-white text-[#2b3990] transition-colors enabled:hover:border-[#2b3990] enabled:hover:bg-[#2b3990] enabled:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b3990] disabled:opacity-40";

function getCardStep(track) {
  const first = track.firstElementChild;
  const second = first?.nextElementSibling;
  return second ? second.offsetLeft - first.offsetLeft : track.clientWidth;
}

export default function KarurDoctors() {
  const carousel = useRef(null);
  const [visibleCards, setVisibleCards] = useState({ first: 0, count: 1 });
  const reduceMotion = useReducedMotion();
  const last = Math.min(visibleCards.first + visibleCards.count, slideCount);

  const updateVisibleCards = useCallback((track) => {
    const step = getCardStep(track);
    if (!step) return;
    const count = Math.max(1, Math.round(track.clientWidth / step));
    const first = Math.max(
      0,
      Math.min(Math.round(track.scrollLeft / step), slideCount - count)
    );
    setVisibleCards((current) =>
      current.first === first && current.count === count ? current : { first, count }
    );
  }, []);

  useEffect(() => {
    const track = carousel.current;
    updateVisibleCards(track);
    const observer = new ResizeObserver(() => updateVisibleCards(track));
    observer.observe(track);
    return () => observer.disconnect();
  }, [updateVisibleCards]);

  function scrollCards(direction) {
    const track = carousel.current;
    if (!track) return;
    track.scrollBy({
      left: direction * getCardStep(track),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

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
        className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-12 sm:gap-6 sm:px-6 sm:py-16 lg:py-20"
      >
        <h2
          id="karur-doctors-heading"
          className="text-center text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl"
        >
          Meet our specialist
        </h2>

        <ul
          id="karur-doctor-slides"
          ref={carousel}
          tabIndex={0}
          aria-label="Karur doctor and appointment cards"
          onScroll={(event) => updateVisibleCards(event.currentTarget)}
          className="relative grid w-full max-w-md auto-cols-[100%] grid-flow-col gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b3990] sm:max-w-none sm:auto-cols-[calc((100%_-_1rem)/2)] lg:auto-cols-[calc((100%_-_2rem)/3)]"
        >
          {doctorskarur.map((doctor) => (
            <li key={doctor.id} className="min-w-0 snap-start overflow-hidden rounded-3xl border border-[#dce5f0] bg-white shadow-sm">
              <article>
                <div className="relative h-[13rem] w-full bg-[#e7effd] sm:h-[15rem]">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(min-width: 1152px) 356px, (min-width: 1024px) 32vw, (min-width: 576px) 48vw, (min-width: 480px) 448px, calc(100vw - 2rem)"
                    className="object-cover object-top"
                  />
                </div>
                <div className="px-6 py-5 text-center sm:px-5 sm:py-6">
                  {/* <p className="text-sm font-bold text-[#2b3990]">{doctor.speciality}</p> */}
                  <h3 className="mt-2 text-xl font-extrabold leading-tight text-slate-900 sm:text-2xl">
                    {doctor.name}
                  </h3>
                  <p className="mt-3 text-base font-semibold text-slate-700">{doctor.degrees}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{doctor.qualification}</p>
                </div>
              </article>
            </li>
          ))}

          {/* <li className="flex min-h-[24rem] min-w-0 snap-start items-center justify-center rounded-3xl border border-[#dce5f0] bg-[#f9fbff] p-6 text-center shadow-sm">
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
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#2b3990] px-5 text-sm font-bold text-white transition-colors hover:bg-[#202b72] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b3990]"
              >
                Request an appointment
              </Link>
            </div>
          </li> */}
        </ul>

        {slideCount > visibleCards.count && (
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous slide"
              aria-controls="karur-doctor-slides"
              className={controlStyle}
              disabled={visibleCards.first === 0}
              onClick={() => scrollCards(-1)}
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              aria-controls="karur-doctor-slides"
              className={controlStyle}
              disabled={last === slideCount}
              onClick={() => scrollCards(1)}
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
            <p aria-live="polite" className="ml-1 text-sm font-semibold tabular-nums text-slate-600">
              <span className="sr-only">Cards </span>
              {visibleCards.first + 1}{visibleCards.count > 1 && "–" + last} of {slideCount}
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
}
