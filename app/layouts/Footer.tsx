import Link from "next/link";

const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-bold text-white tracking-tight">Mansu Technology Ltd</span>
            <p className="text-sm text-white/70 max-w-xs leading-relaxed">
              UAE-incorporated proprietary trading firm focused on digital asset
              markets. We deploy firm capital only — no third-party funds managed.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/50">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.path}>
                  <Link
                    href={l.path}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {l.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/50">
              Corporate Information
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-white/80">
              <li className="leading-relaxed">
                Office A, RAK DAO Business Centre<br />
                RAK BANK ROC Office, Ground Floor<br />
                Al Rifaa, Sheikh Mohammed Bin Zayed Road<br />
                Ras Al Khaimah, United Arab Emirates
              </li>
              <li className="mt-2">
                <a
                  href="tel:+971501132034"
                  className="hover:text-white transition-colors"
                >
                  +971 50 113 2034
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Mansu Technology Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
