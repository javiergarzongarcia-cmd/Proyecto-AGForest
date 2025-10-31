/// <reference types="vite/client" />

// Definiciones de tipos para las variables de entorno de Vite
interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_PUBLISHABLE_KEY: string
  readonly VITE_SUPABASE_PROJECT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
