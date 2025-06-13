import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Blog Web App",
    description:
      "This full-stack blog web app enables users to create and manage posts with ease, featuring a user-friendly interface and an admin panel for editing and deleting content The app displays posts in reverse chronological order on the homepage, providing real-time updates for seamless content management.",
    image: "/projects/project1.png",
    tags: ["EJS", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://absra47.github.io/GO2COD_FS_01/",
    githubUrl: "https://github.com/absra47/GO2COD_FS_01",
  },
  {
    id: 2,
    title: "Document Management System",
    description:
      "Developed a secure system for managing documents for the Ministry of Innovation and Technology (MINT), contributing to feature enhancement and ensuring system functionality and data integrity.",
    image: "/projects/project2.png",
    tags: ["Next.js", "TypeScript", "Django"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Music Catalog API",
    description:
      "A FastAPI application designed to manage a personal music collection. It allows you to perform Create, Read, Update, and Delete (CRUD) operations on songs, now with persistent data storage, advanced search capabilities, external lyrics fetching, and asynchronous metadata enrichment.",
    image: "/projects/project3.png",
    tags: ["Python", "FastAPI", "Docker"],
    demoUrl: "#",
    githubUrl: "https://github.com/absra47/song_managment",
  },
  {
    id: 4,
    title: "Spotify Clone",
    description:
      "Spotfy clone , It's a responsive and user-friendly platform that allows users to browse and listen to music tracks.",
    image: "/projects/project4.png",
    tags: ["React", "Tailwind", "Vite"],
    demoUrl: "https://spotify-clone-frontend-fawn.vercel.app/",
    githubUrl: "https://github.com/absra47/song-management",
  },
  {
    id: 5,
    title: "E-Commerce Store & Admin Dashboard",
    description:
      "This full-stack e-commerce platform features a responsive customer store  and a powerful admin dashboard. Users can seamlessly manage products, utilize a dynamic shopping cart, and process Stripe payments with a conditional coupon rewards system. It leverages Redis for enhanced performance.",
    image: "/projects/project5.png",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Redis",
      "Zustand",
      "Tailwind CSS",
      "Auth",
    ],
    demoUrl: "https://e-commerce-store-vfky.onrender.com",
    githubUrl: "https://github.com/absra47/e-commerce_store",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/absra47"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
