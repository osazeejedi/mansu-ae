"use client";
import { Reveal } from "../../components/ui/Reveal";

export default function AboutHero() {
  return (
    <section className="relative bg-primary-dark py-28 overflow-hidden">
      {/* Decorative */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 relative z-10 text-white">
        <Reveal>
          <p className="text-pink-light font-semibold text-sm uppercase tracking-widest mb-3">
            About Us
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
            Who We Are in the UAE
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 text-white/70 text-lg max-w-xl leading-relaxed">
            Mansu is a business services company headquartered in Dubai, UAE —
            built to help African businesses establish, grow, and thrive in the
            Gulf and wider MENA region.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
