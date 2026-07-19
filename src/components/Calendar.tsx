import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar as CalendarIcon, 
  Search, 
  Download, 
  Share2, 
  CheckCircle, 
  AlertCircle, 
  Mail, 
  Clock, 
  Award, 
  BookOpen, 
  Check, 
  ChevronDown, 
  FileText, 
  CalendarCheck 
} from 'lucide-react';
import { calendarEvents } from '../data';
import { CalendarEvent } from '../types';

export default function Calendar() {
  const [selectedSemester, setSelectedSemester] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedEventId, setExpandedEventId] = useState<string | null>(null);

  // States for interactive integrations
  const [exportingGoogle, setExportingGoogle] = useState<boolean>(false);
  const [googleStep, setGoogleStep] = useState<string>('');
  const [googleSuccess, setGoogleSuccess] = useState<boolean>(false);

  const [downloadingPdf, setDownloadingPdf] = useState<boolean>(false);
  const [pdfProgress, setPdfProgress] = useState<number>(0);
  const [pdfSuccess, setPdfSuccess] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [subscribedCategories, setSubscribedCategories] = useState<string[]>(['academic']);
  const [subscribeSuccess, setSubscribeSuccess] = useState<boolean>(false);
  const [subscribeError, setSubscribeError] = useState<string>('');

  // Filtering Logic
  const filteredEvents = calendarEvents.filter((event) => {
    const matchesSemester = selectedSemester === 'all' || event.semester === selectedSemester;
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.date.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSemester && matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'All Categories', color: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300' },
    { id: 'academic', label: 'Academic Lectures', color: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30' },
    { id: 'exams', label: 'Exams & Evaluations', color: 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-100 dark:border-rose-900/30' },
    { id: 'admissions', label: 'Admissions & Registration', color: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30' },
    { id: 'holidays', label: 'Holidays & Recesses', color: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-100 dark:border-amber-900/30' },
  ];

  const semesters = [
    { id: 'all', label: 'All Semesters' },
    { id: 'fall', label: 'Fall Semester 2026' },
    { id: 'spring', label: 'Spring Semester 2027' },
    { id: 'summer', label: 'Summer Session 2027' },
  ];

  const toggleExpandEvent = (id: string) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };

  // Google Calendar Integration Mock
  const handleExportGoogle = () => {
    setExportingGoogle(true);
    setGoogleSuccess(false);
    
    const steps = [
      'Establishing secure token handshake...',
      'Formatting Venite academic feeds into iCal specification...',
      'Injecting 20 academic events to your Google Calendar...',
      'Finalizing calendar synchronization...'
    ];

    let currentStep = 0;
    setGoogleStep(steps[currentStep]);

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setGoogleStep(steps[currentStep]);
      } else {
        clearInterval(interval);
        setExportingGoogle(false);
        setGoogleSuccess(true);
        setTimeout(() => setGoogleSuccess(false), 5000);
      }
    }, 1200);
  };

  // PDF Download Mock
  const handleDownloadPdf = () => {
    setDownloadingPdf(true);
    setPdfSuccess(false);
    setPdfProgress(0);

    const interval = setInterval(() => {
      setPdfProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloadingPdf(false);
          setPdfSuccess(true);
          setTimeout(() => setPdfSuccess(false), 5000);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  // Alert subscription handling
  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) {
      setSubscribeError('Please input a valid university or personal email address.');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setSubscribeError('Invalid email format. E.g. student@venite.edu');
      return;
    }
    if (subscribedCategories.length === 0) {
      setSubscribeError('Please select at least one notification category.');
      return;
    }

    setSubscribeError('');
    setSubscribeSuccess(true);
    setEmail('');
    setTimeout(() => {
      setSubscribeSuccess(false);
    }, 5000);
  };

  const handleToggleSubCategory = (catId: string) => {
    if (subscribedCategories.includes(catId)) {
      setSubscribedCategories(subscribedCategories.filter(c => c !== catId));
    } else {
      setSubscribedCategories([...subscribedCategories, catId]);
    }
  };

  const getCategoryTheme = (cat: string) => {
    switch (cat) {
      case 'academic':
        return { bg: 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400', tag: 'Academic Lectures', dot: 'bg-indigo-500' };
      case 'exams':
        return { bg: 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-400', tag: 'Exams & evaluations', dot: 'bg-rose-500' };
      case 'admissions':
        return { bg: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400', tag: 'Admissions & Portal', dot: 'bg-emerald-500' };
      case 'holidays':
        return { bg: 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400', tag: 'Holidays & Recess', dot: 'bg-amber-500' };
      default:
        return { bg: 'bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-400', tag: 'General', dot: 'bg-slate-500' };
    }
  };

  return (
    <div className="pt-24 pb-16 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      {/* 1. HERO HEADER */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-brand-900 text-white rounded-b-[2.5rem] shadow-lg">
        {/* Decorative Grid Accents */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-semibold tracking-widest text-brand-300 uppercase block mb-3">
              Academic Blueprint
            </span>
            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-none">
              University Academic Calendar
            </h1>
            <p className="text-brand-100 text-sm md:text-base mt-4 max-w-xl leading-relaxed font-sans">
              Plan your academic year smoothly. Access resumption details, online registrations, examination timelines, convocation events, and official recess sessions for the 2026/2027 collegiate session.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC CONTROLS (SEARCH & TABS & FILTER) */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Calendar Content */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Filter Panel */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-6 transition-colors duration-300">
              {/* Search and Semester Tabs */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="relative flex-grow max-w-md">
                  <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search events, dates, exam schedules..."
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-sm"
                  />
                </div>
                
                {/* PDF & Google Calendar Action shortcuts */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleExportGoogle}
                    disabled={exportingGoogle}
                    className="flex items-center space-x-2 px-4 py-3 bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 hover:bg-brand-100 rounded-xl text-xs font-semibold border border-brand-100 dark:border-brand-900/30 transition-all cursor-pointer disabled:opacity-50"
                  >
                    <CalendarCheck className="h-4 w-4" />
                    <span>Sync to Google</span>
                  </button>

                  <button
                    onClick={handleDownloadPdf}
                    disabled={downloadingPdf}
                    className="flex items-center space-x-2 px-4 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 rounded-xl text-xs font-semibold transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>

              {/* Semester Tabs */}
              <div className="border-b border-slate-100 dark:border-slate-800 pb-2">
                <div className="flex overflow-x-auto space-x-1 scrollbar-hide pb-2">
                  {semesters.map((sem) => (
                    <button
                      key={sem.id}
                      onClick={() => {
                        setSelectedSemester(sem.id);
                        setExpandedEventId(null);
                      }}
                      className={`px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                        selectedSemester === sem.id
                          ? 'bg-brand-600 text-white shadow-sm'
                          : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {sem.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filters */}
              <div className="space-y-2">
                <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Filter by Category
                </span>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setExpandedEventId(null);
                        }}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm border border-slate-900 dark:border-white'
                            : `${cat.color} hover:opacity-85`
                        }`}
                      >
                        {cat.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Simulated Action Handlers */}
            <AnimatePresence>
              {exportingGoogle && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-brand-50 dark:bg-brand-950/20 border border-brand-100 dark:border-brand-900/30 rounded-2xl p-4 flex items-center space-x-3 overflow-hidden"
                >
                  <div className="h-8 w-8 rounded-full border-2 border-brand-500 border-t-transparent animate-spin shrink-0" />
                  <div className="flex-grow">
                    <h5 className="text-xs font-bold text-brand-900 dark:text-brand-300">Synchronizing Calendar...</h5>
                    <p className="text-[11px] text-brand-700 dark:text-brand-400 animate-pulse mt-0.5">{googleStep}</p>
                  </div>
                </motion.div>
              )}

              {googleSuccess && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl p-4 flex items-center space-x-3 overflow-hidden"
                >
                  <CheckCircle className="h-6 w-6 text-emerald-500 shrink-0" />
                  <div>
                    <h5 className="text-xs font-bold text-emerald-950 dark:text-emerald-300">Google Calendar Synced Successfully!</h5>
                    <p className="text-[11px] text-emerald-700 dark:text-emerald-400 mt-0.5">All 20 academic dates have been appended to your personal agenda.</p>
                  </div>
                </motion.div>
              )}

              {downloadingPdf && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 overflow-hidden space-y-2"
                >
                  <div className="flex justify-between text-xs font-bold text-slate-800 dark:text-slate-300">
                    <span>Rendering Official PDF Document...</span>
                    <span>{pdfProgress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-850 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-brand-600 h-full transition-all duration-200" 
                      style={{ width: `${pdfProgress}%` }}
                    />
                  </div>
                </motion.div>
              )}

              {pdfSuccess && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl p-4 flex items-center space-x-3 overflow-hidden"
                >
                  <CheckCircle className="h-6 w-6 text-emerald-500 shrink-0" />
                  <div>
                    <h5 className="text-xs font-bold text-emerald-950 dark:text-emerald-300">PDF Download Complete</h5>
                    <p className="text-[11px] text-emerald-700 dark:text-emerald-400 mt-0.5">Venite_Academic_Calendar_2026_2027.pdf is saved to your downloads directory.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 3. CALENDAR TIMELINE EVENTS LIST */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-sans font-bold text-slate-900 dark:text-white text-lg">
                  Timeline of Dates ({filteredEvents.length} {filteredEvents.length === 1 ? 'Event' : 'Events'})
                </h3>
                <span className="font-mono text-xs text-slate-400 dark:text-slate-500 capitalize">
                  Showing: {selectedSemester === 'all' ? 'Entire Session' : `${selectedSemester} Semester`}
                </span>
              </div>

              {filteredEvents.length === 0 ? (
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-12 text-center space-y-4">
                  <div className="mx-auto h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                    <Search className="h-6 w-6" />
                  </div>
                  <h4 className="font-sans font-bold text-slate-800 dark:text-white text-base">No Matching Dates Located</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs max-w-sm mx-auto leading-relaxed">
                    We couldn't locate any events matching your criteria. Try adjusting your search query, choosing 'All Semesters', or selecting a different category.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredEvents.map((event) => {
                    const theme = getCategoryTheme(event.category);
                    const isExpanded = expandedEventId === event.id;

                    return (
                      <div
                        key={event.id}
                        className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-slate-200 dark:hover:border-slate-700/80 transition-all shadow-xs"
                      >
                        <button
                          onClick={() => toggleExpandEvent(event.id)}
                          className="w-full text-left p-5 flex items-start gap-4 focus:outline-none cursor-pointer"
                        >
                          {/* Calendar mini-date box */}
                          <div className={`hidden sm:flex flex-col items-center justify-center h-14 w-14 rounded-xl shrink-0 ${theme.bg} font-semibold border dark:border-slate-800/40`}>
                            <CalendarIcon className="h-5 w-5 mb-0.5" />
                            <span className="text-[9px] font-bold tracking-wider uppercase">
                              {event.semester}
                            </span>
                          </div>

                          {/* Info block */}
                          <div className="flex-grow space-y-1.5 min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${theme.bg}`}>
                                <span className={`h-1.5 w-1.5 rounded-full ${theme.dot}`} />
                                {theme.tag}
                              </span>
                              <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                                {event.date}
                              </span>
                            </div>

                            <h4 className="font-sans font-bold text-slate-900 dark:text-white text-sm md:text-base leading-tight truncate">
                              {event.title}
                            </h4>
                          </div>

                          {/* Expand chevron */}
                          <ChevronDown 
                            className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 mt-2 ${
                              isExpanded ? 'rotate-180 text-slate-800 dark:text-white' : ''
                            }`} 
                          />
                        </button>

                        {/* Collapsible Details */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: 'easeInOut' }}
                              className="overflow-hidden bg-slate-50/50 dark:bg-slate-950/20 border-t border-slate-50 dark:border-slate-800/60"
                            >
                              <div className="p-5 text-slate-600 dark:text-slate-300 text-sm leading-relaxed space-y-3">
                                <p>{event.description}</p>
                                
                                <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-400 dark:text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800/30 font-mono">
                                  <div className="flex items-center space-x-1">
                                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                                    <span>Term: {event.semester === 'fall' ? 'Fall 2026' : event.semester === 'spring' ? 'Spring 2027' : 'Summer 2027'}</span>
                                  </div>
                                  <div>•</div>
                                  <div>Category ID: {event.category}</div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Download/Resource panel */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-5 transition-colors duration-300">
              <h4 className="font-sans font-bold text-slate-900 dark:text-white text-base">
                Calendar Resources
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                Need physical copies or calendars synced across devices? Access offline resources and integrations.
              </p>

              <div className="space-y-3 pt-2">
                <button
                  onClick={handleDownloadPdf}
                  disabled={downloadingPdf}
                  className="w-full py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center justify-between cursor-pointer transition-all disabled:opacity-50"
                >
                  <span className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-slate-500" />
                    <span>Download PDF (2026/27)</span>
                  </span>
                  <Download className="h-3.5 w-3.5 text-slate-400" />
                </button>

                <button
                  onClick={handleExportGoogle}
                  disabled={exportingGoogle}
                  className="w-full py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center justify-between cursor-pointer transition-all disabled:opacity-50"
                >
                  <span className="flex items-center space-x-2">
                    <CalendarIcon className="h-4 w-4 text-brand-500" />
                    <span>Sync to Google Calendar</span>
                  </span>
                  <Share2 className="h-3.5 w-3.5 text-slate-400" />
                </button>
              </div>
            </div>

            {/* Subscribe to Academic Alert Notifications */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-5 transition-colors duration-300">
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-slate-900 dark:text-white text-base">
                  Subscribe to Alerts
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                  Receive email notifications for upcoming deadlines, registrations, exam schedules, and holiday recess dates.
                </p>
              </div>

              {subscribeSuccess ? (
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl space-y-2 text-center">
                  <CheckCircle className="h-8 w-8 text-emerald-500 mx-auto" />
                  <h5 className="text-xs font-bold text-emerald-900 dark:text-emerald-300">Alerts Set Successfully!</h5>
                  <p className="text-[10px] text-emerald-600 dark:text-emerald-400 leading-normal">
                    You have subscribed to academic alerts. We will dispatch reminders 7 days prior to each marked date.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  {/* Category Selection */}
                  <div className="space-y-2">
                    <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Alert Categories
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'academic', label: 'Lectures' },
                        { id: 'exams', label: 'Exams' },
                        { id: 'admissions', label: 'Admissions' },
                        { id: 'holidays', label: 'Holidays' }
                      ].map((item) => {
                        const isSubbed = subscribedCategories.includes(item.id);
                        return (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => handleToggleSubCategory(item.id)}
                            className={`py-2 px-3 rounded-lg text-[10px] font-semibold text-center border transition-all cursor-pointer ${
                              isSubbed
                                ? 'bg-brand-50 dark:bg-brand-950/30 border-brand-500 text-brand-700 dark:text-brand-300'
                                : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                            }`}
                          >
                            {item.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Email Address
                    </span>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. name@venite.edu"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl text-xs text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-500 transition-all"
                      />
                    </div>
                  </div>

                  {subscribeError && (
                    <p className="text-red-500 text-[11px] font-medium flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{subscribeError}</span>
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl text-xs cursor-pointer hover:-translate-y-0.5 transition-all"
                  >
                    Subscribe to Reminders
                  </button>
                </form>
              )}
            </div>

            {/* Quick Fact / FAQ Card */}
            <div className="bg-brand-900 text-brand-100 rounded-3xl p-6 shadow-md relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:12px_12px] pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <span className="inline-flex items-center justify-center p-2 rounded-xl bg-brand-800 text-brand-300">
                  <Award className="h-6 w-6" />
                </span>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-white text-base">Academic Integrity</h4>
                  <p className="text-xs text-brand-200 leading-relaxed font-sans">
                    Venite University is dedicated to keeping classes running consistently in alignment with this official calendar, minimizing delays for timely graduation.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
