import { Github, Twitter, Linkedin } from "lucide-react";
import "../../../styles/AboutStyles/developers.scss";

const developers = [
  {
    name: "Nathaniel Paz",
    role: "Founder/Lead Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    bio: "Full-stack developer with a passion for building performant web applications and aspiring computer scientist.",
    social: {
      github: "https://github.com/Simpleboi",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "UI/UX Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus",
    bio: "Designer turned developer, focusing on creating beautiful and intuitive user interfaces.",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "Core Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=aisha",
    bio: "Performance optimization specialist with expertise in building scalable component systems.",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "Developer Advocate",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    bio: "Community builder and educator, helping developers make the most of FireSpark.",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
];

export const MeetTheDevelopers = () => {
  return (
    <section className="mtd-container">
      <div className="mtd-top-container">
        <h2 className="mtd-header">Meet the Developers</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Meet the talented team behind FireSpark, dedicated to creating the
          best developer experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {developers.map((developer, index) => (
          <div
            key={index}
            className="bg-background border rounded-lg p-6 text-center"
          >
            <img
              src={developer.image}
              alt={developer.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">{developer.name}</h3>
            <p className="text-sm text-primary mb-2">{developer.role}</p>
            <p className="text-sm text-muted-foreground mb-4">
              {developer.bio}
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={developer.social.github}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={developer.social.twitter}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={developer.social.linkedin}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
