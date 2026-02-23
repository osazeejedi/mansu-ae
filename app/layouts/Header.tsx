"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../components/ui/Button";

const navItems = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Contact", path: "/contact" },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 font-semibold">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary tracking-tight">Mansu</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const active =
                item.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm transition-colors duration-200 ${
                    active
                      ? "text-primary font-bold"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.text}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button href="/contact" variant="primary" className="text-sm">
              Get in Touch
            </Button>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary"
            onClick={() => setNavOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {navOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-gray-100 pt-4">
            {navItems.map((item) => {
              const active =
                item.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setNavOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    active ? "text-primary" : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.text}
                </Link>
              );
            })}
            <Button href="/contact" variant="primary" className="w-fit mt-2">
              Get in Touch
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
