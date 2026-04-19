"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Download } from "lucide-react";
import { portfolioData } from "@/lib/constants";
import { FloatingIcons } from "@/components/floating-icons";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = t.hero.roles as unknown as string[];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  // Reset typing when language changes
  useEffect(() => {
    setDisplayText("");
    setRoleIndex(0);
    setIsDeleting(false);
  }, [t]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden"
      suppressHydrationWarning
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] dark:bg-primary/5" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] dark:bg-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      {/* Floating tech icons */}
      <FloatingIcons />

      <div className="text-center max-w-3xl mx-auto relative z-10">
        {/* Profile image with animated ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative w-36 h-36 mx-auto group">
            <motion.div
              className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur-sm group-hover:opacity-100 transition-opacity"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            />
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary via-accent to-primary p-[3px]">
              <Image
                src="/profile.png"
                alt="Profile"
                width={140}
                height={140}
                className="w-full h-full rounded-full object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-[3px] border-background">
              <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40" />
            </div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground mb-3 font-medium"
        >
          {t.hero.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient_3s_linear_infinite]">
            {portfolioData.name}
          </span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-primary mb-6 font-semibold h-9 flex items-center justify-center"
        >
          <span>{displayText}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block w-[3px] h-7 bg-primary ms-1 rounded-full"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed"
        >
          {t.data.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection("projects")}
            className="group px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center gap-2"
          >
            {t.hero.viewWork}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection("contact")}
            className="px-7 py-3.5 border-2 border-primary/30 text-primary rounded-xl font-medium hover:border-primary/60 hover:bg-primary/5 backdrop-blur-sm transition-all duration-300"
          >
            {t.hero.getInTouch}
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={portfolioData.resume}
            download
            className="px-7 py-3.5 border-2 border-accent/30 text-accent rounded-xl font-medium hover:border-accent/60 hover:bg-accent/5 backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            {t.hero.resume}
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-80 transition-opacity"
            onClick={() => scrollToSection("about")}
          >
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">{t.hero.scroll}</span>
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
