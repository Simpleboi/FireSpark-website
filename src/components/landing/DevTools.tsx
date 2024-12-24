import React from "react";
import Navigation from "./Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Paintbrush, Terminal, Box, Download } from "lucide-react";

const DevTools = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Developer Tools</h1>
          <p className="text-xl text-muted-foreground">
            Powerful tools to streamline your development workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Theme Builder */}
          <div className="border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <Paintbrush className="h-6 w-6" />
              <h2 className="text-xl font-semibold">Theme Builder</h2>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Primary Color</Label>
                <div className="grid grid-cols-5 gap-2">
                  {["#000000", "#1a1a1a", "#333333", "#666666", "#999999"].map(
                    (color) => (
                      <div
                        key={color}
                        className="w-8 h-8 rounded-full cursor-pointer border"
                        style={{ backgroundColor: color }}
                      />
                    ),
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label>Border Radius</Label>
                <Slider defaultValue={[8]} max={16} step={1} />
              </div>
              <Button className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Export Theme
              </Button>
            </div>
          </div>

          {/* CLI Tool */}
          <div className="border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="h-6 w-6" />
              <h2 className="text-xl font-semibold">CLI Tool</h2>
            </div>
            <div className="space-y-4">
              <pre className="bg-muted rounded-lg p-4 text-sm">
                <code>npm create firespark-app@latest</code>
              </pre>
              <p className="text-sm text-muted-foreground">
                Create a new FireSpark project with a single command.
              </p>
              <Button variant="outline" className="w-full">
                View Documentation
              </Button>
            </div>
          </div>

          {/* Component Generator */}
          <div className="border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <Box className="h-6 w-6" />
              <h2 className="text-xl font-semibold">Component Generator</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Component Name</Label>
                <Input placeholder="MyComponent" />
              </div>
              <div className="space-y-2">
                <Label>Framework</Label>
                <Tabs defaultValue="react" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="react">React</TabsTrigger>
                    <TabsTrigger value="vue">Vue</TabsTrigger>
                    <TabsTrigger value="svelte">Svelte</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <Button className="w-full">Generate Component</Button>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
          <div className="flex gap-4 justify-center">
            <Button variant="outline">API Reference</Button>
            <Button variant="outline">GitHub</Button>
            <Button variant="outline">Discord Community</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevTools;
