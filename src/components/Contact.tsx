import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';
import { faqs, contactDetails } from '../data';

interface ContactProps {
  onPageChange: (page: string) => void;
}

export default function Contact({ onPageChange }: ContactProps) {
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState<string | null>('faq-1');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email address is required';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please type a message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      // Clear success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 6000);
    }, 1500);
  };

  const toggleFaq = (id: string) => {
    if (activeFaq === id) {
      setActiveFaq(null);
    } else {
      setActiveFaq(id);
    }
  };

  return (
    <div className="relative pt-24">
      {/* 1. HEADER HERO */}
      <section id="contact-header" className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-900/60" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white space-y-4">
          <span className="font-mono text-xs font-semibold tracking-widest text-brand-400 uppercase">
            Contact admissions
          </span>
          <h1 className="font-sans font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
            Connect With Venite
          </h1>
          <p className="text-slate-300 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Get in touch with our admissions boards, academic secretaries, or explore our frequently asked campus questions.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM */}
      <section id="contact-details-form" className="py-24 bg-white dark:bg-slate-900 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Contact Information & Map Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-xs font-semibold tracking-widest text-brand-600 dark:text-brand-400 uppercase block">
                  Find Us
                </span>
                <h2 className="font-sans font-bold text-3xl text-slate-900 dark:text-white leading-tight">
                  University Contact Details
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  We are here to assist with any admissions requests, academic syllabus questions, or career support details. Reach out through our physical offices, telephone lines, or direct emails.
                </p>
              </div>

              {/* Detail Items */}
              <div className="space-y-6 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 transition-colors duration-300">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                    <LucideIcon name="MapPin" size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-900 dark:text-white text-sm md:text-base font-semibold">Campus Address</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-1 leading-relaxed">{contactDetails.address}</p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                    <LucideIcon name="Phone" size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-900 dark:text-white text-sm md:text-base font-semibold">Admissions Hotline</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-1 leading-relaxed">{contactDetails.phone}</p>
                  </div>
                </div>

                {/* Emails */}
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                    <LucideIcon name="Mail" size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-900 dark:text-white text-sm md:text-base font-semibold">Support Email</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-1 leading-relaxed">{contactDetails.email}</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                    <LucideIcon name="Clock" size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-900 dark:text-white text-sm md:text-base font-semibold">Office Working Hours</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-1 leading-relaxed">{contactDetails.officeHours}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-100 dark:bg-slate-950 rounded-3xl h-64 overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner relative flex flex-col items-center justify-center text-center p-6 transition-colors duration-300">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#2563eb_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#0284c7_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
                <div className="relative z-10 space-y-2">
                  <div className="mx-auto h-12 w-12 rounded-full bg-brand-50 dark:bg-brand-950/40 flex items-center justify-center text-brand-600 dark:text-brand-400 shadow">
                    <LucideIcon name="Building" size={24} />
                  </div>
                  <h4 className="font-sans font-bold text-slate-900 dark:text-white text-sm">Interactive Campus Map</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs max-w-xs leading-relaxed">
                    Venite Main Campus, Academic Heights, Block B, Main Hall.
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-800 dark:hover:text-brand-300 underline mt-1"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-950 border border-slate-100/80 dark:border-slate-850 rounded-3xl p-8 md:p-10 shadow-sm transition-colors duration-300">
              <h3 className="font-sans font-bold text-slate-900 dark:text-white text-xl md:text-2xl mb-6">
                Send Direct Message
              </h3>

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/20 text-emerald-800 dark:text-emerald-300 text-sm flex items-start space-x-3"
                >
                  <div className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400">
                    <LucideIcon name="CheckCircle2" size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold">Message Delivered successfully!</h5>
                    <p className="text-emerald-700 dark:text-emerald-400 text-xs mt-1 leading-relaxed">
                      Thank you for contacting Venite University. An academic secretary will review your subject line and dispatch a customized reply to your mailbox within 24 working hours.
                    </p>
                  </div>
                </motion.div>
              )}

              <form id="contact-inquiry-form" onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.name ? 'border-red-500 bg-red-500/10' : 'border-slate-200 dark:border-slate-800'
                      } bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-sm`}
                      placeholder="Jane Austin"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.email ? 'border-red-500 bg-red-500/10' : 'border-slate-200 dark:border-slate-800'
                      } bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-sm`}
                      placeholder="jane@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.phone ? 'border-red-500 bg-red-500/10' : 'border-slate-200 dark:border-slate-800'
                      } bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-sm`}
                      placeholder="+1 (555) 987-6543"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone}</p>}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                      Subject Matter
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.subject ? 'border-red-500 bg-red-500/10' : 'border-slate-200 dark:border-slate-800'
                      } bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-sm`}
                      placeholder="e.g. Admission Inquiry"
                    />
                    {errors.subject && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.subject}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                    Message Body
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.message ? 'border-red-500 bg-red-500/10' : 'border-slate-200 dark:border-slate-800'
                    } bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-sm`}
                    placeholder="Write your message here in detail..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <div>
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-center text-white bg-brand-700 hover:bg-brand-800 shadow-[0_4px_14px_rgba(3,105,161,0.4)] flex items-center justify-center space-x-2 transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0 disabled:translate-y-0 disabled:bg-slate-400 disabled:shadow-none"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Dispatching Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <LucideIcon name="Send" size={16} />
                        <span>Send Official Inquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS (FAQ Accordion) */}
      <section id="contact-faqs" className="py-24 bg-slate-50 dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800/85 relative transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs font-semibold tracking-widest text-brand-600 dark:text-brand-400 uppercase block">
              Direct Answers
            </span>
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900 dark:text-white mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-3">
              Browse our standardized collegiate FAQs. If you do not locate your specific query, submit the direct message form above.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  id={`faq-item-${faq.id}`}
                  key={faq.id}
                  className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs transition-all duration-300"
                >
                  <button
                    id={`faq-trigger-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-6 flex items-center justify-between font-sans font-bold text-slate-900 dark:text-white text-base md:text-lg focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <LucideIcon
                      name={isOpen ? 'ChevronUp' : 'ChevronDown'}
                      size={20}
                      className="text-brand-600 dark:text-brand-400 ml-4 shrink-0"
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-1 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-50 dark:border-slate-800">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACADEMIC CALENDAR DIRECT LINK */}
      <section id="contact-academic-calendar" className="py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-300">
            <div className="flex items-start space-x-4">
              <div className="h-12 w-12 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                <LucideIcon name="Calendar" size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="font-sans font-bold text-slate-900 dark:text-white text-lg md:text-xl">
                  Official Academic Dates & Deadlines
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed max-w-xl">
                  Inquiring about registration deadlines or class resumption dates? View our comprehensive academic calendar directly.
                </p>
              </div>
            </div>
            <button
              id="contact-view-calendar-btn"
              onClick={() => onPageChange('calendar')}
              className="px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl text-xs transition-all flex items-center space-x-2 shrink-0 cursor-pointer shadow-sm hover:-translate-y-0.5 active:translate-y-0 w-full md:w-auto justify-center"
            >
              <span>Browse Academic Calendar</span>
              <LucideIcon name="ArrowRight" size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
