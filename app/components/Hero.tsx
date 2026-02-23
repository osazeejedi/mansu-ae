"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background min-h-[88vh] flex items-center">
      {/* Background decorative circles */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, #C51F5F 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, #E73378 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <Reveal delay={0}>
            <span className="inline-flex items-center gap-2 bg-pink-light/20 text-primary rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
              🇦🇪 &nbsp;Now Operating in the UAE
            </span>
          </Reveal>

          {/* Headline */}
          <Reveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Expanding African{" "}
              <span className="text-primary">Businesses</span>{" "}
              into the UAE &amp; Middle East
            </h1>
          </Reveal>

          {/* Subtext */}
          <Reveal delay={0.2}>
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-10">
              Mansu bridges the gap between Africa and the Gulf — providing
              market entry strategy, seamless cross-border payments, and
              localised marketing to help your business thrive in the UAE.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" className="px-8 py-3.5 text-base">
                Get Started
                <ArrowRight size={18} />
              </Button>
              <Button href="/about" variant="outline" className="px-8 py-3.5 text-base">
                Learn More
              </Button>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.4}>
            <div className="mt-16 flex flex-wrap gap-10">
              {[
                { value: "5+", label: "African Markets Served" },
                { value: "UAE", label: "Licensed & Established" },
                { value: "100+", label: "Clients Supported" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
