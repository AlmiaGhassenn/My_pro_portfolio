"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { portfolioData } from "@/lib/constants";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden" suppressHydrationWarning>
      {/* Crazy Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Pulsing Orbs */}
        <motion.div
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.1, 0.4, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl dark:bg-primary/10"
        ></motion.div>
        <motion.div
          animate={{
            scale: [2.5, 1, 2.5],
            opacity: [0.2, 0.1, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl dark:bg-accent/10"
        ></motion.div>

        {/* Floating Particles */}
        {[
          { left: "20%", top: "30%", delay: 0 },
          { left: "80%", top: "20%", delay: 0.5 },
          { left: "40%", top: "70%", delay: 1 },
          { left: "60%", top: "50%", delay: 1.5 },
          { left: "10%", top: "80%", delay: 2 },
          { left: "90%", top: "40%", delay: 2.5 },
          { left: "30%", top: "10%", delay: 3 },
          { left: "70%", top: "90%", delay: 3.5 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.sin(i) * 20, 0],
              y: [0, Math.cos(i) * 20, 0],
              scale: [0.5, 1.5, 0.5],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + (i % 2),
              repeat: Infinity,
              delay: particle.delay,
            }}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 1.2,
          type: "spring",
          bounce: 0.6,
          delay: 0.2
        }}
        className="text-center max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0, rotate: -360 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            type: "spring",
            bounce: 0.8
          }}
          className="mb-6"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.3,
              boxShadow: "0 0 50px rgba(var(--primary), 0.8)",
            }}
            className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-1 hover:scale-110 transition-transform duration-300"
          >
            <motion.img
              src="/profile.png"
              alt="Profile"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-full h-full rounded-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.8,
            duration: 1,
            type: "spring",
            bounce: 0.5
          }}
          className="text-5xl md:text-7xl font-bold mb-6 text-foreground"
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_200%]"
          >
            {portfolioData.name}
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            delay: 1,
            duration: 0.8,
            type: "spring",
            bounce: 0.7
          }}
          className="text-2xl md:text-3xl text-primary mb-4 font-semibold"
        >
          {portfolioData.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto"
        >
          {portfolioData.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{
              scale: 1.2,
              boxShadow: "0 0 40px rgba(var(--primary), 0.8)",
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.2 }
            }}
            animate={{
              boxShadow: [
                "0 0 0px rgba(var(--primary), 0)",
                "0 0 20px rgba(var(--primary), 0.5)",
                "0 0 0px rgba(var(--primary), 0)",
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.2,
              boxShadow: "0 0 40px rgba(var(--primary), 0.6)",
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.2 }
            }}
            animate={{
              borderColor: ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--primary))"],
            }}
            transition={{
              borderColor: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
          >
            Get in Touch
          </motion.button>
          <motion.a
            href={portfolioData.resume}
            download
            whileHover={{
              scale: 1.2,
              boxShadow: "0 0 40px rgba(var(--primary), 0.6)",
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.2 }
            }}
            className="inline-block px-8 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-colors"
          >
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.5, rotate: 180 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ChevronDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
