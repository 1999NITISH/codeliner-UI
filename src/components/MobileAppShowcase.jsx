import React from "react";

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
    <section className="relative overflow-hidden bg-[#07111a] px-8 py-14 flex items-center justify-center min-h-[420px]">

      {/* Background watermark */}
      {/* <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-transparent font-bold pointer-events-none select-none whitespace-nowrap z-0 leading-none"
        style={{
          fontSize: "clamp(160px, 28vw, 360px)",
          WebkitTextStroke: "1px rgba(0,120,255,0.09)",
          letterSpacing: "-10px",
        }}
      >
        CB7
      </div> */}

      {/* Main grid */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT — Laptop frame */}
        <div className="relative">
          <div className="w-full  absolute -top-[200px] right-[355px] scale-125">
            <div className=" ">
              {/* Title bar */}
             

              <img src="/data.png" className="w-[651px] h-[320px] object-cover block" /> 
              
            </div>

            {/* Laptop base */}
            <div className="h-4 border-t border-[#0f3d60] rounded-b-md" />
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
  );
}