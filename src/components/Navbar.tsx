import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onOpenApplyModal: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Navbar({ currentPage, onPageChange, onOpenApplyModal, theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programmes', label: 'Programmes' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="university-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-panel shadow-md py-3 bg-white/80 dark:bg-slate-900/85 text-slate-900 dark:text-white'
            : 'bg-transparent py-5 text-slate-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Brand */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group text-left"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 dark:bg-brand-500 text-white font-extrabold text-2xl shadow-[0_4px_10px_rgba(37,99,235,0.3)] group-hover:scale-105 transition-transform duration-300 animate-pulse">
              V
            </div>
            <div>
              <span className={`block font-sans font-bold tracking-tight text-lg leading-tight transition-colors duration-300 ${scrolled ? 'text-slate-900 dark:text-white' : 'text-slate-900 md:text-white dark:text-white'}`}>
                VENITE
              </span>
              <span className={`block font-mono text-xs tracking-widest uppercase font-semibold transition-colors duration-300 ${scrolled ? 'text-brand-600 dark:text-brand-400' : 'text-brand-600 md:text-brand-200 dark:md:text-brand-300 dark:text-brand-400'}`}>
                UNIVERSITY
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav id="desktop-navigation" className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  id={`nav-item-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative cursor-pointer ${
                    isActive
                      ? scrolled
                        ? 'text-brand-600 dark:text-brand-400 font-semibold'
                        : 'text-brand-300 md:text-white font-semibold'
                      : scrolled
                      ? 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/40'
                      : 'text-slate-700 md:text-slate-200 dark:text-slate-300 hover:text-slate-900 md:hover:text-white md:hover:bg-white/10 dark:md:hover:bg-slate-800/30'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${
                        scrolled ? 'bg-brand-600 dark:bg-brand-400' : 'bg-brand-500 md:bg-white'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Apply Button / Theme Toggle / Hamburger */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Theme Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={onToggleTheme}
              className={`p-2.5 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-center ${
                scrolled
                  ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/30 md:text-slate-200 md:hover:text-white md:hover:bg-white/10 dark:md:hover:bg-slate-800/30'
              }`}
              aria-label="Toggle theme mode"
            >
              <LucideIcon name={theme === 'dark' ? 'Sun' : 'Moon'} size={18} />
            </button>

            <button
              id="header-apply-btn"
              onClick={onOpenApplyModal}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 dark:bg-brand-600 dark:hover:bg-brand-500 shadow-[0_4px_14px_rgba(37,99,235,0.3)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.5)] cursor-pointer hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Apply Now
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl md:hidden cursor-pointer ${
                scrolled
                  ? 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  : 'text-slate-800 md:text-white hover:bg-white/10 dark:text-slate-200'
              }`}
              aria-label="Toggle navigation menu"
            >
              <LucideIcon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            />

            {/* Content Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="absolute top-0 right-0 bottom-0 w-80 bg-white dark:bg-slate-900 shadow-2xl p-6 flex flex-col justify-between border-l border-slate-100 dark:border-slate-800"
            >
              <div className="mt-16">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-sans font-bold tracking-widest text-slate-400 dark:text-slate-500 text-xs uppercase">
                    Menu Navigation
                  </h3>
                  {/* Theme toggle in mobile menu */}
                  <button
                    onClick={onToggleTheme}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  >
                    <LucideIcon name={theme === 'dark' ? 'Sun' : 'Moon'} size={18} />
                  </button>
                </div>
                <div className="space-y-3">
                  {navItems.map((item) => {
                    const isActive = currentPage === item.id;
                    return (
                      <button
                        id={`mobile-nav-${item.id}`}
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl font-medium flex items-center justify-between cursor-pointer ${
                          isActive
                            ? 'bg-brand-50 dark:bg-brand-950/30 text-brand-700 dark:text-brand-300 font-semibold shadow-inner'
                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <LucideIcon name="Check" className="text-brand-600 dark:text-brand-400" size={18} />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4">
                <button
                  id="mobile-apply-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenApplyModal();
                  }}
                  className="w-full py-3.5 rounded-xl font-semibold text-center text-white bg-brand-600 hover:bg-brand-700 shadow-[0_4px_14px_rgba(37,99,235,0.3)] cursor-pointer"
                >
                  Apply Now
                </button>
                <p className="text-center font-mono text-[10px] text-slate-400 uppercase">
                  Venite University © 2026
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
