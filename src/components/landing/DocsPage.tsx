import React from "react";
import Navigation from "./Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Book, Code2, Zap, FileCode } from "lucide-react";

const sections = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Quick Start", href: "/docs/quick-start" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Button", href: "/docs/components/button" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Card", href: "/docs/components/card" },
    ],
  },
  {
    title: "Framework Guides",
    items: [
      { title: "React Guide", href: "/docs/frameworks/react" },
      { title: "Vue Guide", href: "/docs/frameworks/vue" },
      { title: "Svelte Guide", href: "/docs/frameworks/svelte" },
    ],
  },
];

const DocsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="flex h-[calc(100vh-3.5rem)] pt-14">
        {/* Sidebar */}
        <div className="w-64 border-r bg-muted/10">
          <ScrollArea className="h-full py-6 pl-4 pr-6">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search docs..." className="pl-8" />
              </div>

              {sections.map((section) => (
                <div key={section.title} className="space-y-2">
                  <h4 className="font-semibold">{section.title}</h4>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <Button
                        key={item.href}
                        variant="ghost"
                        className="w-full justify-start text-muted-foreground hover:text-foreground"
                      >
                        {item.title}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="container max-w-3xl py-12">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Introduction</h1>
              <p className="text-muted-foreground">
                Welcome to FireSpark documentation.
              </p>
            </div>

            <div className="grid gap-4 mt-12">
              <div className="grid gap-1">
                <h2 className="text-2xl font-semibold">Quick Start</h2>
                <p className="text-muted-foreground">
                  Get up and running with FireSpark in minutes.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Installation</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Install FireSpark using your preferred package manager:
                  </p>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>npm install @firespark/react</code>
                  </pre>
                </div>

                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Usage</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Import and use FireSpark components in your application:
                  </p>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`import { Button } from '@firespark/react'

export default function App() {
  return <Button>Click me</Button>
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
