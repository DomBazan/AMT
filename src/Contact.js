import React from 'react';
import './About.css'; // Reuse the styling for consistency

function Contact({ language, navigateToHome, navigateToAbout, navigateToContact }) {
  const texts = {
    en: {
      title: 'Contact AMT Processing & Services',
      commitment: 'Our commitment to your needs extends throughout the entire year. We\'re here to assist you with any questions related to the IRS, be it letters, audits, or reviews of previous taxes, including ITIN number applications.',
      services: 'Moreover, our services go beyond taxes, we have Certified Translators and Notary Public on hand.',
      phones: 'Telephones: 801-688-0657 | 801-486-3122 | 801-486-0065',
      fax: 'Fax: 801-487-4293 | E-fax: 801-880-9915 | email: amttaxes@gmail.com',
      address: '801-688-0657 (Text/WhatsApp Only)',
      commitment2: 'We are committed to offering the best service ever!!',
      schedule: 'Please schedule your appointment online here!',
      contact: 'Please contact us with your specific request, and we will prepare a free estimate.',
      calendly: 'CALENDLY 2025',
      contactTitle: 'Contact Us'
    },
    es: {
      title: 'Contactar AMT Processing & Services',
      commitment: 'Nuestro compromiso con sus necesidades se extiende durante todo el año. Estamos aquí para ayudarle con cualquier pregunta relacionada con el IRS, ya sean cartas, auditorías o revisiones de impuestos anteriores, incluyendo aplicaciones para números ITIN.',
      services: 'Además, nuestros servicios van más allá de los impuestos, contamos con Traductores Certificados y Notario Público a disposición.',
      phones: 'Teléfonos: 801-688-0657 | 801-486-3122 | 801-486-0065',
      fax: 'Fax: 801-487-4293 | E-fax: 801-880-9915 | email: amttaxes@gmail.com',
      address: '801-688-0657 (Texto/WhatsApp Solo)',
      commitment2: '¡Estamos comprometidos a ofrecer el mejor servicio de todos!',
      schedule: '¡Por favor programe su cita en línea aquí!',
      contact: 'Por favor contáctenos con su solicitud específica, y le prepararemos una estimación gratuita.',
      calendly: 'CALENDLY 2025',
      contactTitle: 'Contáctanos',
      contactInfo: 'Información de Contacto'
    }
  };
  const t = texts[language] || texts.en;

  return (
    <div className="about-section">
      <Header language={language} navigateToHome={navigateToHome} />
      <Nav language={language} navigateToHome={navigateToHome} navigateToAbout={navigateToAbout} navigateToContact={navigateToContact} />
      <section className="hero">
        <h2 style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>{t.title}</h2>
      </section>
      <div className="about-page-boxes">
        <div className="about-box">
          <p>{t.commitment}</p>
          <p>{t.services}</p>
          <p>{t.commitment2}</p>
        </div>
        <div className="about-box">
          <h3>{t.contactInfo}</h3>
          <p>{t.phones}</p>
          <p>{t.fax}</p>
          <p>{t.address}</p>
        </div>
        <div className="about-box">
          <h3>{t.schedule}</h3>
          <p>{t.contact}</p>
          <div style={{ textAlign: 'center' }}>
            <a href="https://calendly.com/amttaxes2025" target="_blank" rel="noopener noreferrer">
              <button className="cta-btn">{t.calendly}</button>
            </a>
          </div>
        </div>
      </div>
      <Footer language={language} />
    </div>
  );
}

function Header({ language, navigateToHome }) {
  const texts = {
    en: { h1: 'AMT Processing & Services', p: 'Income Tax | Notary | Translation' },
    es: { h1: 'AMT Processing & Services', p: 'Impuestos del IRS | Notario | Traducción' }
  };
  const t = texts[language] || texts.en;

  return (
    <header>
      <h1 style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>{t.h1}</h1>
      <p>{t.p}</p>
    </header>
  );
}

function Nav({ language, navigateToHome, navigateToAbout, navigateToContact }) {
  const texts = {
    en: { home: 'Home', about: 'About', services: 'Services', clients: 'Clients', contact: 'Contact', langBtn: 'Español' },
    es: { home: 'Casa', about: 'Acerca de', services: 'Servicios', clients: 'Clientes', contact: 'Contacto', langBtn: 'English' }
  };
  const t = texts[language] || texts.en;

  return (
    <nav>
      <button onClick={navigateToHome} className="nav-link">{t.home}</button>
      <button onClick={navigateToAbout} className="nav-link">{t.about}</button>
      <a href="#services">{t.services}</a>
      <a href="#testimonials">{t.clients}</a>
      <button onClick={navigateToContact} className="nav-link">{t.contact}</button>
      <button className="lang-toggle">
        {t.langBtn}
      </button>
    </nav>
  );
}

function Footer({ language }) {
  const texts = {
    en: {
      address: 'AMT Processing & Services 3269 S Main Street | Suite 275 | South Salt Lake | UT 84115',
      copyright: 'Website Designed by ARMEX Business Services'
    },
    es: {
      address: 'AMT Processing & Services 3269 S Main Street | Suite 275 | South Salt Lake | UT 84115',
      copyright: 'Sitio Web Diseñado por ARMEX Business Services'
    }
  };
  const t = texts[language] || texts.en;

  return (
    <footer style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)', color: 'var(--text-white)', padding: '40px 20px', textAlign: 'center' }}>
      <div id="contact">
        {t.address}
        <br />
        {t.copyright}
      </div>
    </footer>
  );
}

export default Contact;
