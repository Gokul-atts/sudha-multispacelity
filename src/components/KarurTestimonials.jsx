"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { Activity, ChevronLeft, ChevronRight, Cross, HeartPulse, Quote, Stethoscope } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const backgroundMarks = [
  { Icon: Cross, position: "left-5 top-9 sm:left-[10%]", x: 20, y: -14, delay: 0 },
  { Icon: HeartPulse, position: "right-5 top-12 sm:right-[11%]", x: -18, y: 12, delay: 0.6 },
  { Icon: Stethoscope, position: "left-[24%] top-9 hidden lg:block", x: -16, y: 15, delay: 0.8 },
  { Icon: Activity, position: "right-[24%] top-8 hidden md:block", x: 16, y: 12, delay: 1.4 },
  { Icon: HeartPulse, position: "bottom-9 left-4 sm:left-[8%]", x: 16, y: -18, delay: 0.9 },
  { Icon: Cross, position: "bottom-8 right-5 sm:right-[9%]", x: -18, y: -15, delay: 0.35 },
];

const backgroundHalos = [
  { position: "-left-28 -top-44", color: "bg-[#527bff]/65", x: 190, y: 46, delay: 0 },
  { position: "-bottom-44 -right-28", color: "bg-[#2bb7dd]/55", x: -170, y: -52, delay: 0.8 },
];

const buttonStyle =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition-colors enabled:hover:bg-white enabled:hover:text-[#202b72] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-40";

function scrollOneCard(track, direction, behavior) {
  const first = track.firstElementChild;
  const second = first?.nextElementSibling;
  if (second) track.scrollBy({ left: direction * (second.offsetLeft - first.offsetLeft), behavior });
}

export default function KarurTestimonials({ items }) {
  const section = useRef(null);
  const list = useRef(null);
  const inView = useInView(section, { amount: 0.25 });
  const reduceMotion = useReducedMotion();
  const animateBackground = inView && !reduceMotion;
  const [touching, setTouching] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [bounds, setBounds] = useState({ start: true, end: false });

  const updateBounds = useCallback(() => {
    const track = list.current;
    if (!track) return;
    const start = track.scrollLeft <= 2;
    const end = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
    setBounds((previous) =>
      previous.start === start && previous.end === end ? previous : { start, end }
    );
  }, []);

  useEffect(() => {
    const track = list.current;
    if (!track) return;
    updateBounds();
    const observer = new ResizeObserver(updateBounds);
    observer.observe(track);
    return () => observer.disconnect();
  }, [updateBounds]);

  useEffect(() => {
    if (!inView || reduceMotion || hovered || focused || touching) return;
    const timer = window.setInterval(() => {
      const track = list.current;
      if (!track || track.scrollWidth <= track.clientWidth + 2) return;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
      if (atEnd) {
        track.scrollTo({ left: 0, behavior: "auto" });
      } else {
        scrollOneCard(track, 1, "smooth");
      }
    }, 5500);
    return () => window.clearInterval(timer);
  }, [inView, reduceMotion, hovered, focused, touching]);

  function move(direction) {
    if (!list.current) return;
    scrollOneCard(list.current, direction, reduceMotion ? "auto" : "smooth");
  }

  return (
    <section
      ref={section}
      id="testimonials"
      aria-labelledby="karur-testimonials-heading"
      onPointerEnter={(event) => setHovered(event.pointerType === "mouse")}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
      className="relative isolate overflow-hidden bg-[#19265f] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,#4159b0,transparent_75%)]"
      >
        {backgroundHalos.map(({ position, color, x, y, delay }) => (
          <motion.div
            key={position}
            className={"absolute h-72 w-72 rounded-full blur-3xl sm:h-96 sm:w-96 " + position + " " + color}
            initial={false}
            animate={
              animateBackground
                ? { x: [0, x, 0], y: [0, y, 0], scale: [0.85, 1.3, 0.85], opacity: [0.5, 0.93, 0.5] }
                : { x: 0, y: 0, scale: 1, opacity: 0.55 }
            }
            transition={
              animateBackground
                ? { duration: 8, ease: "easeInOut", repeat: Infinity, delay }
                : { duration: 0 }
            }
          />
        ))}
        {backgroundMarks.map(({ Icon, position, x, y, delay }) => (
          <motion.span
            key={position}
            className={"absolute text-[#a9c5ff] " + position}
            initial={false}
            animate={
              animateBackground
                ? { x: [0, x, 0], y: [0, y, 0], rotate: [-5, 8, -5], scale: [0.86, 1.16, 0.86], opacity: [0.35, 0.82, 0.35] }
                : { x: 0, y: 0, rotate: 0, scale: 1, opacity: 0.42 }
            }
            transition={
              animateBackground
                ? { duration: 4.8, ease: "easeInOut", repeat: Infinity, delay }
                : { duration: 0 }
            }
          >
            <Icon className="h-8 w-8 sm:h-14 sm:w-14" strokeWidth={1.25} />
          </motion.span>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0.65, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[#c0d4ff]">
            Stories of Trust & Care
          </p>
          <h2 id="karur-testimonials-heading" className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-3xl">
            Every experience reflects our commitment to compassionate and quality healthcare.
          </h2>
          {/* <p className="mt-4 text-base leading-relaxed text-[#dbe6ff] md:text-lg">
            The names and quotes below are fictional examples.
          </p> */}
        </motion.div>

        <ul
          id="karur-testimonial-slides"
          ref={list}
          tabIndex={0}
          aria-label="Sample testimonial cards"
          onScroll={updateBounds}
          onTouchStart={() => setTouching(true)}
          onTouchEnd={() => setTouching(false)}
          onTouchCancel={() => setTouching(false)}
          className="relative mt-8 grid auto-cols-[100%] grid-flow-col gap-4 overflow-x-auto rounded-2xl pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:mt-10 sm:auto-cols-[calc((100%_-_1rem)/2)] lg:auto-cols-[calc((100%_-_2rem)/3)]"
        >
          {items.map(({ name, initials, quote }, index) => (
            <motion.li
              key={name}
              initial={reduceMotion ? false : { opacity: 0.72, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.45, delay: reduceMotion ? 0 : (index % 3) * 0.08, ease: "easeOut" }}
              className="min-w-0 snap-start rounded-2xl border border-white/70 bg-white p-5 text-slate-900 sm:p-7"
            >
              <figure className="flex h-full flex-col">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf0ff] text-[#2b3990]">
                  <Quote aria-hidden="true" className="h-6 w-6" />
                </span>
                <blockquote className="mb-5 mt-4 text-base leading-relaxed text-slate-700">
                  <p>{quote}</p>
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 border-t border-[#dce5f0] pt-4">
                  <span aria-hidden="true" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef8ff] text-sm font-bold text-[#2b3990]">
                    {initials}
                  </span>
                  <span className="font-bold text-slate-900">{name}</span>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </ul>

        {!(bounds.start && bounds.end) && (
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <button type="button" aria-label="Previous testimonial" aria-controls="karur-testimonial-slides" disabled={bounds.start} onClick={() => move(-1)} className={buttonStyle}>
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button type="button" aria-label="Next testimonial" aria-controls="karur-testimonial-slides" disabled={bounds.end} onClick={() => move(1)} className={buttonStyle}>
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

