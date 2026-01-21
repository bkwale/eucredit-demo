# Deploy to Vercel (5 minutes)

## Quick Setup

The project is ready to deploy to Vercel. Here's how:

### Option 1: Via GitHub (Recommended)

1. **Push to GitHub:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/eucredit-demo.git
git branch -M main
git push -u origin main
```

2. **Deploy on Vercel:**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Select your GitHub repository
- Click "Import"
- Vercel auto-detects the Vite configuration
- Click "Deploy"

3. **Done!** Your app is live at `https://eucredit-demo.vercel.app`

### Option 2: Via Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel will:
- Detect it's a Vite project
- Build automatically
- Deploy to a live URL

### Option 3: Drag & Drop

1. Build locally: `npm run build`
2. Go to [vercel.com](https://vercel.com/import)
3. Drag and drop the `dist/` folder
4. Done!

---

## Your Deployment URL

Once deployed, share this URL with your team:
```
https://eucredit-demo.vercel.app
```

## Auto-Deployments

Every time you push to GitHub, Vercel automatically redeploys. No extra steps needed!

## Environment Variables

Currently, no environment variables are needed. This is a fully static demo.

## Need Help?

- Vercel docs: https://vercel.com/docs
- Vite docs: https://vitejs.dev/
