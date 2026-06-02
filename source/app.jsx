// App entry — composes all sections (Tweaks panel removed for public page)
function App() {
  return (
    <React.Fragment>
      <Hero />
      <SocialProof />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
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
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
