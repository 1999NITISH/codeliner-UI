import React from "react";
import { Marquee } from "./Insights";

const CheckItem = ({ text }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <polyline points="2,5 4,7 8,3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <span className="text-[14px] text-gray-700 leading-snug">{text}</span>
  </div>
);

/* ── Phone frame with placeholder ── */
const PhoneFrame = ({ accent = "#3b82f6", label = "Phone screen placeholder" , src}) => (
  <div
    className="relative mx-auto"
    style={{ width: 268, height: 542 }}
  >
    {/* Outer shell */}
    <div
      className="absolute inset-0 rounded-[38px] shadow-2xl"
      // style={{ border: `6px solid ${accent}`, background: "#fff" }}
    />
    {/* Notch */}
    <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-16 h-4 rounded-full z-10"
      />
    {/* Screen placeholder */}
    <div className="absolute inset-[6px] rounded-[33px] bg-gray-100 flex flex-col items-center justify-center gap-2 overflow-hidden">
      <img src={src} alt={label} className="w-full h-full object-cover" />
      
    </div>
  </div>
);

/* ── Section 1: Digital banking out-of-the-box ── */
const Section1 = () => (
  <section className="bg-[#eaf3fb] pb-20">
    <Marquee />
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left text */}
      <div>
        <h1 className="text-[42px] md:text-[52px] font-bold leading-[1.1] tracking-tight text-gray-900 mb-5">
          Digital banking<br />out-of-the-box
        </h1>
        <p className="text-[15px] text-gray-500 leading-relaxed max-w-sm mb-8">
          N7 helps your financial institution improve the client experience, automate and optimize innovations.
        </p>
        <div className="">
          <button className="btn-primary">
            REQUEST DEMO
          </button>
          <button className="text-blue-500 text-[12px] font-semibold tracking-[1.5px] flex items-center gap-1 hover:text-blue-700 transition-colors mt-2 ml-2">
            LEARN MORE →
          </button>
        </div>
      </div>

      {/* Right: phone + feature panel */}
      <div className="relative flex justify-center items-center gap-6">
        {/* Phone */}
        <PhoneFrame accent="#3b82f6" label="Mobile banking app screenshot" src="/iPhone1.png" />

        {/* Feature card */}
        <div className="hidden md:block bg-white rounded-2xl shadow-lg p-6 max-w-[240px] border border-blue-100">
          <p className="text-[11px] font-bold text-blue-500 uppercase tracking-[1.5px] mb-3">
            Fully compliant with regulatory requirements
          </p>
          <p className="text-[13px] text-gray-500 mb-5 leading-relaxed">
            The global state-of-risk management and compliance is captured by our risk management framework (RMF), which governs the bank's operational risk protocols and procedures.
          </p>
          <div className="flex flex-col gap-3">
            <CheckItem text="Pre-Integrated Core Banking System" />
            <CheckItem text="Fully Compliant With Regulatory Requirement" />
            <CheckItem text="Digitally Connected Core" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ── Section 2: No legacy IT systems ── */
const Section2 = () => (
  <section className="bg-white py-20 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left text */}
      <div>
        <h2 className="text-[34px] md:text-[42px] font-bold leading-tight tracking-tight text-gray-900 mb-5">
          No legacy IT systems
        </h2>
        <p className="text-[15px] text-gray-500 leading-relaxed max-w-sm mb-8">
          Our Digital Banking solutions and management approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
        </p>
        <div className="flex flex-col gap-4">
          <CheckItem text="Adaptive & Intelligent API Accreditation" />
          <CheckItem text="Ambition Value Dependence" />
          <CheckItem text="Cloud-Native With Smart TCO" />
        </div>
      </div>

      {/* Right: phone */}
      <div className="flex justify-center">
        <PhoneFrame accent="#ec4899" label="Dashboard / chart screenshot" src="/iPhone2.png" />
      </div>
    </div>
  </section>
);

/* ── Section 3: No traditional branches ── */
const Section3 = () => (
  <section className="bg-[#eaf3fb] py-20 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left: phone */}
      <div className="flex justify-center order-2 lg:order-1">
        <PhoneFrame accent="#ec4899" label="Mobile banking app screenshot" src="/iPhone3.png" />
      </div>

      {/* Right text */}
      <div className="order-1 lg:order-2">
        <h2 className="text-[34px] md:text-[42px] font-bold leading-tight tracking-tight text-gray-900 mb-5">
          No traditional branches.
        </h2>
        <p className="text-[15px] text-gray-500 leading-relaxed max-w-sm mb-8">
          Our Digital Banking set-up fee helps you start operations immediately while reducing risks and optimizing operational costs for conventional and mobile banking.
        </p>
        <div className="flex flex-col gap-4">
          <CheckItem text="Branchless & Frictionless Banking" />
          <CheckItem text="Digital Transformation Capability" />
          <CheckItem text="Optimized, Adaptable and Scalable" />
        </div>
      </div>
    </div>
  </section>
);

/* ── Main export ── */
const DigitalShowcase = () => (
  <div className="font-sans">
    <Section1 />
    <Section2 />
    <Section3 />
  </div>
);

export default DigitalShowcase;
