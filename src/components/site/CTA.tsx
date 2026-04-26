import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import leaves from "@/assets/leaves-corner.png";

export function CTA() {
  return (
    <section id="cta" className="relative px-6 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-leaf p-10 shadow-card md:p-16"
      >
        {/* Decorative leaves */}
        <img
          src={leaves}
          alt=""
          width={400}
          height={400}
          className="pointer-events-none absolute -right-12 -top-12 w-56 -rotate-12 opacity-25 mix-blend-overlay"
        />
        <img
          src={leaves}
          alt=""
          width={400}
          height={400}
          className="pointer-events-none absolute -bottom-16 -left-16 w-56 rotate-180 opacity-20 mix-blend-overlay"
        />

        <div className="relative text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-background/15 px-4 py-1.5 text-xs font-bold tracking-[0.22em] text-primary-foreground backdrop-blur">
            START TODAY
          </span>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] text-primary-foreground text-balance md:text-6xl">
            Start hatching <em>your own future</em>
            <br />
            today.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/85">
            One small machine. One bigger season. Talk to us about bringing Sere to your farm.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-semibold text-leaf-deep shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow"
            >
              Enquire Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-background/10"
            >
              Talk to the team
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}