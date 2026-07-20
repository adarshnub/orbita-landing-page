'use client';

import NextImage from 'next/image';
import Link from 'next/link';
import {
  AtSign,
  ArrowRight,
  Apple,
  BarChart3,
  BellRing,
  Bot,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Command,
  FileText,
  GitBranch,
  Image as ImageIcon,
  Languages,
  ListFilter,
  MonitorSmartphone,
  MoreVertical,
  MessageSquareText,
  Mic2,
  Paperclip,
  Play,
  Send,
  ShieldCheck,
  Sparkles,
  Smartphone,
  UserCog,
  UserRoundCheck,
  UsersRound,
  Volume2,
  WifiOff,
} from 'lucide-react';
import AnimatedContent from '@/components/AnimatedContent';
import PlasmaWave from '@/components/PlasmaWave';
import RotatingText from '@/components/RotatingText';
import SpotlightCard from '@/components/SpotlightCard';

const flows = [
  { icon: MessageSquareText, label: 'Message', text: 'Chats, files, and voice notes.' },
  { icon: Sparkles, label: 'Agent', text: 'Finds intent, owner, and next step.' },
  { icon: CheckCircle2, label: 'Closure', text: 'Followed until it is done.' },
];

const channelChoices = [
  {
    name: 'WhatsApp',
    text: 'Fast rollout for teams already there.',
    features: ['Natural-language tasks', 'Voice tasks', 'Team notifications'],
  },
  {
    name: 'Orbita Messenger',
    text: 'Web and mobile when work needs richer context.',
    features: ['Task threads', '@ departments', 'Offline queue'],
  },
];

const appDemo = [
  { icon: Volume2, title: 'Voice note', meta: '0:42', text: 'Delay reason, ETA, owner' },
  { icon: FileText, title: 'Permit.pdf', meta: '2.1 MB', text: 'Scope and checklist extracted' },
  { icon: ImageIcon, title: 'Site proof', meta: 'Image', text: 'Progress detected' },
];

const proof = [
  ['4', 'pilot verticals'],
  ['2', 'launch channels'],
  ['24/7', 'ops memory'],
];

const useCases = [
  {
    title: 'Builders',
    text: 'Site updates, material delays, photos, approvals, and subcontractor follow-ups stay tied to the job.',
    tags: ['Proof photos', 'Owner handoff', 'ETA checks'],
  },
  {
    title: 'Taxi dispatch',
    text: 'Trip requests, driver assignment, missed pickups, and customer replies become one tracked dispatch loop.',
    tags: ['Driver owner', 'Route notes', 'Escalations'],
  },
  {
    title: 'Hospital shifts',
    text: 'Shift notes, patient-room requests, supply issues, and supervisor approvals do not disappear between teams.',
    tags: ['Shift memory', 'Priority flags', 'Audit trail'],
  },
  {
    title: 'Production crews',
    text: 'Line issues, QC proof, downtime reasons, and next-shift actions are captured while work is still moving.',
    tags: ['QC proof', 'Downtime reason', 'Next shift'],
  },
];

const workspaceFeatures = [
  { icon: Building2, title: 'Model the company', text: 'Organizations, branches, departments, and reporting lines.' },
  { icon: UsersRound, title: 'Share membership', text: 'One employee can belong to multiple departments.' },
  { icon: UserCog, title: 'Protect ownership', text: 'Roles, blocked assigners, and task-level permissions.' },
];

const productCapabilities = [
  {
    icon: GitBranch,
    eyebrow: 'Task rooms',
    title: 'Every task gets a working room.',
    text: 'Tasks and subtasks open as dedicated chat groups with their own members, messages, files, status, and clear assignee.',
    tags: ['Task + subtask chat', 'Member controls', 'Close safeguards'],
  },
  {
    icon: WifiOff,
    eyebrow: 'Field ready',
    title: 'Work keeps moving through weak networks.',
    text: 'Messages queue locally, retry safely, and sync with read states, replies, forwarding, attachments, and push notifications.',
    tags: ['Offline queue', 'Realtime sync', 'Push alerts'],
  },
  {
    icon: ListFilter,
    eyebrow: 'Task focus',
    title: 'Your task view stays yours.',
    text: 'Search and filter by status, organization, or department. Filters persist when you open a task, and recent activity rises to the top.',
    tags: ['Persistent filters', 'Activity ordering', 'Unread counts'],
  },
  {
    icon: UserRoundCheck,
    eyebrow: 'Organization',
    title: 'People fit the real org chart.',
    text: 'Employees can sit in multiple departments, appear with every membership on the org canvas, and be added to any task or subtask.',
    tags: ['Multi-department', 'Org canvas', 'Full org roster'],
  },
  {
    icon: BarChart3,
    eyebrow: 'Control room',
    title: 'Managers see the whole operation.',
    text: 'Track task health, overdue work, employee load, chat history, reports, settings, channel links, and layered AI instructions.',
    tags: ['Reports', 'AI auditor', 'Org instructions'],
  },
];

