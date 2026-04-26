import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import leaves from "@/assets/leaves-corner.png";
import landscape from "@/assets/farm-landscape.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-14 md:pt-32 md:pb-20">
      {/* Background landscape, right side */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-3/5">
        <img
          src={landscape}
          alt=""
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* Decorative leaves top-left */}
      <img
        src={leaves}
        alt=""
        width={500}
        height={500}
        className="pointer-events-none absolute -top-6 -left-10 w-64 select-none md:w-96"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-background/80 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-leaf-deep backdrop-blur">
            <Leaf className="h-3.5 w-3.5" />
            SERE INNOVATIONS
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-foreground text-balance md:text-7xl">
            Hatch your own
            <br />
            <em className="text-leaf-deep">future, season after season.</em>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground text-balance">
            A smart poultry egg incubator built for small farmers. Stop waiting on hatcheries —
            start producing chicks on your own land, on your own calendar.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-leaf px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-glow hover:-translate-y-0.5"
            >
              Request Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#solution"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-leaf-soft/40"
            >
              See how it works
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
              Built with farmers
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Affordable setup
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf-deep" />
              Predictable hatch rates
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}