import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Microservices E-Commerce Platform",
      description: "Designed and implemented a scalable microservices architecture handling 10K+ requests/second with Redis caching, message queues, and distributed transactions.",
      technologies: ["Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Real-Time Analytics API",
      description: "Built a high-performance REST API for processing and aggregating real-time analytics data from multiple sources with sub-100ms response times.",
      technologies: ["Python", "FastAPI", "MongoDB", "Apache Kafka", "AWS"],
      githubUrl: "https://github.com",
    },
    {
      title: "Authentication & Authorization Service",
      description: "Developed a robust OAuth 2.0 authentication service with JWT tokens, role-based access control, and integration with third-party identity providers.",
      technologies: ["Go", "PostgreSQL", "Redis", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Distributed Task Queue System",
      description: "Created a fault-tolerant distributed task queue system for processing background jobs with retry logic, priority scheduling, and monitoring dashboard.",
      technologies: ["Python", "Celery", "RabbitMQ", "Redis", "Grafana"],
      githubUrl: "https://github.com",
    },
    {
      title: "GraphQL Gateway Service",
      description: "Architected a unified GraphQL gateway aggregating data from multiple REST APIs and databases, reducing client-side complexity and network requests.",
      technologies: ["Node.js", "GraphQL", "Apollo", "PostgreSQL", "Redis"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
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
