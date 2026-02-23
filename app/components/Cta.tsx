"use client";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";

export default function Cta() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative blob */}
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

      <div className="container mx-auto px-4 relative z-10 text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto">
            Ready to expand into the UAE?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-white/80 text-lg max-w-xl mx-auto leading-relaxed">
            Let&apos;s build your Gulf market strategy together. Our team is
            ready to help you make the move — seamlessly.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact"
              className="bg-white !text-primary hover:!text-white hover:bg-grey-light px-8 py-3.5 text-base font-bold rounded-full"
            >
              Talk to Us
              <ArrowRight size={18} />
            </Button>
            <Button
              href="/about"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 text-base font-semibold rounded-full"
            >
              Learn More
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
