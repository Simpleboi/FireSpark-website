import React from "react";
import Navigation from "./Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Github, ExternalLink } from "lucide-react";

const examples = [
  {
    title: "Dashboard Template",
    description: "A modern admin dashboard with analytics and user management.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
    framework: "React",
    category: "Templates",
    demo: "https://example.com/demo",
    source: "https://github.com/example",
  },
  {
    title: "E-commerce Store",
    description: "Full-featured online store with shopping cart and checkout.",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800",
    framework: "Vue",
    category: "Applications",
    demo: "https://example.com/demo",
    source: "https://github.com/example",
  },
  {
    title: "Marketing Landing",
    description: "Conversion-optimized landing page with animations.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800",
    framework: "Svelte",
    category: "Landing Pages",
    demo: "https://example.com/demo",
    source: "https://github.com/example",
  },
];

const frameworks = ["All", "React", "Vue", "Svelte"];
const categories = ["All", "Templates", "Applications", "Landing Pages"];

const ExamplesPage = () => {
  const [selectedFramework, setSelectedFramework] = React.useState("All");
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold text-center mb-6">Examples</h1>
        <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Explore real-world applications and templates built with FireSpark.
        </p>

        {/* Filters */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search examples..." className="pl-10" />
          </div>

          <div className="flex gap-4 flex-wrap justify-center">
            <div className="space-y-2">
              <p className="text-sm font-medium">Framework</p>
              <div className="flex gap-2">
                {frameworks.map((framework) => (
                  <Button
                    key={framework}
                    variant={
                      selectedFramework === framework ? "default" : "outline"
                    }
                    onClick={() => setSelectedFramework(framework)}
                    size="sm"
                  >
                    {framework}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Category</p>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category)}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Examples Grid */}
      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example) => (
            <div
              key={example.title}
              className="border rounded-lg overflow-hidden group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={example.image}
                  alt={example.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline">{example.framework}</Badge>
                  <Badge variant="outline">{example.category}</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {example.description}
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <a
                      href={example.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href={example.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamplesPage;
