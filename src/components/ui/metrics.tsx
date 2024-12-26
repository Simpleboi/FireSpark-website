
export const LandingMetrics = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="space-y-2">
          <div className="text-3xl font-bold">About 2</div>
          <div className="text-sm text-muted-foreground">Components</div>
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-bold">0+</div>
          <div className="text-sm text-muted-foreground">Weekly Downloads</div>
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-bold">95%</div>
          <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-bold">1+</div>
          <div className="text-sm text-muted-foreground">GitHub Stars</div>
        </div>
      </div>
    </div>
  );
};
