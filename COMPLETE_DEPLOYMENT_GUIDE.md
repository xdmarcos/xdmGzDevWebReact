# Complete Deployment Guide: Cloudflare Pages + Sanity.io CMS

This guide walks you through deploying your xdmGzDev portfolio to Cloudflare Pages with dynamic content managed by Sanity.io.

**Total Time:** ~30-45 minutes

---

## Table of Contents
1. [Prerequisites](#1-prerequisites)
2. [Part A: Set Up Sanity.io CMS](#part-a-set-up-sanityio-cms)
3. [Part B: Import Your Content to Sanity](#part-b-import-your-content-to-sanity)
4. [Part C: Connect Frontend to Sanity](#part-c-connect-frontend-to-sanity)
5. [Part D: Push Code to GitHub](#part-d-push-code-to-github)
6. [Part E: Deploy to Cloudflare Pages](#part-e-deploy-to-cloudflare-pages)
7. [Part F: Managing Your Content](#part-f-managing-your-content)
8. [Troubleshooting](#troubleshooting)

---

## 1. Prerequisites

Before starting, make sure you have:
- [ ] A GitHub account (free) - [Sign up here](https://github.com/signup)
- [ ] A Cloudflare account (free) - [Sign up here](https://dash.cloudflare.com/sign-up)
- [ ] A Sanity.io account (free) - [Sign up here](https://www.sanity.io/login/sign-up)
- [ ] Node.js installed on your computer (v18+) - [Download here](https://nodejs.org/)

---

## Part A: Set Up Sanity.io CMS

### Step 1: Install Sanity CLI
Open your terminal and run:
```bash
npm install -g @sanity/cli
```

### Step 2: Log in to Sanity
```bash
sanity login
```
This opens a browser window. Log in with your Sanity account.

### Step 3: Initialize Your Sanity Project

Navigate to the studio folder in your project:
```bash
cd /path/to/your/project/studio
```

Then initialize Sanity:
```bash
sanity init --reconfigure
```

You'll be asked several questions:
```
? Select project to use: Create new project
? Your project name: xdmgzdev-portfolio
? Use the default dataset configuration? Yes
? Project output path: (press Enter to keep current)
```

### Step 4: Get Your Project ID

After initialization, Sanity will display your **Project ID**. It looks like this:
```
Project ID: abc123xyz
```

**Write this down!** You'll need it later.

You can also find it in `studio/sanity.config.js`:
```javascript
export default defineConfig({
  projectId: 'abc123xyz',  // <-- This is your Project ID
  dataset: 'production',
  // ...
})
```

### Step 5: Deploy Sanity Studio (Optional but Recommended)

This gives you a web-based admin panel to manage content:
```bash
cd studio
sanity deploy
```

Choose a hostname when prompted (e.g., `xdmgzdev`).

Your Sanity Studio will be available at: `https://xdmgzdev.sanity.studio`

---

## Part B: Import Your Content to Sanity

### Step 1: Get a Sanity API Token

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Click **API** in the left sidebar
4. Click **Tokens** tab
5. Click **Add API token**
6. Configure:
   - **Name:** `Import Token`
   - **Permissions:** `Editor`
7. Click **Save**
8. **Copy the token** (you won't see it again!)

### Step 2: Run the Import Script

Navigate to the studio folder and run:
```bash
cd studio

# Set your token as an environment variable
export SANITY_TOKEN="your-token-here"

# Run the import
node importMockData.cjs
```

**Expected output:**
```
Starting data import to Sanity...
Importing personal info...
Importing contact info...
Importing skills...
Importing projects...
Import completed successfully!
```

### Step 3: Verify the Import

1. Go to your Sanity Studio (either local or deployed)
2. You should see all your content:
   - Personal Information
   - Contact Information
   - Skills (15 items)
   - Projects (6 items)

---

## Part C: Connect Frontend to Sanity

### Step 1: Update Environment Variables

Edit the file `frontend/.env.local`:

```bash
# Sanity Configuration
REACT_APP_SANITY_PROJECT_ID=abc123xyz    # Replace with YOUR Project ID
REACT_APP_SANITY_DATASET=production

# IMPORTANT: Change this to 'true' to use Sanity CMS
REACT_APP_USE_SANITY=true

# Web3Forms (already configured)
REACT_APP_FORM_ENDPOINT=https://api.web3forms.com/submit
REACT_APP_WEB3FORMS_KEY=c94f9c2e-c22e-40e5-9fd3-6725511be632
```

### Step 2: Configure CORS in Sanity

Your frontend needs permission to fetch data from Sanity:

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Click **API** in the left sidebar
4. Click **CORS origins** tab
5. Click **Add CORS origin**
6. Add these origins:
   - `http://localhost:3000` (for local development)
   - `https://your-site.pages.dev` (your Cloudflare Pages URL - add after deployment)

### Step 3: Test Locally

```bash
cd frontend
npm start
```

Visit `http://localhost:3000` - your site should now load content from Sanity!

---

## Part D: Push Code to GitHub

### Step 1: Create a New GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `xdmgzdev-portfolio`
3. Keep it **Public** or **Private** (your choice)
4. **Don't** initialize with README (we have code already)
5. Click **Create repository**

### Step 2: Prepare Your Code

Create a `.gitignore` file in your project root if not exists:
```bash
# Node modules
node_modules/

# Environment files (keep secrets safe!)
.env
.env.local
.env.production

# Build outputs
build/
dist/

# OS files
.DS_Store
Thumbs.db
```

### Step 3: Push to GitHub

```bash
# Navigate to your project root
cd /path/to/your/project

# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - xdmGzDev Portfolio"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/xdmgzdev-portfolio.git

# Push
git push -u origin main
```

---

## Part E: Deploy to Cloudflare Pages

### Step 1: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click **Workers & Pages** in the left sidebar
3. Click **Create application**
4. Select **Pages** tab
5. Click **Connect to Git**

### Step 2: Select Your Repository

1. Authorize Cloudflare to access your GitHub
2. Select your `xdmgzdev-portfolio` repository
3. Click **Begin setup**

### Step 3: Configure Build Settings

Fill in these settings:

| Setting | Value |
|---------|-------|
| **Project name** | `xdmgzdev-portfolio` |
| **Production branch** | `main` |
| **Framework preset** | `Create React App` |
| **Build command** | `cd frontend && npm run build` |
| **Build output directory** | `frontend/build` |
| **Root directory** | `/` (leave empty or `/`) |

### Step 4: Add Environment Variables

Click **Environment variables** and add:

| Variable Name | Value |
|---------------|-------|
| `REACT_APP_SANITY_PROJECT_ID` | `your-project-id` |
| `REACT_APP_SANITY_DATASET` | `production` |
| `REACT_APP_USE_SANITY` | `true` |
| `REACT_APP_FORM_ENDPOINT` | `https://api.web3forms.com/submit` |
| `REACT_APP_WEB3FORMS_KEY` | `c94f9c2e-c22e-40e5-9fd3-6725511be632` |

### Step 5: Deploy!

1. Click **Save and Deploy**
2. Wait for the build to complete (~2-3 minutes)
3. Your site will be live at: `https://xdmgzdev-portfolio.pages.dev`

### Step 6: Add Your Domain to Sanity CORS

1. Go back to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project → **API** → **CORS origins**
3. Add: `https://xdmgzdev-portfolio.pages.dev`
4. If using a custom domain, add that too

---

## Part F: Managing Your Content

### How to Edit Content

1. Go to your Sanity Studio:
   - Local: `http://localhost:3333` (run `cd studio && sanity dev`)
   - Deployed: `https://your-studio.sanity.studio`

2. Edit any content:
   - **Personal Information** - Name, title, about me, highlights
   - **Contact Information** - Title, subtitle, services
   - **Skills** - Add/edit/delete skills
   - **Projects** - Add/edit/delete projects with images

3. Click **Publish** after making changes

4. Your live site updates automatically! (within ~60 seconds)

### How to Add a New Project

1. Open Sanity Studio
2. Click **Projects** in the sidebar
3. Click the **+** button
4. Fill in:
   - Title
   - Description (English)
   - Description Es (Spanish)
   - Features (English array)
   - Features Es (Spanish array)
   - Technologies (array of strings)
   - Metrics (English)
   - Metrics Es (Spanish)
   - Upload an image
5. Click **Publish**

### How to Update Your Site

After changing content in Sanity:
- Changes appear automatically (Sanity has real-time updates)
- No need to redeploy Cloudflare Pages
- Just refresh your browser

For code changes:
1. Make changes locally
2. `git add . && git commit -m "Your message" && git push`
3. Cloudflare automatically rebuilds and deploys

---

## Troubleshooting

### "Failed to fetch" or CORS errors
- Make sure your site URL is added to Sanity CORS origins
- Check that `REACT_APP_SANITY_PROJECT_ID` is correct

### Site shows mock data instead of Sanity data
- Verify `REACT_APP_USE_SANITY=true` in Cloudflare environment variables
- Redeploy the site after adding environment variables

### Build fails on Cloudflare
- Check build command is `cd frontend && npm run build`
- Check build output is `frontend/build`
- Check all environment variables are set

### Images not loading
- Make sure images are uploaded through Sanity Studio
- Check browser console for specific errors

### Contact form not working
- Verify Web3Forms access key is correct
- Check your Web3Forms dashboard for received messages

---

## Quick Reference

| Service | URL |
|---------|-----|
| **Live Site** | `https://xdmgzdev-portfolio.pages.dev` |
| **Sanity Studio** | `https://your-studio.sanity.studio` |
| **Sanity Dashboard** | `https://www.sanity.io/manage` |
| **Cloudflare Dashboard** | `https://dash.cloudflare.com/` |
| **Web3Forms Dashboard** | `https://web3forms.com/` |

---

## Custom Domain (Optional)

To use your own domain (e.g., `xdmgz.dev`):

1. In Cloudflare Pages → your project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain
4. Follow the DNS configuration instructions
5. Add the new domain to Sanity CORS origins

---

**Congratulations!** Your portfolio is now live with a professional CMS backend!

Need help? Check:
- [Sanity Documentation](https://www.sanity.io/docs)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
