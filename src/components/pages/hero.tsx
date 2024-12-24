import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Flame, Wrench } from "lucide-react";

export const LandingHero = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 pt-20 py-24 flex flex-col items-center text-center gap-8">
      <div className="flex items-center gap-3 text-primary animate-fade-in">
        <Flame className="h-12 w-12" />
        <h1 className="text-4xl md:text-6xl font-bold">FireSpark</h1>
      </div>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
        A minimalist, framework-agnostic component library with a focus on clean
        design and exceptional developer experience
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          size="lg"
          className="text-lg"
          onClick={() => navigate("/components")}
        >
          Try Components
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="text-lg"
          onClick={() => navigate("/tools")}
        >
          <Wrench className="mr-2 h-4 w-4" /> Developer Tools
        </Button>
      </div>
    </div>
  );
};
