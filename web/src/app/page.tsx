import Hero from "@/components/marketing/Hero";
import {
  SocialProof,
  ProblemSection,
  HowItWorks,
  SolutionSection,
  Formats,
  BrandedFormats,
  Celebrations,
  ParisOps,
  Integrations,
  Trust,
  Pricing,
  Gatherings,
  FinalCTA,
} from "@/components/marketing/MarketingSections";
import DashboardMockup from "@/components/marketing/DashboardMockup";
import SiteFooter from "@/components/marketing/SiteFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ProblemSection />
      <HowItWorks />
      <SolutionSection />
      <Formats />
      <BrandedFormats />
      <DashboardMockup />
      <Celebrations />
      <ParisOps />
      <Integrations />
      <Trust />
      <Pricing />
      <Gatherings />
      <FinalCTA />
      <SiteFooter />
    </>
  );
}
