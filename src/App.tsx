import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import LandingPage from "./components/landing/LandingPage";
import AboutPage from "./components/landing/AboutPage";
import BlogPage from "./components/landing/BlogPage";
import DocsPage from "./components/landing/DocsPage";
import ExamplesPage from "./components/landing/ExamplesPage";
import ComponentShowcase from "./components/landing/ComponentShowcase";
import DevTools from "./components/landing/DevTools";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/components" element={<Home />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/examples" element={<ExamplesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/showcase" element={<ComponentShowcase />} />
          <Route path="/tools" element={<DevTools />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
