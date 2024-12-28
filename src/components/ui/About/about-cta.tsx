import { Button } from "@/components/ui/button";
import "../../../styles/AboutStyles/about-cta.scss";

export const AboutCTA = () => {
  return (
    <div className="about-cta-container">
      <h2 className="about-cta-header">Ready to Get Started?</h2>
      <p>
        Join thousands of developers building better user interfaces with FireSpark.
      </p>
      <div className="about-ctabtn-container">
        <Button size="lg" asChild className="rtd">
          <a href="/docs">Read the Docs</a>
        </Button>
        <Button size="lg" variant="outline" asChild className="browse">
          <a href="/components">Browse Components</a>
        </Button>
      </div>
    </div>
  );
};
