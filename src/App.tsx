import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import ApplyModal from './components/ApplyModal';

// Pages
import Home from './components/Home';
import About from './components/About';
import Programmes from './components/Programmes';
import Contact from './components/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [applyModalOpen, setApplyModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  // Apply dark mode class to HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Simulate initial loading sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Handle page transitions smoothly with scroll
  const handlePageChange = (pageId: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(pageId);
      window.scrollTo(0, 0);
      setIsLoading(false);
    }, 600); // smooth duration matching loader fadeout
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={handlePageChange} onOpenApplyModal={() => setApplyModalOpen(true)} />;
      case 'about':
        return <About />;
      case 'programmes':
        return <Programmes onOpenApplyModal={() => setApplyModalOpen(true)} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onPageChange={handlePageChange} onOpenApplyModal={() => setApplyModalOpen(true)} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative transition-colors duration-300">
      {/* 1. Page-to-Page and App Launch Loading Screen */}
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>

      {/* 2. Primary Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onOpenApplyModal={() => setApplyModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* 3. Main Content Container with Elegant Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Global Page Footer */}
      <Footer
        onPageChange={handlePageChange}
        onOpenApplyModal={() => setApplyModalOpen(true)}
      />

      {/* 5. Floating Action Utilities */}
      <ScrollToTop />

      {/* 6. Modal Portals */}
      <ApplyModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
      />
    </div>
  );
}
