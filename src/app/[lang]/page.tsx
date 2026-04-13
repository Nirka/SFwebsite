import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhoSection from "@/components/WhoSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import SponsorSection from "@/components/SponsorSection";
import SecuritySection from "@/components/SecuritySection";
import OutcomesSection from "@/components/OutcomesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <Header dict={dict.header} lang={lang} />
      <main className="flex-1">
        <HeroSection dict={dict.hero} dashboardDict={dict.dashboard} />
        <WhoSection dict={dict.who} />
        <ProblemSection dict={dict.problem} />
        <SolutionSection dict={dict.solution} />
        <CapabilitiesSection dict={dict.capabilities} />
        <SponsorSection
          dict={dict.sponsor}
          sponsorWorkspaceDict={dict.sponsorWorkspace}
        />
        <SecuritySection dict={dict.security} />
        <OutcomesSection dict={dict.outcomes} />
        <CtaSection dict={dict.cta} lang={lang} />
      </main>
      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}
