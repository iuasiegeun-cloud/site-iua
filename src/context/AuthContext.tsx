import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import api, { ApiError } from '../lib/api'

// Reflète GET /api/auth/me côté backend (voir auth.routes.ts)
export interface Utilisateur {
  idUtilisateur: string
  nom: string
  prenom: string
  email: string
  typeUtilisateur: 'administrateur' | 'personnel' | 'etudiant'
  statut: 'actif' | 'inactif' | 'suspendu'
  administrateur?: { idService: string; fonction: string | null; service?: { nom: string } } | null
  personnel?: { typePersonnel: string; departement?: { nom: string } | null } | null
  etudiant?: { numeroEtudiant: string; anneeAcademique: string; filiere?: { nom: string; departement?: { nom: string } } } | null
  compteExterne?: { upn: string } | null
}

interface AuthContextType {
  user: Utilisateur | null
  loading: boolean
  logout: () => Promise<void>
  refresh: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Utilisateur | null>(null)
  const [loading, setLoading] = useState(true)

  const refresh = async () => {
    try {
      const me = await api.get<Utilisateur>('/api/auth/me')
      setUser(me)
    } catch (err) {
      // 401 = pas connecté, c'est un état normal, pas une erreur à afficher
      if (!(err instanceof ApiError && err.status === 401)) {
        console.error('Erreur lors de la récupération du profil :', err)
      }
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    await api.post('/api/auth/logout')
    setUser(null)
  }

  useEffect(() => {
    refresh()
  }, [])

  return <AuthContext.Provider value={{ user, loading, logout, refresh }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth doit être utilisé à l\'intérieur de <AuthProvider>')
  return ctx
}
