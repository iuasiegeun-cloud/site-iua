// Point d'entrée unique pour parler au backend.
// VITE_API_URL doit pointer vers le backend (ex: http://localhost:4000 en dev).
const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:4000'

export class ApiError extends Error {
  status: number
  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    // 'include' est indispensable : c'est ce qui permet au navigateur
    // d'envoyer/recevoir le cookie de session httpOnly posé par le backend
    // après le login Microsoft (voir /api/auth/callback côté serveur).
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (res.status === 204) return undefined as T

  const data = await res.json().catch(() => null)

  if (!res.ok) {
    throw new ApiError(res.status, data?.error ?? `Erreur API (${res.status})`)
  }

  return data as T
}

export const api = {
  get: <T>(path: string) => request<T>(path, { method: 'GET' }),
  post: <T>(path: string, body?: unknown) =>
    request<T>(path, { method: 'POST', body: body ? JSON.stringify(body) : undefined }),
  put: <T>(path: string, body?: unknown) =>
    request<T>(path, { method: 'PUT', body: body ? JSON.stringify(body) : undefined }),
  delete: <T>(path: string) => request<T>(path, { method: 'DELETE' }),
}

/** URL absolue de login — pas un appel fetch, c'est une redirection de page complète. */
export function getLoginUrl(): string {
  return `${API_URL}/api/auth/login`
}

export default api
