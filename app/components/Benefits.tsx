"use client";
import { ShieldCheck, Globe, Users, Wallet } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const benefits = [
  {
    icon: <ShieldCheck size={24} className="text-primary" />,
    title: "Regulatory Compliance",
    description:
      "Full support with UAE regulatory requirements, licensing, and compliance to keep your business on solid legal ground.",
  },
  {
    icon: <Globe size={24} className="text-primary" />,
    title: "Gulf Investor Network",
    description:
      "Gain direct access to our curated network of UAE-based investors, partners, and strategic advisors actively looking for African deals.",
  },
  {
    icon: <Wallet size={24} className="text-primary" />,
    title: "Seamless Cross-Border Payments",
    description:
      "Move money between Africa and the UAE effortlessly with our payment infrastructure — fast, reliable, and cost-effective.",
  },
  {
    icon: <Users size={24} className="text-primary" />,
    title: "Dedicated Local Expertise",
    description:
      "Our on-the-ground UAE team provides the cultural insight and local relationships needed to accelerate your expansion.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <Reveal>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Why Mansu AE
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Your trusted bridge between Africa and the UAE
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-gray-500 leading-relaxed max-w-lg">
                We understand both sides of the equation. With deep roots in
                African markets and an established presence in Dubai, we deliver
                results for businesses that are serious about Gulf expansion.
              </p>
            </Reveal>
          </div>

          {/* Right: Benefit cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 h-full flex flex-col gap-3">
                  <div className="w-11 h-11 rounded-lg bg-pink-light/15 flex items-center justify-center">
                    {b.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-[15px]">
                    {b.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
