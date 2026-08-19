import { useEffect, useState } from "react";
// Logo component removed; using custom logo image
import dentalysLogo from "@/assets/dentalys logo + text.png";

const links = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#treatments", label: "Treatments" },
  { href: "#smiles", label: "Smiles" },
  { href: "#dentists", label: "Our Dentists" },
  { href: "#inside", label: "Inside" },
  { href: "#voices", label: "Voices" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  useEffect(() => {
  const onScroll = () => {
    const hero = document.getElementById("hero");

    if (hero) {
      setScrolled(window.scrollY > hero.offsetHeight - 120);
    }
  };

  onScroll();

  window.addEventListener("scroll", onScroll, { passive: true });

  return () => window.removeEventListener("scroll", onScroll);
}, []);

  useEffect(() => {
    const sections = links.flatMap(({ href }) =>
      Array.from(document.querySelectorAll<HTMLElement>(href)),
    );

    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight / 2;
      const centralBand = window.innerHeight * 0.08;
      const sectionAtCenter = sections
        .map((section) => ({ section, bounds: section.getBoundingClientRect() }))
        .filter(({ bounds }) =>
          bounds.top <= viewportCenter + centralBand &&
          bounds.bottom >= viewportCenter - centralBand,
        )
        .sort(
          (a, b) =>
            Math.abs(a.bounds.top + a.bounds.height / 2 - viewportCenter) -
            Math.abs(b.bounds.top + b.bounds.height / 2 - viewportCenter),
        )[0];

      setActiveSection(sectionAtCenter?.section.id ?? null);
    };

    const observer = new IntersectionObserver(updateActiveSection, {
      rootMargin: "-42% 0px -42% 0px",
      threshold: 0,
    });

    sections.forEach((section) => observer.observe(section));
    updateActiveSection();
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 supports-[backdrop-filter]:bg-[rgba(247,239,226,0.72)] ease-out ${
        scrolled
  ? "bg-[rgba(247,239,226,0.86)] backdrop-blur-xl border-b border-[#d8cfc2]/40 shadow-[0_8px_28px_rgba(40,25,10,0.04)]"
  : "bg-transparent border-transparent"
      }`}
    >    
  
      <div className="container-luxe flex h-[67px] items-center justify-between ">
        <a href="#top" aria-label="Dentalys home" className="text-foreground max-md:-translate-x-7">
          <img src={dentalysLogo} alt="Dentalys" className="h-[132px] w-auto-translate-y-[-6px]" />
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={activeSection === l.href.slice(1) ? "page" : undefined}
              className={`underline-grow text-[0.95rem] font-medium tracking-[-0.01em] transition-all duration-300 hover:text-foreground/92 ${
                activeSection === l.href.slice(1)
                  ? "text-foreground after:origin-left after:scale-x-100"
                  : "text-foreground/68"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#consult"
            className="hidden md:inline-flex items-center rounded-full bg-[#5b7a59] px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#4f6d4d]"
          >
            Book Appointment
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70"
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 top-0 h-px w-4 bg-foreground transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-3 h-px w-4 bg-foreground transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-cream/95 backdrop-blur-xl">
          <div className="container-luxe flex flex-col py-7 items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={activeSection === l.href.slice(1) ? "page" : undefined}
                className={`py-3 font-display text-2xl ${
                  activeSection === l.href.slice(1) ? "text-accent" : "text-foreground"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#consult"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm text-accent-foreground"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
