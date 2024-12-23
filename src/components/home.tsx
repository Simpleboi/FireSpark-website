import React from "react";
import Sidebar from "./library/Sidebar";
import ComponentPlayground from "./library/ComponentPlayground";
import ThemeCustomizer from "./library/ThemeCustomizer";

interface HomeProps {
  selectedComponentId?: string;
  onComponentSelect?: (componentId: string) => void;
  isThemeCustomizerOpen?: boolean;
}

const Home = ({
  selectedComponentId = "",
  onComponentSelect = () => {},
  isThemeCustomizerOpen = true,
}: HomeProps) => {
  return (
    <div className="flex h-screen w-full bg-background">
      <Sidebar
        selectedComponentId={selectedComponentId}
        onComponentSelect={onComponentSelect}
      />
      <div className="flex-1 p-6 overflow-hidden">
        <ComponentPlayground />
      </div>
      {isThemeCustomizerOpen && (
        <ThemeCustomizer isOpen={isThemeCustomizerOpen} />
      )}
    </div>
  );
};

export default Home;
