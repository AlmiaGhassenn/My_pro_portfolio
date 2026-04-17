"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/constants";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-foreground">Experience</h2>
        </motion.div>

        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-8"
            >
              {/* Timeline line */}
              {index !== portfolioData.experience.length - 1 && (
                <div className="absolute left-0 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-1.5 mt-1"></div>

              {/* Content */}
              <div className="bg-background dark:bg-background/50 p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                  <span className="text-sm text-primary font-medium">{exp.period}</span>
                </div>

                <p className="text-accent font-semibold mb-2">{exp.company}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
