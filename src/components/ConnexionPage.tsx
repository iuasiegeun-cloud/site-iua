import { useNavigate } from "react-router-dom";
import { User, ArrowLeft } from "lucide-react";

const PHOTO_SRC = "/assets/amphi-2.jpg";

export default function ConnexionPage() {
  const navigate = useNavigate();

  // Démo Microsoft
  const handleMicrosoftLogin = () => {
    // Simulation de l'authentification Microsoft
    navigate("/espace-utilisateur");
  };

  // Démo connexion classique
  const handleClassicLogin = () => {
    navigate("/espace-utilisateur");
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

            {/* MICROSOFT */}
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

            {/* SÉPARATEUR */}
            <div className="flex items-center gap-4 my-7">
              <div className="h-px bg-gray-200 flex-1" />
              <span className="text-xs text-gray-400">OU</span>
              <div className="h-px bg-gray-200 flex-1" />
            </div>

            {/* CONNEXION CLASSIQUE */}
            <button
              type="button"
              onClick={handleClassicLogin}
              className="
                w-full
                flex
                items-center
                justify-center
                gap-2
                bg-navy-900
                text-white
                rounded-lg
                px-5
                py-3
                font-medium
                hover:bg-navy-800
                transition-all
                duration-200
              "
            >
              <User size={18} />
              Connexion classique
            </button>

            {/* TEXTE */}
            <p className="text-xs text-center text-gray-400 mt-6">
              Utilisez votre compte Microsoft ou vos identifiants
              IUA pour accéder à votre espace.
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