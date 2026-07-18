import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';
import { programmes } from '../data';

interface ProgrammesProps {
  onOpenApplyModal: () => void;
}

type ProgramTab = 'all' | 'undergraduate' | 'postgraduate' | 'certification';

export default function Programmes({ onOpenApplyModal }: ProgrammesProps) {
  const [activeTab, setActiveTab] = useState<ProgramTab>('all');

  const filteredProgrammes = activeTab === 'all'
    ? programmes
    : programmes.filter((p) => p.degreeType === activeTab);

  const getFacultyIconName = (faculty: string) => {
    switch (faculty.toLowerCase()) {
      case 'medicine': return 'HeartPulse';
      case 'engineering': return 'Cpu';
      case 'computing': return 'Code';
      case 'business': return 'Briefcase';
      case 'law': return 'Scale';
      default: return 'Palette';
    }
  };

  return (
    <div className="relative pt-24">
      {/* 1. HEADER HERO */}
      <section id="programmes-header" className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-900/60" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white space-y-4">
          <span className="font-mono text-xs font-semibold tracking-widest text-brand-400 uppercase">
            Academics
          </span>
          <h1 className="font-sans font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
            Academic Programmes
          </h1>
          <p className="text-slate-300 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Browse our comprehensive suite of undergraduate, postgraduate, and professional certification programs designed to accelerate your global career.
          </p>
        </div>
      </section>

      {/* 2. PROGRAMMES DIRECTORY WITH INTERACTIVE FILTER PILLS */}
      <section id="programme-directory" className="py-24 bg-white dark:bg-slate-900 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'all', label: 'All Programmes' },
              { id: 'undergraduate', label: 'Undergraduate' },
              { id: 'postgraduate', label: 'Postgraduate' },
              { id: 'certification', label: 'Professional Certifications' },
            ].map((tab) => (
              <button
                id={`tab-filter-${tab.id}`}
                key={tab.id}
                onClick={() => setActiveTab(tab.id as ProgramTab)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Programmes Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProgrammes.map((p) => (
                <motion.div
                  id={`programme-card-${p.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={p.id}
                  className="bg-slate-50 dark:bg-slate-950 border border-slate-100/80 dark:border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md hover:bg-white dark:hover:bg-slate-900 hover:border-brand-100 dark:hover:border-brand-900 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    {/* Header Details */}
                    <div className="flex items-start justify-between">
                      <div className="h-10 w-10 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 group-hover:bg-brand-600 group-hover:text-white dark:group-hover:bg-brand-500 transition-colors duration-300">
                        <LucideIcon name={getFacultyIconName(p.faculty)} size={20} />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-slate-100/60 dark:bg-slate-900/60 px-2 py-1 rounded">
                        {p.duration}
                      </span>
                    </div>

                    {/* Metadata tags */}
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-[9px] font-bold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/40 px-2 py-0.5 rounded uppercase tracking-wider">
                        {p.faculty}
                      </span>
                      <span className="font-mono text-[9px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded uppercase tracking-wider">
                        {p.degreeType}
                      </span>
                    </div>

                    <h3 className="font-sans font-bold text-lg text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100/80 dark:border-slate-800">
                    <button
                      id={`apply-course-btn-${p.id}`}
                      onClick={onOpenApplyModal}
                      className="w-full py-2.5 rounded-xl font-bold text-sm text-center text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/40 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-500 dark:hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      Apply for Course
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 3. ADMISSION REQUIREMENTS & APPLICATION PROCESS */}
      <section id="admissions-guide" className="py-24 bg-slate-50 dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800/80 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Admission Requirements */}
          <div className="space-y-6">
            <span className="font-mono text-xs font-semibold tracking-widest text-brand-600 dark:text-brand-400 uppercase block">
              Entry Gates
            </span>
            <h2 className="font-sans font-bold text-3xl text-slate-900 dark:text-white">
              Admission Requirements
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
              At Venite, we seek ambitious minds displaying outstanding intellectual potential, extracurricular drive, and leadership qualities. Here is what is expected:
            </p>

            <div className="space-y-4 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs transition-colors duration-300">
              {[
                { title: 'Academic Credentials', desc: 'Possession of a Senior High School certificate with credit passes in at least five subjects including English Language and Mathematics.' },
                { title: 'Grade Point Benchmark', desc: 'A minimum GPA equivalent of 2.5 on a 4.0/5.0 scale for undergraduate entry; or a clean upper-second degree for postgraduate studies.' },
                { title: 'Standardized Clearances', desc: 'Submission of standard academic transcripts, test clearances, and letters of recommendation from professional or academic sponsors.' },
                { title: 'Statement of Purpose', desc: 'A 500-word personal statement articulating your academic goals, research aspirations, and your desire to join Venite University.' }
              ].map((req, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                  <div className="h-6 w-6 rounded-full bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                    <LucideIcon name="Check" size={14} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-900 dark:text-white text-sm md:text-base">{req.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-0.5 leading-relaxed">{req.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Steps */}
          <div className="space-y-6">
            <span className="font-mono text-xs font-semibold tracking-widest text-brand-600 dark:text-brand-400 uppercase block">
              Application Process
            </span>
            <h2 className="font-sans font-bold text-3xl text-slate-900 dark:text-white">
              How To Apply
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
              We have digitized our admissions funnel. You can complete your official submission in under ten minutes using the following steps:
            </p>

            <div className="space-y-6 relative border-l-2 border-brand-100 dark:border-brand-900/40 ml-4 py-2">
              {[
                { title: 'Click "Apply Now"', desc: 'Launch the digital admissions portal by clicking any of the apply buttons located on our platform.' },
                { title: 'Provide Personal Details', desc: 'Type your contact coordinates, email address, phone number, and choose your preferred academic division.' },
                { title: 'Log Academic Grades', desc: 'Input your High School or previous degree Grade Point Average (GPA) and write a voluntary Statement of Purpose.' },
                { title: 'Submit & Review', desc: 'Complete your online application. Our central admissions board will review materials and emit a decision within 5 working days.' }
              ].map((step, idx) => (
                <div key={idx} className="relative pl-8 group">
                  <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-white dark:border-slate-800 bg-brand-600 shadow-[0_0_8px_rgba(2,132,199,0.5)] group-hover:scale-125 transition-transform duration-300" />
                  <h4 className="font-sans font-bold text-slate-900 dark:text-white text-sm md:text-base">
                    Step {idx + 1}: {step.title}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-1 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. TUITION & SCHOLARSHIPS */}
      <section id="tuition-scholarships" className="py-24 bg-white dark:bg-slate-900 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Tuition Information */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs font-semibold tracking-widest text-brand-600 dark:text-brand-400 uppercase block">
                Finances
              </span>
              <h2 className="font-sans font-bold text-3xl text-slate-900 dark:text-white">
                Tuition & Fees
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                Venite University is committed to keeping world-class academic study affordable and accessible. Below is an approximate tuition overview by program type for the 2026/2027 academic session.
              </p>

              <div className="overflow-hidden border border-slate-100 dark:border-slate-800 rounded-2xl shadow-xs">
                <table className="w-full text-left border-collapse bg-slate-50 dark:bg-slate-950 text-xs md:text-sm">
                  <thead>
                    <tr className="bg-brand-900 text-white">
                      <th className="p-4 font-sans font-bold">Academic Division</th>
                      <th className="p-4 font-sans font-bold">Credits / Year</th>
                      <th className="p-4 font-sans font-bold">Approx. Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900">
                    <tr>
                      <td className="p-4 font-semibold text-slate-900 dark:text-white">Faculty of Medicine</td>
                      <td className="p-4">36 Credits</td>
                      <td className="p-4 font-mono font-semibold text-brand-600 dark:text-brand-400">$9,500 / Yr</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900 dark:text-white">Faculty of Engineering</td>
                      <td className="p-4">34 Credits</td>
                      <td className="p-4 font-mono font-semibold text-brand-600 dark:text-brand-400">$7,200 / Yr</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900 dark:text-white">Faculty of Computing & IT</td>
                      <td className="p-4">32 Credits</td>
                      <td className="p-4 font-mono font-semibold text-brand-600 dark:text-brand-400">$6,800 / Yr</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900 dark:text-white">Faculty of Business & Law</td>
                      <td className="p-4">30 Credits</td>
                      <td className="p-4 font-mono font-semibold text-brand-600 dark:text-brand-400">$5,900 / Yr</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900 dark:text-white">Faculty of Arts</td>
                      <td className="p-4">28 Credits</td>
                      <td className="p-4 font-mono font-semibold text-brand-600 dark:text-brand-400">$4,800 / Yr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono italic">
                *Approximate values cover tuition and base laboratory fees only. Accommodation and text assets are billed separately.
              </p>
            </div>

            {/* Scholarships */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs font-semibold tracking-widest text-brand-600 dark:text-brand-400 uppercase block">
                Scholarship Programs
              </span>
              <h2 className="font-sans font-bold text-3xl text-slate-900 dark:text-white">
                Merit & Need Scholarships
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                No exceptional mind should be hindered by finances. Venite provides over $5 million in annual scholarship backing across various categories:
              </p>

              <div className="space-y-4">
                {[
                  { name: 'Chancellor’s Excellence Award', desc: '100% full-tuition coverage for freshmen scoring within the top 3% percentile of national entry tests.' },
                  { name: 'Falcons Sports & Athletics Medal', desc: '50% to 100% tuition subsidy for regional or national athletes representing Venite Falcons sports squads.' },
                  { name: 'Tech & Innovation Catalyst Grants', desc: 'Special funding covering up to 75% tuition for computer science and engineering students launching active prototypes in the Innovation Hub.' },
                  { name: 'Global Diversity & Inclusion Grant', desc: 'Need-based scholarships aiming to cover up to 50% tuition for students from developing countries and underrepresented backgrounds.' }
                ].map((schol, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80 p-5 rounded-2xl transition-colors duration-300">
                    <h4 className="font-sans font-bold text-slate-900 dark:text-white text-sm md:text-base flex items-center space-x-2">
                      <span className="text-brand-600 dark:text-brand-400 shrink-0">★</span>
                      <span>{schol.name}</span>
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-1 leading-relaxed">
                      {schol.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
