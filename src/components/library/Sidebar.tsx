import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Search,
  ChevronRight,
  Layout,
  Box,
  Settings,
  Flame,
} from "lucide-react";

interface SidebarProps {
  categories?: Array<{
    id: string;
    name: string;
    components: Array<{
      id: string;
      name: string;
    }>;
  }>;
  onComponentSelect?: (componentId: string) => void;
  selectedComponentId?: string;
}

const Sidebar = ({
  categories = [
    {
      id: "1",
      name: "Layout",
      components: [
        { id: "l1", name: "Container" },
        { id: "l2", name: "Grid" },
        { id: "l3", name: "Stack" },
      ],
    },
    {
      id: "2",
      name: "Forms",
      components: [
        { id: "f1", name: "Input" },
        { id: "f2", name: "Button" },
        { id: "f3", name: "Select" },
      ],
    },
    {
      id: "3",
      name: "Data Display",
      components: [
        { id: "d1", name: "Table" },
        { id: "d2", name: "Card" },
        { id: "d3", name: "List" },
      ],
    },
  ],
  onComponentSelect = () => {},
  selectedComponentId = "",
}: SidebarProps) => {
  return (
    <div className="h-full w-[280px] border-r bg-background flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center gap-2 text-primary">
            <Flame className="h-6 w-6" />
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              FireSpark
            </h2>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search components..." className="pl-8" />
        </div>
      </div>

      <ScrollArea className="flex-1 px-3">
        <div className="space-y-2 py-4">
          {categories.map((category) => (
            <div key={category.id} className="space-y-1">
              <div className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium">
                {category.name === "Layout" && <Layout className="h-4 w-4" />}
                {category.name === "Forms" && <Box className="h-4 w-4" />}
                {category.name === "Data Display" && (
                  <Settings className="h-4 w-4" />
                )}
                {category.name}
              </div>
              {category.components.map((component) => (
                <Button
                  key={component.id}
                  variant={
                    selectedComponentId === component.id ? "secondary" : "ghost"
                  }
                  className="w-full justify-between px-2 py-1.5 text-sm font-normal"
                  onClick={() => onComponentSelect(component.id)}
                >
                  {component.name}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              ))}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
