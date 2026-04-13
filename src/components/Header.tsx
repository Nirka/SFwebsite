"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

const navAnchors = ["#capabilities", "#sponsor-workspace", "#security", "#outcomes"];

export default function Header({
  dict,
  lang,
}: {
  dict: {
    nav: { product: string; solutions: string; security: string; about: string };
    cta: string;
    toggleMenu: string;
  };
  lang: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: dict.nav.product, href: navAnchors[0] },
    { label: dict.nav.solutions, href: navAnchors[1] },
    { label: dict.nav.security, href: navAnchors[2] },
    { label: dict.nav.about, href: navAnchors[3] },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="shrink-0">
            <Logo className="h-8 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher lang={lang} />
            <a
              href={`/${lang}/demo`}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary-light rounded-lg transition-colors"
            >
              {dict.cta}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground/70"
            aria-label={dict.toggleMenu}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-border-gray">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-foreground/70 hover:text-primary py-2"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <LanguageSwitcher lang={lang} />
            </div>
            <a
              href={`/${lang}/demo`}
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-lg"
            >
              {dict.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
