"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n";

const categoryColors: Record<string, string> = {
  "Frontend": "from-blue-500 to-cyan-400",
  "Backend": "from-green-500 to-emerald-400",
  "CMS & Platforms": "from-orange-500 to-amber-400",
  "Tools": "from-purple-500 to-violet-400",
};

const categoryAccents: Record<string, string> = {
  "Frontend": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  "Backend": "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  "CMS & Platforms": "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  "Tools": "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
};

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-secondary/40 dark:from-secondary/15 dark:via-transparent dark:to-secondary/15" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16"
        >
          <span className="text-primary font-mono text-sm font-medium tracking-wider uppercase">{t.skills.label}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-foreground">{t.skills.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {Object.entries(portfolioData.skills).map(([category, skills], catIndex) => {
            const translatedCategory = t.data.skillCategories[category as keyof typeof t.data.skillCategories] || category;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group p-4 sm:p-6 rounded-2xl bg-background/60 dark:bg-background/40 border border-border/50 hover:border-primary/20 transition-all duration-500 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-5">
                  <div className={`w-1.5 h-6 sm:h-8 rounded-full bg-gradient-to-b ${categoryColors[category] || "from-primary to-accent"}`} />
                  <h3 className="text-sm sm:text-lg font-bold text-foreground">{translatedCategory}</h3>
                </div>

                <div className="space-y-2.5">
                  {skills.map((skill, index) => (
                    <div
                      key={skill}
                      className="transition-transform duration-200 hover:translate-x-1"
                    >
                      <span
                        className={`inline-block px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium rounded-lg border ${
                          categoryAccents[category] || "bg-primary/10 text-primary border-primary/20"
                        } transition-transform duration-300 hover:scale-105`}
                      >
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
