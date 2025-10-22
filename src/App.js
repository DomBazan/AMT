import React, { useState, useEffect } from 'react';
import About from './About.js';
import Contact from './Contact.js';
import Clients from './Clients.js';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en');
  const [currentPage, setCurrentPage] = useState('home');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const navigateToAbout = () => {
    setCurrentPage('about');
  };

  const navigateToContact = () => {
    setCurrentPage('contact');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  const navigateToClients = () => {
    setCurrentPage('clients');
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash === 'about') {
        setCurrentPage('about');
      } else if (hash === 'contact') {
        setCurrentPage('contact');
      } else if (hash === 'clients') {
        setCurrentPage('clients');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (currentPage === 'about') {
    return <About language={language} toggleLanguage={toggleLanguage} navigateToHome={navigateToHome} navigateToAbout={navigateToAbout} navigateToContact={navigateToContact} />;
  }

  if (currentPage === 'contact') {
    return <Contact language={language} navigateToHome={navigateToHome} navigateToAbout={navigateToAbout} navigateToContact={navigateToContact} />;
  }

  if (currentPage === 'clients') {
    return <Clients language={language} toggleLanguage={toggleLanguage} navigateToHome={navigateToHome} navigateToAbout={navigateToAbout} navigateToContact={navigateToContact} navigateToClients={navigateToClients} />;
  }



  return (
    <div className="App">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <Nav toggleLanguage={toggleLanguage} language={language} navigateToAbout={navigateToAbout} navigateToContact={navigateToContact} navigateToHome={navigateToHome} navigateToClients={navigateToClients} />
      <Hero language={language} navigateToContact={navigateToContact} />
      <Services language={language} />
      <Mission language={language} />
      <Footer language={language} />
    </div>
  );
}

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

function Nav({ toggleLanguage, language, navigateToAbout, navigateToContact, navigateToHome, navigateToClients }) {
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
      <button onClick={navigateToClients} className="nav-link">{t.clients}</button>
      <button onClick={navigateToContact} className="nav-link">{t.contact}</button>
      <button onClick={toggleLanguage} className="lang-toggle">
        {t.langBtn}
      </button>
    </nav>
  );
}

