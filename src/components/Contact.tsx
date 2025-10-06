import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-t from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground">
              Open to new opportunities and interesting projects. Let's discuss how I can help build your next backend system.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:mustaphagarba@example.com">
                <Mail className="h-5 w-5" />
                Get In Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://github.com/mustaphagarba" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                View GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                LinkedIn Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
