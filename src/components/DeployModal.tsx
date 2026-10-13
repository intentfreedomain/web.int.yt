import React, { useState, useEffect, useRef } from 'react';
import { ArrowRightIcon } from './icons/CardIcons';

interface DeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeployModal: React.FC<DeployModalProps> = ({ isOpen, onClose }) => {
  const [siteName, setSiteName] = useState('My Portfolio');
  const [subdomain, setSubdomain] = useState('my-portfolio');
  const [repoUrl, setRepoUrl] = useState('https://github.com/tastejs/todomvc');
  const [branch, setBranch] = useState('main');
  const [buildCommand, setBuildCommand] = useState('npm run build');
  const [publishDir, setPublishDir] = useState('dist');
  
  const [deploying, setDeploying] = useState(false);
  const [deployProgress, setDeployProgress] = useState(0);
  const [deployLogs, setDeployLogs] = useState<string[]>([]);
  const [deployFinished, setDeployFinished] = useState(false);

  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
  };

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      clearAllTimeouts();
    };
  }, []);

  // Reset or cancel when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      clearAllTimeouts();
      setDeploying(false);
      setDeployProgress(0);
      setDeployLogs([]);
      setDeployFinished(false);
    }
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleStartDeploy = (e: React.FormEvent) => {
    e.preventDefault();
    clearAllTimeouts();
    setDeploying(true);
    setDeployProgress(10);
    setDeployLogs(['[demo] Initializing isolated sandboxed worker...']);

    const t1 = setTimeout(() => {
      setDeployProgress(35);
      setDeployLogs((prev) => [...prev, `[git] Cloning ${repoUrl} (branch: ${branch})...`]);
    }, 700);

    const t2 = setTimeout(() => {
      setDeployProgress(65);
      setDeployLogs((prev) => [...prev, `[build] Running command: "${buildCommand}"...`, `[dist] Output directory detected: ./${publishDir}`]);
    }, 1500);

    const t3 = setTimeout(() => {
      setDeployProgress(90);
      setDeployLogs((prev) => [...prev, `[edge] Syncing assets to global edge network...`, `[ssl] Automatic SSL certificate provisioned.`]);
    }, 2300);

    const t4 = setTimeout(() => {
      setDeployProgress(100);
      setDeployLogs((prev) => [...prev, `[release] Atomic symlink switched. Simulated deployment successful! 🚀`]);
      setDeployFinished(true);
    }, 3100);

    timeoutsRef.current.push(t1, t2, t3, t4);
  };

  const handleReset = () => {
    clearAllTimeouts();
    setDeploying(false);
    setDeployProgress(0);
    setDeployLogs([]);
    setDeployFinished(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="deploy-modal-title"
        className="w-full max-w-[680px] max-h-[90vh] overflow-y-auto bg-[#0C1226] border border-white/15 rounded-[24px] shadow-2xl p-6 sm:p-8 text-white relative focus:outline-none"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close dialog"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          ✕
        </button>

        <h3 id="deploy-modal-title" className="text-[24px] font-bold text-white mb-2">
          Deploy a New Static Website <span className="text-[14px] font-normal text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20 ml-2">Interactive Demo</span>
        </h3>
        <p className="text-[14px] text-white/60 mb-6">
          Connect your repository and Intent Web builds, optimizes, and serves your site instantly. Real deployments run via{' '}
          <a
            href="https://panel.web.int.yt"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:underline"
          >
            panel.web.int.yt
          </a>
          .
        </p>

        {!deploying ? (
          <form onSubmit={handleStartDeploy} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="deploy-site-name" className="block text-[12px] font-bold text-white/80 uppercase tracking-wider mb-1">
                  Site Name *
                </label>
                <input
                  id="deploy-site-name"
                  type="text"
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#080d1c] border border-white/15 text-white text-[14px] focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="e.g. My Portfolio"
                  required
                />
                <span className="text-[11px] text-white/40 mt-1 block">Friendly label for your site</span>
              </div>

              <div>
                <label htmlFor="deploy-subdomain" className="block text-[12px] font-bold text-white/80 uppercase tracking-wider mb-1">
                  Subdomain *
                </label>
                <input
                  id="deploy-subdomain"
                  type="text"
                  value={subdomain}
                  onChange={(e) => setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#080d1c] border border-white/15 text-white text-[14px] focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="e.g. my-portfolio"
                  required
                />
                <span className="text-[11px] text-blue-400 mt-1 block truncate">
                  Target URL: https://{subdomain || 'your-site'}.web.int.yt
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="deploy-repo-url" className="block text-[12px] font-bold text-white/80 uppercase tracking-wider mb-1">
                Git Repository URL *
              </label>
              <input
                id="deploy-repo-url"
                type="text"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-[#080d1c] border border-white/15 text-white text-[14px] focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="https://github.com/username/repository"
                required
              />
              <span className="text-[11px] text-white/40 mt-1 block">Public or private GitHub repository</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="deploy-branch" className="block text-[12px] font-bold text-white/80 uppercase tracking-wider mb-1">
                  Branch *
                </label>
                <input
                  id="deploy-branch"
                  type="text"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#080d1c] border border-white/15 text-white text-[14px] focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="deploy-build-command" className="block text-[12px] font-bold text-white/80 uppercase tracking-wider mb-1">
                  Build Command
                </label>
                <input
                  id="deploy-build-command"
                  type="text"
                  value={buildCommand}
                  onChange={(e) => setBuildCommand(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#080d1c] border border-white/15 text-white text-[14px] focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="e.g. npm run build"
                />
              </div>

              <div>
                <label htmlFor="deploy-publish-dir" className="block text-[12px] font-bold text-white/80 uppercase tracking-wider mb-1">
                  Publish Directory *
                </label>
                <input
                  id="deploy-publish-dir"
                  type="text"
                  value={publishDir}
                  onChange={(e) => setPublishDir(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#080d1c] border border-white/15 text-white text-[14px] focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="e.g. dist or build"
                  required
                />
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 text-[14px] font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-[#2A64E7] hover:bg-[#3873f7] active:bg-[#2052c4] text-white text-[14px] font-semibold transition-colors shadow-md cursor-pointer flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Run Simulated Deploy</span>
                <ArrowRightIcon size={16} />
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            {/* Progress bar */}
            <div>
              <div className="flex justify-between text-[13px] text-white/70 mb-1.5 font-mono">
                <span>{deployFinished ? 'Simulated Deploy Complete' : 'Simulating deployment to edge network...'}</span>
                <span>{deployProgress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 rounded-full"
                  style={{ width: `${deployProgress}%` }}
                />
              </div>
            </div>

            {/* Simulated Live Build Terminal */}
            <div className="p-4 rounded-xl bg-[#05070e] border border-white/10 font-mono text-[13px] text-white/80 space-y-1.5 max-h-[180px] overflow-y-auto">
              {deployLogs.map((log, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-blue-400 select-none">›</span>
                  <span className={log.includes('successful') ? 'text-green-400 font-bold' : ''}>{log}</span>
                </div>
              ))}
            </div>

            {deployFinished && (
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div>
                  <div className="text-[12px] text-blue-300 font-medium">Demo simulation finished:</div>
                  <div className="text-[14px] text-white/80 mt-0.5">
                    Ready to deploy for real? Head to{' '}
                    <a
                      href="https://panel.web.int.yt/authentication/sign-up"
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:underline font-semibold"
                    >
                      panel.web.int.yt
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    Run Demo Again
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
