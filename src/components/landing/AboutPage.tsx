import Navigation from "./Navigation";
import { Button } from "@/components/ui/button";
import { MeetTheDevelopers } from "../ui/About/developers";
import { AboutCTA } from "../ui/About/about-cta";
import "../../styles/AboutStyles/about.scss";
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
  Github,
  Twitter,
  Linkedin,
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

const developers = [
  {
    name: "Nathaniel Paz",
    role: "Founder/Lead Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    bio: "Full-stack developer with a passion for building performant web applications and aspiring computer scientist.",
    social: {
      github: "https://github.com/Simpleboi",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "UI/UX Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus",
    bio: "Designer turned developer, focusing on creating beautiful and intuitive user interfaces.",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "Core Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=aisha",
    bio: "Performance optimization specialist with expertise in building scalable component systems.",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "Developer Advocate",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    bio: "Community builder and educator, helping developers make the most of FireSpark.",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen about-landing">
      <Navigation />

      <div className="about-container container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Flame className="h-12 w-12 text-primary about-icon" />
          </div>
          <h1 className="text-4xl font-bold mb-6 about-title">
            About FireSpark
          </h1>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p className="about-heading">
              FireSpark is a fast, modern, and highly customizable
              component-based library designed to supercharge your web
              development workflow. Built on top of SparkCSS with efficiency,
              scalability, and ease of use in mind, FireSpark offers developers
              a sleek, unified system of pre-built UI components, utility
              classes, and customizable design tokens.
            </p>
            <p className="about-heading">
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
      <div className="container mx-auto px-4 py-24">
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

      <MeetTheDevelopers />
      <AboutCTA />
    </div>
  );
};

export default AboutPage;
