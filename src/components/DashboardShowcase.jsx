import React from "react";
import { ArrowRight } from "lucide-react";

const DashboardShowcase = () => {
  return (
    <section className="relative overflow-hidden bg-[#02131d] py-24 text-white">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[240px] lg:text-[520px] font-semibold text-transparent stroke-text leading-none">
          CB7
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Left Side */}
          <div className="max-w-[520px]">
            <h2 className="text-[46px] lg:text-[58px] leading-[1.08] font-light tracking-[-2px] text-white">
              A complete cloud-based core banking.
            </h2>

            <p className="mt-6 text-[15px] leading-[1.7] text-white/60 max-w-[320px]">
              Faster time to market with our cloud-based core banking services
            </p>

            <div className="mt-10 flex flex-col items-start gap-5">
              <button className="bg-[#0057ff] hover:bg-[#1b6cff] transition-all duration-300 text-white text-[12px] tracking-[2px] px-10 py-4 rounded-lg shadow-[0_10px_30px_rgba(0,87,255,0.35)]">
                REQUEST DEMO
              </button>
                <a
                  href="#"
                  className="inline-flex flex-col items-start text-[#00A3FF] text-[14px] tracking-[1.8px] uppercase group font-chivo-mono"
                >
                  <span className="inline-flex items-center gap-2 hover:gap-3 transition-all duration-300">
                    Learn More
                    <ArrowRight size={13} />
                  </span>

                  {/* Underline till R */}
                  <span className="w-[58px] h-[1px] bg-[#00A3FF] mt-1"></span>
                </a>
            </div>
          </div>

          {/* Right Side */}
        
            {/* Dashboard Frame */}
           
              
              {/* Placeholder for Image */}
              {/* Right Side */}
<div className="relative flex justify-end">
  {/* Dashboard Frame */}
  
    
    {/* Macbook Image */}
    <img
      src="/macbook.png"
      alt="Macbook Dashboard"
      className="w-[757px] h-[490px] object-cover absolute -top-[280px] left-[316px] bottom-0"
    />

    {/* Bottom Line */}
    {/* <div className="h-[18px] border-t border-[#0f4d80] bg-[#041019]" /> */}
 


              {/* Bottom Line */}
            
          </div>
        </div>
      </div>

      {/* Extra CSS */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(0, 140, 255, 0.12);
        }
      `}</style>
    </section>
  );
};

export default DashboardShowcase;