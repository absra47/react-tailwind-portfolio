import { Briefcase, Code, User, Boxes } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Junior Software Engineer | Odoo & Web Developer
            </h3>

            <p className="text-muted-foreground">
              As a dedicated Junior Software Engineer with a BSc in Computer
              Science and Engineering, I specialize in crafting robust,
              user-centric web applications and exploring the power of ERP
              systems like Odoo. My experience includes developing dynamic
              interfaces, contributing to full-stack projects using modern
              technologies, and building custom Odoo modules.
            </p>

            <p className="text-muted-foreground">
              I am passionate about creating elegant solutions to complex
              problems and consistently learning new frameworks and techniques
              to stay at the forefront of the ever-evolving tech landscape. My
              drive is to build performant, accessible, and intuitive digital
              products that solve real-world challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Front-End Development
                  </h4>
                  <p className="text-muted-foreground">
                    Crafting responsive, intuitive, and performant user
                    interfaces with modern web technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Web Application Development{" "}
                  </h4>
                  <p className="text-muted-foreground">
                    Building robust web applications from conception to
                    deployment, focusing on functionality and user experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Problem Solving & Debugging
                  </h4>
                  <p className="text-muted-foreground">
                    Applying strong analytical skills to identify issues and
                    implement efficient software solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Boxes className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    ERP Development & Customization (Odoo)
                  </h4>
                  <p className="text-muted-foreground">
                    Building and customizing Odoo modules to streamline business
                    processes, focusing on backend logic, database models, and
                    UI integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
