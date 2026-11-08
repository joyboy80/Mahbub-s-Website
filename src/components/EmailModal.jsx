import React, { useEffect, useState } from 'react';
import { X, Mail, Send, Check, Copy, ExternalLink, Sparkles } from 'lucide-react';
import { contactDetails } from '../data/portfolioData';
import { buildMail } from './Contact';

export default function EmailModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const mail = buildMail(form);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const flash = (m) => {
    setStatus(m);
    setTimeout(() => setStatus(''), 3500);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-4">
      <div className="absolute inset-0 animate-fade-in bg-ink-950/80 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-lg animate-pop-in overflow-hidden rounded-t-3xl border border-white/10 bg-ink-900/95 shadow-[0_40px_120px_-20px_rgba(139,92,246,0.5)] backdrop-blur-2xl sm:rounded-3xl max-h-[92vh] overflow-y-auto no-scrollbar">
        <div className="h-1 w-full bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-300" />
        <div className="p-5 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-white shadow-lg">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">Say hello 👋</h3>
                <p className="text-sm text-zinc-400">{contactDetails.email}</p>
              </div>
            </div>
            <button onClick={onClose} className="btn-icon h-10 w-10" aria-label="Close">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 space-y-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input className="input" placeholder="Your name" value={form.name} onChange={set('name')} autoFocus />
              <input className="input" type="email" placeholder="Your email" value={form.email} onChange={set('email')} />
            </div>
            <input className="input" placeholder="Subject" value={form.subject} onChange={set('subject')} />
            <textarea className="input resize-none" rows={4} placeholder="Write your message…" value={form.message} onChange={set('message')} />
          </div>

          {status && (
            <p className="mt-4 flex animate-fade-in items-center gap-2 text-sm text-cyan-200">
              <Sparkles className="h-4 w-4" /> {status}
            </p>
          )}

          <div className="mt-6 grid gap-2 sm:grid-cols-2 grid-cols-1">
            <button
              onClick={() => {
                window.location.href = mail.mailto;
                flash('Opening your mail app…');
              }}
              className="btn-primary sm:col-span-2"
            >
              <span className="btn-shine" />
              <Send className="h-4 w-4" /> Send with mail app
            </button>
            <button
              onClick={() => {
                window.open(mail.gmail, '_blank', 'noopener,noreferrer');
                flash('Opened Gmail in a new tab.');
              }}
              className="btn-ghost py-3 text-[13px]"
            >
              Gmail <ExternalLink className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => {
                window.open(mail.outlook, '_blank', 'noopener,noreferrer');
                flash('Opened Outlook in a new tab.');
              }}
              className="btn-ghost py-3 text-[13px]"
            >
              Outlook <ExternalLink className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(`To: ${contactDetails.email}\nSubject: ${mail.subject}\n\n${mail.body}`);
                setCopied(true);
                flash('Email & message copied to clipboard.');
                setTimeout(() => setCopied(false), 2500);
              }}
              className="btn-ghost py-3 text-[13px] sm:col-span-2"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy email & message'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
