import React from 'react';
import { Network, Smartphone, Landmark, Building2, Briefcase, ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: <Building2 size={32} />,
    title: 'Core Banking CB7',
    desc: 'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
    link: 'LEARN MORE'
  },
  {
    icon: <Network size={32} />,
    title: 'Digital Banking N7',
    desc: 'N7 brings full capabilities across strategy, human-centered design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
    link: 'LEARN MORE'
  },
  {
    icon: <Landmark size={32} />,
    title: 'Open Banking',
    desc: 'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
    link: 'LEARN MORE'
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Loan Origination System',
    desc: 'N7 brings full capabilities across strategy, human-centered design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
    link: 'LEARN MORE'
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Loan Management System',
    desc: 'N7 brings full capabilities across strategy, human-centered design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
    link: 'LEARN MORE'
  }
];

const Solutions = () => {
  return (
    <section className="py-[120px] relative" id="solutions">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-[48px] max-w-[450px] tracking-[-1px] animate-on-scroll">All of our solutions are tailor-made to your needs</h2>
          <button className="btn-outline animate-on-scroll" style={{ animationDelay: '0.1s' }}>REQUEST DEMO</button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="p-10 bg-white/5 rounded-[20px] transition-all duration-400 ease-out border border-white/5 hover:bg-white/10 hover:border-white/15 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] animate-on-scroll" 
              style={{ animationDelay: `${0.1 * (index + 2)}s` }}
            >
              <div className="mb-8 text-n7-blue bg-[#0066ff]/10 w-16 h-16 flex items-center justify-center rounded-2xl">{solution.icon}</div>
              <h3 className="text-[26px] mb-5 tracking-[-0.5px]">{solution.title}</h3>
              <p className="text-n7-text-secondary text-base leading-[1.7] mb-8">{solution.desc}</p>
              <a href="#" className="text-blue-500 text-[13px] font-semibold inline-flex items-center gap-2 uppercase tracking-[1.5px] hover:text-blue-400 transition-colors">
                {solution.link} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
