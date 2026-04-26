import { motion } from "framer-motion";
import { Thermometer, Droplets, RefreshCw, Hand, Wallet, Wifi } from "lucide-react";
import { SectionHeading } from "./SectionTag";

const features = [
  { icon: Thermometer, title: "Temperature Control", body: "Stable, accurate warmth across every cycle — automatically adjusted." },
  { icon: Droplets, title: "Humidity Control", body: "Precise moisture monitoring keeps embryos developing in ideal conditions." },
  { icon: RefreshCw, title: "Automatic Egg Turning", body: "Gentle, scheduled turning. No more setting alarms or opening the lid." },
  { icon: Hand, title: "Easy to Use", body: "Simple controls designed for daily farm life. Set it once, trust it always." },
  { icon: Wallet, title: "Affordable Setup", body: "Built for small farmers — pays for itself within the first few cycles." },
  { icon: Wifi, title: "Quiet & Reliable", body: "Low power, low noise, built to run season after season without fuss." },
];

export function Features() {
  return (
    <section id="features" className="relative bg-cream-deep py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="WHAT'S INSIDE"
          title="Built for the farm,"
          italic="not the lab."
          subtitle="Six things the incubator quietly takes off your plate."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/80 p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-leaf/40 hover:shadow-card"
            >
              <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-leaf-soft/40 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-leaf text-primary-foreground shadow-soft">
                  <f.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-xl text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}