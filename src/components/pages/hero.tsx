import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Flame, Wrench } from "lucide-react";
import "../../styles/hero.scss";

export const LandingHero = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 pt-20 py-24 flex flex-col items-center text-center gap-8 cont">
      <div className="flex items-center gap-3 text-primary animate-fade-in">
        <Flame className="h-12 w-12 firespark-flame" />
        <h1 className="text-4xl md:text-6xl hero-title">FireSpark</h1>
      </div>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl hero-paragraph">
      The only component library you'll ever need for fast, beautiful, and framework-agnostic web development. Built on top of SparkCSS, with a little extra fire
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          size="lg"
          className="text-lg hero-compbtn"
          onClick={() => navigate("/components")}
        >
          Try Components
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="text-lg hero-devbtn"
          onClick={() => navigate("/tools")}
        >
          <Wrench className="mr-2 h-4 w-4" /> Developer Tools
        </Button>
      </div>
    </div>
  );
};
