import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Coffee, FileCode } from "lucide-react";

interface FrameworkSelectorProps {
  selectedFramework?: "react" | "vue" | "svelte";
  onFrameworkChange?: (framework: "react" | "vue" | "svelte") => void;
}

const FrameworkSelector = ({
  selectedFramework = "react",
  onFrameworkChange = () => {},
}: FrameworkSelectorProps) => {
  return (
    <div className="bg-background p-4 border rounded-lg w-[300px]">
      <Tabs
        defaultValue={selectedFramework}
        onValueChange={(value) =>
          onFrameworkChange(value as "react" | "vue" | "svelte")
        }
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="react" className="flex items-center gap-2">
            <FileCode className="h-4 w-4" />
            React
          </TabsTrigger>
          <TabsTrigger value="vue" className="flex items-center gap-2">
            <Code2 className="h-4 w-4" />
            Vue
          </TabsTrigger>
          <TabsTrigger value="svelte" className="flex items-center gap-2">
            <Coffee className="h-4 w-4" />
            Svelte
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default FrameworkSelector;
