import React, { useState, useEffect } from 'react';
import About from './About.js';
import Contact from './Contact.js';
import Clients from './Clients.js';
import amtLogo from './amt-logo.svg';
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
      h2: 'Expert Tax & Financial Solutions for Individuals and Businesses',
      p: 'We go beyond tax filing, offering year-round support, compliance management, and strategic tax planning designed to help you achieve financial success with confidence. From individuals to corporations, we provide professional, accurate, and confidential tax services designed to save you time, reduce stress, and help you make the most of every return.',
      btn: 'Get Started'
    },
    es: {
      h2: 'Soluciones Expertas de Impuestos y Finanzas para Individuos y Empresas',
      p: 'Vamos más allá de la presentación de impuestos, ofreciendo soporte durante todo el año, gestión de cumplimiento y planificación estratégica de impuestos diseñada para ayudarlo a lograr el éxito financiero con confianza. Desde individuos hasta corporaciones, proporcionamos servicios fiscales profesionales, precisos y confidenciales diseñados para ahorrarle tiempo, reducir el estrés y ayudarlo a aprovechar al máximo cada devolución.',
      btn: 'Comenzar'
    }
  };
  const t = texts[language] || texts.en;

  return (
    <section className="hero">
      <h2>{t.h2}</h2>
      <p>{t.p}</p>
      <a href="https://calendly.com/amttaxes2025" target="_blank" rel="noopener noreferrer">
        <button className="cta-btn">{t.btn}</button>
      </a>
    </section>
  );
}
function Services({ language }) {
  const texts = {
    en: {
      individual: { h3: 'Personalized Tax Preparation for Individuals and Families', p: 'Friendly, accurate, and stress-free tax services designed to simplify your filing process and help you achieve the best possible outcome.', icon: '👤' },
      business: { h3: 'Small Business Services', p: 'Expert tax preparation and advisory solutions for small business owners. We help you stay compliant, maximize deductions, and focus on growing your business—not your paperwork.', icon: '🏢' },
      certified: { h3: 'IRS Certified Preparer', p: 'Work with a registered and experienced tax professional committed to accuracy, confidentiality, and the highest standards of compliance.', icon: '🧠' },
      notary: { h3: 'Public Notary Services', p: 'Certified notary services for documents, affidavits, and other legal paperwork—handled with accuracy, confidentiality, and care.', icon: '🖋️' },
      translator: { h3: 'Certified Translator', p: 'Professional and accurate translation services for legal, business, and personal documents—delivered with confidentiality and cultural precision.', icon: '🌍' },
      powerOfAttorney: { h3: 'Power of Attorney', p: 'Assistance with drafting and notarizing power of attorney documents.', icon: '📄' },
      travelPermits: { h3: 'Travel & Permits', p: 'Help with travel permits, and related applications.', icon: '✈️' },
      itPayroll: { h3: 'Payroll & Bookkeeping Services', p: 'Comprehensive bookkeeping and payroll solutions designed to keep your business organized, compliant, and running smoothly. Accurate records, timely processing, and reliable support you can count on.', icon: '📊' },
      faxEmailPayments: { h3: 'Fax, Email & IRS Payments', p: 'Secure faxing, emailing, and assistance with IRS payments and audits.', icon: '📧' },
      formsConsultations: { h3: 'Forms & Consultations', p: 'Filling out forms, applications, and simple tax consultations for individuals and businesses.', icon: '📝' }
    },
    es: {
      individual: { h3: 'Preparación Personalizada de Impuestos para Individuos y Familias', p: 'Servicios fiscales amigables, precisos y libres de estrés diseñados para simplificar su proceso de presentación y ayudarlo a lograr el mejor resultado posible.', icon: '👤' },
      business: { h3: 'Servicios para Pequeños Negocios', p: 'Preparación experta de impuestos y soluciones de asesoría para propietarios de pequeños negocios. Le ayudamos a mantenerse en cumplimiento, maximizar deducciones y enfocarse en hacer crecer su negocio, no en su papeleo.', icon: '🏢' },
      certified: { h3: 'Preparador Certificado por el IRS', p: 'Trabaje con un profesional fiscal registrado y experimentado comprometido con la precisión, confidencialidad y los más altos estándares de cumplimiento.', icon: '🧠' },
      notary: { h3: 'Servicios de Notario Público', p: 'Servicios de notario certificado para documentos, affidavits y otros papeles legales—manejados con precisión, confidencialidad y cuidado.', icon: '🖋️' },
      translator: { h3: 'Traductor Certificado', p: 'Servicios profesionales y precisos de traducción para documentos legales, comerciales y personales—entregados con confidencialidad y precisión cultural.', icon: '🌍' },
      powerOfAttorney: { h3: 'Poder Notarial', p: 'Asistencia con la redacción y notariado de documentos de poder notarial.', icon: '📄' },
      travelPermits: { h3: 'Viajes y Permisos', p: 'Ayuda con visas de permisos y aplicaciones relacionadas.', icon: '✈️' },
      itPayroll: { h3: 'Servicios de Nómina y Contabilidad', p: 'Soluciones integrales de contabilidad y nómina diseñadas para mantener su negocio organizado, en cumplimiento y funcionando sin problemas. Registros precisos, procesamiento oportuno y soporte confiable en el que puede confiar.', icon: '📊' },
      faxEmailPayments: { h3: 'Fax, Correo y Pagos al IRS', p: 'Fax seguro, correo electrónico y asistencia con pagos al IRS y auditorías.', icon: '📧' },
      formsConsultations: { h3: 'Formularios y Consultas', p: 'Llenado de formularios, aplicaciones y consultas fiscales simples para individuos y empresas.', icon: '📝' }
    }
  };
  const t = texts[language] || texts.en;

  return (
    <div className="sections" id="services">
      <div className="card">
        <h3 data-icon={t.individual.icon}>{t.individual.h3}</h3>
        <p>{t.individual.p}</p>
      </div>
      <div className="card">
        <h3 data-icon={t.business.icon}>{t.business.h3}</h3>
        <p>{t.business.p}</p>
      </div>
      <div className="card">
        <h3 data-icon={t.certified.icon}>{t.certified.h3}</h3>
        <p>{t.certified.p}</p>
      </div>
      <div className="card">
        <h3 data-icon={t.notary.icon}>{t.notary.h3}</h3>
        <p>{t.notary.p}</p>
      </div>
      <div className="card">
        <h3 data-icon={t.translator.icon}>{t.translator.h3}</h3>
        <p>{t.translator.p}</p>
      </div>
      <div className="card">
        <h3 data-icon={t.powerOfAttorney.icon}>{t.powerOfAttorney.h3}</h3>
        <p>{t.powerOfAttorney.p}</p>
      </div>
      <div className="card">
        <h3 data-icon={t.travelPermits.icon}>{t.travelPermits.h3}</h3>
        <p>{t.travelPermits.p}</p>
      </div>
      <div className="card">
        <h3 data-icon={t.itPayroll.icon}>{t.itPayroll.h3}</h3>
        <p>{t.itPayroll.p}</p>
      </div>
      <div className="card">
        <h3 data-icon={t.faxEmailPayments.icon}>{t.faxEmailPayments.h3}</h3>
        <p>{t.faxEmailPayments.p}</p>
      </div>
      <div className="card">
        <h3 data-icon={t.formsConsultations.icon}>{t.formsConsultations.h3}</h3>
        <p>{t.formsConsultations.p}</p>
      </div>
    </div>
  );
}

