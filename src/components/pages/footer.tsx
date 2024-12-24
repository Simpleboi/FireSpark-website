import {
  Flame,
  Github,
  Twitter,
  Linkedin,
  Book,
  FileCode,
  Users,
  Heart,
  Globe,
  Headphones,
  Shield,
} from "lucide-react";


export const LandingFooter = () => {
  return (
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
  );
};
