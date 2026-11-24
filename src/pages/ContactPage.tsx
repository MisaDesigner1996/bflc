import React, { useState } from 'react';
import { CheckCircle2, Clock, Mail, MapPin, Phone, Printer } from 'lucide-react';
import { COMPANY_INFO } from '../data/bflcData';

const ENQUIRY_TYPES = [
  'General Information',
  'Business & Partnerships',
  'Kazbah Catering Enquiry',
  'Investor Relations',
  'Careers & Recruitment',
] as const;

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiryType, setEnquiryType] = useState<string>(ENQUIRY_TYPES[0]);
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please fill in your name, email address, and message.');
      return;
    }
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!emailValid) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setEnquiryType(ENQUIRY_TYPES[0]);
    setMessage('');
    setSubmitted(false);
    setErrorMsg('');
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Header */}
      <section className="bg-[#1C1917] text-[#FAF9F6] border-b border-[#292524]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-medium text-[#A8A29E] tracking-wide">
              Contact Us · Head Office &amp; Enquiries
            </p>
            <h1
              className="font-display font-semibold text-white tracking-tight text-balance leading-[1.1]"
              style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.25rem)' }}
            >
              Let’s Connect
            </h1>
            <p className="text-base sm:text-lg text-[#D6D3D1] leading-relaxed">
              For business enquiries, catering requests, investor relations, or general
              information, connect directly with Bahrain Family Leisure Company B.S.C.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left 5 Cols: Office & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#E5E0D8] rounded-lg p-7 space-y-6">
              <h2 className="font-display text-2xl font-semibold text-[#1C1917]">
                Corporate Headquarters
              </h2>

              <div className="space-y-4 text-sm text-[#44403C]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#991B1B] mt-1 shrink-0" aria-hidden="true" />
                  <address className="not-italic leading-relaxed">
                    <span className="font-semibold text-[#1C1917] block">
                      {COMPANY_INFO.legalName}
                    </span>
                    {COMPANY_INFO.addressLine1}
                    <br />
                    {COMPANY_INFO.addressLine2}
                    <br />
                    {COMPANY_INFO.poBox}
                  </address>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#991B1B] shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-xs text-[#78716C] block">Telephone</span>
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                      className="font-mono-tabular font-medium text-[#1C1917] hover:underline"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Printer className="w-4 h-4 text-[#991B1B] shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-xs text-[#78716C] block">Fax</span>
                    <span className="font-mono-tabular text-[#1C1917]">{COMPANY_INFO.fax}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#991B1B] shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-xs text-[#78716C] block">General &amp; Corporate</span>
                    <a
                      href={`mailto:${COMPANY_INFO.generalEmail}`}
                      className="font-medium text-[#1C1917] hover:underline"
                    >
                      {COMPANY_INFO.generalEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#991B1B] shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-xs text-[#78716C] block">Finance &amp; Shareholders</span>
                    <a
                      href={`mailto:${COMPANY_INFO.financeEmail}`}
                      className="font-medium text-[#1C1917] hover:underline"
                    >
                      {COMPANY_INFO.financeEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-[#E5E0D8]">
                  <Clock className="w-4 h-4 text-[#991B1B] shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-xs text-[#78716C] block">Corporate Office Hours</span>
                    <span className="text-[#1C1917]">{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right 7 Cols: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E5E0D8] rounded-lg p-7 sm:p-10">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <CheckCircle2
                    className="w-12 h-12 text-[#15803D] mx-auto"
                    aria-hidden="true"
                  />
                  <h2 className="font-display text-2xl font-semibold text-[#1C1917]">
                    Enquiry Received
                  </h2>
                  <p className="text-sm sm:text-base text-[#44403C] max-w-md mx-auto leading-relaxed">
                    Thank you for contacting Bahrain Family Leisure Company B.S.C. Our corporate
                    office team will review your <strong>{enquiryType}</strong> message and
                    respond during office hours.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-5 py-2.5 text-sm font-semibold text-[#1C1917] border border-[#D6D3D1] hover:border-[#1C1917] rounded-md transition-colors"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="space-y-1">
                    <h2 className="font-display text-2xl font-semibold text-[#1C1917]">
                      Send an Enquiry
                    </h2>
                    <p className="text-sm text-[#57534E]">
                      Complete the form below and our relevant department will respond promptly.
                    </p>
                  </div>

                  {errorMsg && (
                    <div
                      role="alert"
                      className="p-3.5 text-sm text-[#991B1B] bg-[#FEF2F2] border border-[#FECACA] rounded-md"
                    >
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium text-[#44403C] mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[#D6D3D1] rounded-md text-[#1C1917] focus:outline-none focus:bg-white focus:border-[#991B1B]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium text-[#44403C] mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[#D6D3D1] rounded-md text-[#1C1917] focus:outline-none focus:bg-white focus:border-[#991B1B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-medium text-[#44403C] mb-1.5"
                      >
                        Telephone (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+973 ..."
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[#D6D3D1] rounded-md text-[#1C1917] focus:outline-none focus:bg-white focus:border-[#991B1B]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-type"
                        className="block text-xs font-medium text-[#44403C] mb-1.5"
                      >
                        Enquiry Department
                      </label>
                      <select
                        id="contact-type"
                        value={enquiryType}
                        onChange={(e) => setEnquiryType(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[#D6D3D1] rounded-md text-[#1C1917] focus:outline-none focus:bg-white focus:border-[#991B1B]"
                      >
                        {ENQUIRY_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-[#44403C] mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="Share details of your enquiry..."
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[#D6D3D1] rounded-md text-[#1C1917] focus:outline-none focus:bg-white focus:border-[#991B1B]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#991B1B] hover:bg-[#7F1D1D] rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#991B1B]"
                    >
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