const adminShowcase = [
  {
    image: '/showcase/admin-org-canvas.png',
    eyebrow: 'Org canvas',
    title: 'Map who reports to whom.',
    text: 'Drag people around the tree, see task pressure at a glance, and keep department context visible on every employee.',
    points: ['Reporting lines', 'Active and overdue tasks', 'Multiple departments'],
  },
  {
    image: '/showcase/admin-departments.png',
    eyebrow: 'Departments',
    title: 'Teach the agent how each team works.',
    text: 'Create departments, add members, write department-level instructions, and keep role ownership clear before the first message lands.',
    points: ['Department memory', 'Members and leads', 'AI instructions'],
  },
  {
    image: '/showcase/admin-employees-orbita.png',
    eyebrow: 'Employee channels',
    title: 'Choose WhatsApp or Orbita per person.',
    text: 'Some employees stay in WhatsApp. Others use Orbita Messenger for richer updates with voice, files, photos, and persistent context.',
    points: ['WhatsApp numbers', 'Orbita linking', 'Blocked assigners'],
  },
];

const consoleLoop = [
  {
    icon: Building2,
    label: 'Configure',
    text: 'Departments, employees, reporting lines, and channel routing live in the admin panel.',
  },
  {
    icon: MessageSquareText,
    label: 'Converse',
    text: 'Employees keep using WhatsApp or switch to Orbita Messenger for richer field updates.',
  },
  {
    icon: ClipboardCheck,
    label: 'Track',
    text: 'The agent turns those messages into owners, tasks, overdue signals, and proof checks.',
  },
];

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-void text-ink">
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-20 h-px bg-gradient-to-r from-transparent via-acid to-transparent opacity-80" />

      <section id="top" className="relative min-h-[100svh] overflow-hidden px-3 pb-5 pt-20 sm:px-6 sm:pt-24 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(122,94,214,0.26),transparent_34rem),radial-gradient(circle_at_78%_34%,rgba(85,214,255,0.14),transparent_24rem),linear-gradient(180deg,rgba(16,20,33,0)_0%,rgba(16,20,33,0.22)_52%,#101421_100%)]" />
          <div className="absolute inset-x-[-32vw] top-0 h-[82svh] opacity-55 mix-blend-screen [mask-image:linear-gradient(180deg,transparent_0%,black_8%,black_70%,transparent_100%)] sm:inset-x-[-20vw] md:inset-x-[-12vw] md:h-[86svh] md:opacity-62">
            <PlasmaWave
              colors={['#7A5ED6', '#55D6FF']}
              rotationDeg={-4}
              focalLength={1.08}
              speed1={0.032}
              speed2={0.046}
              bend1={0.72}
              bend2={0.48}
              xOffset={0}
              yOffset={-64}
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_38%,rgba(16,20,33,0.48)_74%,#101421_100%)]" />
          <div className="absolute inset-x-0 bottom-[-1px] h-[46svh] bg-[linear-gradient(180deg,rgba(16,20,33,0)_0%,rgba(16,20,33,0.22)_34%,rgba(16,20,33,0.66)_68%,#101421_100%)]" />
        </div>

        <AnimatedContent className="mx-auto flex min-h-[calc(100svh-5.4rem)] w-full max-w-[1320px] flex-col items-center justify-center text-center sm:min-h-[calc(100svh-7.25rem)] lg:pt-32">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.07] px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.16em] text-acid backdrop-blur-xl sm:px-4 sm:text-xs sm:tracking-[0.2em]">
            <Command size={15} />
            AI-native messaging
          </div>
          <h1 className="mx-auto max-w-[1280px] translate-x-[0.02em] font-hero text-[clamp(2.85rem,6.6vw,6.2rem)] font-semibold leading-[0.94] tracking-normal text-white sm:whitespace-nowrap">
            Orbita
          </h1>
          <div className="mx-auto mt-4 grid w-full max-w-4xl grid-cols-1 items-center justify-center justify-items-center gap-2 text-[clamp(1.25rem,2.4vw,2.45rem)] font-black leading-none sm:mt-6 md:w-auto md:grid-cols-[auto_23rem] md:gap-4">
            <span className="whitespace-nowrap md:justify-self-end">Every message</span>
            <RotatingText
              texts={['assigned', 'tracked', 'summarized', 'closed']}
              mainClassName="isolate inline-flex h-[2.35rem] w-[17.5rem] max-w-full items-center justify-center overflow-hidden rounded-full border border-acid/35 bg-[#111634]/92 px-5 text-acid shadow-[0_0_46px_rgba(242,244,123,0.26)] ring-1 ring-white/10 before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(110deg,transparent_0%,rgba(242,244,123,0.16)_45%,transparent_70%)] before:opacity-70 sm:h-[1.32em] md:w-full"
              splitLevelClassName="items-center leading-none will-change-transform"
              elementLevelClassName="leading-none will-change-transform"
              splitBy="words"
              staggerDuration={0}
              rotationInterval={2200}
              animatePresenceMode="wait"
              initial={{ y: '115%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-115%', opacity: 0 }}
              transition={{ type: 'tween', duration: 0.34, ease: 'easeOut' }}
            />
          </div>
          <p className="mx-auto mt-5 max-w-[19rem] text-balance text-base font-semibold leading-7 text-white/72 sm:max-w-2xl sm:mt-6 md:text-lg">
            AI operations for teams that run work through chat.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-7">
            <a
              href="#how"
              className="inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 text-sm font-black text-[#171224] no-underline transition hover:-translate-y-1 sm:min-h-14"
            >
              See the loop <Play size={16} fill="currentColor" />
            </a>
            <a
              href="#channels"
              className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/16 bg-white/[0.06] px-6 text-sm font-black text-white no-underline backdrop-blur-xl transition hover:-translate-y-1 hover:border-acid/45 sm:min-h-14"
            >
              Explore channels <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-8 grid w-full max-w-[1120px] grid-cols-3 gap-2 sm:mt-12 sm:gap-4">
            {proof.map(([value, label]) => (
              <div
                key={label}
                className="min-h-[92px] rounded-[18px] border border-white/10 bg-[#151A2A]/76 p-3 text-center shadow-panel backdrop-blur-xl sm:min-h-[132px] sm:rounded-[24px] sm:p-5"
              >
                <strong className="block font-hero text-[2rem] font-medium leading-none text-acid sm:text-5xl">{value}</strong>
                <span className="mt-2 block text-[0.56rem] font-black uppercase leading-[1.25] tracking-[0.08em] text-white/62 sm:mt-3 sm:text-xs sm:tracking-[0.12em]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </AnimatedContent>
      </section>

      <section id="how" className="mx-auto w-[min(1320px,calc(100%-24px))] scroll-mt-2 py-20">
        <AnimatedContent className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-signal">The whole product in 9 seconds</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.05rem,3.5vw,3.7rem)] font-semibold leading-[1.02] tracking-normal">Same chats. Better outcomes.</h2>
        </AnimatedContent>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {flows.map((flow, index) => (
            <AnimatedContent key={flow.label} delay={index * 0.08} distance={54}>
              <SpotlightCard
                spotlightColor={index === 1 ? 'rgba(242, 244, 123, 0.2)' : 'rgba(122, 94, 214, 0.24)'}
                className="group min-h-[260px] rounded-[26px] border-white/10 bg-[#151A2A]/86 p-7 shadow-panel backdrop-blur-2xl"
              >
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <flow.icon className={index === 1 ? 'text-acid transition group-hover:scale-110' : 'text-signal transition group-hover:scale-110'} size={34} />
                  <div>
                    <span className="font-hero text-sm font-semibold text-acid/88">0{index + 1}</span>
                    <h3 className="mt-3 text-3xl font-black tracking-normal">{flow.label}</h3>
                    <p className="mt-3 text-lg font-semibold leading-7 text-white/62">{flow.text}</p>
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>

        <AnimatedContent className="mt-4 grid overflow-hidden rounded-[30px] border border-white/10 bg-[#151A2A]/80 shadow-panel backdrop-blur-2xl lg:grid-cols-[1fr_0.82fr]">
          <div className="relative p-7 sm:p-9">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-acid/16 to-transparent" />
            <div className="relative z-10">
              <div className="mb-8 inline-flex size-12 items-center justify-center rounded-2xl border border-acid/25 bg-acid/10 text-acid shadow-acid">
                <ClipboardCheck size={25} />
              </div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-acid">Audit loop</p>
              <h3 className="mt-4 max-w-2xl text-[clamp(1.9rem,3vw,3rem)] font-black leading-tight tracking-normal">
                Agents get sharper every day.
              </h3>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/62">
                Review owners, intent, proof, and missed steps. Orbita turns corrections into memory for the next shift.
              </p>
            </div>
          </div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-3 lg:grid-cols-1">
            {['Intent fixed', 'Proof checked', 'Rule remembered'].map((item, index) => (
              <div key={item} className="bg-void/74 p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-full bg-acid font-hero text-sm font-semibold text-[#171224]">
                    {index + 1}
                  </span>
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-white/48">Daily review</span>
                </div>
                <p className="text-2xl font-black tracking-normal">{item}</p>
              </div>
            ))}
          </div>
        </AnimatedContent>
      </section>

      <section id="channels" className="relative mx-auto w-[min(1320px,calc(100%-24px))] scroll-mt-2 py-20">
        <AnimatedContent className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-acid">Channels</p>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.05rem,3.4vw,3.65rem)] font-semibold leading-[1.02] tracking-normal">Start simple. Upgrade when needed.</h2>
          </div>
          <p className="max-w-sm text-lg font-semibold leading-8 text-white/62">
            WhatsApp gets teams started. Orbita Messenger unlocks richer field context.
          </p>
        </AnimatedContent>

        <div className="mt-10 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4">
            {channelChoices.map((channel, index) => (
              <AnimatedContent key={channel.name} delay={index * 0.06} distance={48}>
                <SpotlightCard
                  spotlightColor={index === 0 ? 'rgba(85, 214, 255, 0.18)' : 'rgba(242, 244, 123, 0.2)'}
                  className="min-h-[250px] rounded-[28px] border-white/10 bg-[#151A2A]/82 p-7 shadow-panel backdrop-blur-2xl"
                >
                  <div className="relative z-10 flex h-full flex-col justify-between gap-7">
                    <div className="flex items-center justify-between gap-4">
                      <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-acid">
                        {index === 0 ? <MessageSquareText size={25} /> : <Smartphone size={25} />}
                      </div>
                      <span className="text-xs font-black uppercase tracking-[0.16em] text-white/42">
                        {index === 0 ? 'Channel' : 'Mobile app'}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-black tracking-normal">{channel.name}</h3>
                      <p className="mt-3 text-lg font-semibold leading-7 text-white/62">{channel.text}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {channel.features.map(feature => (
                        <span
                          key={feature}
                          className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-black uppercase tracking-[0.11em] text-white/68"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </AnimatedContent>
            ))}
          </div>

          <AnimatedContent delay={0.1} distance={54} className="relative min-h-[620px] overflow-hidden rounded-[32px] border border-white/10 bg-[#151A2A]/78 p-5 shadow-panel backdrop-blur-2xl sm:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(242,244,123,0.16),transparent_26rem),radial-gradient(circle_at_15%_80%,rgba(85,214,255,0.13),transparent_22rem)]" />
            <div className="relative z-10 mx-auto flex h-full max-w-[390px] flex-col overflow-hidden rounded-[38px] border-[10px] border-[#080A10] bg-[#101421] shadow-[0_32px_100px_rgba(0,0,0,0.5)] ring-1 ring-white/18">
              <div className="flex h-7 items-center justify-between bg-[#080A10] px-7 text-[0.62rem] font-black text-white/72">
                <span>10:24</span>
                <span className="h-1.5 w-16 rounded-full bg-white/16" />
                <span>5G 84%</span>
              </div>

              <div className="flex min-h-[74px] items-center justify-between gap-3 border-b border-acid/12 bg-[#171E31] px-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#6551C4] font-hero text-base font-semibold text-acid">O</span>
                  <div className="min-w-0">
                    <p className="truncate text-[1.02rem] font-black text-white">Builder crew</p>
                    <p className="mt-0.5 text-xs font-semibold text-white/70">Orbita agent typing...</p>
                  </div>
                </div>
                <MoreVertical className="shrink-0 text-white/70" size={22} />
              </div>

              <div className="flex flex-1 flex-col gap-3 bg-[#101421] p-[18px]">
                <div className="mx-auto rounded-full bg-white/12 px-3 py-1.5 text-[0.7rem] font-black text-white/70">
                  TODAY
                </div>
                <div className="w-[78%] rounded-[14px] rounded-tl bg-[#1B2235] p-[11px] ring-1 ring-white/10">
                  <p className="text-[0.93rem] font-semibold leading-5 text-white">Need slab pour proof before 6 PM.</p>
                  <p className="mt-1 text-right text-[0.63rem] text-white/42">10:12</p>
                </div>
                {appDemo.map(item => (
                  <div key={item.title} className="ml-auto w-[90%] rounded-[14px] rounded-tr bg-[#6B55C8] p-[11px] text-white">
                    <div className="flex items-center gap-3 rounded-xl bg-white/14 p-2.5">
                      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-[#6551C4]">
                        <item.icon size={17} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-black">{item.title}</p>
                        <p className="mt-0.5 text-xs text-white/72">{item.meta}</p>
                      </div>
                    </div>
                    <p className="mt-2 text-sm font-semibold leading-5 text-white/86">{item.text}</p>
                    <p className="mt-1 text-right text-[0.63rem] text-white/62">10:18</p>
                  </div>
                ))}
                <div className="w-[86%] rounded-[14px] rounded-tl bg-[#1B2235] p-[11px] ring-1 ring-white/10">
                  <div className="mb-1.5 flex items-center gap-2 text-acid">
                    <Bot size={15} />
                    <span className="text-[0.7rem] font-black uppercase tracking-[0.12em]">Agent update</span>
                  </div>
                  <p className="text-[0.9rem] font-semibold leading-5 text-white/88">Owner assigned. Proof accepted. Follow-up scheduled.</p>
                  <p className="mt-1 text-right text-[0.63rem] text-white/42">10:19</p>
                </div>
              </div>

              <div className="flex items-end gap-2 border-t border-white/10 bg-[#101421] px-3 py-3">
                <button className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-acid" aria-label="Attach file">
                  <Paperclip size={18} />
                </button>
                <div className="flex min-h-10 flex-1 items-center rounded-full bg-white/[0.08] px-4 text-sm font-semibold text-white/45">
                  Message
                </div>
                <button className="grid size-11 shrink-0 place-items-center rounded-full bg-[#6551C4] text-white shadow-halo" aria-label="Send message">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section id="product" className="relative mx-auto w-[min(1320px,calc(100%-24px))] scroll-mt-24 py-20">
        <div className="pointer-events-none absolute inset-x-[12%] top-1/3 -z-10 h-72 rounded-full bg-iris/14 blur-[110px]" />
        <AnimatedContent className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-signal">Inside the product</p>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.05rem,3.4vw,3.65rem)] font-semibold leading-[1.02] tracking-normal">
              Messaging that understands how your organization works.
            </h2>
          </div>
          <p className="max-w-2xl text-lg font-semibold leading-8 text-white/62 lg:justify-self-end">
            Orbita connects the conversation, the people involved, and the one person accountable—without turning everyday work into form filling.
          </p>
        </AnimatedContent>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <AnimatedContent distance={50}>
            <SpotlightCard
              spotlightColor="rgba(242, 244, 123, 0.22)"
              className="h-full min-h-[430px] overflow-hidden rounded-[32px] border-acid/16 bg-[#151A2A]/86 p-7 shadow-panel backdrop-blur-2xl sm:p-9"
            >
              <div className="relative z-10 flex h-full flex-col justify-between gap-10">
                <div>
                  <span className="grid size-14 place-items-center rounded-[20px] border border-acid/24 bg-acid/10 text-acid shadow-acid">
                    <AtSign size={28} />
                  </span>
                  <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-acid">People-aware mentions</p>
                  <h3 className="mt-4 max-w-2xl text-[clamp(2rem,3.1vw,3.25rem)] font-black leading-[1.03] tracking-normal">
                    Mention one owner. Bring in the whole department.
                  </h3>
                  <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/62">
                    Type @ to find people first, Orbita next, and departments after. A department mention adds its members to the task room and notifies them, while the explicit person mention remains the assignee.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-[#0D111E]/82 p-4 ring-1 ring-acid/5 sm:p-5">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-white/38">Voice task recipient</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-black">
                    <span className="rounded-full bg-acid px-3 py-2 text-[#171224]">@Subeesh</span>
                    <span className="rounded-full border border-signal/25 bg-signal/10 px-3 py-2 text-signal">@Fabricators</span>
                    <span className="text-white/45">send the site update tomorrow</span>
                  </div>
                  <div className="mt-5 grid gap-2 sm:grid-cols-3">
                    {[
                      ['Assignee', 'Subeesh'],
                      ['Task members', 'Fabricators'],
                      ['Fallback', 'Assign to sender'],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.045] p-3">
                        <span className="block text-[0.62rem] font-black uppercase tracking-[0.13em] text-white/38">{label}</span>
                        <strong className="mt-1.5 block text-sm text-white/84">{value}</strong>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 flex items-center gap-2 text-xs font-bold leading-5 text-white/46">
                    <Mic2 className="shrink-0 text-acid" size={15} />
                    On voice notes, the typed @ recipient takes priority over names heard in the recording.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </AnimatedContent>

          <div className="grid gap-4 sm:grid-cols-2">
            {productCapabilities.map((item, index) => (
              <AnimatedContent
                key={item.title}
                delay={index * 0.045}
                distance={42}
                className={index === productCapabilities.length - 1 ? 'sm:col-span-2' : ''}
              >
                <SpotlightCard
                  spotlightColor={index % 2 ? 'rgba(85, 214, 255, 0.17)' : 'rgba(122, 94, 214, 0.2)'}
                  className="group h-full min-h-[250px] rounded-[28px] border-white/10 bg-[#151A2A]/80 p-6 shadow-panel backdrop-blur-2xl"
                >
                  <div className="relative z-10 flex h-full flex-col justify-between gap-7">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <item.icon className="text-signal transition duration-300 group-hover:-translate-y-1 group-hover:text-acid" size={27} />
                        <span className="text-[0.64rem] font-black uppercase tracking-[0.17em] text-white/34">{item.eyebrow}</span>
                      </div>
                      <h3 className="mt-6 text-2xl font-black leading-tight tracking-normal text-white">{item.title}</h3>
                      <p className="mt-3 text-sm font-semibold leading-6 text-white/58">{item.text}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map(tag => (
                        <span key={tag} className="rounded-full border border-white/9 bg-white/[0.045] px-2.5 py-1.5 text-[0.6rem] font-black uppercase tracking-[0.09em] text-white/46">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </AnimatedContent>
            ))}
          </div>
        </div>

        <AnimatedContent className="mt-4 grid gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 sm:grid-cols-3">
          {[
            { icon: Languages, label: 'English, Malayalam, Tamil & Hindi' },
            { icon: BellRing, label: 'Task and department notifications' },
            { icon: ShieldCheck, label: 'Tenant isolation and ownership rules' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-3 bg-[#101421]/95 p-5 text-sm font-black text-white/62">
              <item.icon className="shrink-0 text-acid" size={20} />
              {item.label}
            </div>
          ))}
        </AnimatedContent>
      </section>

      <section id="console" className="mx-auto w-[min(1320px,calc(100%-24px))] scroll-mt-24 py-20">
        <AnimatedContent className="grid gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-acid">Admin console</p>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.05rem,3.4vw,3.65rem)] font-semibold leading-[1.02] tracking-normal">
              Orbita Task Manager is the control room behind Orbita.
            </h2>
          </div>
          <p className="max-w-2xl text-lg font-semibold leading-8 text-white/62 lg:justify-self-end">
            Operators configure the company once in the admin panel. Employees keep working from WhatsApp or Orbita Messenger. The agent uses the console rules, org chart, and channel settings to turn messages into tracked work.
          </p>
        </AnimatedContent>

        <div className="mt-10 grid gap-4">
          <div className="grid gap-3 md:grid-cols-3">
            {consoleLoop.map((item, index) => (
              <AnimatedContent key={item.label} delay={index * 0.05} distance={34}>
                <div className="flex h-full gap-4 rounded-[24px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-acid/20 bg-acid/10 text-acid">
                    <item.icon size={22} />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-acid">0{index + 1} / {item.label}</p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white/62">{item.text}</p>
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>

          <AnimatedContent className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#151A2A]/82 p-3 shadow-panel backdrop-blur-2xl sm:p-4 lg:p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_0%,rgba(85,214,255,0.16),transparent_26rem),radial-gradient(circle_at_82%_18%,rgba(242,244,123,0.15),transparent_22rem)]" />
            <div className="relative z-10 overflow-hidden rounded-[26px] border border-white/10 bg-[#080A10]/70">
              <div className="flex items-center justify-between border-b border-white/10 bg-[#0D111E]/92 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-danger" />
                  <span className="size-3 rounded-full bg-acid" />
                  <span className="size-3 rounded-full bg-success" />
                </div>
                <span className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-white/42">Admin panel / organization canvas</span>
              </div>
              <NextImage
                src={adminShowcase[0].image}
                alt="Orbita Task Manager admin organization canvas with employee nodes and task counts"
                width={1440}
                height={920}
                className="block h-auto w-full"
                priority
              />
            </div>
          </AnimatedContent>

          <div className="grid gap-4 lg:grid-cols-3">
            {adminShowcase.map((item, index) => (
              <AnimatedContent key={item.title} delay={index * 0.06} distance={48}>
                <SpotlightCard
                  spotlightColor={index === 1 ? 'rgba(242, 244, 123, 0.18)' : 'rgba(85, 214, 255, 0.16)'}
                  className="group h-full overflow-hidden rounded-[28px] border-white/10 bg-[#151A2A]/82 p-3 shadow-panel backdrop-blur-2xl"
                >
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#080A10]/60">
                      <NextImage
                        src={item.image}
                        alt={`${item.title} admin panel screenshot`}
                        width={1440}
                        height={920}
                        className="aspect-[16/10] w-full object-cover object-top opacity-92 transition duration-500 group-hover:scale-[1.025] group-hover:opacity-100"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-6 p-4 sm:p-5">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-acid">{item.eyebrow}</p>
                        <h3 className="mt-3 text-2xl font-black tracking-normal text-white">{item.title}</h3>
                        <p className="mt-3 text-sm font-semibold leading-6 text-white/60">{item.text}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.points.map(point => (
                          <span
                            key={point}
                            className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-[0.66rem] font-black uppercase tracking-[0.1em] text-white/58"
                          >
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      <section id="messenger" className="mx-auto w-[min(1320px,calc(100%-24px))] scroll-mt-24 py-20">
        <AnimatedContent className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#151A2A]/82 p-7 shadow-panel backdrop-blur-2xl sm:p-9">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(85,214,255,0.16),transparent_24rem),radial-gradient(circle_at_82%_22%,rgba(242,244,123,0.13),transparent_22rem)]" />
            <div className="relative z-10">
              <div className="mb-8 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-signal/20 bg-signal/10 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-signal">
                  <MonitorSmartphone size={15} />
                  Web app
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-acid/20 bg-acid/10 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-acid">
                  <Smartphone size={15} />
                  Android app
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-white/70">
                  <Apple size={15} />
                  iOS app
                </span>
              </div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-signal">Orbita Messenger</p>
              <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.05rem,3.3vw,3.55rem)] font-semibold leading-[1.02] tracking-normal">
                One messenger for chat and tracked work.
              </h2>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/62">
                Use Orbita on web or mobile for real-time chats, task and subtask rooms, voice, PDFs, images, mentions, and reliable field updates.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <SpotlightCard spotlightColor="rgba(242, 244, 123, 0.18)" className="rounded-[30px] border-white/10 bg-[#151A2A]/82 p-7 shadow-panel backdrop-blur-2xl sm:p-8">
              <div className="relative z-10">
                <MessageSquareText className="text-acid" size={30} />
                <p className="mt-7 text-sm font-black uppercase tracking-[0.22em] text-acid">Orbita Task Manager</p>
                <h3 className="mt-3 text-3xl font-black tracking-normal">Turn conversations into accountable task rooms.</h3>
                <p className="mt-3 text-lg font-semibold leading-8 text-white/62">
                  Create tasks and subtasks from WhatsApp or Orbita, assign one owner, notify the right teams, and keep every update attached to the work.
                </p>
              </div>
            </SpotlightCard>

            <div className="grid gap-3 sm:grid-cols-3">
              {workspaceFeatures.map(feature => (
                <div key={feature.title} className="rounded-[24px] border border-white/10 bg-white/[0.045] p-5">
                  <feature.icon className="text-signal" size={24} />
                  <h4 className="mt-5 text-lg font-black tracking-normal">{feature.title}</h4>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/58">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedContent>
      </section>

      <section id="fit" className="mx-auto grid w-[min(1320px,calc(100%-24px))] scroll-mt-2 gap-4 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <AnimatedContent className="flex min-h-[420px] flex-col justify-between rounded-[30px] border border-white/10 bg-[#151A2A]/82 p-7 shadow-panel backdrop-blur-xl sm:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-acid">Teams</p>
            <h2 className="mt-4 font-display text-[clamp(2.05rem,3.3vw,3.55rem)] font-semibold leading-[1.02] tracking-normal">Work hides in chat.</h2>
          </div>
          <div className="max-w-xl">
            <p className="text-xl font-semibold leading-8 text-white/66">
              Orbita finds the owner, asks for proof, catches blockers, and remembers what each team needs next.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {['Owner', 'Proof', 'Follow-up'].map(item => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3">
                  <span className="text-xs font-black uppercase tracking-[0.14em] text-white/42">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedContent>

        <div className="grid gap-4 sm:grid-cols-2">
          {useCases.map((item, index) => (
            <AnimatedContent key={item.title} delay={index * 0.06} distance={46}>
              <SpotlightCard
                spotlightColor="rgba(85, 214, 255, 0.2)"
                className="min-h-[238px] rounded-[26px] border-white/10 bg-[#151A2A]/78 p-6 shadow-panel backdrop-blur-2xl"
              >
                <div className="relative z-10 flex h-full flex-col justify-between gap-7">
                  <div>
                    <ShieldCheck className="text-acid" size={28} />
                    <h3 className="mt-4 text-3xl font-black tracking-normal">{item.title}</h3>
                    <p className="mt-3 text-sm font-semibold leading-6 text-white/58">{item.text}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.1em] text-white/55">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1320px,calc(100%-24px))] pb-10 pt-16">
        <AnimatedContent className="relative overflow-hidden rounded-[34px] border border-acid/25 bg-acid p-7 text-[#171224] shadow-acid sm:p-10">
          <div className="absolute inset-x-[-20%] top-0 h-20 bg-white/35 blur-3xl animate-rail" />
          <div className="relative z-10 flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div>
              <Mic2 className="mb-6" size={34} />
              <h2 className="font-display text-[clamp(2rem,3.2vw,3.45rem)] font-semibold leading-[1.02] tracking-normal">Ready for your first orbit?</h2>
            </div>
            <a
              href="mailto:hello@orbita.ai"
              className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-full bg-[#171224] px-7 text-sm font-black text-white no-underline transition hover:-translate-y-1"
            >
              Book demo <ArrowRight size={16} />
            </a>
          </div>
        </AnimatedContent>
      </section>

      <footer className="mx-auto flex w-[min(1320px,calc(100%-24px))] flex-col gap-4 border-t border-white/10 py-8 text-sm font-semibold text-white/46 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Orbita. AI-native messaging for chat-first teams.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy" className="text-white/62 no-underline transition hover:text-acid">
            Privacy Policy
          </Link>
          <a href="mailto:hello@orbita.ai" className="text-white/62 no-underline transition hover:text-acid">
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
