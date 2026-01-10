# Deployment Guide: Cloudflare Pages + Sanity CMS

This guide shows you how to deploy your iOS developer portfolio to Cloudflare Pages with Sanity.io as your CMS.

## 🏗️ Architecture Overview

```
┌─────────────────────┐
│  Cloudflare Pages   │  ← Your React frontend (static build)
│  (your-site.pages.dev)│
└──────────┬──────────┘
           │
           │ Fetches data from ↓
           │
┌──────────▼──────────┐
│   Sanity CDN        │  ← Content delivery network
│  (Fast, global)     │
└──────────┬──────────┘
           │
           │ Managed via ↓
           │
┌──────────▼──────────┐
│  Sanity Studio      │  ← Your CMS dashboard
│ (your-project.sanity.studio)│
└─────────────────────┘
```

## 📋 Prerequisites

- ✅ Sanity project set up (see SANITY_SETUP_GUIDE.md)
- ✅ GitHub account
- ✅ Cloudflare account (free tier works!)
- ✅ Your code in a Git repository

## 🚀 Step 1: Prepare Your Code

### 1.1 Environment Variables

Create `/app/frontend/.env.production`:

```env
REACT_APP_SANITY_PROJECT_ID=your-project-id
REACT_APP_SANITY_DATASET=production
REACT_APP_BACKEND_URL=not-needed-with-sanity
```

### 1.2 Update Build Configuration

Your `package.json` already has the correct build scripts:

```json
{
  "scripts": {
    "build": "craco build"
  }
}
```

### 1.3 Test Local Build

```bash
cd /app/frontend
yarn build
```

This creates a `build` folder with your static files.

## 🔧 Step 2: Set Up Cloudflare Pages

### 2.1 Push to GitHub

```bash
cd /app
git init
git add .
git commit -m "Initial commit: iOS Developer Portfolio"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2.2 Create Cloudflare Pages Project

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click "Pages" in the left sidebar
3. Click "Create a project"
4. Click "Connect to Git"
5. Select your repository
6. Configure build settings:

```yaml
Production branch: main
Build command: cd frontend && yarn install && yarn build
Build output directory: frontend/build
Root directory: /
```

### 2.3 Add Environment Variables

In Cloudflare Pages settings, add:

```
REACT_APP_SANITY_PROJECT_ID = your-sanity-project-id
REACT_APP_SANITY_DATASET = production
```

### 2.4 Deploy!

Click "Save and Deploy" - your site will be live in ~2 minutes!

## 🎨 Step 3: Deploy Sanity Studio

### 3.1 Option A: Deploy to Sanity Cloud (Recommended)

```bash
cd /app/studio
npx sanity deploy
```

Choose a hostname (e.g., `your-portfolio-cms`)
Your studio will be at: `https://your-portfolio-cms.sanity.studio`

### 3.2 Option B: Deploy to Cloudflare Pages

1. Create a separate GitHub repository for your studio
2. Push `/app/studio` to it
3. In Cloudflare Pages, create a new project:

```yaml
Build command: yarn build
Build output directory: dist
```

## 🔒 Step 4: Configure CORS

