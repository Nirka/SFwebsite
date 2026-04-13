import { notFound } from "next/navigation";
import { Inter, Heebo, Noto_Sans_Devanagari } from "next/font/google";
import { hasLocale, getDictionary } from "@/i18n/dictionaries";
import { isRtl, type Locale } from "@/i18n/config";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heebo",
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

const fontMap: Record<string, { variable: string; family: string }> = {
  he: {
    variable: heebo.variable,
    family: "var(--font-heebo), system-ui, sans-serif",
  },
  hi: {
    variable: notoDevanagari.variable,
    family: "var(--font-noto-devanagari), system-ui, sans-serif",
  },
};

const defaultFont = {
  variable: inter.variable,
  family: "var(--font-inter), system-ui, sans-serif",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "he" }, { lang: "hu" }, { lang: "hi" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    icons: { icon: "/LOGO.png", apple: "/LOGO.png" },
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      siteName: "StudyFlow",
      locale: lang,
      type: "website",
      url: `https://www.studyflow.cloud/${lang}`,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
    },
    alternates: {
      languages: { en: "/en", he: "/he", hu: "/hu", hi: "/hi" },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const locale = lang as Locale;
  const rtl = isRtl(locale);
  const font = fontMap[locale] ?? defaultFont;

  return (
    <html
      lang={locale}
      dir={rtl ? "rtl" : "ltr"}
      className={`${inter.variable} ${heebo.variable} ${notoDevanagari.variable} ${font.variable} h-full antialiased`}
      style={{ fontFamily: font.family } as React.CSSProperties}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
