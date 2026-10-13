import React from 'react';
import { IntentLogo } from './icons/IntentLogo';

interface NavbarProps {
  onSignUpClick?: () => void;
  onOpenPanelClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSignUpClick, onOpenPanelClick }) => {
  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 pointer-events-none font-sans">
      <div className="w-full max-w-[1157px] min-h-[50px] sm:h-[59px] rounded-[29.5px] bg-[#191919]/72 backdrop-blur-md flex items-center justify-between p-[0.5px] border border-white/5 pointer-events-auto transition-all shadow-lg">
        {/* Left Pill - IntentWeb Brand Badge */}
        <a
          href="/"
          aria-label="Intent Web home"
          className="h-[46px] sm:h-[58px] min-w-[130px] sm:min-w-[206px] px-3 sm:px-6 rounded-[29px] bg-[#010101] border border-[#6D6D6D] flex items-center justify-center select-none shadow-sm cursor-pointer hover:border-[#8e8e8e] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B14]"
        >
          <IntentLogo height={20} className="sm:hidden" />
          <IntentLogo height={23} className="hidden sm:block" />
        </a>

        {/* Right Dual-Button Group */}
        <div className="flex items-center pr-0.5 sm:pr-1">
          {/* Sign up Button */}
          <a
            href="https://panel.web.int.yt/authentication/sign-up"
            onClick={onSignUpClick}
            className="h-[42px] sm:h-[50px] px-3.5 sm:px-7 rounded-l-[21px] sm:rounded-l-[25px] bg-[#21386C] hover:bg-[#284485] active:bg-[#1a2d57] text-white flex items-center justify-center font-bold text-[14px] sm:text-[18px] tracking-tight transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[#080B14] focus-visible:z-10"
          >
            <span>Sign up</span>
          </a>

          {/* Open Panel Button */}
          <a
            href="https://panel.web.int.yt/dashboard"
            onClick={onOpenPanelClick}
            className="h-[42px] sm:h-[50px] px-3.5 sm:px-7 rounded-r-[21px] sm:rounded-r-[25px] bg-[#2A64E7] hover:bg-[#3974f7] active:bg-[#2052c4] text-white flex items-center justify-center font-bold text-[14px] sm:text-[18px] tracking-tight transition-all duration-150 cursor-pointer shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[#080B14] focus-visible:z-10"
          >
            <span>Open Panel</span>
          </a>
        </div>
      </div>
    </header>
  );
};
