"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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

const sections = ["hero", "about", "projects", "skills", "experience", "contact"];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const langMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Throttled scroll handler using rAF
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setScrolled(scrollY > 50);

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.getBoundingClientRect().top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside handler for language menu only
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langMenuOpen &&
        langMenuRef.current &&
        !langMenuRef.current.contains(event.target as Node)
      ) {
        setLangMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [langMenuOpen]);

  const scrollToSection = useCallback((href: string) => {
    // Close mobile menu first
    setIsOpen(false);
    setLangMenuOpen(false);

    // Small delay so the menu closes before scrolling (avoids layout shift)
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
    setLangMenuOpen(false);
  }, []);

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
            <div className="relative" ref={langMenuRef}>
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
                    className="absolute top-full mt-2 end-0 w-40 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl overflow-hidden z-[60]"
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
              ref={mobileToggleRef}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMobileMenu}
              className="md:hidden p-2.5 rounded-xl bg-background/50 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300 relative z-[60]"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay + Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 top-0 bg-black/40 backdrop-blur-sm md:hidden z-[45]"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Mobile menu panel */}
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden absolute top-full left-0 right-0 z-[55] mx-3 mt-2 rounded-2xl bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl shadow-black/10 overflow-hidden"
            >
              <div className="p-4 space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.25 }}
                      onClick={() => scrollToSection(link.href)}
                      className={`flex items-center w-full text-left px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-200 active:scale-[0.98] ${
                        isActive
                          ? "text-primary bg-primary/10 border border-primary/20"
                          : "text-foreground hover:text-primary hover:bg-primary/5 border border-transparent"
                      }`}
                    >
                      {/* Active indicator dot */}
                      <span
                        className={`w-1.5 h-1.5 rounded-full mr-3 transition-all duration-300 ${
                          isActive
                            ? "bg-primary scale-100"
                            : "bg-muted-foreground/30 scale-75"
                        }`}
                      />
                      {link.name}
                    </motion.button>
                  );
                })}
              </div>

              {/* Bottom divider with gradient */}
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

              {/* Mobile bottom bar with theme + language info */}
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-medium">
                  © {new Date().getFullYear()} GhassenAlmia
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-muted-foreground/60 uppercase tracking-wider">
                    {langNames[locale]}
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
