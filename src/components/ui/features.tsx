import { Code2, Paintbrush, Box } from "lucide-react";

// This is the features section of the landing page

export const LandingFeatures = () => {
  return (
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
  );
};
