import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-[100px] pb-8 bg-n7-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* CTA Section */}
        <div className="relative overflow-hidden bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/5 rounded-[32px] p-12 lg:p-20 flex flex-col lg:flex-row justify-between items-center mb-24 animate-on-scroll">
           <div className="absolute top-1/2 -translate-y-1/2 left-[10%] text-[200px] lg:text-[300px] font-extrabold font-display text-white/[0.015] pointer-events-none select-none z-0">CB7</div>
           <div className="relative z-10 text-center lg:text-left mb-10 lg:mb-0">
             <h2 className="text-[36px] lg:text-[48px] max-w-[550px] leading-tight tracking-[-1px] mb-4">Take the full advantage of going paper-less now.</h2>
             <p className="text-n7-text-secondary max-w-[400px] text-sm mx-auto lg:mx-0">
               CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations.
             </p>
           </div>
           <div className="relative z-10 flex flex-col sm:flex-row gap-4 lg:gap-5">
              <button className="btn-outline">CONTACT US</button>
              <button className="btn-primary">REQUEST DEMO</button>
           </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/[0.08] animate-on-scroll" style={{ animationDelay: '0.2s' }}>
           
           <div className="lg:col-span-2">
              <div className="text-[100px] lg:text-[140px] font-display font-extrabold leading-[0.8] bg-clip-text text-transparent bg-gradient-blue tracking-[-5px] mb-8">N7</div>
           </div>
           
           <div>
              <p className="text-[13px] text-n7-text-secondary leading-[1.8] mb-8">
                <strong className="text-white">London</strong><br/><br/>
                Linkia Infosystems Ltd - CB7.<br/>
                26 Main Road Sundridge, TN14 6EP,<br/>
                England, United Kingdom.
              </p>
              <h5 className="text-[15px] font-semibold text-white mb-6">Solutions</h5>
              <ul className="space-y-4">
                 <li><a href="#" className="text-[14px] text-n7-text-secondary hover:text-white transition-colors group flex items-center">Core Banking CB7 <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                 <li><a href="#" className="text-[14px] text-n7-text-secondary hover:text-white transition-colors group flex items-center">Digital Banking N7 <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                 <li><a href="#" className="text-[14px] text-n7-text-secondary hover:text-white transition-colors group flex items-center">Open Banking <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              </ul>
           </div>
           
           <div>
              <p className="text-[13px] text-n7-text-secondary leading-[1.8] mb-8">
                <strong className="text-white">Dubai</strong><br/><br/>
                Linkia Infosystems Ltd - CB7.<br/>
                Jumeirah Business Center 5,<br/>
                Cluster W, Jumeirah Lakes Towers,<br/>
                Dubai, United Arab Emirates.
              </p>
              <h5 className="text-[15px] font-semibold text-white mb-6">N7 Banking</h5>
              <ul className="space-y-4">
                 <li><a href="#" className="text-[14px] text-n7-text-secondary hover:text-white transition-colors group flex items-center">About Us <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                 <li><a href="#" className="text-[14px] text-n7-text-secondary hover:text-white transition-colors group flex items-center">Solutions <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                 <li><a href="#" className="text-[14px] text-n7-text-secondary hover:text-white transition-colors group flex items-center">Contact <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              </ul>
           </div>
           
           <div>
              <p className="text-[13px] text-n7-text-secondary leading-[1.8] mb-8">
                <strong className="text-white">India</strong><br/><br/>
                Linkia Infosystems Ltd - CB7.<br/>
                Nirmal, Anand Nagar,<br/>
                Serenity Road, Pune,<br/>
                Maharashtra, 411041, India.
              </p>
              <h5 className="text-[15px] font-semibold text-white mb-6">Our Socials</h5>
              <ul className="space-y-4">
                 <li><a href="#" className="text-[14px] text-n7-text-secondary hover:text-white transition-colors group flex items-center">LinkedIn <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                 <li><a href="#" className="text-[14px] text-n7-text-secondary hover:text-white transition-colors group flex items-center">X <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              </ul>
           </div>
           
        </div>
        
        <div className="pt-8 text-[13px] text-n7-text-secondary text-center lg:text-left">
           Copyright © 2022 by Linkia Infosystems Limited - (CB7 and N7 as Commercial Brand) - (Registered under the Companies Act 2006 in England and Wales | Number of incorporation 13200982)
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
