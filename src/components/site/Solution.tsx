import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionTag } from "./SectionTag";
import incubator from "@/assets/incubator.png";

const points = [
  "Hatch your own chicks on your own land",
  "Set your own production calendar",
  "Cut middleman costs from day one",
  "Predictable hatch rates, season after season",
];

export function Solution() {
  return (
    <section id="solution" className="relative overflow-hidden bg-gradient-soft py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2 md:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative order-2 md:order-1"
        >
          <div className="absolute inset-0 -z-10 mx-auto h-80 w-80 rounded-full bg-leaf/20 blur-3xl" />
          <img
            src={incubator}
            alt="Sere Innovations smart poultry incubator"
            width={1024}
            height={1024}
            loading="lazy"
            className="mx-auto w-full max-w-md drop-shadow-2xl"
          />
        </motion.div>

        <div className="order-1 md:order-2">
          <SectionTag>OUR SOLUTION</SectionTag>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mt-0 font-display text-4xl leading-[1.1] text-foreground text-balance md:text-5xl"
          >
            A smart incubator,
            <br />
            <em className="text-leaf-deep">made for your farm.</em>
          </motion.h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Sere is a compact poultry egg incubator that brings hatching home. Reliable temperature, humidity
            and turning — all handled automatically, so you can focus on your farm, not the machine.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 text-foreground/90"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-leaf" />
                <span>{p}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}