import React from "react";

import {
  Network,
  Smartphone,
  Landmark,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    icon: (
      <img
        src={"/New1.png"}
        alt="Core Banking"
        className="w-[47px] h-[49px] object-contain"
      />
    ),
    title: "Core Banking CB7",
    desc: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
  },
  {
    icon: (
      <img
        src={"/New2.png"}
        alt="Core Banking"
        className="w-[47px] h-[49px] object-contain"
    
      />
    ),
    title: "Digital Banking N7",
    desc: "N7 brings full capabilities across strategy, human-centered design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
  },
  {
     icon: (
      <img
        src={"/New3.png"}
        alt="Core Banking"
        className="w-[47px] h-[49px] object-contain"
    
      />
    ),
    title: "Open Banking",
    desc: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
  },
  {
     icon: (
      <div className="flex justify-between pr-[54px] items-end">
        <img
        src={"/New4.png"}
        alt="Core Banking"
        className="w-[47px] h-[49px] object-contain"
    
      />
      <span className="text-[14px] font-[400px] text-[#E9F4F9]/70">NBFC</span>
      </div>
      
    ),
    
    title: "Loan Origination System",
    desc: "N7 brings full capabilities across strategy, human-centered design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
  },
  {
     icon: (
      <div className="flex justify-between pr-[54px] items-end">
        <img
        src={"/New4.png"}
        alt="Core Banking"
        className="w-[47px] h-[49px] object-contain"
    
      />
      <span className="text-[14px] font-[400px] text-[#E9F4F9]/70">NBFC</span>
      </div>
      
    ),
    
    title: "Loan Management System",
    desc: "N7 brings full capabilities across strategy, human-centered design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
  },
];

const Solutions = () => {
  return (
    <section
      id="solutions"
      className="w-full bg-[#02131d] text-white py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-24">
          
          {/* Left Side */}
          <div className="flex flex-col justify-start">
            <h2 className="text-[42px] leading-[1.15] font-light tracking-[-1.5px] max-w-[320px] text-white">
              All of our solutions are tailor-made to your needs
            </h2>

            <button className="btn-outline mt-10 text-[12px] tracking-[2px] px-10 py-4 rounded-lg w-2/3">
              REQUEST DEMO
            </button>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20">
            {solutions.map((solution, index) => (
              <div key={index} className="max-w-[280px]">
                
                {/* Icon */}
                <div className="text-white/80 mb-5">
                  {solution.icon}
                </div>

                {/* Title */}
                <h3 className="text-[22px] leading-snug font-light mb-5 text-white">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] leading-[1.8] text-white/45 mb-7 font-light">
                  {solution.desc}
                </p>

                {/* Link */}
                <a
                  href="#"
                  className="inline-flex flex-col items-start text-[#00A3FF] text-[14px] tracking-[1.8px] uppercase group font-chivo-mono"
                >
                  <span className="inline-flex items-center gap-2 hover:gap-3 transition-all duration-300">
                    Learn More
                    <ArrowRight size={13} />
                  </span>

                  {/* Underline till R */}
                  <span className="w-[58px] h-[1.5px] bg-[#00A3FF] mt-1"></span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solutions;