"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { portfolioData } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background py-8 sm:py-12 px-4 sm:px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-1">
              {portfolioData.name}
            </p>
            <p className="text-muted-foreground text-sm">{t.data.title}</p>
          </div>

          <div className="flex gap-2 sm:gap-4 flex-wrap justify-center">
             {portfolioData.socials.map((social) => (
               <motion.a
                 key={social.name}
                 href={social.url}
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ scale: 1.05, y: -2 }}
                 whileTap={{ scale: 0.95 }}
                 transition={{ type: "spring", stiffness: 400, damping: 25 }}
                 className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium text-muted-foreground bg-card border border-border/50 hover:border-primary/30 hover:text-primary"
               >
                {social.name}
              </motion.a>
            ))}
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
            <p>© {currentYear} {portfolioData.name}.</p>
            <span className="hidden sm:inline">·</span>
            <p className="flex items-center gap-1">
              {t.footer.builtWith} <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" /> {t.footer.using}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
