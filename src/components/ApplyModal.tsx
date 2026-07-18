import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';
import { programmes } from '../data';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyModal({ isOpen, onClose }: ApplyModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    degreeType: 'undergraduate',
    gpa: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email address is required';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.program) {
      newErrors.program = 'Please select a programme';
    }

    const gpaVal = parseFloat(formData.gpa);
    if (!formData.gpa) {
      newErrors.gpa = 'High school GPA or previous degree GPA is required';
    } else if (isNaN(gpaVal) || gpaVal < 0 || gpaVal > 5.0) {
      newErrors.gpa = 'GPA must be a valid number between 0.0 and 5.0';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      program: '',
      degreeType: 'undergraduate',
      gpa: '',
      notes: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  const filteredPrograms = programmes.filter(
    (p) => p.degreeType === formData.degreeType
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Dark Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10"
          >
            {/* Header */}
            <div className="bg-brand-900 text-white p-6 relative flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-brand-300 tracking-widest uppercase font-semibold">
                  Admissions Portal
                </span>
                <h3 className="font-sans font-bold text-xl md:text-2xl mt-1">
                  Apply for Admission
                </h3>
              </div>
              <button
                id="close-apply-modal-btn"
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 text-brand-200 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <LucideIcon name="X" size={24} />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="mx-auto h-20 w-20 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6 shadow-md">
                    <LucideIcon name="CheckCircle2" size={48} />
                  </div>
                  <h4 className="font-sans font-bold text-2xl text-slate-900">
                    Application Submitted!
                  </h4>
                  <p className="text-slate-600 mt-3 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-brand-900">{formData.firstName}</strong>. Your academic admission request for <strong className="text-slate-900">{programmes.find(p => p.id === formData.program)?.name}</strong> has been logged successfully.
                  </p>
                  <p className="text-slate-500 text-sm mt-2 max-w-sm mx-auto">
                    A confirmation email and next steps from our admissions board will be dispatched to your address shortly.
                  </p>
                  <div className="mt-8 flex justify-center space-x-4">
                    <button
                      id="apply-another-btn"
                      onClick={handleReset}
                      className="px-6 py-3 rounded-xl border border-brand-200 text-brand-700 hover:bg-brand-50 font-medium transition-all duration-300 cursor-pointer"
                    >
                      New Application
                    </button>
                    <button
                      id="success-close-btn"
                      onClick={onClose}
                      className="px-6 py-3 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-semibold shadow-md transition-all duration-300 cursor-pointer"
                    >
                      Close Portal
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form id="admission-form" onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                      <input
                        id="form-first-name"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? 'border-red-500 bg-red-50/20' : 'border-slate-200'} focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all`}
                        placeholder="John"
                      />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                      <input
                        id="form-last-name"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? 'border-red-500 bg-red-50/20' : 'border-slate-200'} focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all`}
                        placeholder="Doe"
                      />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                      <input
                        id="form-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-200'} focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all`}
                        placeholder="john.doe@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                      <input
                        id="form-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-200'} focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all`}
                        placeholder="+1 (555) 000-0000"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Row 3 - Level Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Programme Type</label>
                    <div className="grid grid-cols-3 gap-3">
                      {['undergraduate', 'postgraduate', 'certification'].map((type) => (
                        <button
                          id={`type-btn-${type}`}
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, degreeType: type, program: '' })}
                          className={`py-2.5 px-3 rounded-xl font-medium text-xs md:text-sm border transition-all text-center capitalize cursor-pointer ${
                            formData.degreeType === type
                              ? 'bg-brand-50 border-brand-500 text-brand-800 font-semibold'
                              : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Program Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Desired Programme</label>
                    <select
                      id="form-select-program"
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.program ? 'border-red-500 bg-red-50/20' : 'border-slate-200'} focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 bg-white transition-all`}
                    >
                      <option value="">-- Choose a programme --</option>
                      {filteredPrograms.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} ({p.duration})
                        </option>
                      ))}
                    </select>
                    {errors.program && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.program}</p>}
                  </div>

                  {/* Row 4 - GPA */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Academic GPA (Out of 5.0)
                    </label>
                    <input
                      id="form-gpa"
                      type="number"
                      step="0.01"
                      value={formData.gpa}
                      onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.gpa ? 'border-red-500 bg-red-50/20' : 'border-slate-200'} focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all`}
                      placeholder="e.g. 4.25"
                    />
                    {errors.gpa && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.gpa}</p>}
                  </div>

                  {/* Row 5 - Statement / Notes */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Statement of Purpose (Optional)</label>
                    <textarea
                      id="form-notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                      placeholder="Briefly state your academic aspirations..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="form-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl font-bold text-center text-white bg-brand-700 hover:bg-brand-800 shadow-[0_4px_14px_rgba(3,105,161,0.4)] hover:shadow-[0_6px_20px_rgba(3,105,161,0.6)] cursor-pointer hover:-translate-y-0.5 active:translate-y-0 disabled:translate-y-0 disabled:bg-slate-400 disabled:shadow-none flex items-center justify-center space-x-2 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Processing Application...</span>
                        </>
                      ) : (
                        <>
                          <LucideIcon name="Send" size={18} />
                          <span>Submit Official Application</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