In [Sanity Management](https://www.sanity.io/manage):

1. Select your project
2. Go to "API" → "CORS Origins"
3. Add these origins:

```
http://localhost:3000
https://your-site.pages.dev
https://your-custom-domain.com (if you have one)
```

## 🌐 Step 5: Add Custom Domain (Optional)

### In Cloudflare Pages:

1. Go to your Pages project
2. Click "Custom domains"
3. Click "Set up a custom domain"
4. Add your domain (e.g., `xdmgzdev.com`)
5. Cloudflare will automatically configure DNS

## 🔄 Step 6: Enable Automatic Deployments

### For Frontend:
✅ Automatic - Cloudflare Pages deploys on every push to `main`

### For Content Updates:
✅ Automatic - Sanity CDN updates when you publish changes

### Trigger Manual Rebuild:
```bash
# In your Cloudflare Pages dashboard
# Click "Create deployment" → "Retry deployment"
```

## 📊 Step 7: Monitor Performance

### Cloudflare Analytics
- Go to your Pages project → "Analytics"
- Track visitors, performance, and bandwidth

### Sanity Analytics
- Go to Sanity dashboard
- Monitor API usage and asset delivery

## 🎯 Content Management Workflow

### Daily Workflow:

1. **Edit Content**:
   - Open `https://your-portfolio-cms.sanity.studio`
   - Edit projects, skills, or personal info
   - Click "Publish"

2. **See Changes**:
   - Changes appear in 30-60 seconds (CDN cache)
   - No rebuild or redeployment needed!

3. **Add New Project**:
   - Create new project in Sanity Studio
   - Upload abstract image
   - Add details
   - Publish
   - Instantly visible on your site!

## 🐛 Troubleshooting

### Build Fails on Cloudflare Pages

**Problem**: "Module not found" or build errors

**Solution**:
```bash
# Make sure all dependencies are in package.json
cd /app/frontend
yarn install
yarn build # Test locally first
```

### Content Not Showing

**Problem**: Fetching from Sanity returns empty

**Solutions**:
1. Check environment variables in Cloudflare Pages
2. Verify CORS settings in Sanity
3. Make sure content is published (not draft)
4. Check browser console for errors

### Images Not Loading

**Problem**: Sanity images return 404

**Solutions**:
1. Verify images are uploaded in Sanity Studio
2. Check image URL generation in code
3. Clear Cloudflare cache

### Studio Not Accessible

**Problem**: Sanity Studio shows blank page

**Solutions**:
1. Check `sanity.config.js` has correct project ID
2. Verify deployment completed successfully
3. Clear browser cache

## 🚀 Performance Optimization

### Cloudflare Pages Optimizations:

1. **Enable Auto Minify**:
   - Dashboard → Speed → Optimization
   - Enable Auto Minify for JS, CSS, HTML

2. **Enable Brotli**:
   - Enabled by default on Cloudflare

3. **Image Optimization**:
   - Sanity automatically optimizes images
   - Use `urlFor().width(800).quality(80)` for different sizes

### Sanity Optimizations:

1. **Use CDN**:
   ```javascript
   const client = createClient({
     useCdn: true, // ← Enable this
   })
   ```

2. **Optimize Queries**:
   ```javascript
   // Only fetch what you need
   *[_type == "project"] {
     title,
     description,
     image
     // Don't fetch _id, _rev if not needed
   }
   ```

3. **Image Transformations**:
   ```javascript
   urlFor(image)
     .width(800)    // Resize
     .quality(80)   // Compress
     .format('webp') // Modern format
     .url()
   ```

## 📈 Scaling Considerations

### Free Tier Limits:

**Cloudflare Pages:**
- ✅ 500 builds/month
- ✅ Unlimited bandwidth
- ✅ Unlimited requests
- ✅ Perfect for portfolios!

**Sanity:**
- ✅ 3 users
- ✅ 100k API requests/month
- ✅ 5GB assets
- ✅ 50GB bandwidth
- ✅ More than enough for personal portfolio!

### Upgrade Triggers:
- Only if you get 100k+ monthly visitors
- Or need more than 3 CMS users
- Or store massive amounts of images

## 🔐 Security Best Practices

1. **Environment Variables**:
   - Never commit `.env` files to Git
   - Use Cloudflare Pages environment variables

2. **Sanity API Token**:
   - Only needed for write operations
   - Not needed for public portfolio

3. **CORS Configuration**:
   - Only allow your domains
   - Don't use `*` wildcard

## 🎉 Final Checklist

Before going live:

- [ ] All content added to Sanity
- [ ] Images uploaded and optimized
- [ ] Environment variables configured
- [ ] CORS settings correct
- [ ] Custom domain configured (optional)
- [ ] Test on mobile devices
- [ ] Test in different browsers
- [ ] Check performance with Lighthouse
- [ ] Set up Google Analytics (optional)
- [ ] Share your portfolio! 🚀

## 📞 Getting Help

- **Cloudflare Community**: https://community.cloudflare.com/
- **Sanity Discord**: https://slack.sanity.io/
- **Documentation**:
  - [Cloudflare Pages](https://developers.cloudflare.com/pages/)
  - [Sanity Docs](https://www.sanity.io/docs)

## 🎯 Next Steps After Deployment

1. ✅ Share your portfolio URL on LinkedIn
2. ✅ Add to GitHub README
3. ✅ Update business cards
4. ✅ Submit to portfolio showcases
5. ✅ Keep content updated via Sanity Studio

---

**Congratulations! Your portfolio is now live and manageable without touching code!** 🎊

Any content changes can be made through Sanity Studio - no redeployment needed!
