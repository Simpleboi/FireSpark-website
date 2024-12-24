import { Quote } from "lucide-react";

export const LandingTestimonals = () => {
  return (
    <div className="container mx-auto px-4 py-24 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Loved by Developers</h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of developers building better interfaces with
            FireSpark
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background p-8 rounded-lg border space-y-6">
            <Quote className="h-8 w-8 text-primary/20" />
            <p className="text-muted-foreground">
              "FireSpark has revolutionized our component development workflow.
              The framework-agnostic approach is exactly what we needed for our
              diverse tech stack."
            </p>
            <div className="flex items-center gap-4 pt-4 border-t">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=sarah"
                alt="Sarah Chen"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold">Sarah Chen</h3>
                <p className="text-sm text-muted-foreground">
                  Senior Developer at TechCorp
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background p-8 rounded-lg border space-y-6">
            <Quote className="h-8 w-8 text-primary/20" />
            <p className="text-muted-foreground">
              "The documentation and component playground make it incredibly
              easy to get started. Best developer experience I've had with a UI
              library."
            </p>
            <div className="flex items-center gap-4 pt-4 border-t">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=alex"
                alt="Alex Rivera"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold">Alex Rivera</h3>
                <p className="text-sm text-muted-foreground">
                  Lead UI Engineer at StartupX
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background p-8 rounded-lg border space-y-6">
            <Quote className="h-8 w-8 text-primary/20" />
            <p className="text-muted-foreground">
              "The theme customization capabilities are outstanding. We were
              able to match our brand perfectly with minimal effort."
            </p>
            <div className="flex items-center gap-4 pt-4 border-t">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=emily"
                alt="Emily Zhang"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold">Emily Zhang</h3>
                <p className="text-sm text-muted-foreground">
                  Frontend Architect at DevCo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
