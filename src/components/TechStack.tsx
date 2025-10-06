import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TechStack = () => {
  const categories = [
    {
      title: "Languages",
      items: ["Python", "Go", "Node.js", "TypeScript", "Java"]
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"]
    },
    {
      title: "Cloud & DevOps",
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
    },
    {
      title: "Frameworks & Tools",
      items: ["FastAPI", "Express.js", "GraphQL", "Apache Kafka", "RabbitMQ"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Tech Stack</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to build robust backend systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <Card key={category.title} className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <Badge 
                        key={item} 
                        variant="outline" 
                        className="text-sm py-1.5 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
