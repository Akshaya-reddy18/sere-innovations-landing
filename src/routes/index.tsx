import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Solution } from "@/components/site/Solution";
import { Features } from "@/components/site/Features";
import { Benefits } from "@/components/site/Benefits";
import { Trust } from "@/components/site/Trust";
import { Audience } from "@/components/site/Audience";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sere Innovations — Smart Poultry Incubators for Small Farmers" },
      {
        name: "description",
        content:
          "Sere Innovations builds smart, affordable poultry egg incubators for small farmers. More control, less dependency, lower costs — season after season.",
      },
      { property: "og:title", content: "Sere Innovations — Hatch your own future" },
      {
        property: "og:description",
        content: "Smart poultry incubators built with farmers, for farmers.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Benefits />
      <Trust />
      <Audience />
      <CTA />
      <Footer />
    </main>
  );
}
