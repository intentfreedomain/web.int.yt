import React from 'react';
import { ArrowRightIcon } from './icons/CardIcons';
import SplitText from './SplitText';

interface HeroProps {
  onHowItWorksClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onHowItWorksClick }) => {
  return (
    <section className="pt-[155px] flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1200px]">
        {/* Main Title */}
        <h1 className="text-[44px] sm:text-[54px] lg:text-[64px] font-bold text-white tracking-[-0.03em] leading-[1.12] mb-6 flex flex-col items-start">
          <SplitText
            text="Push your code."
            className="text-[44px] sm:text-[54px] lg:text-[64px] font-bold text-white tracking-[-0.03em] leading-[1.12]"
            delay={40}
            duration={0.7}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            textAlign="left"
            tag="span"
          />
          <span>
            Deploy is <span className="italic font-serif font-normal">faster</span> than switching tabs.
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="max-w-[711px] text-[18px] sm:text-[20px] font-medium text-[#C9C9C9] leading-[1.5] tracking-[-0.01em] mb-10">
          Connect a GitHub repository, and Intent Web builds, optimizes, and serves your static site on a global edge network — with an instant subdomain, free SSL, and one-click rollback if a deploy ever goes sideways.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-16">
          {/* Primary CTA */}
          <a
            href="https://panel.web.int.yt/authentication/sign-up"
            className="h-[57px] w-full sm:w-[334px] rounded-[12px] bg-[#2A64E7] hover:bg-[#3873f7] active:bg-[#2052c4] text-white text-[20px] font-medium flex items-center justify-center gap-3 transition-all duration-200 shadow-lg shadow-blue-900/30 group cursor-pointer"
          >
            <span>Deploy your first site</span>
            <ArrowRightIcon size={22} className="group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary CTA */}
          <button
            onClick={onHowItWorksClick}
            type="button"
            className="h-[57px] w-full sm:w-[248px] rounded-[12px] bg-[#1C2032] hover:bg-[#262c45] active:bg-[#151928] border border-white/5 text-white text-[20px] font-medium flex items-center justify-center transition-all duration-200 cursor-pointer"
          >
            <span>See how it works</span>
          </button>
        </div>

        {/* Dashboard Preview Frame */}
        <div className="w-full rounded-[34px] p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-2xl relative group overflow-hidden">
          <div className="relative rounded-[33px] overflow-hidden bg-[#0a0f1d] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
            <img
              src="/dashboard-preview.png"
              alt="Intent Web Dashboard - Deploy a New Static Website"
              className="w-full h-auto object-cover block select-none"
              loading="eager"
            />
            {/* Subtle interactive hover highlight */}
            <div className="absolute inset-0 bg-blue-500/0 hover:bg-blue-500/[0.02] transition-colors pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
