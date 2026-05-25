import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const Insights = () => {
  return (
    <section className="py-[120px]" id="resources">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <h2 className="text-[36px] md:text-[44px] max-w-[450px] tracking-[-1px] mb-6 md:mb-0 animate-on-scroll">Get yourself up-to-speed on all the things happening in fintech</h2>
          <button className="btn-outline animate-on-scroll" style={{ animationDelay: '0.1s' }}>INSIGHTS</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={item} className="bg-white/[0.02] rounded-2xl p-8 border border-white/5 transition-all duration-400 ease-out hover:border-white/15 hover:bg-white/[0.04] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] animate-on-scroll" style={{ animationDelay: `${0.1 * index}s` }}>
              <div className="text-blue-500 text-[11px] font-bold uppercase tracking-[1.5px] mb-4">GETTING STARTED</div>
              <h3 className="text-[22px] mb-6 leading-[1.4] tracking-[-0.5px]">How to transition from a traditional to a digital bank</h3>
              <div className="text-[13px] text-n7-text-secondary mb-8">
                <span className="text-white">David Grohl</span> &nbsp;&nbsp; 17/08/24
              </div>
              <a href="#" className="text-[12px] text-white font-semibold flex items-center gap-2 pt-6 border-t border-white/10 tracking-[1px] hover:text-blue-400 transition-colors">READ MORE</a>
            </div>
          ))}
        </div>
        
        <div className="flex justify-end mb-20">
           <a href="#" className="text-blue-500 text-[13px] font-semibold inline-flex items-center gap-2 uppercase tracking-[1.5px] hover:text-blue-400 transition-colors">READ ALL INSIGHTS <ArrowRight className="w-4 h-4" /></a>
        </div>

        <div className="text-center pt-20">
          <h2 className="text-[40px] mb-16 tracking-[-1px] animate-on-scroll">Our Case Studies</h2>
          
          <div className="bg-white/[0.02] rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row gap-10 md:gap-16 items-center max-w-[900px] mx-auto border border-white/5 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
             <div className="w-full md:w-[320px] h-[240px] bg-[#081220] rounded-[20px] flex justify-center items-center">
                {/* Abstract logo placeholder */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="w-10 h-10 border-8 border-n7-blue rounded-xl"></div>
                  <div className="w-10 h-10 border-8 border-n7-blue rounded-xl"></div>
                  <div className="w-10 h-10 border-8 border-n7-blue rounded-xl"></div>
                  <div className="w-10 h-10 border-8 border-n7-blue rounded-xl"></div>
                </div>
             </div>
             
             <div className="text-left flex-1">
                <div className="text-blue-500 text-[11px] font-bold uppercase tracking-[1.5px] mb-4">GETTING STARTED</div>
                <h3 className="text-[32px] mb-4 leading-tight tracking-[-0.5px]">How we help brand reach out to more people</h3>
                <div className="flex items-center gap-2 text-n7-text-secondary mb-8 text-sm">
                   <div className="w-5 h-5 bg-n7-text-secondary rounded-sm"></div>
                   Zoomerr
                </div>
                <button className="btn-outline w-full md:w-auto">READ MORE</button>
             </div>
          </div>
          
          <div className="flex justify-center md:justify-end gap-6 items-center mt-10 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
             <button className="text-blue-500 border border-blue-500 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
             </button>
             <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-n7-text-secondary"></div>
                <div className="w-6 h-2 rounded-full bg-n7-blue"></div>
                <div className="w-2 h-2 rounded-full bg-n7-text-secondary"></div>
             </div>
             <button className="text-blue-500 border border-blue-500 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" />
             </button>
             
             <a href="#" className="ml-auto text-blue-500 text-[13px] font-semibold hidden md:inline-flex items-center gap-2 uppercase tracking-[1.5px] hover:text-blue-400 transition-colors">VIEW ALL <ArrowRight className="w-4 h-4" /></a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Insights;
