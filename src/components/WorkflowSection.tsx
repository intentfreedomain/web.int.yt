import React from 'react';

export const WorkflowSection: React.FC = () => {
  return (
    <section id="how-it-works" className="mt-[110px] w-full flex justify-center px-4 sm:px-6 lg:px-8 font-sans scroll-mt-24">
      <div className="w-full max-w-[1200px]">
        {/* Headline */}
        <h2 className="text-[44px] sm:text-[54px] lg:text-[64px] font-bold text-white tracking-[-0.03em] leading-[1.12] mb-10">
          From push to production,
          <br />
          <span className="italic font-serif font-normal">automatically.</span>
        </h2>

        {/* Instrument Sans Narrative with Colored IntentWeb Letters */}
        <p className="font-sans text-[20px] sm:text-[24px] lg:text-[28px] font-semibold text-white leading-[1.42] tracking-[-0.02em] text-glow-shadow max-w-[1200px]">
          Connect your repository, select your branch, configure the build command just once,{' '}
          <span className="inline-flex items-baseline font-bold">
            <span className="text-[#36B9DA]">I</span>
            <span className="text-[#E62B2F]">n</span>
            <span className="text-[#20B982]">t</span>
            <span className="text-[#F2C338]">e</span>
            <span className="text-[#6C5AC4]">n</span>
            <span className="text-[#E43B87]">t</span>
            <span className="text-white">&nbsp;</span>
            <span className="text-[#3B9EE4]">Web</span>
          </span>{' '}
          remembers it for every new push to the branch. Each build gets its own sandbox, a isolated worker runs safely, and never even looks towards previous deployments. Every push is a new release. No half-broken sites for visitors. If something goes south, rollback is a single click away!
        </p>
      </div>
    </section>
  );
};
