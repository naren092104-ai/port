# Project Structure

## Root
- `package.json`: App dependency manifest and build scripts.
- `vite.config.ts`: Vite config with Tailwind and Lovable component tagging.
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`: TypeScript configuration.
- `README.md`: Project overview and cleaned-up notes.
- `public/`: Static assets served at runtime.
  - `resume.pdf`: Downloadable resume.
  - `awards/`: Award imagery.
  - `photos/`: Community gallery imagery.

## Source code
- `src/main.tsx`: Application entrypoint and root render.
- `src/App.tsx`: Router and route configuration.
- `src/pages/`: Page views loaded by the router.
  - `Home.tsx`: Landing page with hero, awards, community gallery, and contact.
  - `Resume.tsx`: Resume page with JS-generated PDF download.
  - `Portfolio.tsx`, `ProjectDetail.tsx`, `About.tsx`, `Contact.tsx`, `NotFound.tsx`, `Index.tsx`
- `src/components/layout/`: Shared layout components.
  - `Header.tsx`, `Footer.tsx`, `Layout.tsx`, `ThemeToggle.tsx`
- `src/components/forms/ContactForm.tsx`: Contact form with `react-hook-form` + `zod` validation.
- `src/components/portfolio/`: Portfolio grid and lightbox components.
- `src/components/seo/SEOHead.tsx`: Page metadata.
- `src/components/providers/ThemeProvider.tsx`: Theme context.
- `src/components/ui/`: Active UI primitives used by the app.
  - `button.tsx`, `dialog.tsx`, `form.tsx`, `input.tsx`, `label.tsx`, `select.tsx`, `separator.tsx`, `sheet.tsx`, `sonner.tsx`, `textarea.tsx`, `toast.tsx`, `toaster.tsx`, `tooltip.tsx`, `LoadingFallback.tsx`, `PageTransition.tsx`, `ScrollReveal.tsx`, `SkipToContent.tsx`
- `src/data/`: Static content and page data.
- `src/hooks/`: Reusable hooks.
- `src/lib/utils.ts`: Utility helpers.
- `src/types/index.ts`: Shared type definitions.

## Cleanup summary
- Removed legacy `tailwind-plus/`, `Awards/`, `Photos/`, `dist/`, and unused root assets.
- `package.json` dependencies were pruned to the packages actually imported by the active app.
- `README.md` updated to reflect a cleaned production-ready application.
