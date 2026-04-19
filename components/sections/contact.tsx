"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
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
          <span className="text-primary font-mono text-sm font-medium tracking-wider uppercase">{t.contact.label}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-foreground">{t.contact.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
          <p className="text-muted-foreground mt-4 text-lg max-w-xl">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-5"
          >
            <motion.a
              href={`mailto:${portfolioData.email}`}
              whileHover={{ y: -3 }}
              className="group block p-5 rounded-2xl bg-background/60 dark:bg-background/40 border border-border/50 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{t.contact.emailMe}</p>
                  <p className="text-foreground font-medium mt-1 group-hover:text-primary transition-colors truncate">
                    {portfolioData.email}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all flex-shrink-0 mt-1" />
              </div>
            </motion.a>

            <motion.div
              whileHover={{ y: -3 }}
              className="group p-5 rounded-2xl bg-background/60 dark:bg-background/40 border border-border/50 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{t.contact.basedIn}</p>
                  <p className="text-foreground font-medium mt-1">{t.data.location}</p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-3 pt-2">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{t.contact.findMe}</p>
              <div className="flex flex-col gap-3">
                {portfolioData.socials.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    <span className="font-medium">{social.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border/50 rounded-xl bg-background/60 dark:bg-background/40 text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all duration-300 backdrop-blur-sm placeholder:text-muted-foreground/50"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.emailField}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border/50 rounded-xl bg-background/60 dark:bg-background/40 text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all duration-300 backdrop-blur-sm placeholder:text-muted-foreground/50"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                {t.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-border/50 rounded-xl bg-background/60 dark:bg-background/40 text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all duration-300 resize-none backdrop-blur-sm placeholder:text-muted-foreground/50"
                placeholder={t.contact.messagePlaceholder}
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={submitted}
              className="w-full px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-70"
            >
              {submitted ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  {t.contact.sent}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {t.contact.send}
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
