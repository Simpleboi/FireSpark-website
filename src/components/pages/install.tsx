import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileCode, Copy, ExternalLink } from "lucide-react";

export const LandingInstallation = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-muted/50 rounded-lg">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Quick Installation</h2>
          <p className="text-muted-foreground">
            Get started with FireSpark in minutes
          </p>
        </div>

        <div className="space-y-6">
          {/* NPM Installation */}
          <div className="bg-background border rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <Badge>npm</Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard("npm install firesparklib")}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="bg-muted p-4 rounded-md">
              <code>npm install firesparklib</code>
            </pre>
          </div>

          {/* Yarn Installation */}
          <div className="bg-background border rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <Badge>yarn</Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard("yarn add firesparklib")}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="bg-muted p-4 rounded-md">
              <code>yarn add firesparklib</code>
            </pre>
          </div>

          {/* pnpm Installation */}
          <div className="bg-background border rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <Badge>pnpm</Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard("pnpm add firesparklib")}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="bg-muted p-4 rounded-md">
              <code>pnpm add firesparklib</code>
            </pre>
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="gap-2" asChild>
              <a
                href="https://www.npmjs.com/package/firesparklib"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileCode className="h-4 w-4" />
                View on NPM
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
