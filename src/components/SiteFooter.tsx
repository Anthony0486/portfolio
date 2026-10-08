type SiteFooterProps = {
  currentYear: number
}

function SiteFooter({ currentYear }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <a className="wordmark" href="#accueil">
        Anthony<span aria-hidden="true">✳</span>
      </a>
      <nav aria-label="Navigation de pied de page">
        <a href="#accueil">Accueil</a>
        <a href="#projets">Projets</a>
        <a href="#apropos">À propos</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="footer-mail" href="mailto:bonjour@exemple.fr" aria-label="Envoyer un e-mail">
        ✉
      </a>
      <p>© {currentYear} Anthony · C’est tout pour aujourd’hui !</p>
    </footer>
  )
}

export default SiteFooter
