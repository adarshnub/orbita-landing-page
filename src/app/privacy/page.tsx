import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Orbita',
  description: 'Privacy Policy for Orbita Messenger and Orbita Task Manager.',
};

const updatedAt = 'June 23, 2026';
const contactEmail = 'hello@orbita.ai';

const sections = [
  {
    title: 'Information we collect',
    body:
      'Orbita collects the phone number used for OTP sign-in, display name, profile details you choose to add, contacts you choose to sync, messages, task-thread content, attachments, voice notes, device push tokens, and basic technical logs needed to keep the service secure and reliable.',
  },
  {
    title: 'How we use information',
    body:
      'We use this information to create and secure accounts, deliver messages and notifications, sync contacts, show task conversations, process media and voice notes, connect Orbita with Task Manager agents, prevent abuse, troubleshoot errors, and improve app reliability.',
  },
  {
    title: 'Contacts',
    body:
      'If you grant contacts permission, Orbita reads phone numbers from your device contacts to help you find people who already use Orbita. We do not sell contacts. You can deny or revoke contacts permission in device settings.',
  },
  {
    title: 'Voice notes and media',
    body:
      'When you record a voice note or upload a photo, document, audio file, or other attachment, the file is uploaded so it can be delivered to people in that conversation or task thread. Microphone and media access are used only when you choose those features.',
  },
  {
    title: 'Task Manager and AI agent conversations',
    body:
      'If an organization links Task Manager with Orbita, messages in agent chats and task threads may be processed by the organization systems and AI agent features so tasks can be created, updated, assigned, and discussed with the right participants.',
  },
  {
    title: 'Sharing and service providers',
    body:
      'We share data only as needed to provide Orbita, including with infrastructure providers such as Supabase, Railway, Expo push notification services, and organization systems connected to Task Manager. We do not sell personal information.',
  },
  {
    title: 'Security and retention',
    body:
      'We use access controls, authenticated APIs, storage protections, and transport encryption to protect data in transit and at rest. We keep information for as long as needed to provide the service, comply with legal obligations, resolve disputes, and maintain security.',
  },
  {
    title: 'Your choices',
    body:
      'You can update your profile, sign out, revoke device permissions, stop syncing contacts, and request account or data deletion by contacting us. Some organization-managed data may also be controlled by your organization administrator.',
  },
  {
    title: 'Children',
    body:
      'Orbita is intended for workplace and organization communication. It is not directed to children, and we do not knowingly collect personal information from children.',
  },
  {
    title: 'Changes to this policy',
    body:
      'We may update this Privacy Policy as Orbita changes. When we make material changes, we will update the effective date and provide notice where appropriate.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-void px-4 pb-12 pt-28 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(85,214,255,0.14),transparent_28rem),radial-gradient(circle_at_82%_18%,rgba(242,244,123,0.13),transparent_24rem)]" />

      <div className="mx-auto w-full max-w-5xl">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 text-sm font-black text-white/72 no-underline backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-acid/35 hover:text-acid"
        >
          <ArrowLeft size={16} />
          Back to Orbita
        </Link>

        <section className="mt-8 overflow-hidden rounded-[34px] border border-white/10 bg-[#151A2A]/82 shadow-panel backdrop-blur-2xl">
          <div className="border-b border-white/10 bg-[radial-gradient(circle_at_18%_0%,rgba(242,244,123,0.18),transparent_26rem)] p-7 sm:p-10">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-acid/25 bg-acid/10 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-acid">
              <ShieldCheck size={15} />
              Privacy Policy
            </div>
            <h1 className="max-w-3xl font-display text-[clamp(2.35rem,5vw,4.9rem)] font-semibold leading-[0.98] tracking-normal">
              How Orbita handles your data
            </h1>
            <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-white/62">
              This Privacy Policy explains what information Orbita Messenger and Orbita Task Manager collect, how it is used, and the choices available to you.
            </p>
            <p className="mt-6 text-sm font-black uppercase tracking-[0.16em] text-white/42">Last updated: {updatedAt}</p>
          </div>

          <div className="grid gap-px bg-white/10 lg:grid-cols-2">
            {sections.map(section => (
              <article key={section.title} className="bg-[#101421]/94 p-6 sm:p-7">
                <h2 className="text-xl font-black tracking-normal text-white">{section.title}</h2>
                <p className="mt-3 text-sm font-semibold leading-7 text-white/60">{section.body}</p>
              </article>
            ))}
          </div>

          <div className="m-4 rounded-[24px] border border-acid/20 bg-acid/10 p-5 sm:m-6 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-acid text-[#171224]">
                <Mail size={20} />
              </span>
              <div>
                <h2 className="text-xl font-black tracking-normal">Contact us</h2>
                <p className="mt-2 text-sm font-semibold leading-7 text-white/62">
                  For privacy questions, account deletion, or data requests, contact us at{' '}
                  <a href={`mailto:${contactEmail}`} className="font-black text-acid no-underline hover:underline">
                    {contactEmail}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
