import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy } from "lucide-react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

interface CodePanelProps {
  code?: string;
  language?: "javascript" | "typescript" | "jsx" | "tsx";
  showCopy?: boolean;
  onCopy?: (code: string) => void;
}

const CodePanel = ({
  code = `// Example component code
import React from 'react';

export function Button() {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
      Click me
    </button>
  );
}`,
  language = "tsx",
  showCopy = true,
  onCopy = () => {},
}: CodePanelProps) => {
  return (
    <Card className="w-full h-full bg-white dark:bg-gray-800 overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <div className="flex justify-between items-center w-full">
          <Tabs defaultValue="code" className="w-full">
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="code">Code</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
              {showCopy && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onCopy(code)}
                        className="ml-auto"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Copy code</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
            <div className="p-4">
              <TabsContent value="code">
                <pre className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg overflow-x-auto">
                  <code className="text-sm font-mono">{code}</code>
                </pre>
              </TabsContent>
              <TabsContent value="preview">
                <div className="p-4 border rounded-lg">
                  {/* Preview content would be rendered here */}
                  <div className="text-center text-gray-500">
                    Component Preview
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </Card>
  );
};

export default CodePanel;
