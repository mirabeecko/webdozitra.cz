import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side client with service role (for API routes)
export function createServerClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
}

export type Lead = {
  id?: string
  answers: Record<string, unknown>
  price: number
  name: string
  email: string
  phone: string
  created_at?: string
}

export type Order = {
  id?: string
  lead_id: string
  price: number
  paid: boolean
  upsells: Record<string, unknown>
  stripe_session_id?: string
  created_at?: string
}
