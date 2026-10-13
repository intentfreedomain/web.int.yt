import React, { useState, useEffect, useRef } from 'react';
import { SignUpIcon, OpenPanelIcon } from './icons/HeaderIcons';

interface AuthModalProps {
  isOpen: boolean;
  mode: 'signup' | 'login';
  onClose: () => void;
  onSwitchMode: (mode: 'signup' | 'login') => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  mode,
  onClose,
  onSwitchMode
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear pending timers on close or unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  // Reset state when opening/closing
  useEffect(() => {
    if (!isOpen) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setSubmitted(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
        className="w-full max-w-[440px] bg-[#0C1226] border border-white/15 rounded-[24px] shadow-2xl p-6 sm:p-8 text-white relative focus:outline-none"
      >
        <button
          onClick={onClose}
          type="button"
          aria-label="Close dialog"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          ✕
        </button>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            {mode === 'signup' ? <SignUpIcon size={20} /> : <OpenPanelIcon size={20} />}
          </div>
          <h3 id="auth-modal-title" className="text-[22px] font-bold text-white">
            {mode === 'signup' ? 'Create an Account' : 'Open Control Panel'}
          </h3>
        </div>

        <p className="text-[14px] text-white/60 mb-6">
          {mode === 'signup'
            ? 'Sign up to deploy static sites to the global edge network in seconds.'
            : 'Access your connected repositories, subdomains, and real-time logs.'}
        </p>

        {submitted ? (
          <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/30 text-center space-y-2">
            <div className="text-2xl">✨</div>
            <div className="text-[16px] font-bold text-white">
              {mode === 'signup' ? '(Demo) Account preview created' : '(Demo) Simulated sign-in'}
            </div>
            <div className="text-[13px] text-white/60">
              Demo simulation: Directing to panel at{' '}
              <a
                href={mode === 'signup' ? 'https://panel.web.int.yt/authentication/sign-up' : 'https://panel.web.int.yt/dashboard'}
                className="text-cyan-400 underline"
              >
                panel.web.int.yt
              </a>
              ...
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="auth-email" className="block text-[12px] font-bold text-white/80 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                id="auth-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-[#080d1c] border border-white/15 text-white text-[14px] focus:outline-none focus:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500 transition-colors"
                placeholder="developer@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="auth-password" className="block text-[12px] font-bold text-white/80 uppercase tracking-wider mb-1">
                Password
              </label>
              <input
                id="auth-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-[#080d1c] border border-white/15 text-white text-[14px] focus:outline-none focus:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500 transition-colors"
                placeholder="••••••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#2A64E7] hover:bg-[#3873f7] active:bg-[#2052c4] text-white font-semibold text-[15px] transition-colors shadow-md mt-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              {mode === 'signup' ? 'Create Account (Demo)' : 'Sign In (Demo)'}
            </button>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => onSwitchMode(mode === 'signup' ? 'login' : 'signup')}
                className="text-[13px] text-blue-400 hover:text-blue-300 underline cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                {mode === 'signup'
                  ? 'Already have an account? Open Panel'
                  : "Don't have an account yet? Sign up"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
