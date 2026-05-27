import React from "react";
import { ArrowRight } from "lucide-react";

const solutions = [
  "Core Banking CB7",
  "Digital Banking N7",
  "Open Banking",
  "Loan Origination System",
  "Loan Management System",
  "Digital Transformation",
];

const company = [
  "About Us",
  "Solutions",
  "Contact",
  "Company",
  "Careers",
  "Insights",
  "Core Team",
  "Brand Center",
];

const socials = ["LinkedIn", "X"];

const FooterShowcase = () => {
  return (
    <footer className="w-full bg-[#020b14] border-t border-[#00c8ff] overflow-hidden">

      <div className="max-w-[1440px] mx-auto px-10 lg:px-16 py-16">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-16 ">

          {/* LEFT LOGO */}
          <div className="flex items-start ">
            {/* <h1 className="text-[180px] leading-none font-semibold tracking-[-12px] bg-gradient-to-b from-[#11d8ff] to-[#004cff] bg-clip-text text-transparent">
              N7
            </h1> */}
            <img src="/n7-footer.png" width="800" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-between">

            {/* TOP LOCATIONS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

              {/* London */}
              <div>
                <h3 className="text-white text-[15px] mb-5 font-medium">
                  London
                </h3>

                <p className="text-white/45 text-[13px] leading-6">
                  Linktia Infosystems Ltd — CB7,
                  <br />
                  26 Main Road Sundridge, TN14 6EP,
                  <br />
                  England, United Kingdom.
                </p>
              </div>

              {/* Dubai */}
              <div>
                <h3 className="text-white text-[15px] mb-5 font-medium">
                  Dubai
                </h3>

                <p className="text-white/45 text-[13px] leading-6">
                  Linktia Infosystems Ltd —
                  <br />
                  CB7, Jumeirah Business, Center 5
                  <br />
                  Cluster W, Jumeirah Lakes Towers,
                  <br />
                  Dubai, United Arab Emirates
                </p>
              </div>

              {/* India */}
              <div>
                <h3 className="text-white text-[15px] mb-5 font-medium">
                  London
                </h3>

                <p className="text-white/45 text-[13px] leading-6">
                  Linktia Infosystems Ltd —
                  <br />
                  CB7,Nirmal, Anand Nagar,
                  <br />
                  Suncity Road, Pune,
                  <br />
                  Maharashtra, 411041, India
                </p>
              </div>
            </div>

            {/* BOTTOM LINKS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-16">

              {/* Solutions */}
              <div>
                <h3 className="text-white text-[15px] mb-6 font-medium">
                  Solutions
                </h3>

                <div className="space-y-4">
                  {solutions.map((item, index) => (
                    <a
                      key={index}
                      href="/"
                      className="group flex items-start justify-between gap-4 text-white/50 hover:text-[#00c8ff] transition-all duration-300"
                    >
                      <span className="text-[13px] leading-5 max-w-[180px]">
                        {item}
                      </span>

                      <ArrowRight className="w-3.5 h-3.5 mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1 text-[#00c8ff]" />
                    </a>
                  ))}
                </div>
              </div>

              {/* N7 Banking */}
              <div>
                <h3 className="text-white text-[15px] mb-6 font-medium">
                  N7 Banking
                </h3>

                <div className="space-y-4">
                  {company.map((item, index) => (
                    <a
                      key={index}
                      href="/"
                      className="group flex items-center justify-between text-white/50 hover:text-[#00c8ff] transition-all duration-300"
                    >
                      <span className="text-[13px]">
                        {item}
                      </span>

                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#00c8ff]" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div>
                <h3 className="text-white text-[15px] mb-6 font-medium">
                  Our Socials
                </h3>

                <div className="space-y-4">
                  {socials.map((item, index) => (
                    <a
                      key={index}
                      href="/"
                      className="group flex items-center justify-between text-white/50 hover:text-[#00c8ff] transition-all duration-300"
                    >
                      <span className="text-[13px]">
                        {item}
                      </span>

                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#00c8ff]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* COPYRIGHT */}
            <div className="mt-20 pt-8 border-t border-white/5">
              <p className="text-white/20 text-[11px] leading-6 max-w-[900px]">
                Copyright © 2022 by Linktia Infosystems Limited — CB7 and N7 as
                Commercial Brand — [Registered under the Companies Act 2006 in
                England and Wales | Number of Incorporation 13100882]
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterShowcase;
