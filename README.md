# Not Just Cuts - Hair Salon MVP Website

A modern, production-ready MVP website built for **Not Just Cuts**, a local hair salon located at Unit 7, 1453 King Street East, Cambridge, Ontario (serving Preston & Cambridge).

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Lucide Icons**, **React Hook Form**, and **Zod Validation**.

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
cd not-just-cuts
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to preview the website.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## ✏️ How to Edit Salon Information

All business details, services, starting prices, duration estimates, skills, gallery photos, FAQs, and contact info are centrally stored in a single, easy-to-edit file:

📁 **`src/data/salonData.ts`**

### What You Can Edit in `salonData.ts`:
- **Business Details**: Salon name, phone number, address, Google Maps links, and email.
- **Services & Prices**: Edit prices (e.g. `$45+`), descriptions, and estimated durations.
- **Skills & Specialties**: Add or edit salon owner expertise cards.
- **Gallery Images & Comparisons**: Replace placeholder photos with real client haircut/colour photos.
- **FAQs**: Update answers regarding appointments, walk-ins, and policies.
- **Hours Table Notice**: Replace `"Business hours coming soon..."` with exact opening hours once finalized.

---

## 🛠 Features Included

- **Sticky Header & Mobile Drawer**: Logo, fast tap-to-call, section links, and Book CTA.
- **Hero Section**: High-impact headline, trust badges, location pill, and phone actions.
- **Services Grid**: Categorized tabs for Haircuts, Colour, Styling, and Hair Treatments with starting prices and price disclaimers.
- **Skills Showcase**: Visual cards with owner disclaimer note.
- **Filterable Gallery**: Interactive before-and-after image slider, lightbox modal, category filters, and CTA banner.
- **About & Why Choose Us**: Local story, 8 trust cards, and editable placeholders for history & lead stylists.
- **Appointment Request System**: Full-featured form with client validation, phone auto-formatting, photo upload preview, honeypot spam protection, and redirect to `/thank-you`.
- **Quote Request System**: Color consultation quote request form with multi-photo upload and disclaimer.
- **Contact & Map Section**: Interactive Google Map, directions button, phone tap-to-call, and business hours table.
- **Fixed Mobile Action Bar**: Bottom bar with Call, Directions, and Book buttons on mobile viewports.
- **Local SEO & Schema**: Built-in `HairSalon`, `LocalBusiness`, and `FAQPage` JSON-LD schemas, OpenGraph metadata, `sitemap.ts`, and `robots.ts`.
- **Privacy Policy & Thank-You Pages**: Complete dedicated pages.

---

## 🌐 Deployment Instructions (Vercel / Netlify)

1. Push this `not-just-cuts` repository to GitHub or GitLab.
2. Import the repository into **Vercel** ([vercel.com](https://vercel.com)).
3. Vercel automatically detects Next.js. Click **Deploy**.
4. Set environment variables from `.env.example` in Vercel project settings if connecting an email notification service (e.g., Resend, Formspree).
