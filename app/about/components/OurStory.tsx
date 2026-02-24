"use client";
import Image from "next/image";
import { Reveal } from "../../components/ui/Reveal";

const operatingModel = [
  "Trade firm capital only",
  "No third-party asset management",
  "No pooled investment products",
  "No retail fund offerings",
];

const structureAllows = [
  "Faster decision cycles",
  "Full internal risk control",
  "Independent strategy design",
  "Direct performance accountability",
];

export default function OurStory() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left — Text content */}
          <div className="flex-1 max-w-xl">
            <Reveal>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                About Mansu Technology
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Established in the UAE to participate in digital asset markets
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-gray-500 leading-relaxed">
                Mansu Technology Ltd operates from Ras Al Khaimah, United Arab
                Emirates. The firm was established to participate directly in
                digital asset markets through proprietary capital deployment. We
                pursue steady capital appreciation through structured exposure,
                measurable risk management, and repeatable strategy execution.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Performance is assessed against defined benchmarks. Strategies
                are recalibrated when results fall outside acceptable parameters.
                Mansu Technology Ltd operates proprietary trading as a systematic
                capital allocation discipline grounded in data, structure, and
                accountability.
              </p>
            </Reveal>

            {/* Operating Model */}
            <Reveal delay={0.4}>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                    Our Operating Model
                  </p>
                  <ul className="flex flex-col gap-2">
                    {operatingModel.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                    This Structure Allows
                  </p>
                  <ul className="flex flex-col gap-2">
                    {structureAllows.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — Story Image */}
          <Reveal delay={0.2} className="flex-1 w-full max-w-lg">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/assets/images/team-story.jpg"
                alt="Mansu Technology Ltd trading team in operation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border-2 border-primary/20 -z-10" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
