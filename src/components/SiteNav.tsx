'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';
import GooeyNav from '@/components/GooeyNav';

const labels = [
  { label: 'Flow', homeHref: '#how', pageHref: '/#how' },
  { label: 'Channels', homeHref: '#channels', pageHref: '/#channels' },
  { label: 'Product', homeHref: '#product', pageHref: '/#product' },
  { label: 'Console', homeHref: '#console', pageHref: '/#console' },
  { label: 'Pricing', homeHref: '/pricing', pageHref: '/pricing' },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [navCompressed, setNavCompressed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const isPricing = pathname === '/pricing';

  const navItems = useMemo(
    () =>
      labels.map(item => ({
        label: item.label,
        href: pathname === '/' ? item.homeHref : item.pageHref,
      })),
    [pathname]
  );

  useEffect(() => {
    let frame = 0;

    const updateNav = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setNavCompressed(window.scrollY > 18);
      });
    };

    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateNav);
    };
  }, [pathname]);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed left-1/2 top-3 z-50 flex -translate-x-1/2 items-center justify-between gap-2 rounded-[26px] border border-transparent px-3 py-3 shadow-panel backdrop-blur-2xl transition-[width,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        navCompressed
          ? 'w-[min(1320px,calc(100%-24px))] bg-panel/78'
          : 'w-[min(1440px,calc(100%-24px))] bg-panel/58'
      }`}
    >
      <Link href="/" className="flex items-center gap-3 rounded-full pl-1 pr-3 text-ink no-underline">
        <span className="grid size-10 place-items-center rounded-[14px] border border-acid/35 bg-iris/45 font-display text-2xl font-bold text-acid shadow-halo">
          O
        </span>
        <span className="text-sm font-extrabold tracking-[0.18em]">ORBITA</span>
      </Link>

      <div className="hidden md:block">
        <GooeyNav
          key={pathname}
          items={navItems}
          initialActiveIndex={isPricing ? navItems.findIndex(item => item.href === '/pricing') : 0}
          particleCount={10}
          particleDistances={[42, 8]}
          particleR={58}
          animationTime={430}
          timeVariance={180}
          colors={[1, 2, 3, 4]}
        />
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          aria-expanded={mobileNavOpen}
          aria-label="Open navigation"
          onClick={() => setMobileNavOpen(open => !open)}
          className="grid size-10 place-items-center rounded-full bg-white/[0.08] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/[0.12] md:hidden"
        >
          {mobileNavOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
        <a
          href="mailto:hello@orbita.ai"
          className="inline-flex min-h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-acid/30 bg-acid px-3 text-sm font-black text-[#171224] no-underline shadow-acid transition hover:-translate-y-0.5 sm:px-4"
        >
          Book demo <ArrowRight size={16} />
        </a>
      </div>

      <div
        className={`absolute inset-x-0 top-[calc(100%+0.6rem)] z-50 overflow-hidden rounded-[24px] bg-[#080A10] p-2 shadow-[0_32px_100px_rgba(0,0,0,0.86)] ring-1 ring-white/12 transition-all duration-300 md:hidden ${
          mobileNavOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-[#080A10]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-iris/24 to-[#080A10]" />
        <div className="relative z-10 grid gap-1">
          {navItems.map(item => {
            const active = isPricing && item.href === '/pricing';

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileNavOpen(false)}
                className={`rounded-[18px] px-4 py-3 text-sm font-black no-underline transition ${
                  active ? 'bg-acid text-[#171224]' : 'bg-[#151A2A] text-white/86 hover:bg-[#1B2235] hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
