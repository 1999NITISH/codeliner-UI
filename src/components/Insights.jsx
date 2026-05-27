import React from "react";
import { ArrowRight } from "lucide-react";

/* ---------------- Marquee Export ---------------- */

const tickerItems = [
  { text: "N7", blue: true },
  { text: "Say" },
  { text: "👋", emoji: true },
  { text: "to the new way of banking" },
  { text: "CB7", blue: true },
  { text: "Say" },
];

const TickerItem = ({ text, blue, emoji }) => {
  return (
    <div className="flex items-center gap-12 px-10 whitespace-nowrap">
      {/* Star */}
      <span className="text-[#B8B8B8] text-[42px] leading-none">
        ✳
      </span>

      {/* Text */}
      <span
        className={`
          leading-none tracking-[-2px]
          ${
            emoji
              ? "text-[42px]"
              : "text-[42px] md:text-[64px] font-semibold"
          }
          ${blue ? "text-[#0066D9]" : "text-[#07131A]"}
        `}
      >
        {text}
      </span>
    </div>
  );
};

export const Marquee = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-8 border-y border-black/5">
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .marquee-track {
            display: flex;
            align-items: center;
            width: max-content;
            animation: marquee 22s linear infinite;
          }
        `}
      </style>

      <div className="marquee-track">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <TickerItem
            key={index}
            text={item.text}
            blue={item.blue}
            emoji={item.emoji}
          />
        ))}
      </div>
    </div>
  );
};

/* ---------------- Insight Card ---------------- */

const InsightCard = ({ delay }) => (
  <div
    className="bg-white/[0.02] rounded-2xl p-8 border border-white/5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex flex-col"
    style={{ animationDelay: delay }}
  >
    {/* Tag */}
    <div className="text-blue-500 text-[11px] font-bold uppercase tracking-[1.5px] mb-4">
      GETTING STARTED
    </div>

    {/* Title */}
    <h3 className="text-[20px] leading-[1.4] tracking-[-0.5px] text-white mb-6 flex-1">
      How to transition from a traditional to a digital bank
    </h3>

    {/* Meta */}
    <div className="text-[13px] text-white/40 mb-6">
      <span className="text-white">David Grohl</span>
      &nbsp;&nbsp;17/08/24
    </div>

    {/* Link */}
    <div className="pt-5 border-t border-white/10">
      <a
        href="#"
        className="text-[12px] text-white font-semibold flex items-center gap-2 tracking-[1px] hover:text-blue-400 transition-colors"
      >
        READ MORE
      </a>
    </div>
  </div>
);

/* ---------------- Main Component ---------------- */

const Insights = () => {
  return (
    <>
      {/* Marquee */}
      {/* <Marquee />

      {/* Insights Section */}
      <section
        id="resources"
        className="py-[120px] bg-[#02131d] text-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">

            <h2 className="text-[36px] md:text-[44px] leading-tight tracking-[-1px] max-w-[480px] mb-6 md:mb-0 font-normal">
              Get yourself up-to-speed on all the things happening in fintech
            </h2>

            <button className="px-6 py-3 rounded-full border border-white/20 text-[11px] tracking-[2px] font-bold hover:border-white/40 transition-colors">
              INSIGHTS
            </button>
          </div> */}

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[0, 1, 2, 3].map((i) => (
              <InsightCard
                key={i}
                delay={`${i * 0.1}s`}
              />
            ))}
          </div>

          {/* Read All */}
          <div className="flex justify-end">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#0066D9] text-[13px] font-semibold uppercase tracking-[1.5px] hover:text-blue-400 transition-colors"
            >
              READ ALL INSIGHTS
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default Insights;