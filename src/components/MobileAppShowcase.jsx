import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const MobileAppShowcase = () => {
  return (
    <section className="py-[140px] bg-gradient-to-b from-n7-dark via-[rgba(0,102,255,0.03)] to-n7-dark">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center">
        
        <h2 className="text-[40px] lg:text-[56px] text-center mb-6 tracking-[-1.5px] leading-tight animate-on-scroll">Digital banking<br/>out-of-the-box</h2>
        <p className="text-center text-n7-text-secondary text-lg max-w-[650px] mb-12 leading-[1.6] animate-on-scroll" style={{ animationDelay: '0.1s' }}>
          N7 helps your financial institution improve the client experience, automate and optimize procedures.
        </p>
        <div className="flex gap-4 mb-20 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          <button className="btn-primary">REQUEST DEMO</button>
          <a href="#" className="text-blue-500 text-[13px] font-semibold inline-flex items-center gap-2 uppercase tracking-[1.5px] hover:text-blue-400 transition-colors ml-4">
            LEARN MORE <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-16 lg:gap-0">
          
          <div className="max-w-[320px] animate-on-scroll">
             <h4 className="text-[22px] mb-5 tracking-[-0.5px]">No legacy IT systems</h4>
             <p className="text-n7-text-secondary text-[15px] mb-8 leading-[1.7]">
               Our Digital Banking solution and multi-layered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
             </p>
             <div className="flex flex-col gap-3">
                <div className="flex gap-2 text-[14px]">
                  <CheckCircle2 className="w-[18px] h-[18px] text-blue-500 flex-shrink-0" /> Adaptive & Intelligent API monetization
                </div>
                <div className="flex gap-2 text-[14px]">
                  <CheckCircle2 className="w-[18px] h-[18px] text-blue-500 flex-shrink-0" /> Ambient User Experience
                </div>
                <div className="flex gap-2 text-[14px]">
                  <CheckCircle2 className="w-[18px] h-[18px] text-blue-500 flex-shrink-0" /> Cloud-native With lower TCO
                </div>
             </div>
          </div>

          <div className="relative w-full max-w-[440px] h-[650px] flex justify-center items-center animate-on-scroll" style={{ animationDelay: '0.2s' }}>
             {/* Using standard image placeholders as requested */}
             <img 
               src="https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?auto=format&fit=crop&q=80&w=400&h=800" 
               alt="App Screen 1" 
               className="w-[300px] h-auto absolute rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:-translate-y-3 z-10 -translate-y-5 translate-x-5 opacity-80 blur-[2px] grayscale hover:grayscale-0 hover:blur-none" 
             />
             <img 
               src="https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?auto=format&fit=crop&q=80&w=400&h=800" 
               alt="App Screen 2" 
               className="w-[300px] h-auto absolute rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:-translate-y-3 z-20 translate-y-5 -translate-x-10 scale-[0.95]" 
             />
          </div>

          <div className="max-w-[320px] animate-on-scroll" style={{ animationDelay: '0.4s' }}>
             <h4 className="text-[22px] mb-5 tracking-[-0.5px]">No traditional branches</h4>
             <p className="text-n7-text-secondary text-[15px] mb-8 leading-[1.7]">
               Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimizing operational costs for a seamless branchless experience.
             </p>
             <div className="flex flex-col gap-3">
                <div className="flex gap-2 text-[14px]">
                  <CheckCircle2 className="w-[18px] h-[18px] text-blue-500 flex-shrink-0" /> Branchless & Paperless Banking
                </div>
                <div className="flex gap-2 text-[14px]">
                  <CheckCircle2 className="w-[18px] h-[18px] text-blue-500 flex-shrink-0" /> Digital Transformation Capability
                </div>
                <div className="flex gap-2 text-[14px]">
                  <CheckCircle2 className="w-[18px] h-[18px] text-blue-500 flex-shrink-0" /> Optimized, Adaptable and Scalable
                </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MobileAppShowcase;
