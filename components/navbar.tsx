"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/i18n";
import type { Locale } from "@/lib/translations";

const langLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  ar: "AR",
};

const langNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#hero" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "projects", "skills", "experience", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest(".mobile-menu")) {
        setIsOpen(false);
      }
      if (langMenuOpen && !(event.target as Element).closest(".lang-menu")) {
        setLangMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, langMenuOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#hero")}
            className="flex-shrink-0 cursor-pointer"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent">
              GA
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5 p-1 rounded-xl bg-background/50 backdrop-blur-sm border border-border/30">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              );
            })}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <div className="relative lang-menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-background/50 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300 text-sm font-medium"
                aria-label="Change language"
              >
                <Globe className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">{langLabels[locale]}</span>
              </motion.button>

              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full mt-2 end-0 w-40 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl overflow-hidden z-50"
                  >
                    {(Object.keys(langLabels) as Locale[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLocale(lang);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium transition-colors ${
                          locale === lang
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        <span>{langNames[lang]}</span>
                        <span className="text-xs text-muted-foreground">{langLabels[lang]}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme toggle */}
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2.5 rounded-xl bg-background/50 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-yellow-500" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </motion.button>
            )}

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-xl bg-background/50 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden mobile-menu"
            >
              <div className="pb-6 pt-2 space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      onClick={() => scrollToSection(link.href)}
                      className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                        isActive
                          ? "text-primary bg-primary/10 border border-primary/20"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {link.name}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
