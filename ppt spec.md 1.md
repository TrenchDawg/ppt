# Codex Build Spec — PeerPathway Tutors (MVP)

**Author:** TrenchDawg  
**Email:** kirangrao1127@gmail.com  
**Repository:** https://github.com/TrenchDawg/ppt

## Goal
Build the MVP website for **PeerPathway Tutors** using Next.js (App Router) + TypeScript + Tailwind. Implement pages, components, sample data, and placeholders for scheduling and payments.

## Routes
/ → Home  
/tutors → Tutors index (cards)  
/tutors/[slug] → Tutor detail with embedded scheduler  
/payments → Pricing + Stripe Payment Link placeholders  
/contact → Contact form (POST /api/contact)  
/become-a-tutor → Tutor application form (POST /api/apply)  
/policies/terms, /policies/privacy, /policies/consent, /policies/refund

## Env (.env.local)
NEXT_PUBLIC_STRIPE_SINGLE=  
NEXT_PUBLIC_STRIPE_FIVEPACK=  
NEXT_PUBLIC_STRIPE_TENPACK=  
NEXT_PUBLIC_OPS_EMAIL=ops@example.com

## Components
- src/components/SiteHeader.tsx
- src/components/SiteFooter.tsx
- src/components/TutorCard.tsx
- src/components/SchedulerEmbed.tsx (iframe Calendly/Cal.com)

## Data
- src/data/tutors.ts with type + sample tutors: Kiran Rao, Julius Lesnick Schafer, Alexander Fiterman (and placeholders for Isaac Hochglaube, Owen Lowry, Blake Saikin, Joseph Novak).

## Pages
- Home: hero + tagline + CTAs + “How it works” + featured tutors.
- Tutors index: subject chips (non-functional) + grid of TutorCard.
- Tutor detail: profile + `#schedule` section with SchedulerEmbed if `calendlyUrl`.
- Payments: show $45/hr (may vary); tutors paid $30–$35/hr; 3 link buttons reading env vars.
- Contact: form → POST /api/contact; success/error UI.
- Become a Tutor: requirements + application form → POST /api/apply.
- Policies: static pages for terms/privacy/consent/refund.

## API routes
- src/app/api/contact/route.ts — validate minimal fields, return { ok: true } or 400, log to server.
- src/app/api/apply/route.ts — similar pattern.

## Styling
Tailwind; rounded-2xl, shadow-sm, border, good spacing; accessible colors.

## Acceptance
1) `npm run build` passes.  
2) Header/footer on all pages.  
3) Tutors list → detail works.  
4) Scheduler iframe renders when URL present.  
5) Payments links read from env (fallback "#").  
6) Forms POST and show success/error.  
7) Policies pages linked in footer.  
8) Metadata set in layout.

