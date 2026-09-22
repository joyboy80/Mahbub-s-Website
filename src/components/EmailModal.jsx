import React, { useState } from 'react';
import { X, Mail, Send, Check, Copy, ExternalLink, Sparkles } from 'lucide-react';
import { contactDetails } from '../data/portfolioData';

export default function EmailModal({ isOpen, onClose, initialSubject = '', initialMessage = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: initialSubject,
    message: initialMessage
  });
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  if (!isOpen) return null;

  const targetEmail = contactDetails.email;
  const subjectText = formData.subject || `Portfolio Inquiry from ${formData.name || 'Visitor'}`;
  const bodyText = `Hi Mahbubur Rahman (Joy),\n\n${formData.message || 'I would like to get in touch with you regarding your portfolio and projects.'}\n\nBest regards,\n${formData.name || 'Visitor'}\n${formData.email ? `Email: ${formData.email}` : ''}`;

  // 1. Direct Web Gmail composer URL
  const handleGmailWeb = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    setStatusMessage('Opening in Gmail web composer...');
    setTimeout(() => setStatusMessage(''), 4000);
  };

  // 2. Default mailto client URL
  const handleDefaultMailto = () => {
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoUrl;
    setStatusMessage('Triggering your device default mail application...');
    setTimeout(() => setStatusMessage(''), 4000);
  };

  // 3. Outlook Web composer URL
  const handleOutlookWeb = () => {
    const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(targetEmail)}&subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
    window.open(outlookUrl, '_blank', 'noopener,noreferrer');
    setStatusMessage('Opening in Outlook web composer...');
    setTimeout(() => setStatusMessage(''), 4000);
  };

  // 4. One-click Copy Email & Template
  const handleCopyDetails = () => {
    const textToCopy = `To: ${targetEmail}\nSubject: ${subjectText}\n\n${bodyText}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setStatusMessage('Email address & message copied to clipboard!');
    setTimeout(() => {
      setCopied(false);
      setStatusMessage('');
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl glass-card border border-white/20 p-5 sm:p-7 shadow-2xl bg-slate-950/95 max-h-[92vh] overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                Send Direct Email
              </h3>
              <p className="text-xs font-mono text-cyan-300">
                To: <span className="text-white font-medium">{targetEmail}</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input Form */}
        <div className="space-y-3.5 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-mono text-slate-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-400 text-slate-100 text-xs outline-none transition-all placeholder:text-slate-600"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono text-slate-300 mb-1">
                Your Email
              </label>
              <input
                type="email"
                placeholder="e.g. john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-400 text-slate-100 text-xs outline-none transition-all placeholder:text-slate-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-mono text-slate-300 mb-1">
              Subject
            </label>
            <input
              type="text"
              placeholder="e.g. Collaboration / Project Opportunity"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-400 text-slate-100 text-xs outline-none transition-all placeholder:text-slate-600"
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono text-slate-300 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Write your message here..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-400 text-slate-100 text-xs outline-none transition-all placeholder:text-slate-600 resize-none"
            />
          </div>
        </div>

        {/* Status Feedback */}
        {statusMessage && (
          <div className="mb-4 p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center gap-2 animate-in fade-in">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Action Options */}
        <div>
          <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
            Choose How to Send:
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* 1. Gmail Web */}
            <button
              type="button"
              onClick={handleGmailWeb}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-500/20 to-red-600/20 hover:from-red-500/30 hover:to-red-600/30 text-red-300 border border-red-500/30 text-xs font-mono font-medium transition-all"
            >
              <span>Gmail Web Browser</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            {/* 2. Default Mail App */}
            <button
              type="button"
              onClick={handleDefaultMailto}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs font-mono transition-all hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Default Mail App</span>
            </button>

            {/* 3. Outlook Web */}
            <button
              type="button"
              onClick={handleOutlookWeb}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 border border-blue-500/30 text-xs font-mono transition-all"
            >
              <span>Outlook Web</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            {/* 4. Copy Email & Template */}
            <button
              type="button"
              onClick={handleCopyDetails}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-mono transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Email & Text'}</span>
            </button>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-white/5 text-center">
          <p className="text-[10px] font-mono text-slate-400">
            Works universally across mobile devices, tablets, and desktop browsers.
          </p>
        </div>
      </div>
    </div>
  );
}
