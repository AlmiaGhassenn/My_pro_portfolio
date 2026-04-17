"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {/* Left section */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              {portfolioData.name}
            </p>
            <p className="text-muted-foreground">{portfolioData.title}</p>
          </div>

          {/* Social links */}
          <div className="flex gap-6">
            {portfolioData.socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {social.name}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>© {currentYear} {portfolioData.name}. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
