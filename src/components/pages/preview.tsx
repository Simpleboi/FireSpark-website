export const LandingPreview = () => {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h2 className="text-3xl font-bold mb-16">Clean, Minimal, Powerful</h2>
      <div className="aspect-video border rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1974&auto=format&fit=crop"
          alt="FireSpark Interface"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
