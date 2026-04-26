import { motion } from "framer-motion";
import { Clock, Wallet, Lock } from "lucide-react";
import { SectionHeading } from "./SectionTag";

const problems = [
  {
    icon: Clock,
    title: "Waiting on hatcheries",
    body: "Chicks arrive late, in the wrong batch size, or not at all. Your season slips while you wait.",
  },
  {
    icon: Wallet,
    title: "Costs that keep climbing",
    body: "Middleman markups, transport fees and unpredictable pricing eat into already thin margins.",
  },
  {
    icon: Lock,
    title: "No control over your farm",
    body: "Someone else decides when you produce, how much, and at what quality. That's not your business — it's theirs.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="THE REAL PROBLEM"
          title="Small farms run on"
          italic="someone else's schedule."
          subtitle="Three quiet costs every poultry farmer pays."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-leaf-soft/40 blur-3xl transition-opacity group-hover:opacity-80" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-leaf-soft/60 text-leaf-deep">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-foreground">{p.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}