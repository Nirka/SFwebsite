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

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhoSection />
        <ProblemSection />
        <SolutionSection />
        <CapabilitiesSection />
        <SponsorSection />
        <SecuritySection />
        <OutcomesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
