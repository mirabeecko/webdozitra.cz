-- ============================================================
-- Webdozítra.cz — Funnel Database Schema
-- Run this in Supabase SQL Editor
-- ============================================================

-- LEADS table: stores configurator answers + contact info
CREATE TABLE IF NOT EXISTS leads (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  answers    JSONB NOT NULL DEFAULT '{}',
  price      INTEGER NOT NULL,
  name       TEXT NOT NULL,
  email      TEXT NOT NULL,
  phone      TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ORDERS table: stores payment status and upsells
CREATE TABLE IF NOT EXISTS orders (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id           UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  price             INTEGER NOT NULL,
  paid              BOOLEAN NOT NULL DEFAULT FALSE,
  upsells           JSONB NOT NULL DEFAULT '{}',
  stripe_session_id TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_orders_lead_id ON orders(lead_id);
CREATE INDEX IF NOT EXISTS idx_orders_stripe_session_id ON orders(stripe_session_id);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Row Level Security (enable but keep service role access for API routes)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Only service role (API) can read/write
CREATE POLICY "Service role only" ON leads
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role only" ON orders
  FOR ALL USING (auth.role() = 'service_role');
