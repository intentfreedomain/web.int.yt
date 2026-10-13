import React from 'react';
import { ArrowRightIcon } from './icons/CardIcons';
import SplitText from './SplitText';

export const BottomCTA: React.FC = () => {
  return (
    <section className="mt-[160px] mb-[150px] w-full flex justify-center px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-[1200px]">
        {/* Headline */}
        <SplitText
          text="Your next site could be live in a few minutes."
          tag="h2"
          className="text-[44px] sm:text-[54px] lg:text-[64px] font-bold text-white tracking-[-0.03em] leading-[1.12] mb-10 block max-w-[900px]"
          delay={35}
          duration={0.7}
          ease="power3.out"
          splitType="words, chars"
          from={{ opacity: 0, y: 35 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-60px"
          textAlign="left"
        />

        {/* CTA Button */}
        <a
          href="https://panel.web.int.yt/authentication/sign-up"
          className="h-[57px] w-full sm:w-[334px] rounded-[12px] bg-[#2A64E7] hover:bg-[#3873f7] active:bg-[#2052c4] text-white text-[20px] font-medium flex items-center justify-center gap-3 transition-all duration-200 shadow-lg shadow-blue-900/30 group cursor-pointer"
        >
          <span>Deploy your first site</span>
          <ArrowRightIcon size={22} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};
