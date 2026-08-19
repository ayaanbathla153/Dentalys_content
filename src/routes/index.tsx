import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import CalendarPicker from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Activity,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock,
  Grid3X3,
  HeartPulse,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  Shield,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Logo } from "@/components/site/Logo";
import { Reveal } from "@/components/site/Reveal";
import ToothIcon from "@/components/icons/ToothIcon";


import heroEditorial from "@/assets/clinic/clinic-hero-editorial.jpg";
import receptionDesk from "@/assets/clinic/reception-desk.jpg";
import dentalysOverview from "@/assets/clinic/dentalys-overview.mp4";
import treatmentcare from "@/assets/clinic/treatment-care.jpg";
import treatmentCare from "@/assets/clinic/treatment-care.jpg";
import collage from "@/assets/clinic/collage-dentalys.jpg";
import collageDesktop from "@/assets/clinic/web-collage.jpg";
import dentalysLogo from "@/assets/clinic/dentalys logo + text.png";
import pediatricCare from "@/assets/clinic/pediatric-care.jpg";
import drTreating from "@/assets/clinic/dr-treating.jpg";
import treatmentRoom from "@/assets/clinic/treatment-room.jpg";
import beforeAfter1 from "@/assets/clinic/before-after-1.jpg";
import beforeAfter2 from "@/assets/clinic/before-after-2.jpg";
import fullMouth from "@/assets/clinic/full-mouth.jpg";
import consultation from "@/assets/clinic/consultation.jpg";
import exteriorClose from "@/assets/clinic/team.jpg";
import exteriorTall from "@/assets/clinic/exterior-tall.jpg";
import receptionWide from "@/assets/clinic/reception-wide.jpg";
import sterilisation from "@/assets/clinic/sterilisation.jpg";
import receptionPanoV2 from "@/assets/clinic/reception-pano-v2.jpg";
import drNeha from "@/assets/clinic/dr-neha.jpg";
import drTanya from "@/assets/clinic/dr-tanya.jpg";
import drMukul from "@/assets/clinic/dr-mukul.jpg";
import drSaurabh from "@/assets/clinic/dr-saurabh.jpg";
import { Arrow } from "@radix-ui/react-context-menu";

/* ---------- Tiny presentational helpers ---------- */

function Eyebrow({ children, tone = "bronze" }: { children: React.ReactNode; tone?: "bronze" | "sage" }) {
  return (
    <span
      className={`text-[0.68rem] font-medium uppercase tracking-[0.28em] ${tone === "sage" ? "text-accent" : "text-bronze"
        }`}
    >
      {children}
    </span>
  );
}

function PrimaryCta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="
group
inline-flex
items-center
gap-2
rounded-full
bg-accent
px-6
py-3
text-sm
font-medium
text-accent-foreground
shadow-[0_8px_24px_-12px_oklch(0.55_0.062_148/0.35)]
transition-all
duration-300
ease-out

hover:-translate-y-[2px]
hover:scale-[1.02]
hover:bg-accent/95
hover:shadow-[0_18px_40px_-14px_oklch(0.55_0.062_148/0.45)]

active:translate-y-0
active:scale-[0.98]
"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"/>
    </a>
  );
}

function GhostCta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-cream/60 px-6 py-3 text-sm text-foreground transition hover:bg-cream"
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-foreground/90 text-cream">
        <span className="block h-0 w-0 border-y-4 border-l-[6px] border-y-transparent border-l-cream" />
      </span>
      {children}
    </a>
  );
}
const SectionDivider = () => (
  <div
    aria-hidden="true"
    className="mx-auto mt-20 mb-22 h-[2px] w-38 md:mt-20 md:mb-15 md:w-[510px]"
    style={{
      background:
        "linear-gradient(90deg, transparent, #5F7F63 30%, #5F7F63 70%, transparent)",
    }}
  />
);
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dentalys — Premium Multi-Speciality Dental Care, Faridabad" },
      {
        name: "description",
        content:
          "Dentalys is a calm, modern dental studio offering painless rotary RCT, smile designing, implants and aligners — quietly delivered in a luxurious clinic setting.",
      },
      { property: "og:title", content: "Dentalys — Care that feels like you." },
      {
        property: "og:description",
        content:
          "A premium multi-speciality dental studio. Painless dentistry, calm interiors, and a team that listens.",
      },
    ],
  }),
  component: HomePage,
});

