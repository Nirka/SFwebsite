import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";
import { LogoMark } from "@/components/Logo";
import DemoForm from "@/components/DemoForm";
import Link from "next/link";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "he" }, { lang: "hu" }, { lang: "hi" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: `${dict.demo.title} | StudyFlow`,
    description: dict.demo.subtitle,
  };
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="min-h-screen bg-bg-light flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg">
        <Link
          href={`/${lang}`}
          className="flex items-center justify-center gap-2 mb-10"
        >
          <LogoMark size={40} />
          <span className="text-xl font-semibold text-primary">StudyFlow</span>
        </Link>

        <div className="bg-white rounded-xl border border-border-gray p-8 shadow-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-primary mb-2">
              {dict.demo.title}
            </h1>
            <p className="text-sm text-text-secondary">{dict.demo.subtitle}</p>
          </div>

          <DemoForm
            dict={dict.demo.form}
            successMessage={dict.demo.success}
            successSub={dict.demo.successSub}
            errorMessage={dict.demo.error}
          />

          <noscript>
            <p className="mt-4 text-sm text-error text-center">
              JavaScript is required to submit this form.
            </p>
          </noscript>
        </div>

        <p className="text-center mt-6">
          <Link
            href={`/${lang}`}
            className="text-sm text-text-secondary hover:text-primary transition-colors"
          >
            &larr; {lang === "he" ? "חזרה לדף הבית" : lang === "hu" ? "Vissza a főoldalra" : lang === "hi" ? "मुखपृष्ठ पर वापस जाएँ" : "Back to homepage"}
          </Link>
        </p>
      </div>
    </div>
  );
}
