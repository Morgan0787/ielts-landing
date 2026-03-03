# IELTS 7.0+ Preparation Landing Page

One-page marketing website for an IELTS / exam preparation center, built with **Next.js 14** (App Router) and **Tailwind CSS**.

## Features

- One-page, fast, mobile-first layout
- Uzbek / Russian language toggle
- Sections: Hero, Courses, Why choose us, Student results, Teachers, Free trial lesson form, Testimonials, FAQ, Contacts
- Basic SEO meta tags via `app/layout.tsx`

## Getting started

From the `ielts-landing` folder:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.


## How to create a new demo client in 60 seconds

1. Duplicate `CLIENTS.default` in `app/client-configs.ts` and give it a new key (for example `mycenter`).
2. Update `centerName`, `phoneDisplay`, `phoneE164`, and `courses` values for that client.
3. Preview instantly by opening `/?demo=NEWKEY` (for example `/?demo=mycenter`).
4. Optionally map a subdomain to that key in `app/getClientConfig.ts`.
