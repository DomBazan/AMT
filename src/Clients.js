import React from 'react';
import './About.css'; // Reuse the styling for consistency

function Clients({ language, toggleLanguage, navigateToHome, navigateToAbout, navigateToContact, navigateToClients }) {
  const texts = {
    en: {
      title: 'What Our Clients Say',
      reviews: [
        {
          name: 'Zulma Q.',
          review: 'The staff at AMT Processing & Services have not only effectively managed our cases with a balance of good judgement and cost efficiency, but more importantly, they understand our complex industry and know our process. ARMEX Business Services is a better business partner because they really know our industry\'s challenges and our needs.'
        },
        {
          name: 'Adalberto M.',
          review: 'ARMEX Business Services dba AMT Processing & Services takes special care to understand the unique needs of each of our clients to design custom solutions that exceed expectations.'
        },
        {
          name: 'Alexandra O',
          review: 'I\'ve been entrusting my tax preparation to Ana Tello at AMT for about twelve to thirteen years now, and I can recall zero issues with any of my filings. I\'ve recommended numerous people to them, and jokingly, I feel like part of the company! But the truth is, not a single person I\'ve recommended has ever come back to me with a complaint. They are excellent, well-organized, and do a fantastic job.'
        },
        {
          name: 'Juan P.',
          review: 'I wholeheartedly recommend the AMT office. Not only is it reasonably priced, but, more importantly, they\'ve played a pivotal role in helping me comprehend the intricacies of managing and developing my own taxes. As an individual self-employed, they imparted valuable lessons on maintaining meticulous expense records. The team is not only efficient but also exceptionally skilled in teaching the process with patience and kindness. I trust this company wholeheartedly.'
        }
      ]
    },
    es: {
      title: 'Lo Que Dicen Nuestros Clientes',
      reviews: [
        {
          name: 'Zulma Q.',
          review: 'El personal de AMT Processing & Services no solo ha gestionado efectivamente nuestros casos con un equilibrio de buen juicio y eficiencia de costos, sino que, más importante aún, entienden nuestra industria compleja y conocen nuestro proceso. ARMEX Business Services es un mejor socio comercial porque realmente conocen los desafíos de nuestra industria y nuestras necesidades.'
        },
        {
          name: 'Adalberto M.',
          review: 'ARMEX Business Services dba AMT Processing & Services se toma especial cuidado para entender las necesidades únicas de cada uno de nuestros clientes para diseñar soluciones personalizadas que superen las expectativas.'
        },
        {
          name: 'Alexandra O',
          review: 'He confiado la preparación de mis impuestos a Ana Tello en AMT durante unos doce o trece años, y puedo recordar cero problemas con cualquiera de mis declaraciones. He recomendado a numerosas personas, y en broma, ¡me siento como parte de la compañía! Pero la verdad es que ninguna persona que haya recomendado me ha vuelto con una queja. Son excelentes, bien organizados y hacen un trabajo fantástico.'
        },
        {
          name: 'Juan P.',
          review: 'Recomiendo de todo corazón la oficina de AMT. No solo es razonablemente priced, sino que, más importante, han jugado un papel fundamental en ayudarme a comprender las complejidades de gestionar y desarrollar mis propios impuestos. Como individuo autónomo, me impartieron lecciones valiosas sobre mantener registros meticulosos de gastos. El equipo no solo es eficiente, sino también excepcionalmente hábil en enseñar el proceso con paciencia y amabilidad. Confío en esta compañía de todo corazón.'
        }
      ]
    }
  };
  const t = texts[language] || texts.en;

  return (
    <div className="about-section">
      <Header language={language} navigateToHome={navigateToHome} />
      <Nav language={language} toggleLanguage={toggleLanguage} navigateToHome={navigateToHome} navigateToAbout={navigateToAbout} navigateToContact={navigateToContact} navigateToClients={navigateToClients} />
      <section className="hero">
        <h2>{t.title}</h2>
      </section>
      <div className="about-page-boxes">
        {t.reviews.map((review, index) => (
          <div key={index} className="about-box">
            <p>"{review.review}"</p>
            <p><strong>- {review.name}</strong></p>
          </div>
        ))}
      </div>
      <Footer language={language} />
    </div>
  );
}

function Header({ language, navigateToHome }) {
  const texts = {
    en: { h1: 'AMT Processing & TAX Services', p: 'Income Tax | Notary | Translation' },
    es: { h1: 'AMT Processing & TAX Services', p: 'Impuestos del IRS | Notario | Traducción' }
  };
  const t = texts[language] || texts.en;

  return (
    <header>
      <h1 style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>{t.h1}</h1>
      <p>{t.p}</p>
    </header>
  );
}

function Nav({ language, toggleLanguage, navigateToHome, navigateToAbout, navigateToContact, navigateToClients }) {
  const texts = {
    en: { home: 'HOME', about: 'ABOUT US', services: 'SERVICES', clients: 'CLIENTS', contact: 'CONTACT US', langBtn: 'Español' },
    es: { home: 'CASA', about: 'ACERCA DE', services: 'SERVICIOS', clients: 'CLIENTES', contact: 'CONTACTO', langBtn: 'English' }
  };
  const t = texts[language] || texts.en;

  return (
    <nav>
      <button onClick={navigateToHome} className="nav-link">{t.home}</button>
      <button onClick={navigateToAbout} className="nav-link">{t.about}</button>
      <a href="#services">{t.services}</a>
      <button onClick={navigateToClients} className="nav-link">{t.clients}</button>
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
      address: 'AMT Processing & TAX Services 3269 S Main Street | Suite 275 | South Salt Lake | UT 84115',
      copyright: 'Website Designed by ARMEX Business Services © 2024 at Homestead™ Make a Website and List Your Business'
    },
    es: {
      address: 'AMT Processing & TAX Services 3269 S Main Street | Suite 275 | South Salt Lake | UT 84115',
      copyright: 'Sitio Web Diseñado por ARMEX Business Services © 2024 at Homestead™ Make a Website and List Your Business'
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

export default Clients;
