import { LogOut, User, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EspaceUtilisateur() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/connexion");
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-28 px-6 pb-20">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">

          <div>
            <p className="text-sm text-gray-500">
              Institut Universitaire d'Abidjan
            </p>

            <h1 className="text-3xl font-bold text-navy-900">
              Espace utilisateur
            </h1>
          </div>

          <button
            onClick={handleLogout}
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-lg
              border
              border-gray-300
              text-gray-700
              hover:bg-white
              transition
            "
          >
            <LogOut size={18} />
            Déconnexion
          </button>

        </div>

        {/* CARTE UTILISATEUR */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

          <div className="flex items-center gap-4">

            <div className="
              w-14
              h-14
              rounded-full
              bg-navy-900
              text-white
              flex
              items-center
              justify-center
            ">
              <User size={26} />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Bienvenue 👋
              </h2>

              <p className="text-gray-500">
                Votre connexion a été effectuée avec succès.
              </p>
            </div>

          </div>

          {/* INFORMATIONS */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">

            <div className="p-5 rounded-xl bg-gray-50">

              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <User size={17} />
                <span className="text-sm">
                  Utilisateur
                </span>
              </div>

              <p className="font-semibold">
                Démonstration IUA
              </p>

            </div>

            <div className="p-5 rounded-xl bg-gray-50">

              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <Mail size={17} />
                <span className="text-sm">
                  Compte
                </span>
              </div>

              <p className="font-semibold">
                utilisateur@iua-ci.org
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}