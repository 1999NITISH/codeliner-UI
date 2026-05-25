import React from 'react';
import { ChevronDown, Globe } from 'lucide-react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-[100]   mx-56 rounded-lg mt-4 bg-[#2F2F2FB2]">
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <div className="font-display text-[28px] font-extrabold tracking-[-1px]">N7</div>
        
        <nav className="hidden lg:flex items-center gap-10">
          <a href="#" className="text-[13px] font-[400px] tracking-[0.5px] uppercase text-white hover:text-white flex items-center gap-1.5 transition-colors">Solutions <ChevronDown className="w-3.5 h-3.5" /></a>
          <a href="#" className="text-[13px] font-[400px] tracking-[0.5px] uppercase text-white hover:text-white flex items-center gap-1.5 transition-colors">Resources <ChevronDown className="w-3.5 h-3.5" /></a>
          <a href="#" className="text-[13px] font-[400px] tracking-[0.5px] uppercase text-white hover:text-white transition-colors">About Us</a>
        </nav>
        
          <button className="btn-outline font-chivo-mono">REQUEST DEMO</button>
      </div>
    </header>
  );
};

export default Header;
