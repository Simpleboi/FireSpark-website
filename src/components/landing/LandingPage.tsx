import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import { Badge } from "@/components/ui/badge";
import { LandingFeatures } from "../ui/features";
import { LandingMetrics } from "../ui/metrics";
import { LandingFooter } from "../pages/footer";
import { LandingTestimonals } from "../pages/testimonials";
import { LandingHero } from "../pages/hero";
import { LandingIntegration } from "../pages/integration";
import "../../styles/landing.css";
import { LandingInstallation } from "../pages/install";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Flame,
  Code2,
  Paintbrush,
  Box,
  Github,
  Twitter,
  Linkedin,
  Wrench,
  Book,
  FileCode,
  Users,
  Mail,
  MessageSquare,
  Heart,
  Globe,
  Headphones,
  Shield,
  Copy,
  ExternalLink,
  Quote,
} from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-background landingpage">
      <Navigation />

      <LandingHero />
      <LandingFeatures />
      <LandingMetrics />

      {/* Installation Section */}
      <LandingInstallation />

      {/* Framework Integration */}
      <LandingIntegration />

      <LandingTestimonals/ >

      {/* Preview Section */}
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-bold mb-16">Clean, Minimal, Powerful</h2>
        <div className="aspect-video border rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1974&auto=format&fit=crop"
            alt="FireSpark Interface"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about FireSpark
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Is FireSpark free to use?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, FireSpark is completely open-source and free to use in both
                personal and commercial projects. We also offer enterprise
                support plans for teams requiring additional assistance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Can I use FireSpark with my existing project?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely! FireSpark is designed to be framework-agnostic and
                can be integrated into existing React, Vue, or Svelte projects
                with minimal setup required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                How often do you release updates?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We maintain a regular release schedule with minor updates every
                two weeks and major versions quarterly. All changes are
                carefully documented in our changelog.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                What kind of support do you offer?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We provide comprehensive documentation, community support
                through Discord, and GitHub issues. Enterprise customers get
                access to dedicated support channels and priority issue
                resolution.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Can I customize the components to match my brand?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, FireSpark components are highly customizable through our
                theming system. You can modify colors, typography, spacing, and
                other design tokens to match your brand guidelines perfectly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