function Hero({ heroRef }: { heroRef: React.RefObject<HTMLElement | null> }) {
  return (
  <section
    ref={heroRef}
    id="hero"
    className="relative flex min-h-[auto] items-start overflow-hidden bg-sand lg:min-h-screen lg:items-center"
  >
    {/* Right Editorial Image */}
    {/* Full Width Background Image */}
<div className="hidden lg:block absolute top-[68px] bottom-0 overflow-hidden right-0 left-47 z-0">
  <div
  className="absolute inset-y-0 left-0 z-20 w-[50%]"
  style={{
    background: `
      linear-gradient(
        to right,
        rgba(247,239,226,0.92) 0%,
        rgba(247,239,226,0.82) 18%,
        rgba(247,239,226,0.62) 36%,
        rgba(247,239,226,0.34) 56%,
        rgba(247,239,226,0.12) 76%,
        rgba(247,239,226,0.03) 90%,
        transparent 100%
      )
    `,
  }}
/>
  <img
  
    src={heroEditorial}
    alt="Dentalys Interior"
    className="h-full w-full object-contain object-[65%_center] brightness-[0.93] scale-[1.08]"
  />

  {/* Editorial Ivory Overlay */}
  <div
    className="absolute inset-0"
    style={{
      background: `
        linear-gradient(
  to right,
  rgba(239,231,220,0.97) 0%,
  rgba(239,231,220,0.93) 20%,
  rgba(239,231,220,0.78) 38%,
  rgba(239,231,220,0.42) 56%,
  rgba(239,231,220,0.16) 74%,
  transparent 90%
)
        linear-gradient(
          to top,
          rgba(62,48,36,0.08),
          transparent 30%
        )
      `,
    }}
  />
</div>
{/* Warm Ambient Blend */}
<div
  className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[42%]"
  style={{
    background: `
      radial-gradient(
        circle at 78% 42%,
        rgba(255,244,225,0.22) 0%,
        rgba(255,244,225,0.10) 18%,
        transparent 42%
      )
    `,
  }}
/>

    {/* Main Content */}
    <div className="relative z-30 w-full px-5 lg:container-luxe lg:px-0">
      <div className="page-canvas mx-auto">

        <div className="grid grid-cols-1 items-center lg:min-h-screen lg:grid-cols-12">

          {/* Left Content */}
          <div className="hero-copy flex flex-col justify-center pt-20 pb-16 lg:pt-28 lg:pb-24 lg:col-span-5 lg:pl-6">

            {/* Mobile-only: full-bleed editorial image */}
            <div className="lg:hidden -mx-5 mb-0 relative">
              <img
                src={heroEditorial}
                alt="Dentalys clinic interior"
                className="h-[340px] w-full object-cover object-[62%_38%] brightness-[0.96]"
              />
              {/* Gradient fade into the sand background below */}
              <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
                style={{
                  background: `linear-gradient(to bottom, transparent 0%, oklch(0.945 0.022 80) 100%)`,
                }}
              />
            </div>

            {/* Eyebrow */}
            <Reveal>
              <div className="mt-7 lg:mt-0">
                <Eyebrow>
                  Premium Dental Care · Greater Faridabad
                </Eyebrow>
              </div>
            </Reveal>

            {/* Heading */}
            <Reveal delay={120}>
              <h1 className="mt-4 font-display text-[3.1rem] leading-[0.92] tracking-[-0.05em] text-foreground sm:text-[3.8rem] md:text-[5.4rem] md:leading-[0.88] md:tracking-[-0.055em]">
                Care that
                <br />
                <span className="italic text-accent">
                  feels like you.
                </span>
              </h1>
            </Reveal>

            {/* Paragraph */}
            <Reveal delay={220}>
              <p className="mt-6 max-w-[540px] text-[1.05rem] leading-relaxed text-muted-foreground hidden md:block">
  Advanced multi-speciality dentistry, delivered with a gentle touch.
  Calm interiors, quiet precision, and treatment plans built around your comfort.
</p>

<p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground md:hidden">
  Comfort-first dentistry with modern technology and calm interiors.
</p>
            </Reveal>

            {/* CTA */}
            <Reveal delay={320}>
              <div className="mt-8 flex flex-col items-start">

                <PrimaryCta href="#consult">
                  Book Appointment
                </PrimaryCta>
                <div className="mt-4 text-sm tracking-wide text-muted-foreground md:text-base">
                  <a
                    href="tel:+919077790772"
                    className="transition-colors hover:text-foreground"
                  >
                    Call us
                  </a>
                  <span className="mx-2">•</span>
                  <a
                    href="https://wa.me/919077790772"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    WhatsApp us
                  </a>
                </div>

              </div>
            </Reveal>

          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-7" />

        </div>
      </div>
    </div>
  </section>
);
  
}

function FloatingChip({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-cream/50 px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-foreground shadow-(--shadow-soft) backdrop-blur">      <span className="text-accent">{icon}</span>
      {children}
    </span>
  );
}


