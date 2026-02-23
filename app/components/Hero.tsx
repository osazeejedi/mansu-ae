"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
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
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — Text content */}
          <div className="flex-1 max-w-2xl">
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

          {/* Right — Hero Image */}
          <Reveal delay={0.2} className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/hero-business.jpg"
                alt="African business professionals in a modern UAE office setting"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle gradient overlay at the bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                  🌍 Africa meets the Gulf
                </p>
                <p className="text-sm text-gray-700 font-medium">
                  Trusted by 100+ businesses across 5+ African markets
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
