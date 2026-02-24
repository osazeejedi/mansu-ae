"use client";
import { Eye, ShieldCheck, ClipboardCheck } from "lucide-react";
import { Reveal } from "../../components/ui/Reveal";

const governance = [
  {
    icon: <Eye size={26} className="text-primary" />,
    title: "Internal Oversight",
    items: [
      "Structured trade review cycles",
      "Strategy validation checkpoints",
      "Exposure monitoring dashboards",
      "Performance attribution analysis",
    ],
  },
  {
    icon: <ShieldCheck size={26} className="text-primary" />,
    title: "Risk Controls",
    items: [
      "Hard daily loss limits",
      "Monthly capital preservation thresholds",
      "Real-time monitoring",
      "Automatic trade invalidation triggers",
    ],
  },
  {
    icon: <ClipboardCheck size={26} className="text-primary" />,
    title: "Decision Process",
    items: [
      "Historical viability required",
      "Defined expectancy benchmarks",
      "Risk-adjusted return profile",
      "Controlled downside behaviour",
    ],
  },
];

export default function Values() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              How We Operate
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Governance & Internal Controls
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Operational discipline supports performance stability. No strategy
              operates without predefined exit rules.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {governance.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 h-full flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl bg-pink-light/15 flex items-center justify-center">
                  {section.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{section.title}</h3>
                <ul className="flex flex-col gap-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm text-gray-500">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
