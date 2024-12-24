import Navigation from "./Navigation";
import { LandingFeatures } from "../ui/features";
import { LandingMetrics } from "../ui/metrics";
import { LandingFooter } from "../pages/footer";
import { LandingTestimonals } from "../pages/testimonials";
import { LandingHero } from "../pages/hero";
import { LandingIntegration } from "../pages/integration";
import "../../styles/landing.scss";
import { LandingInstallation } from "../pages/install";
import { LandingPreview } from "../pages/preview";
import { LandingFAQ } from "../pages/faq";

const LandingPage = () => {

  return (
    <div className="min-h-screen bg-background landingpage">
      <Navigation />

      <LandingHero />
      <LandingFeatures />
      <LandingMetrics />
      <LandingInstallation />
      <LandingIntegration />
      <LandingTestimonals/ >
      <LandingPreview/>
      <LandingFAQ/>      
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
