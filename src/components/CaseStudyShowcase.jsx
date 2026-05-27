import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cases = [
  {
    tag: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    company: "Zoomerr",
  },
  {
    tag: "GROWTH",
    title: "How we scaled digital banking for enterprise clients",
    company: "FinCore",
  },
  {
    tag: "COMPLIANCE",
    title: "Achieving full regulatory compliance in 90 days",
    company: "VaultX",
  },
  {
    tag: "INNOVATION",
    title: "Building a neobank from scratch with zero legacy debt",
    company: "NeoFlow",
  },
];

/* ───────────────────────────────────────── */
/* X Shape Same Like Design */
/* ───────────────────────────────────────── */

const XShape = () => {
  return (
    <div className="relative w-[82px] h-[82px]">
      {/* top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#00c8ff] rounded-b-full" />

      {/* bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#00c8ff] rounded-t-full" />

      {/* left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#00c8ff] rounded-r-full" />

      {/* right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#00c8ff] rounded-l-full" />

      {/* center hole */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-[#08192d]" />
      </div>
    </div>
  );
};

const PatternCard = () => {
  return (
    <div className="w-full h-full bg-[#07172b] flex items-center justify-center">
      <div className="grid grid-cols-2 gap-5">
        {[1, 2, 3, 4].map((i) => (
          // <XShape key={i} />
          <img src="/Vector.png" alt={`icon${i}`} className="w-24 h-24 object-contain" />
        ))}
      </div>
    </div>
  );
};

const CaseStudyShowcase = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((p) => (p - 1 + cases.length) % cases.length);

  const next = () =>
    setCurrent((p) => (p + 1) % cases.length);

  const study = cases[current];

  return (
    <section className="min-h-screen bg-[#010b14] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">

      {/* Heading */}
      <h2 className="text-white text-[42px] md:text-[56px] font-light tracking-[-2px] mb-16">
        Our Case Studies
      </h2>

      {/* Main Wrapper */}
      <div className="relative w-full max-w-[980px]">

        {/* LEFT STACK CARD */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 w-[160px] h-[320px] rounded-[28px] bg-[#061526] border border-[#0b2942] overflow-hidden opacity-70">
          <PatternCard />
        </div>

        {/* SECOND LEFT STACK */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-[190px] h-[360px] rounded-[30px] bg-[#07172b] border border-[#0b2942] overflow-hidden opacity-90">
          {/* <PatternCard /> */}
        </div>

        {/* ACTIVE CARD */}
        <div className="relative z-20 bg-[#061321] border border-[#0d2a42] rounded-[32px] overflow-hidden flex flex-col md:flex-row min-h-[390px] shadow-[0_30px_80px_rgba(0,0,0,0.55)]">

          {/* LEFT IMAGE */}
          <div className="w-full md:w-[360px] h-[320px] md:h-auto">
            <PatternCard />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 px-10 py-12 flex flex-col justify-between">

            <div>
              {/* Tag */}
              <p className="text-[#00c8ff] text-[10px] tracking-[3px] uppercase font-semibold mb-7">
                {study.tag}
              </p>

              {/* Title */}
              <h3 className="text-white text-[38px] leading-[1.12] tracking-[-1.5px] font-light max-w-[420px]">
                {study.title}
              </h3>

              {/* Company */}
              <div className="flex items-center gap-3 mt-8">
                <div className="w-7 h-7 rounded-full bg-[#10283e] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00c8ff]" />
                </div>

                <span className="text-white/55 text-[15px]">
                  {study.company}
                </span>
              </div>
            </div>

            {/* Button */}
            <button className="mt-10 h-[50px] rounded-full border border-[#1a4667] text-white/60 text-[11px] tracking-[3px] font-medium hover:border-[#00c8ff] hover:text-white transition-all duration-300">
              READ MORE
            </button>

          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="w-full max-w-[980px] mt-10 relative flex items-center justify-center">

        {/* Center Controls */}
        <div className="flex items-center gap-5">

          {/* Prev */}
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-[#00c8ff]/60 text-[#00c8ff] flex items-center justify-center hover:bg-[#00c8ff]/10 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-8 h-2.5 bg-[#00c8ff]"
                    : "w-2 h-2 bg-[#4c5f70]"
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-[#00c8ff]/60 text-[#00c8ff] flex items-center justify-center hover:bg-[#00c8ff]/10 transition-all duration-300"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* VIEW ALL */}
        <a
          href="/"
          className="absolute right-0 text-[#00c8ff] text-[12px] uppercase tracking-[2px] flex items-center gap-2 hover:text-white transition-all duration-300"
        >
          VIEW ALL
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};

export default CaseStudyShowcase;