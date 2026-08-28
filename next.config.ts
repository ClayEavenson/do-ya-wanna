import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NOTE: output: 'export' is intentionally NOT set here.
  // The /api/subscribe route requires a Node.js server runtime.
  // Vercel auto-detects Next.js and deploys with zero config — no changes needed for production.
  //
  // Before going live, wire /api/subscribe to a real storage backend:
  //   - Supabase: supabase.from('beta_subscribers').insert(...)
  //   - Resend:   resend.contacts.create({ audienceId, email, firstName })
  //   - Airtable: POST to Airtable REST API
  //   - Vercel Postgres / Neon: standard pg query
};

export default nextConfig;
