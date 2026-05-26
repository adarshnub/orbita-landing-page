import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle2,
  Database,
  Headphones,
  MessageSquareText,
  Rocket,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing | Orbita',
  description: 'Orbita pricing for chat-first teams using WhatsApp, email, SMS, and Orbita Messenger.',
};

const plans = [
  {
    name: 'Starter',
    price: '₹4,999',
    setup: '₹9,999 setup',
    accent: 'from-success/28 to-success/5',
    badge: 'For first teams',
    summary: 'Start with one leader and a single WhatsApp number.',
    features: [
      '1 active leader',
      'Up to 10 staff members',
      '30 messages per day',
      '1 WhatsApp channel',
      '500 MB storage',
      'Email support',
    ],
    setupIncludes: 'Onboarding call, agent setup, WhatsApp number registration',
  },
  {
    name: 'Professional',
    price: '₹12,999',
    setup: '₹24,999 setup',
    accent: 'from-acid/34 to-acid/5',
    badge: 'Most popular',
    summary: 'For daily operations with managers, briefs, and priority support.',
    features: [
      'Up to 3 active agents',
      'Up to 30 staff members',
      '100 messages per day',
      'WhatsApp + email',
      '2 GB storage',
      'Daily morning + evening briefs',
      'Priority + WhatsApp support',
    ],
    setupIncludes: 'Starter setup, custom agent tailoring, 1 training session',
    featured: true,
  },
  {
    name: 'Business',
    price: '₹29,999',
    setup: '₹59,999 setup',
    accent: 'from-orange-400/28 to-orange-400/5',
    badge: 'For growing teams',
    summary: 'Multi-channel operations with custom agents and integrations.',
    features: [
      'Unlimited active agents',
      'Unlimited staff members',
      '500 messages per day',
      'WhatsApp, email, and SMS',
      'Custom agents',
      '10 GB storage',
      'Dedicated account manager',
      '1 custom integration per month',
    ],
    setupIncludes: 'Professional setup, up to 3 custom agents, 2-day onsite enablement',
  },
  {
    name: 'Enterprise',
    price: '₹75,000+',
    setup: 'Custom setup',
    accent: 'from-signal/30 to-signal/5',
    badge: 'Custom',
    summary: 'For regulated, high-volume, or dedicated infrastructure needs.',
    features: [
      'Everything in Business',
      'Dedicated infrastructure',
      'SLA + uptime guarantee',
      'Custom plugins',
      'On-premise option',
      'Data residency + audit logs',
    ],
    setupIncludes: 'Scoped separately for security, infra, integrations, and rollout',
  },
];

const included = [
  { icon: Bot, label: 'AI agent workflows' },
  { icon: MessageSquareText, label: 'Chat-to-work tracking' },
  { icon: ShieldCheck, label: 'Audit review loop' },
  { icon: Database, label: 'Operations memory' },
];

