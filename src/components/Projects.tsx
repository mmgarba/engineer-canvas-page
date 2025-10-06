import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "BUK CashTrack",
      description: "Progressive Web Application (PWA) built with Django for tracking and managing financial transactions. Final year project for FCSIT Bayero University Kano featuring offline support and real-time sync.",
      technologies: ["Python", "Django", "PWA", "PostgreSQL", "JavaScript"],
      githubUrl: "https://github.com/mustaphagarba/buk-cashtrack",
    },
    {
      title: "Revoted Project",
      description: "A secure and efficient electronic voting system built with PHP, featuring voter authentication, real-time vote counting, and administrative dashboard for election management.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      githubUrl: "https://github.com/mustaphagarba/revoted-project",
    },
    {
      title: "FMD Experiments",
      description: "Experimental backend development project exploring various architectural patterns, API designs, and database optimization techniques for high-performance applications.",
      technologies: ["Node.js", "Express", "MongoDB", "Redis"],
      githubUrl: "https://github.com/mustaphagarba/FMD-experiments",
    },
    {
      title: "WeCodeApp Mobile",
      description: "React Native application developed during WecodeNG meetup in Abuja. Cross-platform mobile app demonstrating modern mobile development practices and state management.",
      technologies: ["React Native", "JavaScript", "Mobile Development"],
      githubUrl: "https://github.com/mustaphagarba/wecodeapp",
    },
    {
      title: "Reveal.js Presentations",
      description: "Customized HTML presentation framework for creating elegant, responsive slide decks. Enhanced with custom themes and interactive features for technical presentations.",
      technologies: ["JavaScript", "HTML/CSS", "Reveal.js"],
      githubUrl: "https://github.com/mustaphagarba/reveal.js",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of backend systems and APIs I've architected and developed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
