"use client";

import { memo } from "react";

/* ───────────────────── SVG Tech Icons ───────────────────── */
const techIcons = [
  {
    name: "HTML5",
    glow: "#E34F26",
    svg: (
      <svg viewBox="0 0 128 128">
        <path d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z" fill="#E44D26" />
        <path d="M64 116.8l36.378-10.086 8.559-95.878H64z" fill="#F16529" />
        <path d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z" fill="#EBEBEB" />
        <path d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "CSS3",
    glow: "#1572B6",
    svg: (
      <svg viewBox="0 0 128 128">
        <path d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543z" fill="#1572B6" />
        <path d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16z" fill="#33A9DC" />
        <path d="M64.001 51.429H45.354l-1.292-14.318H64V23.411H27.319l.33 3.692 3.382 37.927H64zm0 35.559l-.061.017-15.665-4.233-.998-11.2H33.26l1.967 22.044 28.71 7.97.064-.018z" fill="#EBEBEB" />
        <path d="M63.952 51.429v13.762h15.725l-1.483 16.573-14.242 3.85v14.255l28.211-7.82.207-2.325 3.234-36.233.336-3.696h-3.707zm0-28.018v13.762h33.244l.276-3.092.628-6.978.329-3.692z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    glow: "#F7DF1E",
    svg: (
      <svg viewBox="0 0 128 128">
        <path d="M2 1h124v124H2z" fill="#F0DB4F" />
        <path d="M1.408 112.641h10.992c2.131 5.606 6.172 8.098 12.805 8.098 6.062 0 10.168-3.266 10.168-7.59 0-5.254-4.18-7.098-11.27-10.098l-3.883-1.668c-11.184-4.762-18.614-10.73-18.614-23.34 0-11.61 8.848-20.445 22.684-20.445 9.852 0 16.93 3.43 22.02 12.41l-12.066 7.75c-2.656-4.762-5.52-6.633-9.977-6.633-4.539 0-7.43 2.883-7.43 6.633 0 4.641 2.89 6.512 9.57 9.372l3.883 1.664c13.168 5.648 20.598 11.414 20.598 24.363 0 13.961-10.969 21.59-25.707 21.59-14.41 0-23.707-6.867-28.242-15.863" fill="#323330" />
        <path d="M73.031 111.801l10.824-6.551c3.805 6.184 8.664 10.738 17.309 10.738 7.273 0 11.91-3.637 11.91-8.668 0-6.031-4.762-8.168-12.77-11.68l-4.387-1.883c-12.652-5.383-21.066-12.133-21.066-26.387 0-13.125 9.996-23.117 25.617-23.117 11.129 0 19.125 3.875 24.887 14.023l-13.625 8.746c-3-5.379-6.238-7.496-11.262-7.496-5.129 0-8.379 3.25-8.379 7.496 0 5.25 3.25 7.371 10.754 10.625l4.387 1.883c14.891 6.387 23.313 12.906 23.313 27.555 0 15.789-12.402 24.434-29.082 24.434-16.313 0-26.844-7.766-31.98-17.934" fill="#323330" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    glow: "#3178C6",
    svg: (
      <svg viewBox="0 0 128 128">
        <rect width="128" height="128" rx="10" fill="#3178C6" />
        <path d="M82.688 97.395c3.348 1.926 7.266 3.184 11.75 3.773l3.918-8.32c-3.27-.668-5.863-1.809-7.774-3.426-1.91-1.613-2.863-3.598-2.863-5.953 0-2.273.87-4.164 2.613-5.668 1.742-1.508 4.637-2.672 8.688-3.496l.683-.141c5.063-1.047 8.879-2.965 11.446-5.758 2.57-2.789 3.855-6.348 3.855-10.672 0-4.656-1.844-8.594-5.527-11.816-3.688-3.223-8.629-4.836-14.828-4.836-6.54 0-11.836 1.703-15.89 5.11-4.055 3.406-6.356 7.987-6.907 13.742l11.133 1.574c.27-3.395 1.363-6.039 3.276-7.934 1.914-1.894 4.52-2.84 7.825-2.84 3.36 0 5.879.832 7.558 2.496 1.676 1.668 2.515 3.598 2.515 5.793 0 2.32-.921 4.25-2.761 5.793-1.84 1.543-4.898 2.742-9.168 3.598-5.453 1.094-9.64 3.168-12.563 6.223-2.921 3.055-4.383 6.914-4.383 11.578 0 4.367 1.633 8.137 4.899 11.305 1.226 1.191 2.652 2.209 4.281 3.059" fill="#fff" fillOpacity=".8" />
        <path d="M56.793 55.532H22.379v9.559h12v46.168h11.031V65.091H56.79z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "React",
    glow: "#61DAFB",
    svg: (
      <svg viewBox="0 0 128 128">
        <g fill="#61DAFB">
          <circle cx="64" cy="64" r="11.4" />
          <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2 2.3-4.1 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.1 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2-2.3 4.1-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9.9-30.6c-2-.8-4.2-1.5-6.4-2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.6z" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    glow: "#888888",
    svg: (
      <svg viewBox="0 0 128 128">
        <circle cx="64" cy="64" r="64" className="fill-foreground" />
        <path d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.674 67.949A64.216 64.216 0 00106.317 112.014z" className="fill-background" />
        <rect x="80" y="38.4" width="8.667" height="51.2" className="fill-background" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    glow: "#339933",
    svg: (
      <svg viewBox="0 0 128 128">
        <path d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073z" fill="#339933" />
      </svg>
    ),
  },
  {
    name: "Git",
    glow: "#F05032",
    svg: (
      <svg viewBox="0 0 128 128">
        <path d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z" fill="#F05032" />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    glow: "#06B6D4",
    svg: (
      <svg viewBox="0 0 128 128">
        <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64z" fill="#06B6D4" />
      </svg>
    ),
  },
];

/* ─── Floating code snippet fragments ─── */
const codeSnippets = [
  { text: "<div />", color: "#E34F26" },
  { text: "const", color: "#3178C6" },
  { text: "=> {}", color: "#F7DF1E" },
  { text: ".flex", color: "#06B6D4" },
  { text: "npm run", color: "#339933" },
  { text: "import", color: "#61DAFB" },
  { text: "async", color: "#A259FF" },
  { text: "export", color: "#F05032" },
];

/* ─── Layout configs for icon cards ─── */
const iconConfigs = [
  { x: "6%",  y: "12%", size: 48 },
  { x: "88%", y: "6%",  size: 42 },
  { x: "12%", y: "72%", size: 38 },
  { x: "82%", y: "68%", size: 44 },
  { x: "48%", y: "4%",  size: 46 },
  { x: "93%", y: "38%", size: 36 },
  { x: "4%",  y: "42%", size: 40 },
  { x: "72%", y: "82%", size: 34 },
  { x: "30%", y: "86%", size: 40 },
  { x: "65%", y: "18%", size: 38 },
];

/* ─── Layout configs for code snippets ─── */
const snippetConfigs = [
  { x: "18%", y: "20%",  rotation: -12 },
  { x: "76%", y: "15%",  rotation: 8 },
  { x: "8%",  y: "58%",  rotation: -6 },
  { x: "85%", y: "52%",  rotation: 14 },
  { x: "40%", y: "92%",  rotation: -10 },
  { x: "58%", y: "78%",  rotation: 5 },
  { x: "22%", y: "38%",  rotation: -15 },
  { x: "68%", y: "42%",  rotation: 11 },
];

/* ─── Reduced particles (8 instead of 16) ─── */
const particles = [
  { x: "15%", y: "30%", size: 4, color: "#61DAFB", dur: 8 },
  { x: "80%", y: "25%", size: 3, color: "#F7DF1E", dur: 10 },
  { x: "55%", y: "70%", size: 5, color: "#E34F26", dur: 7 },
  { x: "35%", y: "50%", size: 3, color: "#3178C6", dur: 12 },
  { x: "90%", y: "60%", size: 4, color: "#339933", dur: 9 },
  { x: "10%", y: "85%", size: 3, color: "#06B6D4", dur: 11 },
  { x: "70%", y: "10%", size: 4, color: "#A259FF", dur: 8 },
  { x: "45%", y: "35%", size: 3, color: "#F05032", dur: 13 },
];

/* ═══════════════════════ COMPONENT ═══════════════════════ */

export const FloatingIcons = memo(function FloatingIcons() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block"
      style={{ zIndex: 1, contain: "layout style paint" }}
      aria-hidden="true"
    >
      {/* Inline keyframes for all CSS animations */}
        <style>{`
          @media (prefers-reduced-motion: no-preference) {
            @keyframes float-particle {
              0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.25; }
              50% { transform: translate3d(6px, -12px, 0) scale(1.15); opacity: 0.5; }
            }
            @keyframes float-icon-a {
              0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
              50% { transform: translate3d(6px, -10px, 0) rotate(3deg); }
            }
            @keyframes float-icon-b {
              0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
              50% { transform: translate3d(-6px, -8px, 0) rotate(-2deg); }
            }
            @keyframes float-icon-c {
              0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
              50% { transform: translate3d(4px, -14px, 0) rotate(4deg); }
            }
            @keyframes float-snippet {
              0%, 100% { transform: translate3d(0, 0, 0); opacity: 0.15; }
              50% { transform: translate3d(4px, -8px, 0); opacity: 0.35; }
            }
            @keyframes line-pulse {
              0%, 100% { opacity: 0.25; }
              50% { opacity: 0.5; }
            }
            @keyframes label-pulse {
              0%, 100% { opacity: 0.35; }
              50% { opacity: 0.65; }
            }
          }
        `}</style>

      {/* ── Layer 1: Glowing particles (CSS animated) ── */}
      {particles.map((p, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.size}px ${p.color}40`,
            animation: `float-particle ${p.dur}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* ── Layer 2: Tech icon cards (CSS animated, no backdrop-blur) ── */}
      {techIcons.map((icon, i) => {
        const config = iconConfigs[i];
        const anims = ["float-icon-a", "float-icon-b", "float-icon-c"];
        const animName = anims[i % 3];
        const duration = 14 + (i % 3) * 4;
        return (
          <div
            key={icon.name}
            className="absolute"
            style={{
              left: config.x,
              top: config.y,
              animation: `fade-in-icon 0.8s ease-out ${i * 0.15}s both, ${animName} ${duration}s ease-in-out ${i * 0.5}s infinite`,
              willChange: "transform",
            }}
          >
            {/* Glow backdrop */}
            <div
              className="absolute -inset-3 rounded-2xl opacity-20 dark:opacity-15"
              style={{ backgroundColor: icon.glow, filter: "blur(16px)" }}
            />
            {/* Glass card */}
            <div
              className="relative rounded-xl border border-white/20 dark:border-white/10 p-2.5"
              style={{
                width: config.size + 20,
                height: config.size + 20,
                background: `linear-gradient(135deg, ${icon.glow}12 0%, ${icon.glow}06 50%, transparent 100%)`,
                boxShadow: `0 4px 24px -4px ${icon.glow}20, inset 0 1px 0 ${icon.glow}15`,
              }}
            >
              <div style={{ width: config.size, height: config.size }}>
                {icon.svg}
              </div>
            </div>
            {/* Label */}
            <p
              className="text-center mt-1"
              style={{
                fontSize: "9px",
                letterSpacing: "0.05em",
                color: icon.glow,
                fontFamily: "monospace",
                animation: `label-pulse 4s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            >
              {icon.name}
            </p>
          </div>
        );
      })}

      {/* ── Layer 3: Floating code snippets (CSS animated) ── */}
      {codeSnippets.map((snippet, i) => {
        const config = snippetConfigs[i];
        return (
          <div
            key={`snippet-${i}`}
            className="absolute"
            style={{
              left: config.x,
              top: config.y,
              transform: `rotate(${config.rotation}deg)`,
              animation: `float-snippet ${12 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 1.5}s`,
              willChange: "transform, opacity",
            }}
          >
            <span
              className="font-mono text-xs font-medium px-2 py-1 rounded-md border"
              style={{
                color: snippet.color,
                borderColor: `${snippet.color}30`,
                backgroundColor: `${snippet.color}08`,
                textShadow: `0 0 12px ${snippet.color}40`,
                whiteSpace: "nowrap",
              }}
            >
              {snippet.text}
            </span>
          </div>
        );
      })}

      {/* ── Layer 4: Connecting lines / constellations (CSS animated) ── */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] dark:opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <line
          x1="6%" y1="12%" x2="48%" y2="4%"
          stroke="currentColor" strokeWidth="1" strokeDasharray="6 8"
          style={{ animation: "line-pulse 6s ease-in-out infinite" }}
        />
        <line
          x1="88%" y1="6%" x2="65%" y2="18%"
          stroke="currentColor" strokeWidth="1" strokeDasharray="6 8"
          style={{ animation: "line-pulse 8s ease-in-out infinite", animationDelay: "1s" }}
        />
        <line
          x1="4%" y1="42%" x2="12%" y2="72%"
          stroke="currentColor" strokeWidth="1" strokeDasharray="6 8"
          style={{ animation: "line-pulse 7s ease-in-out infinite", animationDelay: "2s" }}
        />
        <line
          x1="82%" y1="68%" x2="72%" y2="82%"
          stroke="currentColor" strokeWidth="1" strokeDasharray="6 8"
          style={{ animation: "line-pulse 9s ease-in-out infinite", animationDelay: "0.5s" }}
        />
        <line
          x1="93%" y1="38%" x2="82%" y2="68%"
          stroke="currentColor" strokeWidth="1" strokeDasharray="6 8"
          style={{ animation: "line-pulse 5s ease-in-out infinite", animationDelay: "1.5s" }}
        />
      </svg>
    </div>
  );
});
