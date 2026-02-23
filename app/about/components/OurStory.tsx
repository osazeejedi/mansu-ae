"use client";
import Image from "next/image";
import { Reveal } from "../../components/ui/Reveal";

export default function OurStory() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left — Text content */}
          <div className="flex-1 max-w-xl">
            <Reveal>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Our Story
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Built in Dubai, focused on Africa
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-gray-500 leading-relaxed">
                Mansu was founded in Dubai with a single, clear purpose: to be the
                most trusted partner for African businesses looking to establish
                and grow in the UAE and Middle East. We saw a real gap — talented,
                ambitious African companies with limited access to the networks,
                tools, and local expertise needed to succeed in the Gulf market.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-4 text-gray-500 leading-relaxed">
                From day one, we built our team and our services around that
                mission — combining on-the-ground UAE knowledge with a deep
                understanding of how African businesses operate. Whether it is
                navigating regulatory requirements, moving money across borders,
                or building the right local relationships, we handle the complexity
                so our clients can focus on growth.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Today, Mansu supports businesses across multiple African markets,
                helping them enter the UAE with confidence, move quickly, and build
                lasting partnerships in the region.
              </p>
            </Reveal>
          </div>

          {/* Right — Story Image */}
          <Reveal delay={0.2} className="flex-1 w-full max-w-lg">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/assets/images/team-story.jpg"
                alt="Diverse team collaborating in a modern office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative accent border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border-2 border-primary/20 -z-10" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
