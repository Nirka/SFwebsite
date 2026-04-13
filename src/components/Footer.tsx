import Logo from "./Logo";
import type { Dict } from "@/i18n/types";

export default function Footer({
  dict,
  lang,
}: {
  dict: Dict["footer"];
  lang: string;
}) {
  const footerLinks = [
    {
      title: dict.groups.product.title,
      links: [
        { label: dict.groups.product.overview, href: "#capabilities" },
        { label: dict.groups.product.econsent, href: "#capabilities" },
        { label: dict.groups.product.sponsor, href: "#sponsor-workspace" },
      ],
    },
    {
      title: dict.groups.solutions.title,
      links: [
        { label: dict.groups.solutions.centers, href: "#who" },
        { label: dict.groups.solutions.leadership, href: "#who" },
        { label: dict.groups.solutions.finance, href: "#who" },
      ],
    },
    {
      title: dict.groups.company.title,
      links: [
        { label: dict.groups.company.security, href: "#security" },
        { label: dict.groups.company.about, href: "#outcomes" },
        { label: dict.groups.company.contact, href: `/${lang}/demo` },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Logo variant="footer" />
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              {dict.description}
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold mb-4 text-white/90">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white/80 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} {dict.copyright}
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              {dict.privacy}
            </a>
            <a
              href="#"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              {dict.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
