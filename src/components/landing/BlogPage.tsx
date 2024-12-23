import React from "react";
import Navigation from "./Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const posts = [
  {
    title: "Introducing FireSpark v1.0",
    excerpt:
      "We're excited to announce the official release of FireSpark, our framework-agnostic component library.",
    date: "March 15, 2024",
    author: "Sarah Chen",
    category: "Updates",
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Building Accessible Components",
    excerpt:
      "Learn how to create components that are accessible to everyone using FireSpark's built-in features.",
    date: "March 10, 2024",
    author: "Marcus Rodriguez",
    category: "Tutorials",
    image:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Case Study: Acme Corp's Migration",
    excerpt:
      "How Acme Corp successfully migrated their component library to FireSpark and improved developer productivity.",
    date: "March 5, 2024",
    author: "Aisha Patel",
    category: "Case Studies",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1974&auto=format&fit=crop",
  },
];

const categories = ["All", "Updates", "Tutorials", "Case Studies", "Community"];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold text-center mb-6">Blog</h1>
        <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Stay up to date with the latest FireSpark news, tutorials, and
          community stories.
        </p>

        {/* Search and Filter */}
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="container mx-auto px-4 pb-24">
        <div className="relative rounded-xl overflow-hidden aspect-[2/1] mb-8">
          <img
            src={posts[0].image}
            alt={posts[0].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <div className="text-white">
              <Badge className="mb-4">{posts[0].category}</Badge>
              <h2 className="text-3xl font-bold mb-2">{posts[0].title}</h2>
              <p className="text-lg text-white/80 mb-4">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4">
                <span>{posts[0].author}</span>
                <span>•</span>
                <span>{posts[0].date}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <article
              key={post.title}
              className="border rounded-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <Badge className="mb-4">{post.category}</Badge>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
