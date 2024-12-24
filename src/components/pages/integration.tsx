import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export const LandingIntegration = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Framework Integration</h2>
          <p className="text-muted-foreground">
            Use FireSpark with your favorite framework
          </p>
        </div>

        <div className="grid gap-6">
          {/* React Integration */}
          <div className="bg-background border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">React</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  copyToClipboard(`import { Button } from 'firesparklib/react';

function App() {
  return <Button variant="primary">Click me</Button>;
}`)
                }
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>{`import { Button } from 'firesparklib/react';

function App() {
  return <Button variant="primary">Click me</Button>;
}`}</code>
            </pre>
          </div>

          {/* Vue Integration */}
          <div className="bg-background border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Vue</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  copyToClipboard(`import { Button } from 'firesparklib/vue';

export default {
  components: { Button },
  template: '<Button variant="primary">Click me</Button>'
}`)
                }
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>{`import { Button } from 'firesparklib/vue';

export default {
  components: { Button },
  template: '<Button variant="primary">Click me</Button>'
}`}</code>
            </pre>
          </div>

          {/* Svelte Integration */}
          <div className="bg-background border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Svelte</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  copyToClipboard(`import { Button } from 'firesparklib/svelte';

<Button variant="primary">Click me</Button>`)
                }
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>{`import { Button } from 'firesparklib/svelte';

<Button variant="primary">Click me</Button>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
