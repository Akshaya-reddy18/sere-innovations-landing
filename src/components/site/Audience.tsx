import { motion } from "framer-motion";
import { Sprout, Briefcase, Users } from "lucide-react";
import { SectionHeading } from "./SectionTag";

const audience = [
  {
    icon: Sprout,
    title: "Small Poultry Farmers",
    body: "Who want to take back control of their hatch cycle and protect their margins.",
  },
  {
    icon: Briefcase,
    title: "Agri-Entrepreneurs",
    body: "Building a poultry business from the ground up, who need predictable supply.",
  },
  {
    icon: Users,
    title: "Rural Youth",
    body: "Looking for a real, low-overhead way to start earning from their own land.",
  },
];

export function Audience() {
  return (
    <section className="relative bg-gradient-soft py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="WHO IT'S FOR"
          title="Made for the people"
          italic="who actually do the work."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {audience.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-border bg-background/70 p-8 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-leaf text-primary-foreground shadow-soft">
                <a.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-display text-2xl text-foreground">{a.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{a.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}