import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getLoginUrl } from "../lib/api";

const PHOTO_SRC = "/assets/amphi-2.jpg";

export default function ConnexionPage() {
  const navigate = useNavigate();

  // Redirige vers le backend, qui redirige à son tour vers la page de
  // connexion Microsoft Entra ID (voir GET /api/auth/login côté backend).
  // Ce n'est PAS un appel fetch : c'est une navigation complète de page,
  // car l'authentification Microsoft nécessite un cycle de redirections.
  const handleMicrosoftLogin = () => {
    window.location.href = getLoginUrl();
  };

  return (
    <main className="min-h-screen flex">
      {/* COLONNE FORMULAIRE */}
      <div className="relative flex-1 flex items-center justify-center bg-gray-50 px-5 py-20">

        {/* FLÈCHE DE RETOUR */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Retour"
          className="
            absolute
            top-6
            left-6
            flex
            items-center
            gap-2
            text-gray-500
            hover:text-gray-800
            transition-colors
            duration-200
          "
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">Retour</span>
        </button>

        <div className="w-full max-w-md">

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">

            {/* LOGO */}
            <div className="flex justify-center mb-6">
              <img
                src="/assets/logo-iua.png"
                alt="Institut Universitaire d'Abidjan"
                className="h-20 w-20 object-contain"
              />
            </div>

            {/* TITRE */}
            <h1 className="text-2xl font-bold text-center text-navy-900">
              Connexion à l'IUA
            </h1>

            <p className="text-center text-gray-500 mt-2 mb-8">
              Accédez à votre espace utilisateur
            </p>

            {/* MICROSOFT — authentification unifiée Entra ID (§4.3 du CDC) */}
            <button
              type="button"
              onClick={handleMicrosoftLogin}
              className="
                w-full
                flex
                items-center
                justify-center
                gap-3
                bg-white
                border
                border-gray-300
                rounded-lg
                px-5
                py-3
                text-gray-800
                font-medium
                hover:bg-gray-50
                hover:border-gray-400
                transition-all
                duration-200
              "
            >
              {/* Logo Microsoft */}
              <div className="grid grid-cols-2 gap-[2px] w-5 h-5">
                <span className="bg-[#f35325]" />
                <span className="bg-[#81bc06]" />
                <span className="bg-[#05a6f0]" />
                <span className="bg-[#ffba08]" />
              </div>

              <span>Continuer avec Microsoft</span>
            </button>

            {/* TEXTE — tous les comptes (admin, personnel, étudiants) passent
                désormais uniquement par Microsoft Entra ID, il n'y a plus
                d'identifiants "classiques" IUA (voir §1 du CDC). */}
            <p className="text-xs text-center text-gray-400 mt-6">
              Utilisez votre compte Microsoft (nom.prenom@iua.ci) pour accéder
              à votre espace. L'authentification est entièrement gérée par
              Microsoft — l'IUA ne stocke aucun mot de passe.
            </p>

          </div>

        </div>
      </div>

      {/* COLONNE IMAGE */}
      <div
        className="hidden md:block md:w-3/5 bg-cover bg-center"
        style={{ backgroundImage: `url(${PHOTO_SRC})` }}
      />
    </main>
  );
}
