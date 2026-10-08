import { useState } from 'react'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import type { Theme } from './types'
import './style.css'

const currentYear = new Date().getFullYear()

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  )

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = nextTheme
    setTheme(nextTheme)
    try {
      localStorage.setItem('portfolio-theme', nextTheme)
    } catch {
      // The theme still works when browser storage is unavailable.
    }
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Aller au contenu
      </a>
      <SiteHeader
        menuOpen={menuOpen}
        theme={theme}
        onMenuToggle={() => setMenuOpen(!menuOpen)}
        onCloseMenu={() => setMenuOpen(false)}
        onThemeToggle={toggleTheme}
      />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter currentYear={currentYear} />
    </>
  )
}

export default App
