import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MapPin, X } from 'lucide-react';
import { BFLC_ASSET_LIBRARY } from '../assets/bflcAssetLibrary';
import { COMPANY_INFO, JOB_OPENINGS } from '../data/bflcData';
import { JobOpening } from '../types/bflc';

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedJobTitle, setSubmittedJobTitle] = useState<string | null>(null);

  const handleOpenApplication = (job: JobOpening) => {
    setSelectedJob(job);
    setErrorMsg('');
    setSubmittedJobTitle(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg('Please complete your name, email address, and phone number.');
      return;
    }
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!emailValid) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }
    setErrorMsg('');
    setSubmittedJobTitle(selectedJob?.title || 'General Application');
    setFullName('');
    setEmail('');
    setPhone('');
    setNote('');
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Header */}
      <section className="bg-[#1C1917] text-[#FAF9F6] border-b border-[#292524]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 max-w-3xl space-y-4">
              <p className="text-xs font-medium text-[#A8A29E] tracking-wide">
                Careers · Hospitality &amp; Corporate Roles
              </p>
              <h1
                className="font-display font-semibold text-white tracking-tight text-balance leading-[1.1]"
                style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.25rem)' }}
              >
                Build Your Hospitality Career with BFLC
              </h1>
              <p className="text-base sm:text-lg text-[#D6D3D1] leading-relaxed">
                Our restaurants, kitchens, and corporate offices in Bahrain are powered by dedicated
                professionals who care deeply about guest service and culinary quality.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="bg-white p-2 rounded-lg border border-[#292524] max-w-[230px] w-full shadow-lg">
                <img
                  src={BFLC_ASSET_LIBRARY.company.hospitalityTeam}
                  alt={BFLC_ASSET_LIBRARY.company.hospitalityTeamAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Vacancies */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5E0D8] pb-6">
            <div className="space-y-2">
              <h2 className="font-display text-3xl font-semibold text-[#1C1917]">
                Current Vacancies
              </h2>
              <p className="text-sm text-[#57534E]">
                Explore active opportunities across our restaurant operations, culinary teams, and
                Manama headquarters.
              </p>
            </div>
            <span className="text-xs text-[#78716C] tabular-nums">
              {JOB_OPENINGS.length} open positions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {JOB_OPENINGS.map((job) => (
              <article
                key={job.id}
                className="bg-white border border-[#E5E0D8] rounded-lg p-7 flex flex-col justify-between space-y-6 hover:border-[#A8A29E] transition-colors"
              >
                <div className="space-y-3">
                  <div className="text-xs text-[#78716C] flex flex-wrap items-center gap-2">
                    <span>{job.department}</span>
                    <span aria-hidden="true">·</span>
                    <span>{job.employmentType}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#1C1917]">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#57534E]">
                    <MapPin className="w-3.5 h-3.5 text-[#991B1B]" aria-hidden="true" />
                    <span>{job.location}</span>
                  </div>
                  <p className="text-sm text-[#44403C] leading-relaxed pt-1">{job.summary}</p>
                  <ul className="pt-2 space-y-1.5 text-xs sm:text-sm text-[#57534E]">
                    {job.requirements.map((req) => (
                      <li key={req}>• {req}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E5E0D8]">
                  <button
                    type="button"
                    onClick={() => handleOpenApplication(job)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#991B1B] hover:bg-[#7F1D1D] rounded-md transition-colors"
                  >
                    <span>Apply for Position</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 bg-[#1C1917]/70 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="career-modal-title"
          onClick={() => setSelectedJob(null)}
        >
          <div
            className="bg-white border border-[#E5E0D8] rounded-lg max-w-lg w-full overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 p-6 border-b border-[#E5E0D8]">
              <div>
                <p className="text-xs text-[#78716C]">
                  {selectedJob.department} · {selectedJob.location}
                </p>
                <h3
                  id="career-modal-title"
                  className="font-display text-2xl font-semibold text-[#1C1917] mt-1"
                >
                  Apply: {selectedJob.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="p-2 rounded-md text-[#57534E] hover:text-[#1C1917] hover:bg-[#F3F1EC]"
                aria-label="Close application form"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {submittedJobTitle ? (
                <div className="py-6 text-center space-y-4">
                  <CheckCircle2
                    className="w-10 h-10 text-[#15803D] mx-auto"
                    aria-hidden="true"
                  />
                  <h4 className="font-display text-xl font-semibold text-[#1C1917]">
                    Application Recorded
                  </h4>
                  <p className="text-sm text-[#44403C] leading-relaxed">
                    Thank you for applying for <strong>{submittedJobTitle}</strong>. You may also
                    forward your CV directly to{' '}
                    <a
                      href={`mailto:${COMPANY_INFO.generalEmail}`}
                      className="text-[#991B1B] underline"
                    >
                      {COMPANY_INFO.generalEmail}
                    </a>{' '}
                    quoting the role title.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-5 py-2.5 text-sm font-semibold text-white bg-[#1C1917] rounded-md"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div
                      role="alert"
                      className="p-3 text-xs sm:text-sm text-[#991B1B] bg-[#FEF2F2] border border-[#FECACA] rounded-md"
                    >
                      {errorMsg}
                    </div>
                  )}
                  <div>
                    <label className="block text-xs font-medium text-[#44403C] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full px-3.5 py-2 text-sm border border-[#D6D3D1] rounded-md focus:outline-none focus:border-[#991B1B]"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#44403C] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3.5 py-2 text-sm border border-[#D6D3D1] rounded-md focus:outline-none focus:border-[#991B1B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#44403C] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full px-3.5 py-2 text-sm border border-[#D6D3D1] rounded-md focus:outline-none focus:border-[#991B1B]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#44403C] mb-1">
                      Experience Summary / Cover Note
                    </label>
                    <textarea
                      rows={3}
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Briefly outline your relevant hospitality or corporate experience..."
                      className="w-full px-3.5 py-2 text-sm border border-[#D6D3D1] rounded-md focus:outline-none focus:border-[#991B1B]"
                    />
                  </div>
                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedJob(null)}
                      className="px-4 py-2 text-sm font-medium text-[#57534E] hover:text-[#1C1917]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 text-sm font-semibold text-white bg-[#991B1B] hover:bg-[#7F1D1D] rounded-md transition-colors"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
