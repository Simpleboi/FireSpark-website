import React from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Paintbrush, Moon, Sun, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ThemeCustomizerProps {
  onThemeChange?: (theme: any) => void;
  isOpen?: boolean;
}

const ThemeCustomizer = ({
  onThemeChange = () => {},
  isOpen = true,
}: ThemeCustomizerProps) => {
  return (
    <Card className="w-[320px] h-full bg-background border-l p-6 overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Paintbrush className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Theme Customizer</h2>
        </div>
        <Button variant="ghost" size="icon">
          <Palette className="h-5 w-5" />
        </Button>
      </div>

      <div className="space-y-6">
        {/* Color Mode */}
        <div className="space-y-4">
          <Label className="text-sm font-medium">Color Mode</Label>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <span className="text-sm">Light</span>
            </div>
            <Switch defaultChecked />
            <div className="flex items-center space-x-2">
              <Moon className="h-4 w-4" />
              <span className="text-sm">Dark</span>
            </div>
          </div>
        </div>

        {/* Color Scheme */}
        <div className="space-y-4">
          <Label className="text-sm font-medium">Color Scheme</Label>
          <Tabs defaultValue="default" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="default">Default</TabsTrigger>
              <TabsTrigger value="neutral">Neutral</TabsTrigger>
              <TabsTrigger value="vibrant">Vibrant</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Radius */}
        <div className="space-y-4">
          <Label className="text-sm font-medium">Radius</Label>
          <Slider defaultValue={[8]} max={20} step={1} className="w-full" />
        </div>

        {/* Spacing */}
        <div className="space-y-4">
          <Label className="text-sm font-medium">Spacing Scale</Label>
          <Slider defaultValue={[1]} max={2} step={0.1} className="w-full" />
        </div>

        {/* Font */}
        <div className="space-y-4">
          <Label className="text-sm font-medium">Font Family</Label>
          <Tabs defaultValue="sans" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="sans">Sans</TabsTrigger>
              <TabsTrigger value="serif">Serif</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Font Size */}
        <div className="space-y-4">
          <Label className="text-sm font-medium">Font Size</Label>
          <Slider
            defaultValue={[16]}
            max={24}
            min={12}
            step={1}
            className="w-full"
          />
        </div>

        {/* Preview Section */}
        <div className="space-y-4 pt-6 border-t">
          <Label className="text-sm font-medium">Preview</Label>
          <Card className="p-4 space-y-4">
            <Button variant="default">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
          </Card>
        </div>
      </div>
    </Card>
  );
};

export default ThemeCustomizer;
