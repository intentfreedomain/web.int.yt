import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkflowSection } from './components/WorkflowSection';
import { FeaturesGrid } from './components/FeaturesGrid';
import { BottomCTA } from './components/BottomCTA';
import { Footer } from './components/Footer';
export const App: React.FC = () => {
  const handleScrollToWorkflow = () => {
    document.getElementById('how-it-works')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center bg-gradient-to-b from-[#080B14] via-[#080B14] to-[#18409C] selection:bg-[#2A64E7] selection:text-white font-sans">
      {/* Floating Navbar Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full flex flex-col items-center flex-grow">
        <Hero onHowItWorksClick={handleScrollToWorkflow} />

        <WorkflowSection />

        <FeaturesGrid />

        <BottomCTA />
      </main>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
};

export default App;
