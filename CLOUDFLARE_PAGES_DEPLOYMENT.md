# ⚠️ CLOUDFLARE PAGES DEPLOYMENT GUIDE

## CRITICAL: This is NOT a Cloudflare Worker Project

This is a **Vite + React Static SPA** that deploys to **Cloudflare Pages**, not Workers.

---

## ❌ WHAT WENT WRONG

You ran:
```bash
npx wrangler deploy
```

**Error message**: "Warning: It seems that you have run wrangler deploy on a Pages project"

**Reason**: `wrangler deploy` is for **Cloudflare Workers** (serverless functions). This project is a **static website** that needs **Cloudflare Pages** (static site hosting).

---

## ✅ CORRECT DEPLOYMENT PATHS

### Path 1: GitHub Integration (RECOMMENDED) ⭐

**Best for**: Automatic deployments on every push

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. **Workers & Pages** → **Create Application** → **Pages** → **Connect to Git**
3. Select: `naren092104-ai/port` repository
4. Branch: `main`
5. **Build Settings**:
   - Framework preset: `None` (or auto-detect)
   - Build command: `npm install && npm run build`
   - Build output directory: `dist`
   - Node.js version: `20` (or 18+)
6. Click **Save and Deploy**
7. ✅ Done! Site automatically deploys on every push to main

---

### Path 2: Manual Deployment (CLI)

**Best for**: One-time deployments or testing

```bash
# Build the project
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist
```

This uploads the `dist/` folder to Cloudflare Pages.

---

### Path 3: Automated CLI Deployment

Add to `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && npx wrangler pages deploy dist"
  }
}
```

Then run:
```bash
npm run deploy
```

---

## ❌ COMMANDS TO AVOID

| Command | ❌ Why NOT to use | ✅ Use instead |
|---------|-----------------|----------------|
| `wrangler deploy` | This is for Workers, not Pages | `wrangler pages deploy dist` |
| `wrangler publish` | Workers command | Use Cloudflare Dashboard or `wrangler pages deploy` |
| `npm run build && wrangler deploy` | Wrong tool | `npm run build && wrangler pages deploy dist` |

---

## ✅ PROJECT STRUCTURE VERIFICATION

```
✓ Project Type: Vite + React SPA
✓ Build Command: npm run build
✓ Build Output: dist/ directory
✓ Build Status: ✓ Successful (5.41s)
✓ Modules: 2527 transformed
✓ Bundle Size: 470 KB (uncompressed), 152 KB (gzipped)

✓ wrangler.toml: Correct (Pages configuration)
✓ package.json: Correct (no Worker config)
✓ No conflicting wrangler.jsonc file
✓ No broken dependencies
```

---

## ✅ CONFIGURATION CHECKLIST

- [x] Project is Vite + React (NOT Next.js, NOT a Worker)
- [x] Build outputs to `dist/` directory
- [x] `npm run build` completes without errors
- [x] `wrangler.toml` configured for Pages only
- [x] No Worker entry-point in configuration
- [x] No `wrangler.jsonc` file
- [x] `package-lock.json` is clean (npm, not bun)
- [x] No recursive npm scripts

---

## 🚀 RECOMMENDED NEXT STEPS

### Step 1: Use GitHub Integration (Easiest)

1. Push current code to GitHub (already done ✓)
2. Go to Cloudflare Dashboard
3. Connect your repo
4. Configure build settings (see above)
5. Deploy!

### Step 2: Verify Build Works Locally

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

### Step 3: Deploy When Ready

Choose ONE method:
- **GitHub Integration**: Auto-deploys on push
- **CLI**: `npx wrangler pages deploy dist`

---

## 📊 BUILD VERIFICATION RESULTS

```
✓ npm install         → Success
✓ npm run build       → Success (5.41s)
✓ dist/ folder       → Generated with 21 asset bundles
✓ Output size        → 1.5 MB total, 152 KB gzipped

Latest build output:
dist/index.html                    1.41 KB
dist/assets/index-*.css           76.19 KB (gzip: 12.59 KB)
dist/assets/Resume-*.js           431.80 KB (gzip: 139.99 KB)
dist/assets/index-*.js            470.10 KB (gzip: 152.79 KB)
```

---

## 📝 FILE CONFIGURATION REFERENCE

### wrangler.toml

```toml
# ⚠️ CRITICAL: This is a CLOUDFLARE PAGES project, NOT a Worker!
# 
# DO NOT run: wrangler deploy
# DO run instead:
#   1. GitHub integration: Connect repo to Cloudflare Dashboard
#   2. CLI: npx wrangler pages deploy dist

compatibility_date = "2026-06-08"
pages_build_output_dir = "dist"
```

### package.json (Relevant sections)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

### Build Output Directory

```
dist/
├── index.html              ← Entry point
├── assets/
│   ├── *.css              ← Compiled styles
│   ├── *.js               ← Compiled JavaScript
│   └── ...
└── public/
    ├── resume.pdf         ← Assets
    ├── photos/
    └── logos/
```

---

## ⚡ QUICK START

### Option A: GitHub (Recommended)
```
1. Go to https://dash.cloudflare.com
2. Workers & Pages → Pages → Connect to Git
3. Select repo: naren092104-ai/port
4. Build command: npm install && npm run build
5. Output directory: dist
6. Click Save and Deploy
```

### Option B: CLI
```bash
npm run build
npx wrangler pages deploy dist
```

---

## ✅ WHAT CHANGED

- ✅ Removed ambiguous `name` field from `wrangler.toml`
- ✅ Added clear "DO NOT use wrangler deploy" warning
- ✅ Verified npm install works
- ✅ Verified npm run build works
- ✅ Confirmed dist/ is generated correctly
- ✅ Updated this deployment guide

---

## 🆘 TROUBLESHOOTING

### Build fails with "Module not found"
```bash
rm -r node_modules package-lock.json
npm install
npm run build
```

### Port 8080 already in use
```bash
npm run dev -- --port 3000
```

### GitHub deployment not working
1. Verify build settings in Cloudflare Dashboard
2. Check: Build command = `npm install && npm run build`
3. Check: Output directory = `dist`
4. Check: Repository is public or you have access

### Still getting Worker errors
- **DO NOT** use `wrangler deploy`
- **DO** use `wrangler pages deploy dist`
- **OR** use GitHub integration (recommended)

---

## 📞 SUPPORT LINKS

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

---

**You are now ready to deploy on Cloudflare Pages!** ✅
