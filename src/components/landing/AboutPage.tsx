import React from "react";
import Navigation from "./Navigation";
import { Button } from "@/components/ui/button";
import {
  Flame,
  Zap,
  Palette,
  Package,
  Layout,
  Accessibility,
  Moon,
  Code2,
  Puzzle,
} from "lucide-react";

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Blazing-Fast Components",
    description:
      "FireSpark components are optimized for speed and efficiency, ensuring fast load times and a responsive user experience. Each component is built to be lightweight and modular, reducing unnecessary bloat.",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Customizable Design System",
    description:
      "FireSpark allows developers to customize colors, typography, and layout using design tokens and CSS variables. This means you can adjust themes globally or at the component level, providing complete flexibility in your design system.",
  },
  {
    icon: <Package className="h-6 w-6" />,
    title: "Pre-Built UI Components",
    description:
      "Access a wide range of essential UI components, including buttons, modals, alerts, cards, navbars, grids, and more. Each component is built to be composable, so developers can customize and extend them with ease.",
  },
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Responsive Utility Classes",
    description:
      "With the full power of SparkCSS utility classes baked in, FireSpark uses these classes to handle spacing, typography, alignment, colors, and responsive design.",
  },
  {
    icon: <Accessibility className="h-6 w-6" />,
    title: "Accessibility-First Approach",
    description:
      "Every FireSpark component is built with accessibility (a11y) in mind, following best practices to ensure usability for all users. Components have proper ARIA roles, keyboard navigation, and focus management baked in.",
  },
  {
    icon: <Moon className="h-6 w-6" />,
    title: "Easy Theming & Dark Mode",
    description:
      "Built with theming in mind, FireSpark lets you toggle between light and dark modes effortlessly. By leveraging CSS variables, themes can be customized globally or at a component-specific level.",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Developer-Centric API",
    description:
      "FireSpark aims to be simple, intuitive, and developer-friendly. Import only the components you need, customize them through props, and integrate them with any framework or project.",
  },
  {
    icon: <Puzzle className="h-6 w-6" />,
    title: "Built on SparkCSS",
    description:
      "FireSpark is powered by SparkCSS, giving you access to advanced directives like @snippet, @apply, and design tokens. This means your components are not only reusable but also infinitely customizable.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Flame className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-6">About FireSpark</h1>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              FireSpark is a fast, modern, and highly customizable
              component-based library designed to supercharge your web
              development workflow. Built on top of SparkCSS with efficiency,
              scalability, and ease of use in mind, FireSpark offers developers
              a sleek, unified system of pre-built UI components, utility
              classes, and customizable design tokens.
            </p>
            <p>
              FireSpark delivers components that are lightweight, accessible,
              and responsive. The goal of FireSpark is to provide developers
              with a cohesive design system that reduces development time while
              maintaining full creative control. Every component is crafted with
              modern design principles, ensuring consistency, responsiveness,
              and cross-browser compatibility.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-24 bg-muted/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-background border rounded-lg space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of developers building better interfaces with
          FireSpark.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="/docs">Read the Docs</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/components">Browse Components</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
