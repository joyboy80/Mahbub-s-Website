import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight, 
  Download,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { Github, Linkedin, Facebook, Instagram } from './SocialIcons';
import { contactDetails, personalInfo } from '../data/portfolioData';

const socialIcons = {
  Github,
  Linkedin,
  Facebook,
  Instagram
};

export default function Contact({ onOpenEmailModal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getSubjectText = () =>
    formData.subject || `Portfolio Inquiry from ${formData.name || 'Visitor'}`;

  const getBodyText = () =>
    `Hi Mahbubur Rahman (Joy),\n\n${formData.message || 'I would like to get in touch with you regarding your portfolio and projects.'}\n\nBest regards,\n${formData.name || 'Visitor'}\n${formData.email ? `Email: ${formData.email}` : ''}`;

  // 1. Default Mail App
  const handleDefaultMailto = (e) => {
    if (e) e.preventDefault();
    const mailtoUrl = `mailto:${contactDetails.email}?subject=${encodeURIComponent(
      getSubjectText()
    )}&body=${encodeURIComponent(getBodyText())}`;
    window.location.href = mailtoUrl;
    setStatusMessage('Triggered your device mail application.');
    setTimeout(() => setStatusMessage(''), 5000);
  };

  // 2. Gmail Web
  const handleGmailWeb = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      contactDetails.email
    )}&su=${encodeURIComponent(getSubjectText())}&body=${encodeURIComponent(getBodyText())}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    setStatusMessage('Opened Gmail web composer in a new tab.');
    setTimeout(() => setStatusMessage(''), 5000);
  };

  // 3. Outlook Web
  const handleOutlookWeb = () => {
    const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(
      contactDetails.email
    )}&subject=${encodeURIComponent(getSubjectText())}&body=${encodeURIComponent(getBodyText())}`;
    window.open(outlookUrl, '_blank', 'noopener,noreferrer');
    setStatusMessage('Opened Outlook web composer in a new tab.');
    setTimeout(() => setStatusMessage(''), 5000);
  };

  // 4. Copy Details
  const handleCopyFullMessage = () => {
    const textToCopy = `To: ${contactDetails.email}\nSubject: ${getSubjectText()}\n\n${getBodyText()}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedAll(true);
    setStatusMessage('Email address & message text copied to clipboard!');
    setTimeout(() => {
      setCopiedAll(false);
      setStatusMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <span className="text-cyan-400 font-bold">08 //</span>
            <span>COMMUNICATION CHANNELS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Let's <span className="text-gradient-cyan">Connect</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-light">
            I am always eager to discuss engineering opportunities, machine learning research, software projects, or academic ideas.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Info & Social Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card with Copy button */}
            <div className="p-4 sm:p-5 rounded-2xl glass-card border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 sm:gap-3.5 overflow-hidden">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase text-slate-400 block">Direct Email</span>
                    <button
                      onClick={onOpenEmailModal || handleGmailWeb}
                      className="text-xs sm:text-sm font-mono text-white group-hover:text-cyan-300 transition-colors font-medium truncate block text-left hover:underline"
                    >
                      {contactDetails.email}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/5 transition-all relative"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    {copiedEmail && (
                      <span className="absolute -top-7 right-0 text-[10px] font-mono bg-emerald-500 text-slate-950 font-bold px-1.5 py-0.5 rounded shadow">
                        Copied!
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Direct Phone / Call Card */}
            <div className="p-4 sm:p-5 rounded-2xl glass-card border border-white/10 hover:border-purple-500/40 transition-all duration-300 group">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase text-slate-400 block">Direct Phone</span>
                    <a
                      href={`tel:${contactDetails.phone}`}
                      className="text-xs sm:text-sm font-mono text-white group-hover:text-purple-300 transition-colors font-medium block"
                    >
                      {contactDetails.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${contactDetails.phone}`}
                  className="px-3 py-1.5 rounded-xl bg-purple-500/15 text-purple-300 text-xs font-mono border border-purple-500/30 hover:bg-purple-500/25 transition-all shrink-0"
                >
                  Call
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-4 sm:p-5 rounded-2xl glass-card border border-white/10 hover:border-emerald-500/40 transition-all duration-300 group">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase text-slate-400 block">WhatsApp</span>
                    <a
                      href={contactDetails.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs sm:text-sm font-mono text-white group-hover:text-emerald-300 transition-colors font-medium block"
                    >
                      {contactDetails.whatsappNumber}
                    </a>
                  </div>
                </div>

                <a
                  href={contactDetails.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-emerald-500/15 text-emerald-300 text-xs font-mono border border-emerald-500/30 hover:bg-emerald-500/25 transition-all flex items-center gap-1 shrink-0"
                >
                  <span>Chat</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Social Grid */}
            <div className="pt-2">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Social Profiles & Networks
              </h4>
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                {contactDetails.socials.map((soc, idx) => {
                  const Icon = socialIcons[soc.icon] || Github;
                  return (
                    <a
                      key={idx}
                      href={soc.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 sm:p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-cyan-500/30 transition-all flex items-center gap-2 group"
                    >
                      <Icon className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 transition-colors shrink-0" />
                      <div className="overflow-hidden">
                        <div className="text-xs font-medium text-slate-200 group-hover:text-white transition-colors truncate">
                          {soc.name}
                        </div>
                        <div className="text-[10px] font-mono text-slate-500 truncate">
                          {soc.username}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick CV Download card */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-blue-950/40 to-purple-950/40 border border-white/10 flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-heading font-bold text-white">Need a PDF Copy?</div>
                <div className="text-[11px] font-mono text-slate-400">Verified academic & technical resume</div>
              </div>
              <a
                href={personalInfo.cvUrl}
                download="Mahbubur_Rahman_CV.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 text-xs font-mono border border-cyan-500/40 transition-all shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF</span>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 lg:p-9 rounded-3xl glass-card border border-white/10 relative">
              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="font-heading font-bold text-lg sm:text-2xl text-white">
                  Send a Direct Message
                </h3>
                {onOpenEmailModal && (
                  <button
                    onClick={onOpenEmailModal}
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono hover:bg-purple-500/25 transition-all"
                  >
                    <Sparkles className="w-3 h-3 text-purple-400" />
                    <span>Quick Modal</span>
                  </button>
                )}
              </div>
              
              <p className="text-xs sm:text-sm text-slate-400 font-light mb-6">
                Fill in your thoughts below. You can send via Gmail web, your device's default mail app, Outlook web, or copy the formatted text.
              </p>

              <form onSubmit={handleDefaultMailto} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-500/50 text-slate-200 text-xs sm:text-sm outline-none transition-all placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-500/50 text-slate-200 text-xs sm:text-sm outline-none transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Project Discussion / Research Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-500/50 text-slate-200 text-xs sm:text-sm outline-none transition-all placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-500/50 text-slate-200 text-xs sm:text-sm outline-none transition-all placeholder:text-slate-600 resize-none"
                  />
                </div>

                {statusMessage && (
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Sending Options Grid */}
                <div className="pt-2">
                  <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                    Choose Your Sending Method:
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {/* 1. Gmail Web */}
                    <button
                      type="button"
                      onClick={handleGmailWeb}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-red-500/20 to-red-600/20 hover:from-red-500/30 hover:to-red-600/30 text-red-300 border border-red-500/30 text-xs font-mono font-medium transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open in Gmail (Web)</span>
                    </button>

                    {/* 2. Default App */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-slate-950 font-bold text-xs font-mono shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition-all"
                    >
                      <Send className="w-3.5 h-3.5 text-slate-950" />
                      <span>Default Mail App</span>
                    </button>

                    {/* 3. Outlook Web */}
                    <button
                      type="button"
                      onClick={handleOutlookWeb}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 border border-blue-500/30 text-xs font-mono transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open in Outlook (Web)</span>
                    </button>

                    {/* 4. Copy Email & Text */}
                    <button
                      type="button"
                      onClick={handleCopyFullMessage}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-mono transition-all"
                    >
                      {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedAll ? 'Copied to Clipboard' : 'Copy Email & Message'}</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
