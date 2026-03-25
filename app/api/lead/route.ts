import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { answers, price, name, email, phone } = body

    if (!email || !name || !price) {
      return NextResponse.json({ error: 'Chybí povinné údaje.' }, { status: 400 })
    }

    const db = createServerClient()
    const { data, error } = await db
      .from('leads')
      .insert({ answers, price, name, email, phone })
      .select('id')
      .single()

    if (error) throw error

    return NextResponse.json({ leadId: data.id })
  } catch (err) {
    console.error('[POST /api/lead]', err)
    return NextResponse.json({ error: 'Interní chyba.' }, { status: 500 })
  }
}