function Philosophy() {
  const cards = [
    {
      title: "Advanced Technology",
      body: "Rotary endodontics, digital imaging and microscope-assisted precision for predictable results.",
      img: treatmentRoom,
    },
    {
      title: "Evidence-Based Care",
      body: "Treatment plans grounded in current literature, never in upselling.",
      img: drTreating,
    },
    {
      title: "Patient-Centred",
      body: "We listen first. Every plan is built around your comfort, time and long-term smile.",
      img: consultation,
    },
  ];
  return (
    <section id="philosophy" className="relative py-16 md:py-20">
      <div className="container-luxe grid items-start gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-4">
          <Reveal>
            <Eyebrow>Our Philosophy</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-5 font-display text-[2rem] leading-[1.1] tracking-[-0.02em] md:text-[2.6rem]">
              Considered care.
              <br />
              <span className="italic text-accent">Quietly delivered.</span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Dentistry is more than a procedure — it's a relationship of trust. We take the time to
              understand you, then plan with care, calm and clinical precision.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <a
              href="#dentists"
              className="mt-7 inline-flex items-center gap-2 text-sm text-foreground underline-grow"
            >
              Meet our dentists <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="md:col-span-8 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={120 + i * 80}>
<article className="premium-card-hover group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-border/60">                <div className="relative h-44 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-full w-full object-cover transition-transform duration-1200 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{ background: "var(--gradient-sage)" }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
function Treatments() {
  const treatments = [
    {
      title: "General Dentistry",
      desc: "Preventive and restorative care for everyday dental health.",
      items: [
        "Dental Fillings",
        "Checkups",
        "Wisdom Tooth Removal",
        "Dental Extractions",
      ],
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Smile-focused treatments designed for confidence and natural aesthetics.",
      items: [
        "Philips Zoom Whitening",
        "Veneers",
        "Smile Designing",
      ],
    },
    {
      title: "Endodontics",
      desc: "Quietly delivered painless root canal treatment using modern rotary systems.",
      items: [
        "Painless RCTs",
        "Re-treatment Cases",
      ],
    },
    {
      title: "Orthodontics",
      desc: "Alignment solutions tailored for comfort and long-term results.",
      items: [
        "Braces",
        "Clear Aligners",
      ],
    },
    {
      title: "Implant & Gum Care",
      desc: "Advanced periodontal and implant treatments for stronger oral health.",
      items: [
        "Dental Implants",
        "Gum Disease Treatment",
      ],
    },
    {
      title: "Pediatric Dentistry",
      desc: "Gentle dental care designed to keep children relaxed and stress-free.",
      items: [
        "Kids Dentistry",
        "Preventive Care",
      ],
    },
  ];

  return (
    <section id="treatments" className="relative py-20 md:py-28">
      <div className="container-luxe">
        <div className="max-w-3xl">
          <Eyebrow>Treatments</Eyebrow>

          <h2 className="mt-5 font-display text-[2rem] leading-[1.08] tracking-[-0.02em] md:text-[2.8rem]">
            Multi-speciality care,
            <br />
            <span className="italic text-accent">
              quietly delivered.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            From painless root canals to smile designing and implants,
            every treatment is approached with precision, comfort,
            and long-term trust in mind.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 max-sm:grid-cols-2 max-sm:gap-x-3 max-sm:gap-y-[13px] md:grid-cols-2">
          {treatments.map((t) => (
            <article
              key={t.title}
              className="group relative overflow-hidden rounded-[28px] border border-border/60 bg-linear-to-br from-cream via-[#f7f1e8] to-[#f2eadf] p-7 shadow-(--shadow-soft) transition-all duration-300 ease-out hover:-translate-y-[4px] hover:border-accent/20 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.18)] hover:bg-[oklch(0.955_0.018_82)] max-sm:flex max-sm:flex-col max-sm:rounded-[22px] max-sm:border-border/45 max-sm:p-[17px]"
            >
              <div className="h-1 w-14 rounded-full bg-accent/70" />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/5 blur-3xl" /> </div>

              <h3 className="mt-5 font-display text-2xl text-foreground max-sm:mt-4 max-sm:text-[1.125rem] max-sm:leading-[1.1] max-sm:font-medium">
                {t.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-sm:text-[0.6875rem]">
                {t.desc}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2 max-sm:mt-auto max-sm:gap-1.5 max-sm:pt-5">
                {t.items.slice(0, 2).map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-sand/45 backdrop-blur-sm px-3 py-1.5 text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground transition-all max-sm:border-border/70 max-sm:px-2 max-sm:py-1 max-sm:text-[0.56rem] max-sm:tracking-[0.08em]
duration-300
hover:bg-accent/8
hover:border-accent/20
hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
/* --- Smile Gallery --- */
function Smiles() {
  const cases = [
    { img: beforeAfter1, label: "Smile Designing", note: "Veneers · 2 visits" },
    { img: fullMouth, label: "Full Mouth Rehabilitation", note: "Crowns + Implants" },
    { img: beforeAfter2, label: "Cosmetic Restoration", note: "Composite + Whitening" },
  ];
  return (
    <section id="smiles" className="relative bg-sand/30 py-20 md:py-28">
      <div className="container-luxe">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <Eyebrow>Smile Gallery</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-4 font-display text-[2rem] leading-[1.1] tracking-[-0.02em] md:text-[2.6rem]">
                Quiet transformations,
                <br />
                <span className="italic text-accent">built to last.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={220}>
            <a href="#consult" className="text-sm text-foreground underline-grow">
              Discuss your smile →
            </a>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.label} delay={120 + i * 80}>
              <figure className="premium-card-hover group relative overflow-hidden rounded-[29px] border border-border/60 shadow-(--shadow-soft)">
                <div className="relative aspect-circle overflow-hidden bg-[#b28c75]">
                  <img
                    src={c.img}
                    alt={c.label}
                    className="h-full w-full object-contain transition-transform duration-1400 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{ background: "linear-gradient(180deg, transparent 50%, oklch(0.26 0.018 60 / 0.45))" }}
                  />
                </div>
                <figcaption className="flex items-center justify-between border-t border-border/60 px-5 py-4">
                  <div>
                    <div className="eyebrow">{c.note}</div>
                    <div className="mt-1 font-display text-base text-foreground">{c.label}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-accent" />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Dentists carousel --- */

type Dentist = {
  name: string;
  role: string;
  qual: string;
  bio: string;
  img: string;
};

const DENTISTS: Dentist[] = [
  {
    name: "Dr. Mukul Mudgil",
    role: "Founder · Lead Dentist",
    qual: "BDS, MDS — Prosthodontics & Implantology",
    bio:
      "Specialist in full-mouth rehabilitation, dental implants and smile design with a calm, considered chair-side manner.",
    img: drMukul,
  },
  {
    name: "Dr. Saurabh",
    role: "Co-Founder · Implantologist",
    qual: "BDS, MIH — Oral Implantology",
    bio:
      "Focused on minimally invasive implant placement and predictable, long-lasting prosthetic outcomes.",
    img: drSaurabh,
  },
  {
    name: "Dr. Tanya Dua",
    role: "Cosmetic Dentist",
    qual: "BDS — Aesthetic & Restorative Dentistry",
    bio:
      "Crafts natural-looking veneers, composite restorations and gentle smile makeovers tailored to each face.",
    img: drTanya,
  },
  {
    name: "Dr. Neha Singh",
    role: "Endodontist",
    qual: "BDS, MDS — Conservative Dentistry & Endodontics",
    bio:
      "Painless rotary root canals under microscope magnification — calm, quick and quiet.",
    img: drNeha,
  },
];

function Dentists() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // detect active card by center distance
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const items = Array.from(track.querySelectorAll<HTMLElement>("[data-card]"));
        const trackRect = track.getBoundingClientRect();
        const center = trackRect.left + trackRect.width / 2;
        let bestIdx = 0;
        let bestDist = Infinity;
        items.forEach((el, i) => {
          const r = el.getBoundingClientRect();
          const c = r.left + r.width / 2;
          const d = Math.abs(c - center);
          if (d < bestDist) {
            bestDist = d;
            bestIdx = i;
          }
        });
        setActive(bestIdx);
      });
    };
    onScroll();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const scrollTo = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const items = track.querySelectorAll<HTMLElement>("[data-card]");
    const el = items[idx];
    if (!el) return;
    const trackRect = track.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const delta = (elRect.left + elRect.width / 2) - (trackRect.left + trackRect.width / 2);
    track.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section id="dentists" className="relative py-20 md:py-28">
      <div className="container-luxe">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <Eyebrow>Meet Our Dentists</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-4 font-display text-[2rem] leading-[1.1] tracking-[-0.02em] md:text-[2.6rem]">
                Experienced. Compassionate.
                <br />
                <span className="italic text-accent">Committed to you.</span>
              </h2>
            </Reveal>
          </div>
          
        </div>
      </div>
      

      <div className="mt-10 relative">
      <button
  aria-label="Previous dentist"
onClick={() =>
  scrollTo(
    active === 0
      ? DENTISTS.length - 1
      : active - 1
  )
}  className="absolute left-4 top-1/2 z-30 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border/60 bg-cream/90 shadow-[0_8px_24px_rgba(62,48,36,0.08)] lg:left-6 lg:h-12 lg:w-12"
>
  <ChevronLeft className="h-5 w-5" />
</button>

<button
  aria-label="Next dentist"
onClick={() =>
  scrollTo(
    active === DENTISTS.length - 1
      ? 0
      : active + 1
  )
}  className="absolute right-4 top-1/2 z-30 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border/60 bg-cream/90 shadow-[0_8px_24px_rgba(62,48,36,0.08)] lg:right-6 lg:h-12 lg:w-12"
>
  <ChevronRight className="h-5 w-5" />
</button>
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto scroll-smooth px-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))] pb-6 scrollbar-none [&::-webkit-scrollbar]:hidden"
          style={{ scrollPaddingInline: "max(1.25rem, calc((100vw - 72rem)/2 + 1.25rem))" }}
        >
          {DENTISTS.map((d, i) => {
            const isActive = i === active;
            return (
              <article
                key={d.name}
                data-card
                className={`premium-card-hover group relative flex shrink-0 snap-center flex-col overflow-hidden rounded-[32px] border border-border/60 transition-all duration-700 ease-out
                  w-[88vw] sm:w-[78vw] md:w-[68vw] lg:w-[52rem]
                  ${isActive ? "opacity-100 scale-100 shadow-(--shadow-elev) ring-1 ring-accent/40" : "opacity-70 scale-[0.985]"}`}
              >

              
                <div className="grid md:grid-cols-12">
                  <div className="md:col-span-5 flex items-center justify-center bg-[#efe3d6] p-8 md:p-10">

  <div className="relative h-[220px] w-[220px] overflow-hidden rounded-full bg-[#dccab8] shadow-[0_12px_34px_rgba(62,48,36,0.08)] md:h-[270px] md:w-[270px]">

    <img
      src={d.img}
      alt={d.name}
      className="h-full w-full object-contain scale-[1.04] transition-transform duration-700 group-hover:scale-[1.08]"
      loading="lazy"
    />

  </div>

                  </div>
                  <div className="md:col-span-7 flex flex-col justify-center gap-5 p-8 md:p-11">
                    <Eyebrow tone="sage">{d.role}</Eyebrow>
                    <h3 className="font-display text-3xl leading-tight text-foreground md:text-4xl">
                      {d.name}
                    </h3>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{d.qual}</p>
                    <div className="h-px w-12 bg-border" />
                    <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">{d.bio}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <a
                        href="#consult"
                        className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm text-accent-foreground hover:opacity-90 transition"
                      >
                        Book with {d.name.split(" ")[1]} <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
          {/* trailing space so last card can center */}
          <div aria-hidden className="shrink-0 w-[20vw] md:w-[15vw]" />
        </div>

        {/* dot indicators */}
        <div className="container-luxe mt-6 flex items-center justify-center gap-2">
          {DENTISTS.map((d, i) => (
            <button
              key={d.name}
              aria-label={`Show ${d.name}`}
              onClick={() => scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-accent" : "w-2 bg-border hover:bg-foreground/40"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


function InsideGallery() {
  return (
    <section
      id="inside"
      className="relative overflow-hidden bg-background py-24 md:py-32"
    >
      <div className="container-luxe">
        
        {/* Header */}
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          
          <div className="max-w-2xl">
            <Eyebrow>Inside Dentalys</Eyebrow>

            <h2 className="mt-5 font-display text-[2.8rem] leading-[0.98] tracking-[-0.04em] text-foreground md:text-[4.8rem]">
              Designed for calm,
              <br />
              <span className="italic text-accent">
                precision, and comfort.
              </span>
            </h2>

            <div className="mt-8 h-px w-24 bg-border" />
          </div>

          <div className="max-w-sm">
            <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
              Every space at Dentalys is thoughtfully designed to support
              exceptional care and a truly relaxing experience.
            </p>
          </div>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-12 gap-5">

          {/* Main Feature */}
          <GalleryCard
            img={dentalysOverview}
            video={dentalysOverview}
            title="Inside Dentalys"
            desc="A warm welcome every time."
            className="col-span-12 md:col-span-7"
            height="h-[560px]"
          />

          {/* Tall */}
          <GalleryCard
            img={consultation}
            title="Consultation"
            desc="Personalised care. Honest conversations."
            className="col-span-12 md:col-span-5"
            height="h-[560px]"
          />

          {/* Bottom Cards */}
          <GalleryCard
            img={treatmentCare}
            title="Treatment Suite"
            desc="Advanced tech for precise, comfortable treatment."
            className="col-span-12 md:col-span-4"
            height="h-[320px]"
          />

          <GalleryCard
            img={sterilisation}
            title="Sterilisation"
            desc="Hygiene. Safety. Always."
            className="col-span-12 md:col-span-4"
            height="h-[320px]"
          />

          <GalleryCard
            img={exteriorTall}
            title="Our Space"
            desc="Thoughtfully designed from the outside in."
            className="col-span-12 md:col-span-4"
            height="h-[320px]"
          />

        </div>

        {/* Bottom Hint */}
        <div className="mt-12 flex items-center justify-center gap-4 text-muted-foreground/40">

          <div className="h-px w-12 bg-current" />

          <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em]">
            <ArrowDown className="h-3 w-3" />
            Hover to explore
          </span>

          <div className="h-px w-12 bg-current" />

        </div>
      </div>
    </section>
  );
}
function GalleryCard({
  img,
  video,
  title,
  desc,
  className,
  height,
}: {
  img: string;
  video?: string;
  title: string;
  desc: string;
  className?: string;
  height?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[2rem] ${className}`}
    >
      <div className="overflow-hidden">
  {video ? (
    <video
      src={video}
      autoPlay
      muted
      loop
      playsInline
      className={`${height} w-full object-cover`}
    />
  ) : (
    <img
      src={img}
      alt={title}
      className={`${height} w-full object-cover transition duration-[1600ms] ease-out group-hover:scale-[1.04]`}
      loading="lazy"
    />
  )}
</div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      <div className="absolute bottom-0 left-0 p-7 md:p-8">
        <h3 className="font-display text-2xl text-white md:text-3xl">
          {title}
        </h3>

        <p className="mt-2 max-w-sm text-sm leading-6 text-white/75">
          {desc}
        </p>
      </div>

      <div
        className="
          absolute
          bottom-6
          right-6
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-white/5
          text-white
          opacity-0
          backdrop-blur-md
          transition-all
          duration-500
          group-hover:opacity-100
        "
      >
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );
}

function GalleryTile({
  img,
  alt,
  caption,
  className = "",
}: {
  img: string;
  alt: string;
  caption: string;
  className?: string;
}) {
  return (
    <figure className={`group relative overflow-hidden rounded-[20px] ${className}`}>
      <img
        src={img}
        alt={alt}
        className="h-44 w-full object-cover transition-transform duration-1400 ease-out group-hover:scale-105 md:h-full"
        loading="lazy"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-700 group-hover:opacity-50"
        style={{ background: "linear-gradient(180deg, transparent 55%, oklch(0.20 0.02 60 / 0.6))" }}
      />
      <figcaption className="absolute bottom-3 left-3 text-[0.7rem] uppercase tracking-[0.2em] text-cream">
        {caption}
      </figcaption>
    </figure>
  );
}

/* --- Voices / Testimonials --- */

const VOICES = [
  {
    quote:
      "The team made me forget I was at the dentist. My root canal was completely painless and the clinic feels more like a calm boutique than a hospital.",
    name: "Priya S.",
    sub: "Endodontic care",
  },
  {
    quote:
      "Beautiful interiors, honest treatment plan, and a result that finally looks like my own smile. Worth every visit.",
    name: "Neha R.",
    sub: "Smile designing",
  },
  {
    quote:
      "From the front desk to the consultation, everything felt thoughtful. They explained every step before we began.",
    name: "Arjun M.",
    sub: "Implants",
  },
];

function Voices() {
  return (
    <section id="voices" className="relative py-20 md:py-28">
      <div className="container-luxe">
        <Reveal>
          <Eyebrow>What our patients say</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-4 max-w-2xl font-display text-[2rem] leading-[1.1] tracking-[-0.02em] md:text-[2.6rem]">
            Quiet stories from <span className="italic text-accent">real patients.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {VOICES.map((v, i) => (
            <Reveal key={v.name} delay={120 + i * 100}>
              <figure className="premium-card-hover relative flex h-full flex-col rounded-[24px] border border-border/60 p-7 shadow-(--shadow-soft)">
                <div className="text-3xl font-display text-accent leading-none">"</div>
                <blockquote className="mt-3 text-base leading-relaxed text-foreground/90">
                  {v.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-border/60 pt-4 text-sm">
                  <div className="font-display text-foreground">{v.name}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{v.sub}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- WhatsApp CTA block --- */

function WhatsAppBlock() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="container-luxe my-10 overflow-hidden rounded-[32px] px-8 py-14 md:my-16 md:px-14 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.30 0.022 60) 0%, oklch(0.36 0.038 148) 100%)",
        }}
      >
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7 text-cream">
            <span className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-cream/70">
              Quietly available
            </span>
            <h2 className="mt-4 font-display text-[2rem] leading-[1.1] tracking-[-0.02em] md:text-[2.8rem]">
              A quiet message <span className="italic">is all it takes.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/80">
              Tell us what's on your mind — a worry, a chipped tooth, a smile you've been thinking
              about. We'll reply personally, no scripts.
            </p>
          </div>
          <div className="md:col-span-5 flex md:justify-end">
            <a
              href="https://wa.me/919077790772"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[oklch(0.62_0.14_150)] px-7 py-4 text-base text-cream shadow-[0_20px_60px_-20px_oklch(0.62_0.14_150/0.6)] transition hover:opacity-95"
            >
              <MessageCircle className="h-5 w-5" />
              Message us on WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Visit + Contact --- */
const CLINIC_CONFIG = {
  openingHour: 10,
  closingHour: 20,
  slotInterval: 30,
  closedDays: [0], // Sunday

  treatments: [
    "General Consultation",
    "Tooth Pain",
    "Smile Designing",
    "Teeth Whitening",
    "Braces / Aligners",
    "Dental Implants",
    "Root Canal",
    "Cleaning & Scaling",
    "Wisdom Tooth",
    "Veneers",
    "Kids Dentistry",
    "Other",
  ],
};
function Visit() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
const [selectedSlot, setSelectedSlot] = useState("");

const [formData, setFormData] = useState({
  name: "",
  phone: "",
  treatment: "",
  message: "",
})
   const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const formattedDate = tomorrow.toLocaleDateString("en-NZ", {
  weekday: "long",
  day: "numeric",
  month: "long",
});

const future = new Date();
future.setHours(future.getHours() + 4);

const formattedTime = future.toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
});
 if (
  !formData.name.trim() ||
  !formData.phone.trim() ||
  !formData.treatment.trim()
) {
  alert("Please complete all required fields.");
  return;
}

if (formData.phone.length !== 10) {
  alert("Please enter a valid 10-digit phone number.");
  return;
}
if (!selectedDate || !selectedSlot) {
  alert("Please select date and time slot.");
  return;
}
  try {
  await fetch(
    "https://script.google.com/macros/s/AKfycbx2h-J-m9u4gMSsP0WJEW0YOMY2n-3nU5aN3jBVj0otX0BU2ZqHLo4xJ6Zd2rfd_agj/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
  action: "submitBooking",
  name: formData.name,
  phone: formData.phone,
  problem: formData.treatment,
  date: selectedDate.toDateString(),
  time: selectedSlot,
}),
    }
  );

  setShowSuccess(true);

  setFormData({
    name: "",
    phone: "",
    treatment: "",
    message: "",
  });

} catch (error) {
  console.error(error);
  alert("Something went wrong");
}
   }
const generateSlots = () => {
  const slots = [];

  for (
    let hour = CLINIC_CONFIG.openingHour;
    hour < CLINIC_CONFIG.closingHour;
    hour++
  ) {
    slots.push(`${hour}:00`);
    slots.push(`${hour}:30`);
  }

  return slots;
};

const slots = generateSlots();
  return (
    <section id="visit" className="relative py-20 md:py-28">
      <div className="container-luxe grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="min-w-0 md:col-span-5 flex flex-col">
          <Reveal>
            <Eyebrow>Visit Dentalys</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-4 font-display text-[2rem] leading-[1.1] tracking-[-0.02em] md:text-[2.6rem]">
              Find us on
              <br />
              <span className="italic text-accent">D-72.</span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-8 space-y-5 text-sm">
              <InfoRow icon={<MapPin className="h-4 w-4 text-accent" />} title="Address">
               <a
                href="https://maps.app.goo.gl/1hUmrTF6efsKpu8a9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                 >
                D-72, Sector 85, Faridabad, Haryana <ArrowUpRight className="h-4 w-4" />
                </a>
              </InfoRow>
              <InfoRow icon={<Clock className="h-4 w-4 text-accent" />} title="Hours">
                Mon — Wed · 10:00 — 20:00
                <br />
                Thu  ·  Closed
                <br />
                Fri — Sat   ·   10:00 — 20:00
                <br />
                Sun · 10:00 — 14:00
              </InfoRow>
              <InfoRow icon={<Phone className="h-4 w-4 text-accent" />} title="Reception">
                +91 90777 90772 
              </InfoRow>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 overflow-hidden rounded-[24px] border border-border/60">
              <img
                src={exteriorClose}
                alt="Dentalys building entrance with arched façade"
                className="h-56 w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <div id="consult" className="min-w-0 md:col-span-7">
          <Reveal delay={150}>
            <div className="relative overflow-hidden rounded-[28px] border border-border/60 bg-cream p-7 shadow-(--shadow-soft) md:p-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full"
                style={{ background: "var(--gradient-sage)" }} aria-hidden />
              <span className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-bronze">
                Request a consultation
              </span>
              <h3 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
                Tell us about your smile.
              </h3>
              <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
                <Field
  label="Name"
  placeholder="Your full name"
  value={formData.name}
  onChange={(e) =>
    setFormData({ ...formData, name: e.target.value })
  }
/>
                <Field
  label="Phone"
  placeholder="10-digit mobile number"
  type="tel"
  value={formData.phone}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "");

    if (value.length <= 10) {
      setFormData({
        ...formData,
        phone: value,
      });
    }
  }}
/>
                <div className="md:col-span-2">
  <label className="block text-[0.68rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
    Dental Concern
  </label>

  <select
    value={formData.treatment}
    onChange={(e) =>
      setFormData({
        ...formData,
        treatment: e.target.value,
      })
    }
    className="mt-2 w-full rounded-[14px] border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
  >
    <option value="">Select your dental concern</option>

    <option>General Consultation</option>
    <option>Tooth Pain</option>
    <option>Smile Designing</option>
    <option>Teeth Whitening</option>
    <option>Braces / Aligners</option>
    <option>Dental Implants</option>
    <option>Root Canal</option>
    <option>Cleaning & Scaling</option>
    <option>Wisdom Tooth</option>
    <option>Veneers</option>
    <option>Kids Dentistry</option>
    <option>Other</option>
  </select>
</div>

                <div className="md:col-span-2">
                  <label className="block text-[0.68rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    Select Date
                  </label><div className="mt-3 overflow-hidden rounded-[24px] border border-border bg-background p-4">
    <CalendarPicker
      onChange={(value) => setSelectedDate(value as Date)}
      value={selectedDate}
      minDate={new Date()}
      tileDisabled={({ date }) =>
        CLINIC_CONFIG.closedDays.includes(date.getDay())
      }
    />
  </div>
  <div className="md:col-span-2">
  <label className="block text-[0.68rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
    Select Time Slot
  </label>

  <div className="mt-3 grid grid-cols-3 gap-3 md:grid-cols-4">
    {slots.map((slot) => (
      <button
        type="button"
        key={slot}
        onClick={() => setSelectedSlot(slot)}
        className={`rounded-[14px] border px-4 py-3 text-sm transition ${
          selectedSlot === slot
            ? "border-accent bg-accent text-white"
            : "border-border bg-background hover:border-accent"
        }`}
      >
        {slot}
      </button>
    ))}
  </div>
</div>
                </div>
                <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-muted-foreground">
                    By sending, you agree we'll contact you about your consultation only.
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm text-accent-foreground transition hover:opacity-90"
                  >
                    <CalendarDays className="h-4 w-4" />
                    Request consultation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    {showSuccess && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">

    <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.18)]">

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
        <Check className="h-10 w-10 text-emerald-600" />
      </div>

      <h3 className="mt-6 text-center font-display text-3xl text-foreground">
        Appointment Requested
      </h3>

      <p className="mt-3 text-center text-sm leading-relaxed text-muted-foreground">
       We’ll contact you shortly to confirm your timings, preferably via WhatsApp.
      </p>

      <div className="mt-8 rounded-[24px] bg-sand/40 p-5">

        <div className="flex items-center justify-between border-b border-border/60 pb-4">
          <span className="text-sm text-muted-foreground">
            Consultation Date
          </span>

          <span className="font-medium text-foreground">
            {selectedDate?.toDateString()}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Time
          </span>

          <span className="font-medium text-foreground">
            {selectedSlot}
          </span>
        </div>
      </div>

      <button
        onClick={() => setShowSuccess(false)}
        className="mt-8 w-full rounded-full bg-accent px-6 py-4 text-sm font-medium text-white transition hover:opacity-90"
      >
        Done
      </button>

    </div>
  </div>
)}
    </section>
  );
}

function InfoRow({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5">{icon}</span>
      <div>
        <div className="eyebrow">{title}</div>
        <div className="mt-1 text-foreground">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  className = "",
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  type?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-[0.68rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </span>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-[14px] border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
      />
    </label>
  );
}

/* --- Footer --- */

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-sand/30">
      <div className="container-luxe py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo/>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
               A premium multi-speciality dental studio in Faridabad. Painless dentistry, calm
              interiors, and a team that listens.
            </p>
            <div className="mt-6 flex justify-start">
  <div className="overflow-hidden rounded-[20px] border border-border/60 w-[280px] h-72">
    <img
      src={exteriorTall}
      alt="Dentalys building"
      className="w-full h-full object-cover object-top"
      loading="lazy"
    />
  </div>
</div>
          </div>
          <div className="md:col-span-3">
            <div className="eyebrow">Explore</div>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              <li><a href="#treatments" className="underline-grow">Treatments</a></li>
              <li><a href="#smiles" className="underline-grow">Smile gallery</a></li>
              <li><a href="#dentists" className="underline-grow">Our dentists</a></li>
              <li><a href="#inside" className="underline-grow">Inside Dentalys</a></li>
              <li><a href="#visit" className="underline-grow">Visit</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="eyebrow">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-accent" /> D-72, Sector 85, Faridabad, Haryana </li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-accent" /> +91 90777 90772</li>
              <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-accent" /> Mon — Sat · 10:00 — 20:00</li>
            </ul>
            <a
              href="#consult"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm text-accent-foreground hover:opacity-90 transition"
            >
              Book Appointment <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Dentalys · 360 Dental Care</span>
          <span>Quietly crafted for calm dentistry.</span>
        </div>
      </div>
    </footer>
  );
}

/* --- Page --- */

function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowScrollTop(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero heroRef={heroRef} />
        <div className="relative">
          <CapabilityRail />
        </div>
        <Philosophy />
        <SectionDivider />
        <Treatments />
{/* Architectural divider image strip */}
<section aria-hidden className="w-full">
  <div className="container-luxe">
<div className="mx-auto w-full md:max-w-[1000px] overflow-hidden rounded-[24px] border border-border/60 bg-cream">
      {/* Mobile: existing 4:5 collage */}
      <img
        src={collage}
        alt="Dentalys clinic interiors"
        className="
          block
          w-full
          h-auto
          object-contain
          opacity-[0.96]
          transition-all
          duration-700
          ease-out
          hover:scale-[1.01]
          hover:opacity-100
          md:hidden
        "
        loading="lazy"
      />

      {/* Desktop: new 5:4 collage */}
      <img
        src={collageDesktop}
        alt="Dentalys clinic interiors"
        className="
          hidden
          w-full
          h-auto
          object-contain
          opacity-[0.96]
          transition-all
          duration-700
          ease-out
          hover:scale-[1.01]
          hover:opacity-100
          md:block
        "
        loading="lazy"
      />

    </div>
  </div>
</section>
        <SectionDivider />
        <Smiles />
        <SectionDivider />
        <Dentists />
        <SectionDivider />
        <InsideGallery />
        <SectionDivider />
        <Voices />       
        <SectionDivider />
        <WhatsAppBlock />
        <Visit />
      </main>
      <Footer />
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-5 left-1/2 z-50 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full border border-border/70 bg-background/95 text-foreground shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
          showScrollTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
function CapabilityRail() {
  const features = [
    { icon: ToothIcon, title: "Painless\nRotary RCT" },
    { icon: Users, title: "Multi-Speciality\nCare" },
    { icon: Sparkles, title: "Clear\nAligners" },
    { icon: ShieldCheck, title: "Implant\nDentistry" },
    { icon: Shield, title: "ISO-Grade\nSterilisation" },
  ];

  return (
    <Reveal delay={420}>
      <section className="relative z-20 mt-4 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-6">
            {features.map((item, index) => {
              const Icon = item.icon;
              const isTooth = item.title.includes("Painless");

              return (
  <div
    key={index}
    className="
      group
      relative
      flex flex-col items-center justify-center
      rounded-[1.75rem]
      border border-[#e9dfd3]/80
      bg-sand/100
      px-6 py-7
      text-center
      transition-all duration-500 ease-out
      hover:bg-[#e8ddd0]
      hover:shadow-[0_14px_40px_rgba(60,40,20,0.08)]
      hover:-translate-y-1
    "
  >
    <div
      className="
        flex h-20 w-20 items-center justify-center
        rounded-full
        bg-[#f2eee8]
        transition-all duration-500
        group-hover:bg-[#ddd0c1]
        group-hover:scale-105
      "
    >
    <div className={isTooth ? "scale-[1.18]" : ""}>
      <Icon
        className="
          h-9 w-9
          text-[#5f8a67]
          transition-all duration-500
          group-hover:scale-110
          group-hover:text-[#4e7356]
        "
        strokeWidth={1.7}
      />
     </div>
    </div>

    <p
      className="
        mt-5
        whitespace-pre-line
        text-[1.05rem]
        font-medium
        leading-[1.45]
        tracking-[-0.02em]
        text-[#2f2926]
        transition-colors duration-300
        group-hover:text-[#241c18]
      "
    >
      {item.title}
    </p>
  </div>
);
            })}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
export default HomePage
