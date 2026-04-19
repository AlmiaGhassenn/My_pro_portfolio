'use client'

import { LanguageProvider } from '@/lib/i18n'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'
import { Experience } from '@/components/sections/experience'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
        <BackToTop />
      </main>
    </LanguageProvider>
  )
}
