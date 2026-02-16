# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 website for UpuDev, a software company. It uses the App Router with TypeScript and Tailwind CSS 4.

### Internationalization (i18n)

The site supports three locales: Turkish (tr, default), English (en), and Dutch (nl).

- **Routing**: Locale-based routing via `[locale]` dynamic segment in `src/app/[locale]/`
- **Dictionaries**: Content is stored in `src/content/locales/{locale}/home.ts` - each locale exports a `HomeDictionary` object
- **i18n utilities**: `src/lib/i18n.ts` provides `getHomeDictionary()`, `isLocale()`, and locale constants
- **Products**: `src/content/products.ts` contains product data for all locales with `getProductBySlug(slug, locale)`

### Route Structure

```
/                      -> Turkish homepage (redirects or serves directly)
/[locale]              -> Localized homepage
/[locale]/iletisim     -> Contact page with form
/[locale]/urunler/[slug] -> Product detail pages
/api/contact           -> Contact form POST endpoint (nodemailer + SMTP)
```

### Components

- `src/components/site-header.tsx` - Main navigation with mobile hamburger menu and locale switcher
- `src/components/contact-form.tsx` - Contact form component
- `src/components/saas-projects-grid.tsx` - Product showcase grid
- `src/components/ui/` - Reusable UI primitives (Card, Badge, Separator)

### Styling

Global styles are in `src/app/globals.css`. The site uses custom CSS classes prefixed with `io-` (e.g., `io-wrap`, `io-hero`, `io-btn`) alongside Tailwind utilities.

### Environment Variables (for contact form)

The contact API requires SMTP configuration:
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
- Optional: `SMTP_SECURE`, `MAIL_TO`, `MAIL_FROM`

### Path Aliases

`@/*` maps to `./src/*` (configured in tsconfig.json)
