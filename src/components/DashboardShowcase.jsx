import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const features = [
  'Customer-On Boarding',
  'Managing deposits and withdrawals',
  'Transaction management',
  'Interest Calculation',
  'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
  'CRM Activities',
  'Configuring New Banking Products',
  'Loan disbursal and Loan management',
  'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.'
];

const DashboardShowcase = () => {
  return (
    <section className="py-[120px] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[250px] lg:text-[450px] font-extrabold text-white/[0.015] pointer-events-none select-none z-0">
        CB7
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col gap-20">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-0">
          <div>
            <h2 className="text-[40px] lg:text-[56px] max-w-[600px] tracking-[-1.5px] animate-on-scroll leading-tight">A complete cloud-based core banking.</h2>
            <p className="text-n7-text-secondary mt-4 max-w-[300px] animate-on-scroll text-sm lg:text-base">
              Faster time to market with our cloud-based core banking services
            </p>
          </div>
          <div className="flex flex-col gap-4 animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            <button className="btn-primary w-full lg:w-auto">REQUEST DEMO</button>
            <a href="#" className="text-blue-500 text-[13px] font-semibold inline-flex items-center gap-2 justify-center lg:justify-start uppercase tracking-[1.5px] hover:text-blue-400 transition-colors">
              LEARN MORE <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="w-full rounded-[24px] border border-white/10 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] bg-n7-card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
           {/* Image Placeholder as requested */}
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" alt="AML Dashboard Placeholder" className="w-full h-auto block opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-500" />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
          <div className="text-[24px] lg:text-[28px] font-medium max-w-[450px] leading-[1.3] animate-on-scroll">
            Run a more efficient, flexible, and digitally connected corebanking system
            <div className="text-[14px] text-n7-text-secondary mt-4">What you will get:</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5 flex-1 lg:pl-16 animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4 text-[15px] text-n7-text-secondary">
                <CheckCircle2 className="w-[18px] h-[18px] text-blue-500 flex-shrink-0 mt-[3px]" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DashboardShowcase;
