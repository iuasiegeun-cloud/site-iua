import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'

import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import NewsAndLinks from './components/NewsAndLinks'
import WhyIUA from './components/WhyIUA'
import Partners from './components/Partners'
import LogosMarquee from './components/LogosMarquee'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollToTop from './components/ScrollToTop'
import ConnexionPage from './components/ConnexionPage'
import EspaceUtilisateur from './components/EspaceUtilisateur'

// Pages Formations
import FormationsPage from './pages/formations/FormationsPage'
import LicencesPage from './pages/formations/LicencesPage'
import MastersPage from './pages/formations/MastersPage'
import AdmissionsPage from './pages/formations/AdmissionsPage'
import FaculteDetailPage from './pages/formations/FaculteDetailPage'

// Pages International
import InternationalPage from './pages/international/InternationalPage'
import MobilitePage from './pages/international/MobilitePage'
import EtudiantsIntlPage from './pages/international/EtudiantsIntlPage'
import CoteDivoirePage from './pages/international/CoteDivoirePage'
import LogementPage from './pages/international/LogementPage'
import TransportPage from './pages/international/TransportPage'

// Pages Campus
import VieCampusPage from './pages/campus/VieCampusPage'
import AProposPage from './pages/campus/AProposPage'
import BibliothequePage from './pages/campus/BibliothequePage'
import RessourcesPage from './pages/campus/RessourcesPage'
import TemoignagesPage from './pages/campus/TemoignagesPage'
import GuideEtudiantPage from './pages/campus/GuideEtudiantPage'

// Pages Partenariats & Contact
import PartenariatsPage from './pages/partenariats/PartenariatsPage'
import UniversitesPage from './pages/partenariats/UniversitesPage'
import EntreprisesPage from './pages/partenariats/EntreprisesPage'
import AccreditationsPage from './pages/partenariats/AccreditationsPage'
import InsertionProPage from './pages/partenariats/InsertionProPage'
import ContactPage from './pages/contact/ContactPage'

// ============================================================
// PAGE D'ACCUEIL
// ============================================================

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <NewsAndLinks />
      <WhyIUA />
      <Partners />
      <LogosMarquee />
    </>
  )
}

// ============================================================
// PAGE 404
// ============================================================

function NotFoundPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-36 pb-20 px-6 flex items-center justify-center">
      <div className="mx-auto max-w-lg text-center bg-white p-10 rounded-3xl border border-gray-200 shadow-sm">
        <span className="text-6xl font-black text-gold-500 font-display">404</span>
        <h1 className="text-2xl sm:text-3xl font-bold text-navy-900 font-display mt-2 mb-3">
          Page introuvable
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
        >
          Retour à l'accueil
        </a>
      </div>
    </main>
  )
}

// ============================================================
// LAYOUT GLOBAL
// ============================================================

function Layout() {
  const location = useLocation()
  const isAuthRoute = location.pathname === '/connexion'

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <ScrollToTop />

      {!isAuthRoute && <Header />}

      <div className="flex-1">
        <Routes>
          {/* ==================== ACCUEIL ==================== */}
          <Route path="/" element={<Home />} />

          {/* ==================== AUTH & ESPACE ==================== */}
          <Route path="/connexion" element={<ConnexionPage />} />
          <Route path="/espace-utilisateur" element={<EspaceUtilisateur />} />

          {/* ==================== FORMATIONS ==================== */}
          <Route path="/formations" element={<FormationsPage />} />
          <Route path="/formations/licences" element={<LicencesPage />} />
          <Route path="/formations/masters" element={<MastersPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/facultes/:slug" element={<FaculteDetailPage />} />

          {/* ==================== INTERNATIONAL ==================== */}
          <Route path="/international" element={<InternationalPage />} />
          <Route path="/international/mobilite" element={<MobilitePage />} />
          <Route path="/international/etudiants" element={<EtudiantsIntlPage />} />
          <Route path="/international/cote-divoire" element={<CoteDivoirePage />} />
          <Route path="/international/logement" element={<LogementPage />} />
          <Route path="/international/transport" element={<TransportPage />} />

          {/* ==================== VIE DE CAMPUS ==================== */}
          <Route path="/vie-campus" element={<VieCampusPage />} />
          <Route path="/a-propos" element={<AProposPage />} />
          <Route path="/bibliotheque" element={<BibliothequePage />} />
          <Route path="/vie-campus/bibliotheque" element={<BibliothequePage />} />
          <Route path="/ressources" element={<RessourcesPage />} />
          <Route path="/temoignages" element={<TemoignagesPage />} />
          <Route path="/guide-etudiant" element={<GuideEtudiantPage />} />

          {/* ==================== PARTENARIATS & CONTACT ==================== */}
          <Route path="/partenariats" element={<PartenariatsPage />} />
          <Route path="/partenariats/universites" element={<UniversitesPage />} />
          <Route path="/partenariats/entreprises" element={<EntreprisesPage />} />
          <Route path="/partenariats/accreditations" element={<AccreditationsPage />} />
          <Route path="/insertion-professionnelle" element={<InsertionProPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* ==================== 404 ==================== */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      {!isAuthRoute && <Footer />}
      <BackToTop />
    </div>
  )
}

// ============================================================
// APPLICATION
// ============================================================

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App