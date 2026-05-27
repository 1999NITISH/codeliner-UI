import React from "react";
import PaperlessCTA from "./PaperlessCTA";

const features = [
  ["Customer-On Boarding", "CRM Activities"],
  ["Managing deposits and withdrawals", "Configuring New Banking Products"],
  ["Transaction management", "Loan disbursal and Loan management"],
  ["Interest Calculation", "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on."],
  ["Payments processing (cash, cheques, mandates, NEFT, RTGS etc)", null],
];

const CheckIcon = () => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" className="shrink-0 mt-0.5">
    <circle cx="8.5" cy="8.5" r="8.5" fill="#1565C0" />
    <polyline points="4.5,8.5 7,11 12.5,5.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const FeatureItem = ({ text }) =>
  text ? (
    <div className="flex items-start gap-2">
      <CheckIcon />
      <span className="text-[13px] text-white/75 leading-snug">{text}</span>
    </div>
  ) : null;

export default function CoreBankingShowcase() {
  return (
    <div>
    <section className="relative overflow-hidden mt-12 px-8 py-14 flex items-center justify-center min-h-[420px]">

   

      {/* Main grid */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT — Laptop frame */}
        <div className="relative flex justify-center order-last lg:order-first mt-10 lg:mt-0 lg:h-auto min-h-[250px]">
          <div className="w-full lg:absolute lg:-top-[200px] lg:right-[150px] xl:right-[355px] lg:scale-125 flex justify-center lg:block">
            <div className="w-full max-w-[651px]">
              {/* Title bar */}
             

              <img src="/data.png" className="w-full h-auto lg:h-[320px] object-cover block rounded-lg lg:rounded-none" /> 
              
            </div>

            {/* Laptop base */}
            <div className="h-4 border-t border-[#0f3d60] rounded-b-md hidden lg:block" />
          </div>
        </div>

        {/* RIGHT — Text + features */}
        <div>
          <h2 className="text-[clamp(22px,3vw,32px)] font-normal text-white leading-snug tracking-tight mb-5">
            Run a more efficient, flexible, and digitally connected corebanking system
          </h2>

          <p className="text-[13px] font-semibold text-white/90 mb-3">What you will get:</p>

          <div className="grid grid-cols-2 gap-x-5 gap-y-2">
            {features.map(([a, b], i) => (
              <React.Fragment key={i}>
                <FeatureItem text={a} />
                <FeatureItem text={b} />
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
     
    </section>
     <div className=" flex items-center justify-center my-20">
      
          <PaperlessCTA bgText="CB7" />
          </div>
    </div>
  );
}