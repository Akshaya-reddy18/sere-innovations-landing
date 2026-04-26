import { motion } from "framer-motion";
import { CalendarCheck, TruckIcon, Coins, UserCheck } from "lucide-react";
import { SectionHeading } from "./SectionTag";
import iconCalendar from "@/assets/icon-calendar.png";
import iconTruck from "@/assets/icon-truck.png";
import iconPiggy from "@/assets/icon-piggy.png";
import iconGrowth from "@/assets/icon-growth.png";

const benefits = [
  {
    n: "01",
    img: iconCalendar,
    Icon: CalendarCheck,
    title: "More Control",
    body: "Decide when and how much you hatch. Your farm, your calendar.",
  },
  {
    n: "02",
    img: iconTruck,
    Icon: TruckIcon,
    title: "Less Dependency",
    body: "Stop waiting on suppliers. Stop chasing transport. Start producing on your own land.",
  },
  {
    n: "03",
    img: iconPiggy,
    Icon: Coins,
    title: "Lower Costs",
    body: "Skip the middleman markup. Each cycle costs less, each chick is yours from day one.",
  },
  {
    n: "04",
    img: iconGrowth,
    Icon: UserCheck,
    title: "Higher Confidence & Income",
    body: "Predictable hatch rates mean predictable income — and a real reason to grow.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden py-20 md:py-24">
      {/* Soft farm backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-soft" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          tag="WHAT CHANGES FOR YOU"
          title="Practical wins,"
          italic="season after season."
          subtitle="Small changes on your farm. Big impact on your life."
        />

        {/* Connector line */}
        <div className="relative mt-20">
          <svg
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden md:block"
            height="2"
            width="75%"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="currentColor"
              strokeDasharray="6 8"
              className="text-leaf/40"
            />
          </svg>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group relative"
              >
                {/* Number badge */}
                <div className="relative z-10 mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-background shadow-soft ring-1 ring-leaf/30">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-leaf font-display text-sm font-semibold text-primary-foreground">
                    {b.n}
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card">
                  {/* Soft gradient blob behind icon */}
                  <div className="relative mx-auto mb-6 grid h-36 w-36 place-items-center">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-leaf-soft via-leaf-soft/60 to-transparent" />
                    <img
                      src={b.img}
                      alt=""
                      width={512}
                      height={512}
                      loading="lazy"
                      className="relative h-32 w-32 object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-center font-display text-xl font-semibold text-foreground md:text-2xl">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-center text-sm leading-relaxed text-muted-foreground">
                    {b.body}
                  </p>

                  <div className="mt-6 grid place-items-center rounded-2xl bg-leaf-soft/50 py-3.5">
                    <b.Icon className="h-5 w-5 text-leaf-deep" strokeWidth={1.75} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}