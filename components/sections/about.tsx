"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/50 dark:bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            animate={{
              scale: [1, 1.05, 1],
              color: ["hsl(var(--foreground))", "hsl(var(--primary))", "hsl(var(--foreground))"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-4xl font-bold mb-12 text-foreground"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                {portfolioData.about}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="bg-background dark:bg-background/50 p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-primary mb-2">Location</h3>
                <p className="text-muted-foreground">{portfolioData.location}</p>
              </div>

              <div className="bg-background dark:bg-background/50 p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-primary mb-2">Email</h3>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {portfolioData.email}
                </a>
              </div>

              <div className="bg-background dark:bg-background/50 p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-primary mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {portfolioData.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
