import React, { useState } from 'react';
import LucideIcon from './LucideIcon';

interface FooterProps {
  onPageChange: (page: string) => void;
  onOpenApplyModal: () => void;
}

export default function Footer({ onPageChange, onOpenApplyModal }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Email address is required');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    setError('');
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer id="university-footer" className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-white font-extrabold text-xl shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              V
            </div>
            <div>
              <span className="block font-sans font-bold tracking-tight text-white text-base leading-tight">
                VENITE
              </span>
              <span className="block font-mono text-[10px] tracking-widest text-brand-400 font-semibold">
                UNIVERSITY
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Venite University is dedicated to fostering global leaders, breakthrough scientific research, and academic excellence in an inclusive and innovative collegiate atmosphere.
          </p>
          <div className="flex space-x-3 pt-2">
            {['Facebook', 'Instagram', 'Linkedin', 'Twitter', 'Youtube'].map((soc) => (
              <a
                id={`footer-social-${soc.toLowerCase()}`}
                key={soc}
                href="#"
                className="h-9 w-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-700 hover:border-brand-700 transition-all duration-300"
                aria-label={`Follow us on ${soc}`}
              >
                <LucideIcon name={soc} size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-white mb-6 border-l-2 border-brand-500 pl-3">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <button
                id="footer-link-home"
                onClick={() => onPageChange('home')}
                className="hover:text-white transition-colors cursor-pointer text-slate-400 text-left"
              >
                University Home
              </button>
            </li>
            <li>
              <button
                id="footer-link-about"
                onClick={() => onPageChange('about')}
                className="hover:text-white transition-colors cursor-pointer text-slate-400 text-left"
              >
                About Venite
              </button>
            </li>
            <li>
              <button
                id="footer-link-programmes"
                onClick={() => onPageChange('programmes')}
                className="hover:text-white transition-colors cursor-pointer text-slate-400 text-left"
              >
                Academic Programmes
              </button>
            </li>
            <li>
              <button
                id="footer-link-calendar"
                onClick={() => onPageChange('calendar')}
                className="hover:text-white transition-colors cursor-pointer text-slate-400 text-left"
              >
                Academic Calendar
              </button>
            </li>
            <li>
              <button
                id="footer-link-contact"
                onClick={() => onPageChange('contact')}
                className="hover:text-white transition-colors cursor-pointer text-slate-400 text-left"
              >
                Contact Admissions
              </button>
            </li>
            <li>
              <button
                id="footer-link-apply"
                onClick={onOpenApplyModal}
                className="text-brand-400 hover:text-brand-300 font-semibold transition-colors cursor-pointer text-left"
              >
                Apply Online Now
              </button>
            </li>
          </ul>
        </div>

        {/* Academic Divisions */}
        <div>
          <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-white mb-6 border-l-2 border-brand-500 pl-3">
            Academic Divisions
          </h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="hover:text-white transition-colors cursor-default">Faculty of Medicine</li>
            <li className="hover:text-white transition-colors cursor-default">Faculty of Engineering</li>
            <li className="hover:text-white transition-colors cursor-default">Faculty of Computing & IT</li>
            <li className="hover:text-white transition-colors cursor-default">Faculty of Business & Law</li>
            <li className="hover:text-white transition-colors cursor-default">Faculty of Arts & Humanities</li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-white mb-6 border-l-2 border-brand-500 pl-3">
            Newsletter
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Subscribe to receive academic newsletters, research breakthrough papers, and seasonal admission guides directly.
          </p>
          <form id="newsletter-form" onSubmit={handleSubscribe} className="space-y-2">
            <div className="relative">
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="university@example.edu"
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border ${
                  error ? 'border-red-500' : 'border-slate-800'
                } focus:border-brand-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-all`}
              />
              <button
                id="newsletter-submit-btn"
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-brand-700 hover:bg-brand-600 text-white font-semibold text-xs flex items-center justify-center transition-all cursor-pointer"
                aria-label="Subscribe"
              >
                Join
              </button>
            </div>
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            {subscribed && (
              <p className="text-emerald-400 text-xs font-medium flex items-center space-x-1">
                <LucideIcon name="Check" size={12} />
                <span>Successfully subscribed!</span>
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <p className="font-sans">
          © {new Date().getFullYear()} Venite University. All Rights Reserved.
        </p>
        <div className="flex space-x-6 mt-4 sm:mt-0 font-sans">
          <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Admissions Charter</a>
        </div>
      </div>
    </footer>
  );
}
