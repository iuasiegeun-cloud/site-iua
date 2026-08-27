import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Search, ThumbsUp, Eye, MessageCircle, RefreshCw, BarChart2 } from "lucide-react";
import api from "../lib/api";

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
  const { user, loading } = useAuth();
  
  const [posts, setPosts] = useState<PostVisible[]>([]);
  const [postsLoading, setPostsLoading] = useState(true);

  // useEffect(() => {
  //   if (!loading && !user) {
  //     navigate("/connexion");
  //   }
  // }, [loading, user, navigate]);

  useEffect(() => {
    api
      .get<PostVisible[]>("/api/posts/visibles")
      .then(setPosts)
      .catch((err) => console.error("Erreur de chargement des publications (peut-être non connecté) :", err))
      .finally(() => setPostsLoading(false));
  }, []);

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleDateString("fr-FR", { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  const formatHeure = (dateString: string) => {
    const d = new Date(dateString);
    return d.getHours() + "h" + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
  };

  // Fallback post so you can always see the design even if backend is empty
  const displayPosts = posts.length > 0 ? posts : [
    {
      idPost: "dummy-1",
      titre: "CÉRÉMONIE DE REMISE DES DIPLÔMES",
      contenu: "Nos lauréats célèbrent une nouvelle promotion de diplômés prêts pour le monde professionnel.",
      typePost: "evenement",
      datePublication: "2026-07-18T20:00:00Z",
      auteur: { service: { nom: "Direction marketing IUA" } },
      imageUrl: "/assets/graduation-1.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F6] flex flex-col lg:flex-row text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* LEFT COLUMN - Logo */}
      <div className="w-full lg:w-64 pt-8 px-8 flex-shrink-0 flex items-start justify-between lg:block">
        <img src="/assets/logo-iua.png" alt="IUA Logo" className="w-20 md:w-24 object-contain" />
      </div>

      {/* MIDDLE COLUMN - Main Content */}
      <div className="flex-1 flex flex-col min-h-screen max-w-5xl mx-auto lg:mx-0 lg:max-w-none w-full lg:border-l lg:border-r border-slate-200/70">
        
        {/* Top Navigation & Search */}
        <div className="pt-8 pb-6 px-4 md:px-12 border-b border-slate-200/70">
          
          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[13px] md:text-sm font-semibold text-slate-500 mb-8">
            <a href="/espace-utilisateur" className="text-slate-900 border-b-2 border-orange-500 pb-1 cursor-pointer">Actualité</a>
            <a href="https://elearning.iua.ci" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-slate-900 transition-colors duration-200">e-learning</a>
            <a href="https://www.office.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-slate-900 transition-colors duration-200">Portail Office</a>
            <a href="https://bibliotheque.iua.ci" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-slate-900 transition-colors duration-200">Bibliothèque Numerique</a>
            <a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-slate-900 transition-colors duration-200">Coursera</a>
            <a href="https://myiua.iua.ci" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-slate-900 transition-colors duration-200">MyIUA</a>
            <a href="https://univ16.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-slate-900 transition-colors duration-200">univ16</a>
          </div>

          {/* Search Bar */}
          <div className="flex justify-center mt-4">
            <div className="relative w-full max-w-lg group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                 <Search size={18} className="text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Rechercher une publication..."
                className="w-full bg-white rounded-full py-2.5 pl-11 pr-4 shadow-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm transition-all"
              />
            </div>
          </div>
        </div>

        {/* Feed Content */}
        <div className="flex-1 p-4 md:p-12 pt-8">
          <div className="max-w-3xl mx-auto">
            
            {postsLoading ? (
              <div className="flex items-center justify-center py-12">
                 <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : null}

            {/* Render dynamic posts - NO card wrappers, separated by thin lines */}
            {displayPosts.map((post) => (
              <article key={post.idPost} className="pb-10 mb-10 border-b border-slate-200/70 last:border-0 last:mb-0 last:pb-0">
                
                {/* Post Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <img src="/assets/logo-iua.png" alt="IUA Logo Small" className="w-10 h-10 object-contain" />
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{post.auteur?.service?.nom || "Institut Universitaire d'Abidjan"}</p>
                      <p className="text-xs text-slate-500 font-medium">{formatHeure(post.datePublication)}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold tracking-wide text-slate-500 bg-slate-200/50 px-3 py-1.5 rounded-full">
                    {formatDate(post.datePublication)}
                  </span>
                </div>

                {/* Post Content */}
                <div className="mb-2">
                  <h2 className="text-[17px] md:text-lg font-bold text-slate-900 mb-2 leading-snug">{post.titre}</h2>
                  <p className="text-[14px] text-slate-600 mb-5 leading-relaxed whitespace-pre-wrap">
                    {post.contenu}
                  </p>
                  
                  {/* Dynamic image - reduced size and removed the card container */}
                  {(post as any).imageUrl && (
                    <img 
                      src={(post as any).imageUrl} 
                      alt={post.titre} 
                      className="w-full h-64 md:h-80 object-cover rounded-xl shadow-sm mb-5"
                    />
                  )}

                  {/* Action Icons */}
                  <div className="flex items-center justify-between pt-2">
                    <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group">
                      <div className="p-1 rounded-full group-hover:bg-blue-50 transition-colors">
                        <ThumbsUp size={18} strokeWidth={2.5} />
                      </div>
                    </button>
                    <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group">
                      <div className="p-1 rounded-full group-hover:bg-blue-50 transition-colors">
                        <Eye size={18} strokeWidth={2.5} />
                      </div>
                    </button>
                    <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group">
                      <div className="p-1 rounded-full group-hover:bg-blue-50 transition-colors relative">
                        <MessageCircle size={18} strokeWidth={2.5} />
                      </div>
                    </button>
                    <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group">
                      <div className="p-1 rounded-full group-hover:bg-blue-50 transition-colors">
                        <RefreshCw size={18} strokeWidth={2.5} />
                      </div>
                    </button>
                    <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group">
                      <div className="p-1 rounded-full group-hover:bg-blue-50 transition-colors">
                        <BarChart2 size={18} strokeWidth={2.5} />
                      </div>
                    </button>
                  </div>
                </div>
                
              </article>
            ))}
            
          </div>
        </div>
        
      </div>

      {/* RIGHT COLUMN - Sidebar */}
      <div className="w-full lg:w-80 pt-12 px-8 pb-12 flex-shrink-0">
        <div className="sticky top-12 text-center">
          <h3 className="text-[13px] font-bold text-[#728096] uppercase tracking-widest mb-10">Outils Microsoft</h3>
          
          <a 
            href="https://www.office.com/launch/word" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-row items-center justify-center gap-4 group cursor-pointer"
          >
            {/* Reduced Microsoft Word Icon SVG */}
            <div className="w-10 h-10 bg-transparent flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                <path d="M128 32H240V224H128V32Z" fill="#185CBE"/>
                <path d="M16 48L128 32V224L16 208V48Z" fill="#2B7CD3"/>
                <path d="M152 72H216V88H152V72ZM152 112H216V128H152V112ZM152 152H216V168H152V152ZM152 192H192V208H152V192Z" fill="white"/>
                <path d="M32 96L52 168L64 120L76 168L96 96H80L68 144L60 104H48L40 144L28 96H32Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[16px] font-semibold text-[#1E3A8A] group-hover:underline">Microsoft Word</span>
          </a>
        </div>
      </div>

    </div>
  );
}
