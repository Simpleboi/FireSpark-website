import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import {
  Flame,
  Code2,
  Paintbrush,
  Box,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Added pt-20 to account for fixed nav */}
      <div className="container mx-auto px-4 pt-20 py-24 flex flex-col items-center text-center gap-8">
        <div className="flex items-center gap-3 text-primary animate-fade-in">
          <Flame className="h-12 w-12" />
          <h1 className="text-4xl md:text-6xl font-bold">FireSpark</h1>
        </div>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
          A minimalist, framework-agnostic component library with a focus on
          clean design and exceptional developer experience
        </p>
        <Button
          size="lg"
          className="mt-8 text-lg"
          onClick={() => navigate("/components")}
        >
          Try Components
        </Button>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg flex flex-col items-center text-center gap-4 hover:bg-muted/50 transition-colors">
            <Code2 className="h-8 w-8" />
            <h3 className="text-xl font-semibold">Framework Agnostic</h3>
            <p className="text-muted-foreground">
              Build once, use everywhere. Support for React, Vue, and Svelte out
              of the box.
            </p>
          </div>
          <div className="p-6 border rounded-lg flex flex-col items-center text-center gap-4 hover:bg-muted/50 transition-colors">
            <Box className="h-8 w-8" />
            <h3 className="text-xl font-semibold">Interactive Playground</h3>
            <p className="text-muted-foreground">
              Test and customize components in real-time with our interactive
              editor.
            </p>
          </div>
          <div className="p-6 border rounded-lg flex flex-col items-center text-center gap-4 hover:bg-muted/50 transition-colors">
            <Paintbrush className="h-8 w-8" />
            <h3 className="text-xl font-semibold">Theme Customization</h3>
            <p className="text-muted-foreground">
              Easily adapt components to match your brand with our theme
              customizer.
            </p>
          </div>
        </div>
      </div>

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

      {/* Footer */}
      <footer className="border-t mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Flame className="h-6 w-6" />
                <span className="text-xl font-bold">FireSpark</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Modern component library for building beautiful interfaces.
              </p>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/docs"
                    className="hover:text-foreground transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="/components"
                    className="hover:text-foreground transition-colors"
                  >
                    Components
                  </a>
                </li>
                <li>
                  <a
                    href="/examples"
                    className="hover:text-foreground transition-colors"
                  >
                    Examples
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/about"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="font-semibold">Social</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  className="hover:text-foreground transition-colors text-muted-foreground"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  className="hover:text-foreground transition-colors text-muted-foreground"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="hover:text-foreground transition-colors text-muted-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            © 2024 FireSpark. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
