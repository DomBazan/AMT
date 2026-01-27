import React from 'react';
import './About.css';
import amtLogo from './amt-logo.svg';

function Header({ language, toggleLanguage }) {
  return (
    <header className="app-header">
      <img src={amtLogo} alt="AMT Logo" className="header-logo" />
    </header>
  );
}

function Nav({ toggleLanguage, language, navigateToHome, navigateToAbout, navigateToContact }) {
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
      <button onClick={toggleLanguage} className="lang-toggle">
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

function About({ language, toggleLanguage, navigateToHome, navigateToAbout, navigateToContact }) {
  const texts = {
    en: {
      title: 'Our History ',
      content: `Armex Business Services LLC doing business as AMT Processing & Services, is a family-owned company proudly serving the Salt Lake City community since 2004. For over twenty years, we’ve built lasting relationships based on trust, accuracy, and genuine care for our clients’ financial well-being.

At AMT, we believe every tax return tells a story, and we treat yours with the attention it deserves. Our experienced, IRS-certified professionals handle each case with precision to help you stay compliant and minimize the risk of future audits. We also make sure your refund arrives quickly and securely, offering several convenient processing options.

As a bilingual and multicultural team, we understand the importance of clear communication. Whether you prefer English or Spanish, we’re here to guide you step by step through every financial decision.


Beyond tax preparation, we offer a wide range of financial, notary, and business services designed to support you and your family all year round. Our goal is simple: to provide personalized, high-quality assistance that helps you feel confident and cared for, because to us, you’re more than a client; you’re part of our AMT family.`,
      address: 'AMT Processing & Services ® 3269 S Main Street | Suite 275 | South Salt Lake | UT 84115',
      copyright: 'Website Designed by ARMEX Business Services',
      videoPlaceholder: 'Video Placeholder - Replace with actual video URL'
    },
    es: {
      title: 'Nuestra historia',
      content: `Armex Business Services LLC, operando como AMT Processing & Services, es una empresa familiar que orgullosamente sirve a la comunidad de Salt Lake City desde 2004. Durante más de veinte años, hemos construido relaciones duraderas basadas en la confianza, la precisión y el genuino cuidado por el bienestar financiero de nuestros clientes.

En AMT, creemos que cada declaración de impuestos cuenta una historia, y tratamos la suya con la atención que merece. Nuestros profesionales experimentados y certificados por el IRS manejan cada caso con precisión para ayudarlo a mantenerse en cumplimiento y minimizar el riesgo de auditorías futuras. También nos aseguramos de que su reembolso llegue rápidamente y de manera segura, ofreciendo varias opciones convenientes de procesamiento.

Como equipo bilingüe y multicultural, entendemos la importancia de la comunicación clara. Ya sea que prefiera inglés o español, estamos aquí para guiarlo paso a paso en cada decisión financiera.

Más allá de la preparación de impuestos, ofrecemos una amplia gama de servicios financieros, notariales y comerciales diseñados para apoyarlo a usted y a su familia durante todo el año. Nuestro objetivo es simple: proporcionar asistencia personalizada y de alta calidad que lo ayude a sentirse confiado y cuidado, porque para nosotros, usted es más que un cliente; es parte de nuestra familia AMT.`,
      address: 'AMT Processing & Services ® 3269 S Main Street | Suite 275 | South Salt Lake | UT 84115',
      copyright: 'Sitio Web Diseñado por ARMEX Business Services',
      videoPlaceholder: 'Marcador de posición de video - Reemplazar con URL de video real'
    }
  };
  const t = texts[language] || texts.en;

  return (
    <div className="App">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <Nav toggleLanguage={toggleLanguage} language={language} navigateToHome={navigateToHome} navigateToAbout={navigateToAbout} navigateToContact={navigateToContact} />
      <section className="hero">
        <h2>{t.title}</h2>
      </section>
      <div className="about-page-boxes">
        <div className="about-box">
          <p dangerouslySetInnerHTML={{ __html: t.content.replace(/\n\n/g, '<br /><br />') }}></p>
        </div>
        <div className="about-box">
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/o6qmH_kKAxg"
              title={t.videoPlaceholder}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer language={language} />
    </div>
  );
}

export default About;
