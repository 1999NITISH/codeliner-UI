import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import DashboardShowcase from './components/DashboardShowcase';
import MobileAppShowcase from './components/MobileAppShowcase';
import Insights from './components/Insights';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <DashboardShowcase />
        <MobileAppShowcase />
        <Insights />
      </main>
      <Footer />
    </div>
  );
}

export default App;
