"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { portfolioData } from "@/lib/constants";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden" suppressHydrationWarning>
      {/* Background Effects - Static for better performance */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl dark:bg-primary/5" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl dark:bg-accent/5" />
      </div>

      <div
        className="text-center max-w-2xl mx-auto"
      >
        <div
          className="mb-6"
        >
          <div
            className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-1 hover:scale-110 transition-transform duration-300"
          >
            <Image
              src="/profile.png"
              alt="Profile"
              width={120}
              height={120}
              className="w-full h-full rounded-full object-cover"
              priority
            />
          </div>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold mb-6 text-foreground"
        >
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {portfolioData.name}
          </span>
        </h1>

        <p
          className="text-2xl md:text-3xl text-primary mb-4 font-semibold"
        >
          {portfolioData.title}
        </p>

        <p
          className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto"
        >
          {portfolioData.tagline}
        </p>

        <div
          className="flex gap-4 justify-center flex-wrap"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
          >
            Get in Touch
          </button>
          <a
            href={portfolioData.resume}
            download
            className="inline-block px-8 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-colors"
          >
            Download Resume
          </a>
        </div>

        <div
          className="mt-16"
        >
          <ChevronDown className="w-6 h-6 mx-auto text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
}
