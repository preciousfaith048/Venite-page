import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';
import Counter from './Counter';
import { stats, faculties, campusLife, testimonials, latestNews } from '../data';

interface HomeProps {
  onPageChange: (page: string) => void;
  onOpenApplyModal: () => void;
}

export default function Home({ onPageChange, onOpenApplyModal }: HomeProps) {
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto slide campus life carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % campusLife.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {/* 1. HERO SECTION */}
      <section
        id="home-hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20"
      >
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/venite_hero_campus_1784391382344.jpg"
            alt="Venite University Campus"
            className="w-full h-full object-cover opacity-35 object-center"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback if image isn't available
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1920';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-950/40" />
        </div>

        {/* Animated Floating Shapes */}
        <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-brand-500/10 blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 40, 0],
              rotate: [360, 0, 360],
              scale: [1, 0.9, 1],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-500/15 border border-brand-500/30 font-mono text-xs text-brand-300 tracking-widest uppercase font-semibold">
              <LucideIcon name="Award" className="h-4.5 w-4.5" />
              <span>Accredited World-Class Collegiate Institution</span>
            </span>

            <h1 className="font-sans font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-100 to-white drop-shadow-[0_4px_12px_rgba(37,99,235,0.35)]">
                Venite University
              </span>
            </h1>

            <p className="font-sans text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
              Inspiring Innovation, Leadership, and Excellence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <button
                id="hero-explore-btn"
                onClick={() => onPageChange('programmes')}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-bold text-white bg-brand-600 hover:bg-brand-500 border border-brand-400/30 hover:border-brand-300/50 shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.5)] cursor-pointer flex items-center justify-center space-x-2.5 transition-all duration-300 active:scale-98"
              >
                <span>Explore Programmes</span>
                <LucideIcon name="ArrowRight" size={18} />
              </button>
              <button
                id="hero-apply-btn"
                onClick={onOpenApplyModal}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-lg cursor-pointer transition-all duration-300 active:scale-98"
              >
                Apply Now
              </button>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7, y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center space-y-1"
          >
            <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
              Scroll to explore
            </span>
            <div className="w-5 h-8 border-2 border-slate-500 rounded-full flex justify-center pt-1.5">
              <div className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT PREVIEW & STATS SECTION */}
      <section id="about-preview" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Visual Frame */}
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs font-semibold tracking-widest text-brand-600 uppercase block">
                Why Choose Venite
              </span>
              <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900 leading-tight">
                Pioneering the Next Century of Leadership
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Venite University stands at the forefront of global education, combining rigorous academic paradigms with hands-on, real-world application in state-of-the-art incubation sandboxes.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  'Award-Winning Global Academic Faculty',
                  'Vibrant Student Innovation and Startup Incubator',
                  'World-Class Research Grants and Labs',
                  'Guaranteed Global Career Placements',
                ].map((item) => (
                  <div key={item} className="flex items-start space-x-3 text-slate-700">
                    <div className="mt-1 h-5 w-5 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                      <LucideIcon name="Check" size={14} />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <button
                id="about-learn-more-btn"
                onClick={() => onPageChange('about')}
                className="mt-6 inline-flex items-center space-x-2 text-brand-700 hover:text-brand-800 font-bold transition-all duration-300 cursor-pointer group"
              >
                <span>Read Our Mission & Vision</span>
                <LucideIcon name="ArrowRight" className="h-4.5 w-4.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Statistics Dashboard */}
            <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-brand-50/50 blur-3xl pointer-events-none" />
              <div className="grid grid-cols-2 gap-8 md:gap-12 relative z-10">
                {stats.map((stat) => (
                  <div key={stat.id} className="text-center md:text-left">
                    <div className="font-sans font-extrabold text-4xl md:text-5xl text-brand-800 tracking-tight flex justify-center md:justify-start items-baseline">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <h3 className="font-sans text-sm md:text-base font-bold text-slate-800 mt-2">
                      {stat.label}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Academic audit certified 2026.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED FACULTIES */}
      <section id="featured-faculties" className="py-24 bg-slate-50 border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs font-semibold tracking-widest text-brand-600 uppercase block">
              Academic Divisions
            </span>
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900 mt-2">
              Featured Faculties
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-3">
              Explore our core colleges led by industry visionaries and decorated research fellows. Choose your path to greatness today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculties.map((fac) => (
              <div
                id={`faculty-card-${fac.id}`}
                key={fac.id}
                className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                    <LucideIcon name={fac.iconName} size={24} />
                  </div>
                  <h3 className="font-sans font-bold text-xl text-slate-900">
                    {fac.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {fac.description}
                  </p>
                </div>
                <div className="pt-6">
                  <button
                    id={`faculty-learn-more-${fac.id}`}
                    onClick={() => onPageChange('programmes')}
                    className="inline-flex items-center space-x-1 text-sm font-semibold text-brand-700 hover:text-brand-800 transition-colors group cursor-pointer"
                  >
                    <span>View Courses</span>
                    <LucideIcon name="ArrowRight" size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CAMPUS LIFE */}
      <section id="campus-life" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs font-semibold tracking-widest text-brand-600 uppercase block">
              Collegiate Ecosystem
            </span>
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900 mt-2">
              Vibrant Campus Life
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-3">
              Student activities, competitive athletics, advanced research centers, and cozy dorm rooms combine to create an outstanding university environment.
            </p>
          </div>

          {/* Carousel Layout */}
          <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[450px]">
              {/* Slide Image */}
              <div className="lg:col-span-7 relative h-64 lg:h-auto overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={campusLife[currentSlide].imageUrl}
                    alt={campusLife[currentSlide].title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent" />
              </div>

              {/* Slide Content */}
              <div className="lg:col-span-5 p-8 md:p-12 text-white flex flex-col justify-between relative z-10">
                <div className="space-y-4">
                  <span className="font-mono text-[10px] tracking-widest text-brand-400 uppercase font-semibold">
                    Explore Our Campus
                  </span>
                  <h3 className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-white leading-tight">
                    {campusLife[currentSlide].title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {campusLife[currentSlide].description}
                  </p>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center justify-between pt-8 border-t border-slate-800/80">
                  {/* Dot Indicators */}
                  <div className="flex space-x-2">
                    {campusLife.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                          idx === currentSlide ? 'w-8 bg-brand-500' : 'w-2.5 bg-slate-700 hover:bg-slate-600'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Manual Arrow Controls */}
                  <div className="flex space-x-2">
                    <button
                      onClick={() =>
                        setCurrentSlide((prev) => (prev - 1 + campusLife.length) % campusLife.length)
                      }
                      className="h-10 w-10 rounded-full border border-slate-800 hover:border-slate-700 bg-slate-950 hover:bg-slate-900 text-white flex items-center justify-center cursor-pointer transition-all active:scale-95"
                      aria-label="Previous slide"
                    >
                      <LucideIcon name="ChevronLeft" size={20} />
                    </button>
                    <button
                      onClick={() => setCurrentSlide((prev) => (prev + 1) % campusLife.length)}
                      className="h-10 w-10 rounded-full border border-slate-800 hover:border-slate-700 bg-slate-950 hover:bg-slate-900 text-white flex items-center justify-center cursor-pointer transition-all active:scale-95"
                      aria-label="Next slide"
                    >
                      <LucideIcon name="ChevronRight" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-slate-50 border-y border-slate-100 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="font-mono text-xs font-semibold tracking-widest text-brand-600 uppercase block">
            Student Perspectives
          </span>
          <h2 className="font-sans font-bold text-3xl text-slate-900 mt-2">
            What Our Students Say
          </h2>

          <div className="mt-12 bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm relative">
            <span className="absolute top-6 left-6 font-serif text-slate-100 text-8xl pointer-events-none select-none">
              “
            </span>
            <div className="min-h-[180px] relative z-10 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <p className="text-slate-700 text-base md:text-lg md:leading-relaxed font-medium italic">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={testimonials[currentTestimonial].avatarUrl}
                      alt={testimonials[currentTestimonial].name}
                      className="h-14 w-14 rounded-full object-cover border-2 border-brand-500 shadow-md"
                      referrerPolicy="no-referrer"
                    />
                    <h4 className="font-sans font-bold text-slate-900 mt-3">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="font-mono text-xs text-brand-600 mt-1 uppercase font-semibold">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Testimonial Nav dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentTestimonial ? 'w-8 bg-brand-500' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. LATEST NEWS */}
      <section id="latest-news" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16">
            <div>
              <span className="font-mono text-xs font-semibold tracking-widest text-brand-600 uppercase block">
                University Bulletins
              </span>
              <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900 mt-2">
                Latest News & Bulletins
              </h2>
            </div>
            <button
              id="all-news-btn"
              onClick={() => onPageChange('about')}
              className="mt-4 sm:mt-0 inline-flex items-center space-x-2 text-brand-700 hover:text-brand-800 font-bold group cursor-pointer"
            >
              <span>View University Blog</span>
              <LucideIcon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <article
                id={`news-card-${news.id}`}
                key={news.id}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 py-1.5 px-3 rounded-lg bg-slate-900/80 backdrop-blur-sm font-mono text-[10px] text-brand-400 font-bold uppercase tracking-wider">
                    {news.category}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center text-slate-400 font-mono text-[11px] space-x-2">
                    <LucideIcon name="Calendar" size={12} />
                    <span>{news.date}</span>
                  </div>
                  <h3 className="font-sans font-bold text-lg text-slate-900 group-hover:text-brand-700 transition-colors line-clamp-2 leading-tight">
                    {news.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {news.excerpt}
                  </p>
                  <div className="pt-2">
                    <span className="text-sm font-semibold text-brand-700 group-hover:text-brand-800 inline-flex items-center space-x-1 cursor-pointer">
                      <span>Read Full Article</span>
                      <LucideIcon name="ArrowRight" size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section id="home-cta" className="py-20 bg-slate-950 relative overflow-hidden">
        {/* Abstract vector backgrounds */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-6">
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
            Join Venite University Today
          </h2>
          <p className="text-slate-300 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Ready to shape the future? Access world-class faculties, active startup incubators, scholarship grants, and accelerate your global career today.
          </p>
          <div className="pt-4">
            <button
              id="cta-apply-btn"
              onClick={onOpenApplyModal}
              className="px-8 py-4 rounded-2xl text-base font-bold text-white bg-brand-700 hover:bg-brand-600 shadow-[0_4px_20px_rgba(3,105,161,0.5)] hover:shadow-[0_8px_30px_rgba(3,105,161,0.7)] cursor-pointer hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Begin Application Process
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
