"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { portfolioData } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <Github className="w-5 h-5" />,
  LinkedIn: <Linkedin className="w-5 h-5" />,
  WhatsApp: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
};

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
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
          className="mb-16"
        >
          <span className="text-primary font-mono text-sm font-medium tracking-wider uppercase">{t.about.label}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-foreground">{t.about.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t.data.about}
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8">
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
                  className="text-center p-4 rounded-xl bg-background/60 dark:bg-background/40 border border-border/50 backdrop-blur-sm"
                >
                  <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-4"
          >
            <motion.div
              whileHover={{ y: -2 }}
              className="group p-5 rounded-xl bg-background/60 dark:bg-background/40 border border-border/50 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{t.about.location}</p>
                  <p className="text-foreground font-medium">{t.data.location}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              className="group p-5 rounded-xl bg-background/60 dark:bg-background/40 border border-border/50 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{t.about.email}</p>
                  <a
                    href={`mailto:${portfolioData.email}`}
                    className="text-foreground font-medium hover:text-primary transition-colors truncate block"
                  >
                    {portfolioData.email}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              className="group p-5 rounded-xl bg-background/60 dark:bg-background/40 border border-border/50 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
            >
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">{t.about.connect}</p>
              <div className="flex gap-3">
                {portfolioData.socials.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  >
                    {socialIcons[social.name] || <ExternalLink className="w-5 h-5" />}
                    <span className="text-sm font-medium">{social.name}</span>
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
