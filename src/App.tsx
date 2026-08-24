import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import NewsAndLinks from './components/NewsAndLinks'
import WhyIUA from './components/WhyIUA'
import Partners from './components/Partners'
import LogosMarquee from './components/LogosMarquee'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ConnexionPage from './components/ConnexionPage'

import EspaceUtilisateur from "./components/EspaceUtilisateur";


// ============================================================
// PAGE D'ACCUEIL
// ============================================================

function Home() {
  return (
    <>
      <Header />
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
// PAGE TEMPORAIRE
// ============================================================

interface PageProps {
  title: string
  description?: string
}

function Page({ title, description }: PageProps) {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 px-6 pb-20">
      <div className="mx-auto max-w-7xl">

        <h1 className="text-4xl md:text-5xl font-bold text-navy-900">
          {title}
        </h1>

        {description && (
          <p className="mt-4 max-w-3xl text-gray-600 text-lg">
            {description}
          </p>
        )}

      </div>
    </main>
  )
}


// ============================================================
// APPLICATION
// ============================================================

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-white">

        {/* ==================================================
            ROUTES
        ================================================== */}

        <Routes>

          {/* ==================================================
              ACCUEIL
          ================================================== */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* ==================================================
              CONNEXION / ESPACE UTILISATEUR
          ================================================== */}

          <Route
            path="/connexion"
            element={<ConnexionPage />}
          />

          <Route
            path="/espace-utilisateur"
            element={<EspaceUtilisateur />}
          />


          {/* ==================================================
              FORMATIONS
          ================================================== */}

          <Route
            path="/formations"
            element={
              <Page
                title="Nos formations"
                description="Découvrez les formations proposées par l'Institut Universitaire d'Abidjan."
              />
            }
          />

          <Route
            path="/formations/licences"
            element={
              <Page
                title="Licences"
                description="Découvrez nos différentes formations en Licence."
              />
            }
          />

          <Route
            path="/formations/masters"
            element={
              <Page
                title="Masters"
                description="Découvrez nos différentes formations en Master."
              />
            }
          />

          <Route
            path="/admissions"
            element={
              <Page
                title="Admissions et coûts"
                description="Découvrez les conditions d'admission et les frais de formation."
              />
            }
          />


          {/* ==================================================
              FACULTÉS
          ================================================== */}

          <Route
            path="/facultes/:slug"
            element={
              <Page
                title="Faculté"
                description="Découvrez les formations et programmes de cette faculté."
              />
            }
          />


          {/* ==================================================
              INTERNATIONAL
          ================================================== */}

          <Route
            path="/international"
            element={
              <Page
                title="International"
                description="Découvrez l'ouverture internationale de l'IUA."
              />
            }
          />

          <Route
            path="/international/mobilite"
            element={
              <Page
                title="Programme de mobilité internationale"
                description="Découvrez les possibilités de mobilité internationale proposées par l'IUA."
              />
            }
          />

          <Route
            path="/international/etudiants"
            element={
              <Page
                title="Étudiants internationaux"
                description="Toutes les informations destinées aux étudiants internationaux."
              />
            }
          />

          <Route
            path="/international/cote-divoire"
            element={
              <Page
                title="La Côte d'Ivoire"
                description="Découvrez les informations utiles pour votre arrivée en Côte d'Ivoire."
              />
            }
          />

          <Route
            path="/international/logement"
            element={
              <Page
                title="Logement"
                description="Découvrez les solutions de logement pour les étudiants."
              />
            }
          />

          <Route
            path="/international/transport"
            element={
              <Page
                title="Transport"
                description="Informations pratiques sur les transports à Abidjan."
              />
            }
          />


          {/* ==================================================
              VIE DE CAMPUS
          ================================================== */}

          <Route
            path="/vie-campus"
            element={
              <Page
                title="Vie de campus"
                description="Découvrez la vie étudiante et le campus de l'IUA."
              />
            }
          />

          <Route
            path="/a-propos"
            element={
              <Page
                title="À propos de l'IUA"
                description="Découvrez l'Institut Universitaire d'Abidjan."
              />
            }
          />

          <Route
            path="/ressources"
            element={
              <Page
                title="Ressources"
                description="Retrouvez les ressources utiles de l'IUA."
              />
            }
          />

          <Route
            path="/temoignages"
            element={
              <Page
                title="Témoignages"
                description="Découvrez les témoignages de nos étudiants et diplômés."
              />
            }
          />

          <Route
            path="/guide-etudiant"
            element={
              <Page
                title="Guide de l'étudiant"
                description="Toutes les informations utiles pour réussir votre parcours à l'IUA."
              />
            }
          />


          {/* ==================================================
              PARTENARIATS
          ================================================== */}

          <Route
            path="/partenariats"
            element={
              <Page
                title="Partenariats"
                description="Découvrez les partenaires académiques et professionnels de l'IUA."
              />
            }
          />

          <Route
            path="/partenariats/universites"
            element={
              <Page
                title="Universités partenaires"
                description="Découvrez les universités partenaires de l'IUA."
              />
            }
          />

          <Route
            path="/partenariats/entreprises"
            element={
              <Page
                title="Entreprises partenaires"
                description="Découvrez nos partenaires du monde professionnel."
              />
            }
          />

          <Route
            path="/partenariats/accreditations"
            element={
              <Page
                title="Accréditations CAMES"
                description="Découvrez les accréditations et reconnaissances de l'IUA."
              />
            }
          />

          <Route
            path="/insertion-professionnelle"
            element={
              <Page
                title="Insertion professionnelle"
                description="Découvrez les dispositifs d'accompagnement vers l'emploi."
              />
            }
          />

          <Route
            path="/contact"
            element={
              <Page
                title="Contact"
                description="Contactez l'Institut Universitaire d'Abidjan."
              />
            }
          />


          {/* ==================================================
              404
          ================================================== */}

          <Route
            path="*"
            element={
              <Page
                title="Page introuvable"
                description="La page que vous recherchez n'existe pas ou a été déplacée."
              />
            }
          />

        </Routes>


        {/* ==================================================
            FOOTER GLOBAL
        ================================================== */}

        <Footer />


        {/* ==================================================
            RETOUR EN HAUT
        ================================================== */}

        <BackToTop />

      </div>

    </BrowserRouter>
  )
}

export default App