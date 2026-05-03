"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, X, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n";

export function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16"
        >
          <span className="text-primary font-mono text-sm font-medium tracking-wider uppercase">{t.projects.label}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-foreground">{t.projects.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {portfolioData.projects.map((project, index) => {
            const projectT = t.data.projects[project.id as keyof typeof t.data.projects];
            return (
                 <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="group relative bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 cursor-pointer"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="relative overflow-hidden h-40 sm:h-52">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-lg">
                        <ArrowUpRight className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {projectT?.description || project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-primary/8 text-primary/80 rounded-full border border-primary/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-[96vw] sm:w-[92vw] h-[85vh] sm:h-[90vh] bg-background border border-border rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 z-20 flex gap-2">
              <a
                href={portfolioData.projects.find(p => p.id === selectedProject)?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-card/90 backdrop-blur-sm border border-border rounded-xl hover:bg-secondary transition-colors"
                title={t.projects.openNewTab}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2.5 bg-card/90 backdrop-blur-sm border border-border rounded-xl hover:bg-secondary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <iframe
              src={portfolioData.projects.find(p => p.id === selectedProject)?.link}
              className="w-full h-full border-0"
              title={portfolioData.projects.find(p => p.id === selectedProject)?.title}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
