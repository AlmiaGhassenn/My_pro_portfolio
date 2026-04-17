"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/constants";

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/50 dark:bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-foreground">Skills & Technologies</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(portfolioData.skills).map(([category, skills]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-background dark:bg-background/50 p-6 rounded-lg border border-border"
            >
              <h3 className="text-lg font-bold text-primary mb-4">{category}</h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.1,
                        x: 15,
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={{
                            scale: [1, 1.5, 1],

                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 2 + (index % 3),
                            repeat: Infinity,
                            delay: (index * 0.5) % 2,
                          }}
                          className="w-3 h-3 bg-primary rounded-full"
                        ></motion.div>
                        <span className="text-muted-foreground">{skill}</span>
                      </div>
                    </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
