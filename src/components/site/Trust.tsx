import { motion } from "framer-motion";
import { SectionTag } from "./SectionTag";

export function Trust() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionTag>OUR PROMISE</SectionTag>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-0 font-display text-4xl leading-[1.1] text-foreground text-balance md:text-6xl"
        >
          Built from <em className="text-leaf-deep">real farmer needs</em> —
          not from a boardroom.
        </motion.h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          We don't run testimonials we couldn't earn. Every feature here came from talking to small
          poultry farmers, watching their cycles, and asking what actually breaks.
        </p>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
          {[
            { k: "Designed", v: "with farmers" },
            { k: "Affordable", v: "by intent" },
            { k: "Honest", v: "by default" },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-border bg-card/70 px-5 py-6 backdrop-blur"
            >
              <p className="font-display text-2xl text-leaf-deep">{s.k}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}