function Mission({ language }) {
  const texts = {
    en: {
      title: '🌟 Our Mission',
      missions: [
        "Our mission is to empower individuals and businesses through accurate, efficient, and confidential tax and financial services. We are dedicated to delivering trusted expertise that ensures compliance, maximizes financial opportunities, and provides lasting peace of mind.",
        "We strive to simplify the complexities of tax preparation and business management by offering personalized, high-quality solutions tailored to each client’s unique needs, with integrity, precision, and professionalism at every step."
      ],
      follow: 'Follow us on Facebook'
    },
    es: {
      title: '🌟 Nuestra Misión',
      missions: [
        "Nuestra misión es empoderar a individuos y empresas a través de servicios fiscales y financieros precisos, eficientes y confidenciales. Estamos dedicados a ofrecer experiencia confiable que garantice el cumplimiento, maximice las oportunidades financieras y proporcione tranquilidad duradera.",
        "Nos esforzamos por simplificar las complejidades de la preparación de impuestos y la gestión empresarial ofreciendo soluciones personalizadas y de alta calidad adaptadas a las necesidades únicas de cada cliente, con integridad, precisión y profesionalismo en cada paso."
      ],
      follow: 'Síguenos en Facebook'
    }
  };
  const t = texts[language] || texts.en;

  return (
    <section className="testimonials" id="mission">
      <h2 style={{ color: '#d4af37' }}>{t.title}</h2>
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

