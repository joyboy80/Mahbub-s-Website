import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';
import { Github, Linkedin, Facebook, Instagram, WhatsApp } from './SocialIcons';
import { SectionHeader, Reveal, SpotlightCard, Magnetic } from './ui';
import { contactDetails } from '../data/portfolioData';

const socialIcons = { Github, Linkedin, Facebook, Instagram };

export function buildMail({ name, email, subject, message }) {
  const su = subject || `Portfolio Inquiry from ${name || 'Visitor'}`;
  const body = `Hi Mahbubur Rahman (Joy),\n\n${message || 'I would like to get in touch with you regarding your portfolio and projects.'}\n\nBest regards,\n${name || 'Visitor'}\n${email ? `Email: ${email}` : ''}`;
  const to = contactDetails.email;
  return {
    subject: su,
    body,
    mailto: `mailto:${to}?subject=${encodeURIComponent(su)}&body=${encodeURIComponent(body)}`,
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(su)}&body=${encodeURIComponent(body)}`,
    outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(to)}&subject=${encodeURIComponent(su)}&body=${encodeURIComponent(body)}`,
  };
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('');

  const flash = (msg) => {
    setStatus(msg);
    setTimeout(() => setStatus(''), 4000);
  };
  const copyEmail = () => {
    navigator.clipboard?.writeText(contactDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const mail = buildMail(form);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const channels = [
    { icon: Mail, label: 'Email', value: contactDetails.email, href: `mailto:${contactDetails.email}`, tint: 'from-violet-500/30 text-violet-100' },
    { icon: WhatsApp, label: 'WhatsApp', value: contactDetails.whatsappNumber, href: contactDetails.whatsappUrl, tint: 'from-emerald-400/30 text-emerald-100', ext: true },
    { icon: Phone, label: 'Phone', value: contactDetails.phone, href: `tel:${contactDetails.phone.replace(/\s/g, '')}`, tint: 'from-cyan-400/30 text-cyan-100' },
    { icon: MapPin, label: 'Location', value: contactDetails.location, tint: 'from-pink-400/30 text-pink-100' },
  ];

  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="08"
          eyebrow="Contact"
          title="Let's build something"
          highlight="together."
          subtitle="Have a project, research idea or opportunity? My inbox is always open."
          center
        />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          {/* Channels */}
          <div className="flex flex-col gap-4">
            {channels.map((c, i) => {
              const Inner = (
                <div className="flex items-center gap-4">
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br to-transparent ring-1 ring-white/10 ${c.tint}`}>
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-zinc-500">{c.label}</p>
                    <p className="font-medium text-white [overflow-wrap:anywhere]">{c.value}</p>
                  </div>
                  {c.href && <ArrowUpRight className="h-5 w-5 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />}
                </div>
              );
              return (
                <Reveal key={c.label} delay={i * 70}>
                  {c.href ? (
                    <SpotlightCard as="a" href={c.href} target={c.ext ? '_blank' : undefined} rel="noreferrer" className="group block rounded-2xl p-4">
                      {Inner}
                    </SpotlightCard>
                  ) : (
                    <SpotlightCard className="rounded-2xl p-4">{Inner}</SpotlightCard>
                  )}
                </Reveal>
              );
            })}

            <Reveal delay={300}>
              <div className="card rounded-2xl p-5">
                <p className="text-xs uppercase tracking-wider text-zinc-500">Find me online</p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {contactDetails.socials.map((s) => {
                    const Icon = socialIcons[s.icon];
                    return (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 text-sm text-zinc-300 transition-all hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
                      >
                        <Icon className="h-4 w-4" />
                        {s.name}
                        <ArrowUpRight className="ml-auto h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={120}>
            <div className="card h-full rounded-3xl p-5 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">Send a message</h3>
                  <p className="mt-1 text-sm text-zinc-500">Opens in your favourite mail app, pre-filled.</p>
                </div>
                <button onClick={copyEmail} className="btn-ghost shrink-0 px-4 py-2 text-xs">
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-300" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? 'Copied!' : 'Copy email'}
                </button>
              </div>

              <form
                className="mt-6 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = mail.mailto;
                  flash('Opening your mail app…');
                }}
              >
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input className="input" placeholder="Your name" value={form.name} onChange={set('name')} />
                  <input className="input" type="email" placeholder="Your email" value={form.email} onChange={set('email')} />
                </div>
                <input className="input" placeholder="Subject" value={form.subject} onChange={set('subject')} />
                <textarea className="input resize-none" rows={5} placeholder="Tell me about your idea…" value={form.message} onChange={set('message')} />

                <div className="grid grid-cols-2 gap-2 pt-2 sm:flex sm:flex-wrap sm:items-center">
                  <Magnetic strength={0.2} className="col-span-2 sm:col-span-1">
                    <button type="submit" className="btn-primary group w-full sm:w-auto">
                      <span className="btn-shine" />
                      <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      Send message
                    </button>
                  </Magnetic>
                  <button
                    type="button"
                    onClick={() => {
                      window.open(mail.gmail, '_blank', 'noopener,noreferrer');
                      flash('Opened Gmail in a new tab.');
                    }}
                    className="btn-ghost px-4 py-3 text-[13px]"
                  >
                    Gmail <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      window.open(mail.outlook, '_blank', 'noopener,noreferrer');
                      flash('Opened Outlook in a new tab.');
                    }}
                    className="btn-ghost px-4 py-3 text-[13px]"
                  >
                    Outlook <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </div>
                {status && (
                  <p className="flex animate-fade-in items-center gap-2 text-sm text-cyan-200">
                    <Sparkles className="h-4 w-4" /> {status}
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
