import { motion } from 'motion/react';
import LucideIcon from './LucideIcon';
import { timelineSteps } from '../data';

interface AboutProps {
  onPageChange: (page: string) => void;
}

export default function About({ onPageChange }: AboutProps) {
  return (
    <div className="relative pt-24">
      {/* 1. HEADER HERO */}
      <section id="about-header" className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-900/60" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white space-y-4">
          <span className="font-mono text-xs font-semibold tracking-widest text-brand-400 uppercase">
            Learn Our Story
          </span>
          <h1 className="font-sans font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
            About Our University
          </h1>
          <p className="text-slate-300 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Discover our history, academic founding charters, and the software engineering process that powered this digital platform.
          </p>
        </div>
      </section>

      {/* 2. HISTORY, MISSION, VISION */}
      <section id="university-overview" className="py-24 bg-white dark:bg-slate-900 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* History Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs font-semibold tracking-widest text-brand-600 dark:text-brand-400 uppercase block">
                Founding Legacy
              </span>
              <h2 className="font-sans font-bold text-3xl text-slate-900 dark:text-white leading-tight">
                Our Rich Scholastic Journey
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                <p>
                  Founded in 1982, Venite University began as an elite institute of advanced computing and mechanical sciences. Over the subsequent four decades, the institution expanded into six globally recognized colleges covering Medicine, Law, Business, Engineering, and the liberal arts.
                </p>
                <p>
                  Today, the university serves as an international educational sanctuary, hosting over 15,000 undergraduate and graduate students from 65+ countries. We continuously invest in futuristic research initiatives and state-of-the-art lab blocks to foster tomorrow’s innovators.
                </p>
              </div>

              {/* Core Values Box */}
              <div className="bg-slate-50 dark:bg-slate-950 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 transition-colors duration-300">
                <h3 className="font-sans font-bold text-slate-900 dark:text-white text-lg mb-4">
                  Our Founding Core Values
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { title: 'Innovation', desc: 'Pioneering discoveries' },
                    { title: 'Leadership', desc: 'Steering global futures' },
                    { title: 'Excellence', desc: 'Highest educational rigor' },
                  ].map((val) => (
                    <div key={val.title} className="text-center bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100/50 dark:border-slate-800 shadow-xs">
                      <h4 className="font-sans font-bold text-brand-600 dark:text-brand-400 text-sm md:text-base">{val.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-1">{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mission & Vision Column */}
            <div className="lg:col-span-6 space-y-8">
              {/* Mission Card */}
              <div className="bg-brand-900 text-white rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 text-brand-800 text-9xl font-extrabold select-none opacity-20 pointer-events-none">
                  M
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-800/80 text-brand-300 flex items-center justify-center">
                    <LucideIcon name="ShieldCheck" size={20} />
                  </div>
                  <h3 className="font-sans font-bold text-2xl">Our Mission</h3>
                  <p className="text-brand-100 text-sm md:text-base leading-relaxed font-light">
                    To cultivate a globally inclusive academic environment that inspires creative technological innovation, exceptional leadership characters, and scholastic excellence designed to address pressing international problems.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-slate-950 text-white rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 text-slate-900 text-9xl font-extrabold select-none opacity-20 pointer-events-none">
                  V
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-slate-900 text-brand-400 flex items-center justify-center">
                    <LucideIcon name="CloudLightning" size={20} />
                  </div>
                  <h3 className="font-sans font-bold text-2xl">Our Vision</h3>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                    To be universally recognized as a premium beacon of student-centric education, pioneering biological/computing research breakthroughs, and highly successful student startup incubators by 2030.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE VENITE - ADVANTAGES */}
      <section id="about-advantages" className="py-24 bg-slate-50 dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800/80 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs font-semibold tracking-widest text-brand-600 dark:text-brand-400 uppercase block">
              University Advantages
            </span>
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900 dark:text-white mt-2">
              Why Students Choose Venite
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base mt-3">
              We provide the tools, support systems, and top-tier faculties to translate your intellectual potential into immediate corporate or entrepreneurial excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Modern Hybrid Classrooms', desc: 'Comfortable, acoustic-engineered learning theaters armed with high-speed Wi-Fi, wireless visual streaming, and digital smart-boards.', icon: 'Building' },
              { title: 'Cutting-Edge Research Labs', desc: 'Over $20M in physical lab apparatus, biological sample isolators, and deep GPU sandboxes for student researchers.', icon: 'Cpu' },
              { title: 'Global Startup Incubator', desc: 'Work inside the student innovation hub to refine software models, secure seed backing, and pitch to international angel syndicates.', icon: 'Layers' },
              { title: 'Distinguished Faculty Mentors', desc: 'Learn directly from PhDs, patent holders, corporate advisory members, and award-winning authors committed to student success.', icon: 'Users' },
              { title: 'Generous Scholarship Portals', desc: 'Over $5M distributed every session based on academic performance, sports milestones, and financial need benchmarks.', icon: 'Award' },
              { title: 'Dedicated Student Welfare', desc: 'On-demand mental counselors, diagnostic centers, biometric secure hostels, and highly personalized academic coaching desks.', icon: 'HeartPulse' }
            ].map((adv, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl flex items-start space-x-4 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                  <LucideIcon name={adv.icon} size={20} />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-slate-900 dark:text-white text-base md:text-lg">{adv.title}</h3>
                  <p className="text-slate-500 dark:text-slate-300 text-sm mt-1 leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WEBSITE DEVELOPMENT TIMELINE */}
      <section id="dev-process-timeline" className="py-24 bg-white dark:bg-slate-900 relative transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs font-semibold tracking-widest text-brand-600 dark:text-brand-400 uppercase block">
              Digital Infrastructure
            </span>
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900 dark:text-white mt-2">
              Website Development Process
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base mt-3">
              This digital platform was engineered using robust enterprise software planning, rigorous UI/UX drafting, clean programming standards, and cross-device validation.
            </p>
          </div>

          {/* Interactive Chronological Timeline */}
          <div className="relative border-l-2 border-slate-100 dark:border-slate-800 ml-4 md:ml-32 space-y-12">
            {timelineSteps.map((step) => (
              <div key={step.step} className="relative group">
                {/* Left Side Label (desktop only) */}
                <div className="absolute right-full mr-12 top-0 hidden md:block text-right w-24">
                  <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/40 px-2.5 py-1 rounded-lg uppercase tracking-wider">
                    Step 0{step.step}
                  </span>
                </div>

                {/* Timeline Node Dot */}
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-white dark:border-slate-800 bg-brand-600 shadow-[0_0_10px_rgba(37,99,235,0.6)] group-hover:bg-brand-500 group-hover:scale-125 transition-all duration-300" />

                {/* Content Card (Glassmorphic look) */}
                <div className="ml-8 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 md:p-8 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                        <LucideIcon name={step.iconName} size={20} />
                      </div>
                      <div>
                        <h3 className="font-sans font-bold text-slate-900 dark:text-white text-lg md:text-xl leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{step.subtitle}</p>
                      </div>
                    </div>
                    {/* Step label on mobile */}
                    <span className="inline-block md:hidden self-start font-mono text-[10px] font-bold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/40 px-2 py-0.5 rounded uppercase">
                      Step 0{step.step}
                    </span>
                  </div>

                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start space-x-2">
                        <LucideIcon name="Check" size={14} className="text-brand-600 dark:text-brand-400 mt-1 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMIC CALENDAR BANNER */}
      <section id="about-academic-calendar" className="py-16 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start space-x-4">
              <div className="h-12 w-12 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                <LucideIcon name="Calendar" size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="font-sans font-bold text-slate-900 dark:text-white text-lg md:text-xl">
                  Venite Academic Blueprint
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed max-w-xl">
                  Planning your schedule? View the full calendar of lectures, registration sessions, exams, and official university holidays.
                </p>
              </div>
            </div>
            <button
              id="about-view-calendar-btn"
              onClick={() => onPageChange('calendar')}
              className="px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl text-xs transition-all flex items-center space-x-2 shrink-0 cursor-pointer shadow-sm hover:-translate-y-0.5 active:translate-y-0 w-full md:w-auto justify-center"
            >
              <span>View Academic Calendar</span>
              <LucideIcon name="ArrowRight" size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
