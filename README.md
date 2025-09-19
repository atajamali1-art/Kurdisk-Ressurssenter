# Kurdisk Ressurssenter – Next.js 15 (MVP)

Oppdatert 2025-09-19. 
Mal med 4 språk (NO/KU/CKB/EN), SendGrid-skjema, Brevo-nyhetsbrev, Vipps/Stripe-knapper, CSP, SEO/OG, RTL-støtte.

## Kom i gang
```bash
pnpm install   # eller: npm/yarn
pnpm dev       # http://localhost:3000/no
```

## Miljøvariabler (eksempel)
Se `.env.example` og legg disse inn i Vercel → Project → Settings → Environment Variables.

## Deploy til Vercel
1. Push til GitHub.
2. Importer repo i Vercel.
3. Legg inn **Environment Variables**.
4. Koble domene (A @ → 76.76.21.21, CNAME www → cname.vercel-dns.com).

## Strukturoversikt
- app/[locale]/(site) – sider
- app/api – API-ruter
- components – UI-komponenter
- lib – CSP, rate-limit, validering, e-post
- i18n – språk og tekster
