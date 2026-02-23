"use client";
import { useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { Reveal } from "../../components/ui/Reveal";
import { Button } from "../../components/ui/Button";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await new Promise((r) => setTimeout(r, 1200)); // Simulated send
      setStatus("sent");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200";

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <Reveal>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Reach Us
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 leading-tight">
                We&apos;d love to hear from you
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-gray-500 leading-relaxed max-w-sm">
                Whether you have a question about our services, want to explore
                a partnership, or are ready to start your UAE expansion journey
                — we&apos;re here.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-background flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Location</p>
                    <p className="text-gray-500 text-sm mt-0.5">
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-background flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Email</p>
                    <a
                      href="mailto:hello@mansu.ae"
                      className="text-primary text-sm hover:underline mt-0.5 block"
                    >
                      hello@mansu.ae
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-background flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">
                      Response Time
                    </p>
                    <p className="text-gray-500 text-sm mt-0.5">
                      Within 24 business hours
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Form */}
          <Reveal delay={0.2} direction="left">
            <div className="bg-background rounded-3xl p-8 border border-pink-light/20">
              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Send size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Thank you for reaching out. Our UAE team will get back to
                    you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-primary text-sm font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-500">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full justify-center py-3.5"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
