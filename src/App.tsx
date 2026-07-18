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
    <div className="flex flex-col min-h-screen bg-slate-50 relative">
      {/* 1. Page-to-Page and App Launch Loading Screen */}
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>

      {/* 2. Primary Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onOpenApplyModal={() => setApplyModalOpen(true)}
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
