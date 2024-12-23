import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import FrameworkSelector from "./FrameworkSelector";
import CodePanel from "./CodePanel";

interface ComponentPlaygroundProps {
  selectedComponent?: {
    name: string;
    description: string;
    code: {
      react: string;
      vue: string;
      svelte: string;
    };
  };
}

const defaultComponent = {
  name: "Button",
  description: "A versatile button component with multiple variants and sizes.",
  code: {
    react: `import { Button } from './components/ui/button'

export default function Example() {
  return (
    <Button>Click me</Button>
  )
}`,
    vue: `<script setup>
import { Button } from './components/ui/button'
</script>

<template>
  <Button>Click me</Button>
</template>`,
    svelte: `<script>
import { Button } from './components/ui/button'
</script>

<Button>Click me</Button>`,
  },
};

const ComponentPlayground = ({
  selectedComponent = defaultComponent,
}: ComponentPlaygroundProps) => {
  const [framework, setFramework] = React.useState<"react" | "vue" | "svelte">(
    "react",
  );

  return (
    <Card className="w-full h-full bg-white dark:bg-gray-800 p-4">
      <div className="flex flex-col h-full gap-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">{selectedComponent.name}</h2>
            <p className="text-muted-foreground">
              {selectedComponent.description}
            </p>
          </div>
          <FrameworkSelector
            selectedFramework={framework}
            onFrameworkChange={setFramework}
          />
        </div>

        <ResizablePanelGroup
          direction="horizontal"
          className="flex-1 rounded-lg border"
        >
          <ResizablePanel defaultSize={50} minSize={30}>
            <div className="h-full p-4">
              <Tabs defaultValue="preview" className="h-full">
                <TabsList>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="props">Props</TabsTrigger>
                </TabsList>
                <TabsContent value="preview" className="h-[calc(100%-40px)]">
                  <div className="flex items-center justify-center h-full border rounded-lg p-4">
                    {/* Component preview would be rendered here */}
                    <div className="text-center text-muted-foreground">
                      Component Preview
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="props" className="h-[calc(100%-40px)]">
                  <div className="h-full border rounded-lg p-4">
                    <div className="text-center text-muted-foreground">
                      Props configuration panel
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </ResizablePanel>

          <ResizableHandle />

          <ResizablePanel defaultSize={50} minSize={30}>
            <div className="h-full">
              <CodePanel
                code={selectedComponent.code[framework]}
                language="tsx"
                showCopy={true}
              />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </Card>
  );
};

export default ComponentPlayground;
