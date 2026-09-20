"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ArrowUpRight, Globe, Layers, Sparkles } from "lucide-react";
import { portfolioData } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n";

export function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Filter tags
  const allTags = ["All", ...Array.from(new Set(portfolioData.projects.flatMap((p) => p.tags)))];

  const filteredProjects = activeFilter === "All"
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-16 sm:py-28 px-3 sm:px-6 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-primary font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase">
                {t.projects.label}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              {t.projects.title}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full mt-4" />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50">
            {allTags.slice(0, 6).map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 ${
                  activeFilter === tag
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const projectT = t.data.projects[project.id as keyof typeof t.data.projects];
              const isFeatured = index === 0;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className={`group relative bg-background/60 dark:bg-card/40 border border-border/60 rounded-3xl overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 backdrop-blur-md flex flex-col ${
                    isFeatured ? "sm:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  {/* Card Header Badge */}
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <span className="px-3 py-1 text-[11px] font-semibold tracking-wide uppercase bg-background/80 backdrop-blur-md text-foreground rounded-full border border-border/60 shadow-sm">
                      #{project.id}
                    </span>
                  </div>

                  {/* Image Container */}
                  <div
                    className={`relative overflow-hidden cursor-pointer ${
                      isFeatured ? "h-56 sm:h-72 lg:h-80" : "h-52 sm:h-60"
                    }`}
                    onClick={() => setSelectedProject(project.id)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                    
                    {/* Hover Quick View overlay */}
                    <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project.id);
                        }}
                        className="px-4 py-2.5 rounded-full bg-background/95 text-foreground font-medium text-xs sm:text-sm shadow-xl flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                      >
                        <Globe className="w-4 h-4" />
                        Live Preview
                      </button>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2.5 rounded-full bg-background/95 text-foreground hover:bg-accent hover:text-accent-foreground transition-all shadow-xl transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                        title={t.projects.openNewTab}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3
                          onClick={() => setSelectedProject(project.id)}
                          className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors cursor-pointer"
                        >
                          {project.title}
                        </h3>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary opacity-80 group-hover:opacity-100 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>

                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                        {projectT?.description || project.description}
                      </p>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 border-t border-border/40">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[11px] font-medium bg-primary/10 text-primary rounded-lg border border-primary/15"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Modal Preview */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-lg p-2 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-6xl h-[88vh] bg-background border border-border/80 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-card/90 border-b border-border/60 backdrop-blur-md">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-foreground truncate ml-2">
                    {portfolioData.projects.find((p) => p.id === selectedProject)?.title}
                  </span>
                  <span className="hidden sm:inline-block text-xs text-muted-foreground font-mono truncate bg-muted px-2 py-0.5 rounded-md">
                    {portfolioData.projects.find((p) => p.id === selectedProject)?.link}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={portfolioData.projects.find((p) => p.id === selectedProject)?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-xl transition-colors text-xs font-medium flex items-center gap-1.5 px-3"
                    title={t.projects.openNewTab}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Open Site</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 bg-muted hover:bg-destructive hover:text-destructive-foreground rounded-xl transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* iframe container */}
              <div className="flex-1 w-full bg-card relative">
                <iframe
                  src={portfolioData.projects.find((p) => p.id === selectedProject)?.link}
                  className="w-full h-full border-0"
                  title={portfolioData.projects.find((p) => p.id === selectedProject)?.title}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
