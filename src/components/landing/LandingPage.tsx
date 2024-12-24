import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 py-24 flex flex-col items-center text-center gap-8">
        <div className="flex items-center gap-3 text-primary animate-fade-in">
          <Flame className="h-12 w-12" />
          <h1 className="text-4xl md:text-6xl font-bold">FireSpark</h1>
        </div>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
          A minimalist, framework-agnostic component library with a focus on
          clean design and exceptional developer experience
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="text-lg"
            onClick={() => navigate("/components")}
          >
            Try Components
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg"
            onClick={() => navigate("/tools")}
          >
            <Wrench className="mr-2 h-4 w-4" /> Developer Tools
          </Button>
        </div>
      </div>

      {/* Installation Section */}
      <div className="container mx-auto px-4 py-16 bg-muted/50 rounded-lg">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Quick Installation</h2>
            <p className="text-muted-foreground">
              Get started with FireSpark in minutes
            </p>
          </div>

          <div className="space-y-6">
            {/* NPM Installation */}
            <div className="bg-background border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <Badge>npm</Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard("npm install firesparklib")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-md">
                <code>npm install firesparklib</code>
              </pre>
            </div>

            {/* Yarn Installation */}
            <div className="bg-background border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <Badge>yarn</Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard("yarn add firesparklib")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-md">
                <code>yarn add firesparklib</code>
              </pre>
            </div>

            {/* pnpm Installation */}
            <div className="bg-background border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <Badge>pnpm</Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard("pnpm add firesparklib")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-md">
                <code>pnpm add firesparklib</code>
              </pre>
            </div>

            <div className="flex justify-center">
              <Button variant="outline" className="gap-2" asChild>
                <a
                  href="https://www.npmjs.com/package/firesparklib"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileCode className="h-4 w-4" />
                  View on NPM
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Framework Integration */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Framework Integration</h2>
            <p className="text-muted-foreground">
              Use FireSpark with your favorite framework
            </p>
          </div>

          <div className="grid gap-6">
            {/* React Integration */}
            <div className="bg-background border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">React</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    copyToClipboard(`import { Button } from 'firesparklib/react';

function App() {
  return <Button variant="primary">Click me</Button>;
}`)
                  }
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`import { Button } from 'firesparklib/react';

function App() {
  return <Button variant="primary">Click me</Button>;
}`}</code>
              </pre>
            </div>

            {/* Vue Integration */}
            <div className="bg-background border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Vue</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    copyToClipboard(`import { Button } from 'firesparklib/vue';

export default {
  components: { Button },
  template: '<Button variant="primary">Click me</Button>'
}`)
                  }
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`import { Button } from 'firesparklib/vue';

export default {
  components: { Button },
  template: '<Button variant="primary">Click me</Button>'
}`}</code>
              </pre>
            </div>

            {/* Svelte Integration */}
            <div className="bg-background border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Svelte</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    copyToClipboard(`import { Button } from 'firesparklib/svelte';

<Button variant="primary">Click me</Button>`)
                  }
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`import { Button } from 'firesparklib/svelte';

<Button variant="primary">Click me</Button>`}</code>
              </pre>
            </div>
          </div>
        </div>
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
      <footer className="bg-muted/50 border-t mt-24">
        <div className="container mx-auto px-4 py-12">
          {/* Top Footer Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Flame className="h-6 w-6" />
                <span className="text-xl font-bold">FireSpark</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Modern component library for building beautiful interfaces.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <FileCode className="h-4 w-4" /> Product
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/components"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Components
                  </a>
                </li>
                <li>
                  <a
                    href="/docs"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="/examples"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Examples
                  </a>
                </li>
                <li>
                  <a
                    href="/themes"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Themes
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Book className="h-4 w-4" /> Resources
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/blog"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/community"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="/showcase"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Showcase
                  </a>
                </li>
                <li>
                  <a
                    href="/changelog"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Users className="h-4 w-4" /> Company
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/about"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/press"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Press Kit
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Middle Footer Section - Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-b">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="h-4 w-4" /> Global Community
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" /> Enterprise Ready
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Headphones className="h-4 w-4" /> 24/7 Support
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="h-4 w-4" /> Open Source
            </div>
          </div>

          {/* Bottom Footer Section */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 FireSpark. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
