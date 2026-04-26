import { Egg, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Who it's for", href: "#cta" },
  { label: "Enquire", href: "#cta" },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-primary-foreground"
      style={{ backgroundColor: "oklch(0.28 0.07 148)" }}
    >
      {/* Soft top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-leaf/60 to-transparent" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-leaf/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-12 md:py-16">
        {/* Brand */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-background/10 ring-1 ring-background/20">
              <Egg className="h-5 w-5 text-primary-foreground" strokeWidth={2.25} />
            </span>
            <span className="font-display text-xl font-bold tracking-tight">
              Sere Innovations
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            Smart, simple poultry incubators built with — and for — small farmers.
            Hatch your own future, season after season.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3">
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground/70">
            Quick Links
          </h4>
          <ul className="mt-5 grid grid-cols-2 gap-y-3 gap-x-6 text-sm md:grid-cols-1">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground/70">
            Get in touch
          </h4>
          <ul className="mt-5 space-y-3.5 text-sm">
            <li>
              <a
                href="mailto:hello@sereinnovations.com"
                className="group inline-flex items-center gap-3 text-primary-foreground/90 transition-colors hover:text-primary-foreground"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-background/10 ring-1 ring-background/15 transition-colors group-hover:bg-background/20">
                  <Mail className="h-4 w-4" />
                </span>
                hello@sereinnovations.com
              </a>
            </li>
            <li>
              <a
                href="tel:+250000000000"
                className="group inline-flex items-center gap-3 text-primary-foreground/90 transition-colors hover:text-primary-foreground"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-background/10 ring-1 ring-background/15 transition-colors group-hover:bg-background/20">
                  <Phone className="h-4 w-4" />
                </span>
                +250 000 000 000
              </a>
            </li>
            <li className="inline-flex items-start gap-3 text-primary-foreground/75">
              <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-full bg-background/10 ring-1 ring-background/15">
                <MapPin className="h-4 w-4" />
              </span>
              Visit us — address coming soon
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-background/15">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-primary-foreground/65 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Sere Innovations. All rights reserved.</p>
          <p>Made with care, in the field.</p>
        </div>
      </div>
    </footer>
  );
}