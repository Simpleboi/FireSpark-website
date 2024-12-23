import React from "react";
import Navigation from "./Navigation";
import { Button } from "@/components/ui/button";
import { Flame, Heart, Users, Star, Rocket } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Founder & Lead Developer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "Marcus Rodriguez",
    role: "Design Systems Architect",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Aisha Patel",
    role: "Developer Experience Lead",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
];

const timeline = [
  {
    year: "2023",
    title: "FireSpark Launch",
    description: "Initial release of our component library",
  },
  {
    year: "2023",
    title: "Framework Support",
    description: "Added Vue and Svelte compatibility",
  },
  {
    year: "2024",
    title: "Community Growth",
    description: "Reached 1000+ GitHub stars",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Mission Section */}
      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Flame className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl text-muted-foreground">
            We're on a mission to make component development more accessible,
            efficient, and enjoyable for developers worldwide.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg text-center">
            <Heart className="h-8 w-8 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Open Source First</h3>
            <p className="text-muted-foreground">
              We believe in the power of community-driven development.
            </p>
          </div>
          <div className="p-6 border rounded-lg text-center">
            <Users className="h-8 w-8 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
            <p className="text-muted-foreground">
              Building tools that empower developers to create better
              experiences.
            </p>
          </div>
          <div className="p-6 border rounded-lg text-center">
            <Star className="h-8 w-8 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-muted-foreground">
              Committed to maintaining the highest standards in our code.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-24 bg-muted/50">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="max-w-2xl mx-auto">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="flex gap-8 mb-8 last:mb-0 relative before:absolute before:left-[27px] before:top-[40px] before:h-full before:w-[2px] before:bg-border last:before:hidden"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="font-bold">{item.year}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Us Section */}
      <div className="container mx-auto px-4 py-24 text-center bg-muted/50">
        <Rocket className="h-12 w-12 mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          We're always looking for talented individuals who share our passion
          for building great developer tools.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="/careers">View Openings</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://github.com/firespark">Contribute</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
