import React from "react";

const AdvantageShowcase = () => {
  return (
    <section className="w-full bg-[#020b14] border-t border-[#00c8ff]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="max-w-[6000px]">

          {/* Heading */}
          <h2 className="text-white text-[42px] md:text-[56px] leading-[1.08] tracking-[-2px] font-light">
            Take the full advantage of
            <br />
            going paper-less now.
          </h2>

          {/* Description */}
          <p className="mt-7 text-white/45 text-[14px] leading-7 max-w-[500px]">
            CB7 helps your financial institution improve the client
            experience, automate and optimize procedures, simplify
            banking operations
          </p>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-5">

          {/* CONTACT BUTTON */}
          <button className="h-[54px] min-w-[170px] px-8 rounded-[10px] border border-[#4f6578] text-white text-[11px] tracking-[2px] font-medium uppercase hover:border-[#00c8ff] hover:text-[#00c8ff] transition-all duration-300">
            Contact Us
          </button>

          {/* REQUEST DEMO BUTTON */}
          <button className="h-[54px] min-w-[170px] px-8 rounded-[10px] bg-gradient-to-r from-[#00c8ff] to-[#005dff] text-white text-[11px] tracking-[2px] font-medium uppercase hover:opacity-90 transition-all duration-300 shadow-[0_10px_30px_rgba(0,140,255,0.35)]">
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdvantageShowcase;