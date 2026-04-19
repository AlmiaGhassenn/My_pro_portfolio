"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { portfolioData } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary font-mono text-sm font-medium tracking-wider uppercase">{t.experience.label}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-foreground">{t.experience.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
        </motion.div>

        <div className="relative">
          <div className="absolute start-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          <div className="space-y-10">
            {portfolioData.experience.map((exp, index) => {
              const expT = t.data.experience[index as keyof typeof t.data.experience];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative ps-12"
                >
                  <div className="absolute start-0 top-6">
                    <div className="relative">
                      <div className="absolute -inset-2 rounded-full bg-primary/20 blur-sm" />
                      <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                        <Briefcase className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ y: -3 }}
                    className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {expT?.role || exp.role}
                        </h3>
                        <p className="text-accent font-semibold text-sm mt-1">{expT?.company || exp.company}</p>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-medium whitespace-nowrap">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm">{expT?.description || exp.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
