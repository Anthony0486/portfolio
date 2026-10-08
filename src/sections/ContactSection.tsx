function ContactSection() {
  return (
    <section className="contact section-wrap" id="contact" aria-labelledby="contact-title">
      <p className="hand">Un projet à imaginer ?</p>
      <h2 id="contact-title">On en parle ?</h2>
      <a className="button button-primary" href="mailto:bonjour@exemple.fr">
        Me contacter <span aria-hidden="true">↗</span>
      </a>
      <p className="contact-note">Remplace cette adresse par ton e-mail avant publication.</p>
    </section>
  )
}

export default ContactSection
