import { createClient } from '@supabase/supabase-js'

// ATENÇÃO: É altamente recomendável mover estas informações para variáveis de ambiente (.env.local)
// para maior segurança em um projeto real. Exemplo:
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Verifica se as variáveis foram carregadas (útil ao usar .env)
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL ou Anon Key não definidas. Verifique suas variáveis de ambiente.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  }
})

