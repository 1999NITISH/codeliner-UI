import React from 'react';
import { Download, CreditCard, ChevronRight, ArrowUpRight, Bell } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-[160px] pb-[100px]  overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[10%] right-[0%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(0,102,255,0.8)_40%,rgba(0,102,255,0.05)_20%,rgba(0,0,0,0)_0%)] blur-[60px] z-0 rounded-full"></div>
      
      <div className="container  mx-auto px-6 max-w-7xl flex flex-col lg:flex-row justify-between items-center relative z-10">
        
        {/* Left Content */}
        <div className="flex-1 max-w-[650px] mb-20 lg:mb-0 text-center lg:text-left">
          <h1 className="text-[56px] lg:text-[72px] mb-6 tracking-[-2px] animate-on-scroll leading-[1.15] font-display font-semibold">
            The new foundation of modern banking
          </h1>
          <p className="text-[18px] lg:text-[20px] text-n7-text-secondary mb-12 leading-[1.6] max-w-[550px] mx-auto lg:mx-0 animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            We drive innovation and growth, provide seamless customer experience and operational excellence
          </p>
          
          <div className="flex justify-center lg:justify-start gap-5 mb-16 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <button className="btn-primary font-chivo-mono">REQUEST DEMO</button>
            <button className="btn-outline font-chivo-mono">CONTACT US</button>
          </div>
          
          <div className="animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="text-[12px] text-n7-text-secondary  tracking-[1px] font-semibold mb-4">Trusted By:</div>
            <div className="flex items-center justify-center lg:justify-start gap-8 opacity-60">
              {/* Dummy logos */}
              <span className="font-display text-xl font-bold">mambo</span>
              <span className="font-display text-xl font-bold flex items-center gap-1"><div className="w-4 h-4 bg-white rounded-sm"></div> block</span>
              <span className="font-display text-xl font-bold tracking-widest uppercase">Zomer</span>
            </div>
          </div>
        </div>

        {/* Right Content / Mockups */}
        <div className="w-full   h-full relative flex-1 animate-on-scroll bg-blue-400" style={{ animationDelay: '0.4s' }}>
          <img
            src="/hero-img.png"
            alt="Hero showcase"
            className="w-[434px] h-[368px] object-cover rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.9)] right-0 absolute top-1/2 -translate-y-1/2 animate-float z-10"
          />
          <div className="w-[304px] bg-white/90 text-black absolute z-20 border-4 border-gray-400 rounded-[20px] left-[40px] py-[10px] px-[6px]">
            <h2>Recent Activity</h2>
            <div className="flex items-center gap-2 flex-wrap mt-4 ">
              {["This Day", "This Week", "This Month", "6 Months"].map((item, index) => {
                const isWeek = item === 'This Week';
                return (
                  <div
                    key={index}
                    className={`inline-flex items-center text-[12px] py-1 px-1 rounded-full ${isWeek ? 'bg-[#081E69] text-white' : 'bg-white text-black'}`}
                  >
                    
                    <span className="select-none">{item}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-between gap-4 mt-4 pr-4">
              <div className="flex  gap-3">
                <div className="w-10 h-10 bg-[#9280FD] rounded-xl flex items-center justify-center">
                  <ArrowUpRight className="text-white" size={24} />
                </div>
                <div className="flex flex-col justify-between">

                <span className='text-[14px] font-semibold'>To Jin <span className='text-gray-600'>. Work</span></span>

                <span className='text-[12px] text-gray-600'>12 jun 2022</span>
                </div>
              </div>
              <h2>-$59</h2>
            </div>
          </div>

           <div className="w-[250px] bg-white/90 text-black absolute z-20 border-4 border-gray-400 rounded-[20px]  -right-[120px] -bottom-[20px]  py-[10px] px-[6px]">
            <div className="flex items-center justify-between gap-4 mt-4 pr-4">
              <div className="flex  gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                  <img src="/hero-peep-ico.png" alt="person" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-between">

                <span className='text-[14px] font-semibold'>Tony Kross</span>

                <span className='text-[12px] text-gray-600'>Good Morning</span>
                </div>
              </div>
              <Bell className="text-black bg-white p-1 rounded-md" size={28} />
            </div>
            <div>
              <span className='text-xs font-light text-gray-600'>Total balance</span>
              <h2 className='text-md text-[#081E69]'>$42,295.00 USD</h2>
            </div>
            <div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
