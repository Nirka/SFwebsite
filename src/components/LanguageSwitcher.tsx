"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import GB from "country-flag-icons/react/3x2/GB";
import IL from "country-flag-icons/react/3x2/IL";
import HU from "country-flag-icons/react/3x2/HU";
import IN from "country-flag-icons/react/3x2/IN";

const langs = [
  { code: "en", Flag: GB, label: "English" },
  { code: "he", Flag: IL, label: "עברית" },
  { code: "hu", Flag: HU, label: "Magyar" },
  { code: "hi", Flag: IN, label: "हिन्दी" },
];

export default function LanguageSwitcher({ lang }: { lang: string }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1.5">
      {langs
        .filter((l) => l.code !== lang)
        .map((l) => (
          <Link
            key={l.code}
            href={pathname.replace(`/${lang}`, `/${l.code}`)}
            className="inline-flex items-center justify-center w-8 h-6 rounded overflow-hidden border border-border-gray hover:shadow-sm transition-shadow"
            title={l.label}
          >
            <l.Flag className="w-full h-full" />
          </Link>
        ))}
    </div>
  );
}
