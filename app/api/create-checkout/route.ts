import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { createServerClient } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { leadId, price, configSummary, name, email } = body

    if (!leadId || !price) {
      return NextResponse.json({ error: 'Chybí údaje.' }, { status: 400 })
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'czk',
            unit_amount: price * 100, // Stripe uses smallest unit (haléře)
            product_data: {
              name: `Web do 24h — ${configSummary ?? 'Webová stránka'}`,
              description: `Objednat pro ${name}`,
            },
          },
          quantity: 1,
        },
      ],
      metadata: { leadId },
      success_url: `${appUrl}/funnel/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/funnel`,
    })

    // Create order record
    const db = createServerClient()
    await db.from('orders').insert({
      lead_id: leadId,
      price,
      paid: false,
      upsells: {},
      stripe_session_id: session.id,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('[POST /api/create-checkout]', err)
    return NextResponse.json({ error: 'Interní chyba.' }, { status: 500 })
  }
}
