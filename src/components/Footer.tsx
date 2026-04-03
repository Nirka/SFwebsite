import Logo from "./Logo";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "#capabilities" },
      { label: "eConsent", href: "#capabilities" },
      { label: "Sponsor Workspace", href: "#sponsor-workspace" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Research Centers", href: "#who" },
      { label: "Hospital Leadership", href: "#who" },
      { label: "Finance Teams", href: "#who" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Security", href: "#security" },
      { label: "About", href: "#outcomes" },
      { label: "Contact", href: "#cta" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Logo variant="footer" />
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Enterprise platform for clinical research operations, compliance,
              and sponsor collaboration.
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
            &copy; {new Date().getFullYear()} StudyFlow. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