function Hero({ language, navigateToContact }) {
  const texts = {
    en: {
      h2: 'Professional Tax Services',
      p: 'Expert tax preparation and processing services for individuals and businesses. Fast, accurate, and confidential.',
      btn: 'Get Started'
    },
    es: {
      h2: 'Servicios Profesionales de Impuestos',
      p: 'Servicios expertos de preparación y procesamiento de impuestos para individuos y empresas. Rápidos, precisos y confidenciales.',
      btn: 'Comenzar'
    }
  };
  const t = texts[language] || texts.en;

  return (
    <section className="hero">
      <h2>{t.h2}</h2>
      <p>{t.p}</p>
      <a href="#services">
        <button className="cta-btn">{t.btn}</button>
      </a>
    </section>
  );
}
function Services({ language }) {
  const texts = {
    en: {
      individual: { h3: 'Individual Tax Prep', p: 'Comprehensive, friendly, and personalized tax preparation for individuals and families.' },
      business: { h3: 'Small Business Services', p: 'Expert guidance and filings for small business owners. Maximize deductions, minimize stress.' },
      certified: { h3: 'IRS Certified', p: 'Work with a registered, experienced preparer prioritizing your privacy and accuracy.' },
      notary: { h3: 'Public Notary Services', p: 'Certified notary services for documents, affidavits, and legal paperwork.' },
      translator: { h3: 'Certified Translator', p: 'Professional translation services for legal, business, and personal documents.' },
      powerOfAttorney: { h3: 'Power of Attorney', p: 'Assistance with drafting and notarizing power of attorney documents.' },
      travelPermits: { h3: 'Travel & Permits', p: 'Help with travel visas, permits, and related applications.' },
      itPayroll: { h3: 'IT & Payroll Services', p: 'Information technology support and payroll processing for businesses.' },
      faxEmailPayments: { h3: 'Fax, Email & IRS Payments', p: 'Secure faxing, emailing, and assistance with IRS payments and audits.' },
      formsConsultations: { h3: 'Forms & Consultations', p: 'Filling out forms, applications, and simple tax consultations for individuals and businesses.' }
    },
    es: {
      individual: { h3: 'Preparación de Impuestos Individuales', p: 'Preparación de impuestos completa, amigable y personalizada para individuos y familias.' },
      business: { h3: 'Servicios para Pequeños Negocios', p: 'Guía experta y presentaciones para dueños de pequeños negocios. Maximiza deducciones, minimiza estrés.' },
      certified: { h3: 'Certificado por el IRS', p: 'Trabaja con un preparador registrado y experimentado que prioriza tu privacidad y precisión.' },
      notary: { h3: 'Servicios de Notario Público', p: 'Servicios de notario certificado para documentos, affidavits y papeles legales.' },
      translator: { h3: 'Traductor Certificado', p: 'Servicios profesionales de traducción para documentos legales, comerciales y personales.' },
      powerOfAttorney: { h3: 'Poder Notarial', p: 'Asistencia con la redacción y notariado de documentos de poder notarial.' },
      travelPermits: { h3: 'Viajes y Permisos', p: 'Ayuda con visas de viaje, permisos y aplicaciones relacionadas.' },
      itPayroll: { h3: 'Servicios de TI y Nómina', p: 'Soporte de tecnología de la información y procesamiento de nómina para empresas.' },
      faxEmailPayments: { h3: 'Fax, Correo y Pagos al IRS', p: 'Fax seguro, correo electrónico y asistencia con pagos al IRS y auditorías.' },
      formsConsultations: { h3: 'Formularios y Consultas', p: 'Llenado de formularios, aplicaciones y consultas fiscales simples para individuos y empresas.' }
    }
  };
  const t = texts[language] || texts.en;

  return (
    <div className="sections" id="services">
      <div className="card">
        <h3>{t.individual.h3}</h3>
        <p>{t.individual.p}</p>
      </div>
      <div className="card">
        <h3>{t.business.h3}</h3>
        <p>{t.business.p}</p>
      </div>
      <div className="card">
        <h3>{t.certified.h3}</h3>
        <p>{t.certified.p}</p>
      </div>
      <div className="card">
        <h3>{t.notary.h3}</h3>
        <p>{t.notary.p}</p>
      </div>
      <div className="card">
        <h3>{t.translator.h3}</h3>
        <p>{t.translator.p}</p>
      </div>
      <div className="card">
        <h3>{t.powerOfAttorney.h3}</h3>
        <p>{t.powerOfAttorney.p}</p>
      </div>
      <div className="card">
        <h3>{t.travelPermits.h3}</h3>
        <p>{t.travelPermits.p}</p>
      </div>
      <div className="card">
        <h3>{t.itPayroll.h3}</h3>
        <p>{t.itPayroll.p}</p>
      </div>
      <div className="card">
        <h3>{t.faxEmailPayments.h3}</h3>
        <p>{t.faxEmailPayments.p}</p>
      </div>
      <div className="card">
        <h3>{t.formsConsultations.h3}</h3>
        <p>{t.formsConsultations.p}</p>
      </div>
    </div>
  );
}

function Mission({ language }) {
  const texts = {
    en: {
      title: 'Our Mission',
      missions: [
        "To empower individuals and businesses with accurate, efficient, and confidential tax services, ensuring financial peace of mind and compliance with the highest standards of professionalism.",
        "We are committed to simplifying the complexities of tax preparation, providing personalized solutions that maximize refunds and minimize risks for our valued clients."
      ],
      follow: 'Follow us on Facebook'
    },
    es: {
      title: 'Nuestra Misión',
      missions: [
        "Empoderar a individuos y empresas con servicios fiscales precisos, eficientes y confidenciales, asegurando la tranquilidad financiera y el cumplimiento con los más altos estándares de profesionalismo.",
        "Estamos comprometidos a simplificar las complejidades de la preparación de impuestos, proporcionando soluciones personalizadas que maximicen los reembolsos y minimicen los riesgos para nuestros valiosos clientes."
      ],
      follow: 'Síguenos en Facebook'
    }
  };
  const t = texts[language] || texts.en;

  return (
    <section className="testimonials" id="mission">
      <h2 style={{ color: '#FFD700' }}>{t.title}</h2>
      {t.missions.map((mission, index) => (
        <div key={index} className="testimonial-card">
          "{mission}"
        </div>
      ))}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a href="https://www.facebook.com/amtprocessingservices/" target="_blank" rel="noopener noreferrer">
          <button className="cta-btn">{t.follow}</button>
        </a>
      </div>
    </section>
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

export default App;

