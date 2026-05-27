import React from 'react';

export default function PaperlessCTA({ bgText = "N7" }) {
  return (
    <div className="relative w-full max-w-[1200px] min-h-[400px] bg-[#030B13] rounded-[24px] overflow-hidden flex items-center px-8 md:px-16 py-12 select-none font-sans">
      
      {/* Dynamic Background Outlined Text (as Prop) */}
      <div 
        className="absolute right-0 bottom-0 top-0 w-1/2 flex items-center justify-center opacity-25 pointer-events-none text-[#1E3A8A] font-black text-[24vw] md:text-[380px] select-none tracking-tighter"
        style={{
          WebkitTextStroke: '2px #1E40AF',
          color: 'transparent',
        }}
      >
        {bgText}
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        
        {/* Left Section: Headings */}
        <div className="max-w-[540px]">
          <h2 className="text-[36px] sm:text-[44px] md:text-[52px] leading-[1.15] font-normal tracking-tight text-white mb-6">
            Take the full advantage of <br className="hidden sm:inline" />
            going paper-less now.
          </h2>
          <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-400 font-light max-w-[460px]">
            N7 helps your financial institution improve the client experience, 
            automate and optimize procedures, simplify banking operations
          </p>
        </div>

        {/* Right Section: Interactive CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 lg:shrink-0">
          {/* Contact Us Button */}
          <button className="h-[54px] px-8 bg-transparent hover:bg-white/5 text-white text-[13px] font-medium tracking-[0.08em] uppercase border border-white/40 rounded-[12px] transition-all duration-200">
            Contact Us
          </button>
          
          {/* Request Demo Button */}
          <button className="h-[54px] px-8 bg-gradient-to-r from-[#0091FF] to-[#004BFF] hover:opacity-90 text-white text-[13px] font-semibold tracking-[0.08em] uppercase rounded-[12px] shadow-[0_4px_20px_rgba(0,75,255,0.3)] transition-all duration-200">
            Request Demo
          </button>
        </div>

      </div>
    </div>
  );
}