import React from 'react';
import { IntentLogo } from './icons/IntentLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full font-sans">
      {/* Top Divider Line (SVG y=2932.5 stroke="white") */}
      <div className="w-full border-t border-white" />

      {/* Footer Content Container */}
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="w-full max-w-[1200px]">
          {/* Main Description */}
          <p className="text-[20px] sm:text-[23px] font-medium text-white leading-[1.38] tracking-[-0.01em]">
            Static site hosting, fiscally sponsored by Hack Club, a 501(c)(3) non-profit.
            <br />
            Part of the Intent project.
          </p>

          {/* Subdomain info link */}
          <div className="mt-4 mb-6">
            <span className="text-[18px] sm:text-[20px] font-medium text-white">
              Get subdomains on{' '}
              <a
                href="https://int.yt"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-cyan-300 underline underline-offset-4 transition-colors"
              >
                https://int.yt
              </a>
            </span>
          </div>

          {/* Logo and Copyright */}
          <div className="flex flex-col items-start gap-2 pt-2">
            <IntentLogo height={23} />
            <span className="text-[15px] font-medium text-white select-none">
              Intent Web &copy; 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
