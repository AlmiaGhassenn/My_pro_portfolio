"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { portfolioData } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
  LinkedIn: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
};

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-14 sm:py-24 px-3 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-secondary/40 dark:from-secondary/15 dark:via-transparent dark:to-secondary/15" />
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-16"
        >
          <span className="text-primary font-mono text-xs sm:text-sm font-medium tracking-wider uppercase">{t.about.label}</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-1.5 sm:mt-2 text-foreground">{t.about.title}</h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-3 sm:mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-5 sm:gap-8 md:gap-12">
          {/* Left column — bio + stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed mb-5 sm:mb-6">
              {t.data.about}
            </p>

            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mt-6 sm:mt-8">
              {[
                { label: t.about.yearsExp, value: "2+" },
                { label: t.about.projectsShipped, value: `${portfolioData.projects.length}+` },
                { label: t.about.happyClients, value: "10+" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center p-2.5 sm:p-4 rounded-lg sm:rounded-xl bg-background/60 dark:bg-background/40 border border-border/50 backdrop-blur-sm"
                >
                  <p className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 font-medium leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column — info cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-3 sm:space-y-4"
          >
             {/* Location card */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="group p-3.5 sm:p-5 rounded-xl bg-background/60 dark:bg-background/40 border border-border/50 hover:border-primary/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider">{t.about.location}</p>
                  <p className="text-sm sm:text-base text-foreground font-medium mt-0.5">{t.data.location}</p>
                </div>
              </div>
            </motion.div>

            {/* Email card */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="group p-3.5 sm:p-5 rounded-xl bg-background/60 dark:bg-background/40 border border-border/50 hover:border-primary/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider">{t.about.email}</p>
                  <a
                    href={`mailto:${portfolioData.email}`}
                    className="text-sm sm:text-base text-foreground font-medium hover:text-primary truncate block mt-0.5"
                  >
                    {portfolioData.email}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Social links card */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="group p-3.5 sm:p-5 rounded-xl bg-background/60 dark:bg-background/40 border border-border/50 hover:border-primary/30 backdrop-blur-sm"
            >
              <p className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2.5 sm:mb-3">{t.about.connect}</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {portfolioData.socials
                  .filter((social) => social.name !== "WhatsApp")
                  .map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30"
                  >
                    {socialIcons[social.name] || <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />}
                    <span className="text-xs sm:text-sm font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
