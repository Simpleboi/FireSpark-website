import React from "react";
import Navigation from "./Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Code2, Accessibility, Settings2, Play } from "lucide-react";

const ComponentShowcase = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Component Showcase</h1>
          <p className="text-xl text-muted-foreground">
            Explore our components with live code editing and comprehensive
            documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Live Preview */}
          <div className="border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Live Preview</h2>
              <Button variant="outline" size="sm">
                <Play className="h-4 w-4 mr-2" />
                Run
              </Button>
            </div>
            <div className="bg-muted/50 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
              {/* Component preview would go here */}
              <Button>Example Button</Button>
            </div>
          </div>

          {/* Code Editor */}
          <div className="border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Code Editor</h2>
              <Button variant="outline" size="sm">
                <Code2 className="h-4 w-4 mr-2" />
                Copy
              </Button>
            </div>
            <pre className="bg-muted rounded-lg p-4 overflow-x-auto">
              <code>{`import { Button } from '@firespark/react'

export default function Example() {
  return (
    <Button>
      Example Button
    </Button>
  )
}`}</code>
            </pre>
          </div>
        </div>

        {/* Documentation Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="props">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="props">Props</TabsTrigger>
              <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>
            <TabsContent value="props" className="mt-4">
              <div className="border rounded-lg">
                <div className="p-4 border-b bg-muted/50">
                  <h3 className="font-semibold">Props</h3>
                </div>
                <div className="p-4">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b">
                        <th className="pb-2">Name</th>
                        <th className="pb-2">Type</th>
                        <th className="pb-2">Default</th>
                        <th className="pb-2">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 font-mono text-sm">variant</td>
                        <td className="py-2 font-mono text-sm">string</td>
                        <td className="py-2 font-mono text-sm">"default"</td>
                        <td className="py-2 text-sm">Button variant style</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-mono text-sm">size</td>
                        <td className="py-2 font-mono text-sm">string</td>
                        <td className="py-2 font-mono text-sm">"md"</td>
                        <td className="py-2 text-sm">Button size</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="accessibility" className="mt-4">
              <div className="border rounded-lg p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <Accessibility className="h-6 w-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      Keyboard Interactions
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Enter: Triggers the button's action</li>
                      <li>Space: Triggers the button's action</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="examples" className="mt-4">
              <div className="grid gap-4">
                <div className="border rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Button Variants</h3>
                  <div className="flex gap-4">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ComponentShowcase;
