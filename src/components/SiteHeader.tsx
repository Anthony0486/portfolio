import type { Theme } from '../types'

type SiteHeaderProps = {
  menuOpen: boolean
  theme: Theme
  onMenuToggle: () => void
  onCloseMenu: () => void
  onThemeToggle: () => void
}

function SiteHeader({
  menuOpen,
  theme,
  onMenuToggle,
  onCloseMenu,
  onThemeToggle,
}: SiteHeaderProps) {
  return (
    <header className="site-header">
      <nav className="nav-wrap" aria-label="Navigation principale">
        <a className="wordmark" href="#accueil" onClick={onCloseMenu}>
          Anthony<span aria-hidden="true">✳</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="navigation-links"
          onClick={onMenuToggle}
        >
          {menuOpen ? 'Fermer' : 'Menu'}
        </button>
        <div className={`nav-links${menuOpen ? ' is-open' : ''}`} id="navigation-links">
          <a className="nav-home" href="#accueil" onClick={onCloseMenu}>
            Accueil
          </a>
          <a href="#projets" onClick={onCloseMenu}>
            Projets
          </a>
          <a href="#apropos" onClick={onCloseMenu}>
            À propos
          </a>
          <a href="#contact" onClick={onCloseMenu}>
            Contact
          </a>
        </div>
        <div className="theme-controls">
          <span aria-hidden="true">☼</span>
          <button
            className="theme-toggle"
            type="button"
            aria-label="Thème sombre"
            aria-pressed={theme === 'dark'}
            onClick={onThemeToggle}
          >
            <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default SiteHeader
