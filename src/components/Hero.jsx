import React from 'react';
import { Download, CreditCard, ChevronRight, ArrowUpRight, Bell } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-[120px] lg:pt-[160px] pb-[60px] lg:pb-[100px] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[10%] right-[0%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(0,102,255,0.8)_40%,rgba(0,102,255,0.05)_20%,rgba(0,0,0,0)_0%)] blur-[60px] z-0 rounded-full"></div>
      
      <div className="container  mx-auto px-6 max-w-7xl flex flex-col lg:flex-row justify-between items-center relative z-10">
        
        {/* Left Content */}
        <div className="flex-1 max-w-[650px] mb-20 lg:mb-0 text-center lg:text-left">
          <h1 className="text-[40px] md:text-[56px] lg:text-[72px] mb-6 tracking-[-1px] md:tracking-[-2px] animate-on-scroll leading-[1.15] font-display font-semibold">
            The new foundation of modern banking
          </h1>
          <p className="text-[18px] lg:text-[20px] text-n7-text-secondary mb-12 leading-[1.6] max-w-[550px] mx-auto lg:mx-0 animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            We drive innovation and growth, provide seamless customer experience and operational excellence
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-5 mb-16 px-4 sm:px-0 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <button className="btn-primary font-chivo-mono">REQUEST DEMO</button>
            <button className="btn-outline font-chivo-mono">CONTACT US</button>
          </div>
          
          <div className="animate-on-scroll mt-20" style={{ animationDelay: '0.3s' }}>
            <div className="text-[12px] text-n7-text-secondary  tracking-[1px] font-semibold ">Trusted By:</div>
            <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-8 w-full flex-wrap mt-4">
              {/* Dummy logos */}
             <div className="flex items-center gap-3">
              <img
                src="/Shell.png"
                alt="Logo"
                className="h-8 w-auto object-contain"
              />

              <span className="font-display text-lg font-bold text-white">
                SHELLS
              </span>
           
            </div>
             <div className="flex items-center gap-3">
              <img
                src="/smart.png"
                alt="Logo"
                className="h-8 w-auto object-contain"
              />

              <span className="font-display text-lg font-bold text-white">
                SmartFinder
              </span>
            </div>
             <div className="flex items-center gap-3">
              <img
                src="/Zoom.png"
                alt="Logo"
                className="h-8 w-auto object-contain"
              />

              <span className="font-display text-lg font-bold text-white">
                Zoomerr
              </span>
            </div>
             <div className="flex items-center gap-3">
              <img
                src="/Art.png"
                alt="Logo"
                className="h-8 w-auto object-contain"
              />

              <span className="font-display text-lg font-bold text-white">
                ArtVenue
              </span>
            </div>
             <div className="flex items-center gap-3">
              <img
                src="/kon.png"
                alt="Logo"
                className="h-8 w-auto object-contain"
              />

              <span className="font-display text-lg font-bold text-white">
                kontrastr
              </span>
            </div>
             <div className="flex items-center gap-3">
              <img
                src="/waves.png"
                alt="Logo"
                className="h-8 w-auto object-contain"
              />

              <span className="font-display text-lg font-bold text-white">
                WAVESMARATHON
              </span>
            </div>

           
            </div>
          </div>
        </div>

        {/* Right Content / Mockups */}
        <div className="w-full min-h-[400px] lg:h-[600px] relative flex-1 animate-on-scroll flex items-center justify-center lg:justify-end mt-10 lg:mt-0" style={{ animationDelay: '0.4s' }}>
          <img
            src="/hero-img.png"
            alt="Hero showcase"
            className="w-[280px] sm:w-[350px] lg:w-[434px] h-[240px] sm:h-[300px] lg:h-[368px] object-cover rounded-[20px] lg:rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.9)] lg:right-0 absolute top-1/2 -translate-y-1/2 animate-float z-10 scale-100 lg:scale-110"
          />
          <div className="w-[240px] sm:w-[280px] lg:w-[304px] bg-white/90 text-black absolute z-20 border-2 lg:border-4 border-gray-400 rounded-[15px] lg:rounded-[20px] left-0 sm:left-[5%] lg:-left-[20px] py-[10px] px-[6px] top-[10%] lg:top-[20%] scale-75 sm:scale-90">
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

           <div className="w-[280px] sm:w-[320px] bg-[#E2E6EA] text-black absolute z-20 rounded-[24px] sm:rounded-[32px] p-4 sm:p-5 shadow-lg -right-[10px] sm:-right-[40px] lg:-right-[120px] -bottom-[10px] sm:-bottom-[40px] lg:-bottom-[80px] scale-65 sm:scale-75">
  
  {/* Header: Profile, Name, and Notification */}
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300">
        <img 
          src="/hero-peep-ico.png" 
          alt="Toni Kross" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="flex flex-col">
        <span className="text-[16px] font-bold text-[#1A1A1A]">Toni Kross</span>
        <span className="text-[12px] text-gray-500 font-medium">Good Morning</span>
      </div>
    </div>
    <button className="p-2 bg-transparent hover:bg-gray-200/50 rounded-xl transition">
      {/* Bell Icon SVG */}
      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
      </svg>
    </button>
  </div>

  {/* Balance Section */}
  <div className="mb-6">
    <span className="text-[14px] text-gray-500 font-normal block mb-1">Total balance</span>
    <h2 className="text-[26px] font-extrabold text-[#0D2A75] tracking-tight">
      $42,295.00 <span className="text-[22px] font-bold">USD</span>
    </h2>
  </div>

  <hr className="border-gray-300/60 my-4" />

  {/* Quick Actions Footer */}
  <div className="grid grid-cols-3 gap-2 text-center mt-4">
    {/* Fund Transfer */}
    <div className="flex flex-col items-center gap-2 cursor-pointer group">
      <div className="w-14 h-14 bg-white/60 group-hover:bg-white rounded-2xl flex items-center justify-center shadow-sm transition">
        {/* Fund Transfer SVG */}
       <img src="/FundTransfer.png" alt="Fund Transfer" className="w-6 h-6" />
      </div>
      <span className="text-[11px] font-bold text-black">Fund Transfer</span>
    </div>

    {/* Add Money */}
    <div className="flex flex-col items-center gap-2 cursor-pointer group">
      <div className="w-14 h-14 bg-white/60 group-hover:bg-white rounded-2xl flex items-center justify-center shadow-sm transition">
        {/* Add Money SVG */}
        <img src="/AddMoney.png" alt="Add Money" className="w-6 h-6" />
      </div>
      <span className="text-[11px] font-bold text-black">Add Money</span>
    </div>

    {/* More */}
    <div className="flex flex-col items-center gap-2 cursor-pointer group">
      <div className="w-14 h-14 bg-white/60 group-hover:bg-white rounded-2xl flex items-center justify-center shadow-sm transition">
        {/* More/Grid SVG */}
        <img src="/More.png" alt="More Actions" className="w-6 h-6" />
      </div>
      <span className="text-[11px] font-bold text-black">More</span>
    </div>
  </div>

</div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
