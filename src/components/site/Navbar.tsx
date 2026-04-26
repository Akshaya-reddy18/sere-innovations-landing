import { motion } from "framer-motion";
import { Egg } from "lucide-react";

export function Navbar() {
  const links = [
    { label: "Problem", href: "#problem" },
    { label: "Solution", href: "#solution" },
    { label: "Features", href: "#features" },
    { label: "Benefits", href: "#benefits" },
  ];
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-border/60 bg-background/70 px-5 py-3 backdrop-blur-xl shadow-soft md:px-7">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-leaf text-primary-foreground">
            <Egg className="h-4 w-4" strokeWidth={2.25} />
          </span>
          <span className="font-display text-lg font-bold text-leaf-deep">Sere</span>
          <span className="hidden text-sm text-muted-foreground sm:inline">Innovations</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-foreground/70 transition-colors hover:text-leaf-deep">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="rounded-full bg-gradient-leaf px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-glow"
        >
          Request Demo
        </a>
      </div>
    </motion.header>
  );
}