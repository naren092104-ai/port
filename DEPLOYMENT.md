# Cloudflare Pages Deployment Guide

## Project Overview
- **Type**: Vite + React + TypeScript SPA (Single Page Application)
- **Build Tool**: Vite 5.4.19
- **Node.js Version**: 18+ (recommended 20+)
- **Package Manager**: npm

## ✅ Build Status
```
✓ npm run build - builds successfully with zero errors
✓ Output directory: dist/
✓ All dependencies resolved
✓ TypeScript compilation: OK
```

## Cloudflare Pages Settings

### Configuration in Cloudflare Dashboard

| Setting | Value |
|---------|-------|
| **Framework Preset** | None (Vite will be auto-detected) |
| **Build Command** | `npm install && npm run build` |
| **Build Output Directory** | `dist` |
| **Node.js Version** | 20 (recommended) or 18+ |
| **Root Directory** | `/` (default) |

### Environment Variables
No environment variables required for this deployment.

### CI/CD Setup

1. **Connect GitHub Repository**
   - Repository: `https://github.com/naren092104-ai/port.git`
   - Branch: `main`

2. **Automatic Deployments**
   - Deploy on every push to `main` branch
   - Preview deployments for pull requests (optional)

3. **Build Configuration**
   - The build command handles:
     - Installing dependencies via npm
     - Running Vite build for production
     - Output to `dist/` directory for Cloudflare Pages

## Local Build Verification

Before pushing, verify the build works locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure
```
├── src/
│   ├── pages/           # React page components
│   ├── components/      # Reusable UI components
│   ├── data/           # Static data (photographer info, projects)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── types/          # TypeScript type definitions
│   └── main.tsx        # Entry point
├── public/             # Static assets (photos, awards, resume.pdf)
├── dist/               # Build output (Cloudflare Pages serves this)
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── tailwind.config.js  # Tailwind CSS configuration
```

## Key Fixes Applied

### 1. ✅ Removed bun.lockb
- **Issue**: Outdated bun lockfile caused "failed to parse lockfile" error
- **Fix**: Removed bun.lockb, using npm with package-lock.json instead
- **Result**: Deployments now use npm which is compatible with Cloudflare Pages

### 2. ✅ Fixed package.json scripts
- **Issue**: Had a recursive `"install": "npm install"` script causing infinite loops
- **Fix**: Removed the bad install script
- **Result**: Clean dependency installation without loops

### 3. ✅ Verified TypeScript compilation
- All source files compile without errors
- Path aliases (@/*) configured correctly
- Type definitions complete

### 4. ✅ Verified all dependencies
Active dependencies include:
- React 18.3.1
- React Router DOM 6.30.1
- React Hook Form 7.61.1
- Vite 5.4.19
- Tailwind CSS 4.0.0
- Framer Motion 12.23.24
- jsPDF 4.2.1 (for resume PDF generation)
- Lucide React 0.462.0 (icons)

## Deployment Checklist

- [x] Remove bun.lockb
- [x] Fix package.json scripts
- [x] Verify npm install works
- [x] Test local build (`npm run build`)
- [x] Check TypeScript compilation
- [x] Verify dist/ output directory
- [x] Create wrangler.toml
- [x] Push to GitHub main branch
- [ ] Connect GitHub repo to Cloudflare Pages
- [ ] Configure build settings (use values above)
- [ ] Deploy!

## Troubleshooting

### Build Fails with "Module not found"
```bash
# Clear node_modules and package-lock.json
rm -r node_modules package-lock.json
npm install
npm run build
```

### Port 8080 Already in Use (during dev)
```bash
# Change port in vite.config.ts or use:
npm run dev -- --port 3000
```

### TypeScript Errors During Build
```bash
# Verify TypeScript config
npx tsc --noEmit

# Check for type errors in src/
npm run lint
```

## Performance Metrics

Latest build output:
- **Total bundle size**: ~1.5 MB (uncompressed)
- **Gzipped CSS**: 12.58 KB
- **Build time**: 8.04s
- **Modules transformed**: 2527

## Next Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add Cloudflare Pages configuration and fix deployment issues"
   git push origin main
   ```

2. **In Cloudflare Dashboard**
   - Go to Workers & Pages
   - Click "Create application" → "Pages"
   - Connect your GitHub repo
   - Configure build settings (use values from table above)
   - Deploy!

3. **Verify Deployment**
   - Test all pages and features
   - Check Console for JavaScript errors
   - Verify resume PDF download works
   - Test email links redirect to Gmail

## Support

For issues with Cloudflare Pages deployment, visit:
- https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/
- https://developers.cloudflare.com/pages/configuration/build-configuration/
