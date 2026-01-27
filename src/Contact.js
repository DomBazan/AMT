import React from 'react';
import './About.css'; // Reuse the styling for consistency
import amtLogo from './amt-logo.svg';

function Contact({ language, navigateToHome, navigateToAbout, navigateToContact }) {
  const texts = {
    en: {
      title: 'Contact AMT Processing & Services',
      phones: 'Office Phones: 801-486-3122',
      cell: 'Cell Phone: 801-688-0657',
      fax: 'Email: amttaxes@gmail.com',
      text: 'Text/WhatsApp Only: 801-688-0657',
      address: 'AMT Processing & Services 3269 S Main Street | Suite 275 | South Salt Lake | UT 84115',
      schedule: 'Please schedule your appointment online here!',
      calendly: 'CALENDLY 2025',
      contactTitle: 'Contact Us'
    },
    es: {
      title: 'Contactar AMT Processing & Services',
      phones: 'Teléfonos de Oficina: 801-486-3122',
      cell: 'Teléfono Celular: 801-688-0657',
      fax: 'Email: amttaxes@gmail.com',
      text: 'Texto/WhatsApp Solo: 801-688-0657',
      address: 'AMT Processing & Services 3269 S Main Street | Suite 275 | South Salt Lake | UT 84115',
      schedule: '¡Por favor programe su cita en línea aquí!',
      calendly: 'CALENDLY 2025',
      contactTitle: 'Contáctanos'
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
          <p>{t.phones}</p>
          <p>{t.cell}</p>
          <p>{t.fax}</p>
          <p>{t.text}</p>
        </div>
        <div className="about-box">
          <p>{t.address}</p>
          <div className="video-container" style={{ marginTop: '20px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1234567890123!2d-111.89104768459375!3d40.718123479328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f5b2c5b2c5b2%3A0x1234567890abcdef!2sAMT%20Processing%20%26%20Services!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AMT Processing & Services Location"
            ></iframe>
          </div>
        </div>
        <div className="about-box">
          <p>{t.schedule}</p>
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

function Header({ language, toggleLanguage }) {
  return (
    <header className="app-header">
      <img src={amtLogo} alt="AMT Logo" className="header-logo" />
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
