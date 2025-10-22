import React from 'react';
import './About.css';

function Header({ language, toggleLanguage }) {
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
      title: 'About AMT Processing & Services',
      content: `Armex Business Services LLC, dba AMT Processing & Services, is a family-owned company founded in Salt Lake City, Utah in 2004. With two decades of dedicated service to the community, we take pride in our commitment to accuracy and excellence.

At AMT, rest assured that your taxes will be prepared with precision, reducing the risk of future audits. We offer multiple convenient and secure methods to ensure you receive your refund promptly.

Our team of tax preparers consists of IRS-certified professionals dedicated to safeguarding your interests. With bilingual and trained staff, we are here to assist you in your preferred language. Furthermore, we provide a diverse range of products and services to cater to the needs of both you and your family.

We pride ourselves on delivering top-notch, personalized service to our valued clients. Your financial well-being is our priority, and we go the extra mile to ensure that you receive high-quality, tailored assistance for all your processing and tax needs.
Interested in learning more about our services?`,
      address: 'AMT Processing & Services ® 3269 S Main Street | Suite 275 | South Salt Lake | UT 84115',
      copyright: 'Website Designed by ARMEX Business Services',
      videoPlaceholder: 'Video Placeholder - Replace with actual video URL'
    },
    es: {
      title: 'Acerca de AMT Processing & Services',
      content: `Armex Business Services LLC, dba AMT Processing & Services, es una empresa familiar fundada en Salt Lake City, Utah en 2004. Con dos décadas de servicio dedicado a la comunidad, nos enorgullecemos de nuestro compromiso con la precisión y la excelencia.

En AMT, esté seguro de que sus impuestos serán preparados con precisión, reduciendo el riesgo de auditorías futuras. Ofrecemos múltiples métodos convenientes y seguros para garantizar que reciba su reembolso de manera oportuna.

Nuestro equipo de preparadores de impuestos consta de profesionales certificados por el IRS dedicados a salvaguardar sus intereses. Con personal bilingüe y capacitado, estamos aquí para ayudarlo en su idioma preferido. Además, proporcionamos una amplia gama de productos y servicios para satisfacer las necesidades de usted y su familia.

Nos enorgullecemos de brindar un servicio de primera clase y personalizado a nuestros valiosos clientes. Su bienestar financiero es nuestra prioridad, y vamos más allá para asegurarnos de que reciba asistencia de alta calidad y adaptada a todas sus necesidades de procesamiento e impuestos.
¿Interesado en aprender más sobre nuestros servicios?`,
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
        {t.content.split('\n\n').map((paragraph, index) => (
          <div key={index} className="about-box">
            <p>{paragraph}</p>
          </div>
        ))}
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
