"use client";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { ArrowRight } from "lucide-react";

const positioning = [
  "Structured discipline",
  "Defined risk architecture",
  "Performance accountability",
  "Measured capital growth objectives",
];

export default function Cta() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 w-[350px] h-[350px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-16 w-[250px] h-[250px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <Reveal>
              <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
                Our Positioning
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Capital management driven by data, not speculation.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-white/75 text-lg leading-relaxed">
                Mansu Technology Ltd approaches proprietary trading as a capital
                management exercise — systematic, disciplined, and accountable
                to defined performance parameters.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8">
                <Button
                  href="/contact"
                  className="bg-white !text-primary hover:!text-white hover:bg-grey-light px-8 py-3.5 text-base font-bold rounded-full"
                >
                  Corporate Enquiries
                  <ArrowRight size={18} />
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right — Positioning pillars */}
          <Reveal delay={0.2}>
            <div className="flex flex-col gap-4">
              {positioning.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10"
                >
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    0{i + 1}
                  </span>
                  <p className="text-white font-medium">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