export default function PricingPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-void text-ink">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(122,94,214,0.28),transparent_34rem),radial-gradient(circle_at_82%_22%,rgba(242,244,123,0.14),transparent_24rem),linear-gradient(180deg,#101421_0%,#121827_52%,#0b0e18_100%)]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-20 h-px bg-gradient-to-r from-transparent via-acid to-transparent opacity-80" />

      <nav className="fixed left-1/2 top-3 z-50 flex w-[min(1180px,calc(100%-24px))] -translate-x-1/2 items-center justify-between rounded-[26px] border border-white/10 bg-panel/72 px-3 py-3 shadow-panel backdrop-blur-2xl">
        <Link href="/" className="flex items-center gap-3 rounded-full pl-1 pr-3 text-ink no-underline">
          <span className="grid size-10 place-items-center rounded-[14px] border border-acid/35 bg-iris/45 font-display text-2xl font-bold text-acid shadow-halo">
            O
          </span>
          <span className="text-sm font-extrabold tracking-[0.18em]">ORBITA</span>
        </Link>
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
          <Link href="/#how" className="rounded-full px-4 py-2 text-sm font-bold text-white/72 no-underline transition hover:text-white">
            Flow
          </Link>
          <Link href="/#channels" className="rounded-full px-4 py-2 text-sm font-bold text-white/72 no-underline transition hover:text-white">
            Channels
          </Link>
          <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#171224]">Pricing</span>
          <Link href="/#fit" className="rounded-full px-4 py-2 text-sm font-bold text-white/72 no-underline transition hover:text-white">
            Fit
          </Link>
        </div>
        <a
          href="mailto:hello@orbita.ai"
          className="inline-flex min-h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-acid/30 bg-acid px-4 text-sm font-black text-[#171224] no-underline shadow-acid transition hover:-translate-y-0.5"
        >
          Book demo <ArrowRight size={16} />
        </a>
      </nav>

      <section className="mx-auto w-[min(1320px,calc(100%-24px))] pb-14 pt-32 sm:pt-36">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-signal no-underline">
          <ArrowLeft size={16} />
          Back to Orbita
        </Link>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-acid">Pricing</p>
            <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,3.3vw,3.85rem)] font-semibold leading-[1.02] tracking-normal">
              Pricing for every stage.
            </h1>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-[#151A2A]/76 p-6 shadow-panel backdrop-blur-xl">
            <p className="text-xl font-black leading-8">
              Monthly plans include Orbita workflows, agent memory, and audit reviews.
            </p>
            <p className="mt-3 text-sm font-semibold leading-6 text-white/58">
              One-time setup is shown separately so onboarding, channel registration, and agent tailoring stay transparent.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {included.map(item => (
            <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <item.icon className="text-acid" size={22} />
              <span className="text-sm font-black text-white/76">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-[min(1320px,calc(100%-24px))] gap-4 pb-16 lg:grid-cols-2 2xl:grid-cols-4">
        {plans.map(plan => (
          <article
            key={plan.name}
            className={`relative flex min-h-[620px] flex-col overflow-hidden rounded-[30px] border p-6 shadow-panel backdrop-blur-2xl ${
              plan.featured
                ? 'border-acid/40 bg-[#171E31]/92 shadow-acid'
                : 'border-white/10 bg-[#151A2A]/82'
            }`}
          >
            <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${plan.accent}`} />
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-white/58">
                  {plan.badge}
                </span>
                {plan.featured ? <Sparkles className="text-acid" size={22} /> : <Rocket className="text-signal" size={22} />}
              </div>

              <h2 className="mt-8 text-2xl font-black tracking-normal sm:text-[1.65rem]">{plan.name}</h2>
              <div className="mt-4 flex min-w-0 flex-nowrap items-end gap-x-1">
                <span className="min-w-0 font-hero text-[clamp(1.85rem,2.35vw,2.2rem)] font-medium leading-none text-acid">{plan.price}</span>
                <span className="shrink-0 pb-0.5 text-xs font-black text-white/48">/month</span>
              </div>
              <p className="mt-4 min-h-[72px] text-base font-semibold leading-6 text-white/62">{plan.summary}</p>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map(feature => (
                  <li key={feature} className="flex gap-3 text-sm font-bold leading-5 text-white/78">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-acid" size={17} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 rounded-[22px] border border-white/10 bg-void/56 p-4">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-white/42">One-time setup</p>
                <p className="mt-2 text-xl font-black text-white">{plan.setup}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-white/55">{plan.setupIncludes}</p>
              </div>

              <a
                href="mailto:hello@orbita.ai"
                className={`mt-5 inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 text-sm font-black no-underline transition hover:-translate-y-1 ${
                  plan.featured ? 'bg-acid text-[#171224] shadow-acid' : 'border border-white/14 bg-white/[0.06] text-white'
                }`}
              >
                Book demo <ArrowRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto w-[min(1320px,calc(100%-24px))] pb-10">
        <div className="grid gap-4 rounded-[32px] border border-acid/20 bg-acid p-6 text-[#171224] shadow-acid md:grid-cols-[1fr_auto] md:items-center sm:p-8">
          <div>
            <Headphones className="mb-4" size={30} />
            <h2 className="font-display text-[clamp(2rem,3vw,3rem)] font-semibold leading-tight tracking-normal">Need a scoped rollout?</h2>
            <p className="mt-3 max-w-2xl text-base font-bold leading-7 opacity-75">
              We can map channels, message volume, agent roles, and setup before you pick a plan.
            </p>
          </div>
          <a
            href="mailto:hello@orbita.ai"
            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-full bg-[#171224] px-7 text-sm font-black text-white no-underline transition hover:-translate-y-1"
          >
            Talk to us <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}
