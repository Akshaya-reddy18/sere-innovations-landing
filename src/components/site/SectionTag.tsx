import { motion } from "framer-motion";

export function SectionTag({ children }: { children: React.ReactNode }) {
  return null;
}

export function SectionHeading({
  tag,
  title,
  italic,
  subtitle,
  align = "center",
}: {
  tag: string;
  title: string;
  italic?: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <SectionTag>{tag}</SectionTag>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-0 font-display text-4xl leading-[1.1] text-foreground text-balance md:text-6xl"
      >
        {title}
        {italic && (
          <>
            <br />
            <em className="text-leaf-deep">{italic}</em>
          </>
        )}
      </motion.h2>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={align === "center" ? "mt-5 flex items-center justify-center gap-3" : "mt-5 flex items-center gap-3"}
        >
          <span className="h-px w-10 bg-leaf/40" />
          <p className="text-base text-muted-foreground">{subtitle}</p>
          <span className="h-px w-10 bg-leaf/40" />
        </motion.div>
      )}
    </div>
  );
}