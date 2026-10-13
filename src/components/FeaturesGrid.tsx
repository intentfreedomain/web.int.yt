import React from 'react';
import {
  GitDeploysIcon,
  SubdomainsIcon,
  CustomDomainsIcon,
  RollbackIcon,
  BuildLogsIcon,
  SandboxedBuildsIcon
} from './icons/CardIcons';

interface FeatureCardData {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  cornerClasses: string;
}

const features: FeatureCardData[] = [
  {
    id: 1,
    title: 'Automated Git Deploys',
    description: 'Every push to your connected branch triggers a build automatically. No webhooks to wire up by hand.',
    icon: <GitDeploysIcon size={18} className="text-[#6C8BC2]" />,
    cornerClasses: 'lg:rounded-tl-[40px] lg:rounded-tr-none lg:rounded-bl-none lg:rounded-br-none'
  },
  {
    id: 2,
    title: 'Instant Subdomains',
    description: 'Every site gets a free subdomain under web.int.yt the moment it deploys, with zero manual DNS setup.',
    icon: <SubdomainsIcon size={18} className="text-[#6C8BC2]" />,
    cornerClasses: 'lg:rounded-none'
  },
  {
    id: 3,
    title: 'Custom domains and SSL',
    description: 'Bring your own domain, verify it with a DNS check, and get a certificate provisioned automatically.',
    icon: <CustomDomainsIcon size={18} className="text-[#6C8BC2]" />,
    cornerClasses: 'lg:rounded-tr-[40px] lg:rounded-tl-none lg:rounded-bl-none lg:rounded-br-none'
  },
  {
    id: 4,
    title: 'Atomic releases and rollback',
    description: 'Releases are immutable and swapped in with an atomic symlink switch. Revert to any past build in one click.',
    icon: <RollbackIcon size={18} className="text-[#6C8BC2]" />,
    cornerClasses: 'lg:rounded-bl-[40px] lg:rounded-tl-none lg:rounded-tr-none lg:rounded-br-none'
  },
  {
    id: 5,
    title: 'Real-time build logs',
    description: 'Watch each step of your build as it runs, with commit hashes, authors, and errors surfaced immediately.',
    icon: <BuildLogsIcon size={18} className="text-[#6C8BC2]" />,
    cornerClasses: 'lg:rounded-none'
  },
  {
    id: 6,
    title: 'Sandboxed builds',
    description: 'Builds run as an unprivileged user with aggressive timeouts, path sanitization, and encrypted tokens.',
    icon: <SandboxedBuildsIcon size={18} className="text-[#6C8BC2]" />,
    cornerClasses: 'lg:rounded-br-[40px] lg:rounded-tl-none lg:rounded-tr-none lg:rounded-bl-none'
  }
];

export const FeaturesGrid: React.FC = () => {
  return (
    <section className="mt-[110px] w-full flex justify-center px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-[1200px]">
        {/* Headline */}
        <h2 className="text-[44px] sm:text-[54px] lg:text-[64px] font-bold text-white tracking-[-0.03em] leading-[1.12] mb-4">
          Everything a static site needs,
          <br />
          nothing <span className="font-extrabold text-white">it doesn't.</span>
        </h2>

        {/* Subheading */}
        <p className="text-[18px] sm:text-[20px] font-normal text-white/90 leading-[1.5] mb-12 max-w-[800px]">
          No separate add-ons for the essentials — domains, SSL, and rollback ship with every plan.
        </p>

        {/* 3x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {features.map((item) => (
            <div
              key={item.id}
              className={`
                bg-[#0C0622] border border-[#676767] p-6 min-h-[206px] flex flex-col justify-between
                card-shadow transition-all duration-300 hover:border-blue-500/50 hover:shadow-blue-900/20
                rounded-[20px] ${item.cornerClasses} group relative overflow-hidden
              `}
            >
              {/* Subtle card glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors pointer-events-none" />

              <div>
                {/* Asymmetric Badge Icon (16px 5px 5px 5px) */}
                <div className="w-[37px] h-[37px] rounded-tl-[16px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] bg-[#122245] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>

                {/* Feature Title */}
                <h3 className="text-white text-[16px] font-bold tracking-tight mb-2">
                  {item.title}
                </h3>

                {/* Feature Description */}
                <p className="text-[#96A1B6] text-[16px] font-medium leading-[1.45] tracking-tight">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
