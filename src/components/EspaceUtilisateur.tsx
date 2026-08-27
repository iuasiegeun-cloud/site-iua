import { useEffect, useState } from "react";
import { LogOut, User, Mail, Bell, BadgeCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../lib/api";

// Reflète GET /api/posts/visibles côté backend (résolution de ciblage §5.3)
interface PostVisible {
  idPost: string;
  titre: string;
  contenu: string;
  typePost: string;
  datePublication: string;
  auteur: { service?: { nom: string } | null };
}

export default function EspaceUtilisateur() {
  const navigate = useNavigate();
  const { user, loading, logout } = useAuth();
  const [posts, setPosts] = useState<PostVisible[]>([]);
  const [postsLoading, setPostsLoading] = useState(true);

  // Redirige vers /connexion si aucune session valide (pas de cookie backend)
  useEffect(() => {
    if (!loading && !user) {
      navigate("/connexion");
    }
  }, [loading, user, navigate]);

  // Charge les publications ciblées visibles par ce profil précis
  // (résolution faite côté serveur — jamais côté front, voir §8 du CDC)
  useEffect(() => {
    if (!user) return;
    api
      .get<PostVisible[]>("/api/posts/visibles")
      .then(setPosts)
      .catch((err) => console.error("Erreur de chargement des publications :", err))
      .finally(() => setPostsLoading(false));
  }, [user]);

  const handleLogout = async () => {
    await logout();
    navigate("/connexion");
  };

  const marquerCommeLu = async (idPost: string) => {
    try {
      await api.post(`/api/posts/${idPost}/lu`);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading || !user) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Chargement de votre espace…</p>
      </main>
    );
  }

  const fonctionAffichee =
    user.administrateur
      ? `${user.administrateur.fonction ?? "Administrateur"} — ${user.administrateur.service?.nom ?? ""}`
      : user.personnel
      ? `${user.personnel.typePersonnel} — ${user.personnel.departement?.nom ?? ""}`
      : user.etudiant
      ? `Étudiant — ${user.etudiant.filiere?.nom ?? ""}`
      : user.typeUtilisateur;

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

        {/* CARTE UTILISATEUR — données réelles issues de GET /api/auth/me */}
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
                Bienvenue {user.prenom} 👋
              </h2>

              <p className="text-gray-500 flex items-center gap-1">
                <BadgeCheck size={15} className="text-navy-900" />
                {fonctionAffichee}
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
                {user.nom} {user.prenom}
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
                {user.compteExterne?.upn ?? user.email}
              </p>

            </div>

          </div>

        </div>

        {/* PUBLICATIONS CIBLÉES — GET /api/posts/visibles (moteur de ciblage §5) */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <Bell size={20} className="text-navy-900" />
            <h2 className="text-xl font-semibold text-gray-900">
              Vos publications
            </h2>
          </div>

          {postsLoading ? (
            <p className="text-gray-500">Chargement des publications…</p>
          ) : posts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center text-gray-500">
              Aucune publication ne correspond à votre profil pour le moment.
            </div>
          ) : (
            <div className="grid gap-4">
              {posts.map((post) => (
                <article
                  key={post.idPost}
                  onClick={() => marquerCommeLu(post.idPost)}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 cursor-pointer hover:border-navy-900 transition"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium uppercase tracking-wide text-navy-900 bg-navy-900/10 px-2 py-1 rounded">
                      {post.typePost.replace("_", " ")}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(post.datePublication).toLocaleDateString("fr-FR")}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{post.titre}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{post.contenu}</p>
                  {post.auteur?.service?.nom && (
                    <p className="text-xs text-gray-400 mt-2">
                      Publié par {post.auteur.service.nom}
                    </p>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>

      </div>

    </main>
  );
}
