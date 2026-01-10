# Sanity.io CMS Setup Guide

This guide will help you set up Sanity.io as a headless CMS for your iOS developer portfolio.

## 📋 Prerequisites

- Node.js 18+ installed
- A Sanity.io account (free tier available)
- Your portfolio code ready

## 🚀 Quick Setup (5 minutes)

### Step 1: Create a Sanity Project

```bash
cd /app/studio
npx sanity@latest init
```

You'll be asked:
1. **Login/Create account** - Use GitHub, Google, or email
2. **Create new project** - Yes
3. **Project name** - "iOS Developer Portfolio" (or any name)
4. **Use default dataset configuration?** - Yes
5. **Project output path** - Press Enter (use current directory)
6. **Select project template** - Choose "Clean project with no predefined schemas"

After this, you'll get a **Project ID** - copy this!

### Step 2: Configure Your Project

1. Open `/app/studio/sanity.config.js`
2. Replace `YOUR_PROJECT_ID` with your actual project ID:

```javascript
projectId: 'abc123xyz', // Your project ID here
```

3. Create `/app/frontend/.env.local` and add:

```env
REACT_APP_SANITY_PROJECT_ID=abc123xyz
REACT_APP_SANITY_DATASET=production
```

### Step 3: Start Sanity Studio

```bash
cd /app/studio
yarn dev
```

Sanity Studio will open at `http://localhost:3333`

### Step 4: Add Your Content

#### 4.1 Personal Information
1. In Sanity Studio, go to "Personal Information"
2. Click "Create new"
3. Fill in:
   - Name: xdmGzDev
   - Professional Title: Senior iOS Engineer
   - Description: Crafting exceptional mobile experiences...
   - Email: xdmgzdev@gmail.com
   - GitHub: github.com/xdmgzdev
   - LinkedIn: linkedin.com/in/xdmgzdev
   - About Me Content: (Your about content)
   - About Me Content (Spanish): (Spanish translation)
4. Click "Publish"

#### 4.2 Skills
For each skill, click "Skill" → "Create new":

Example entries:
- Name: Swift, Level: 98, Category: Languages, Order: 1
- Name: SwiftUI, Level: 95, Category: Frameworks, Order: 2
- Name: UIKit, Level: 92, Category: Frameworks, Order: 3

Add all 15 skills from your mock data.

#### 4.3 Projects
For each project, click "Project" → "Create new":

1. **FinanceFlow Pro**:
   - Title: FinanceFlow Pro
   - Description: A comprehensive financial management app...
   - Image: Upload your abstract image
   - Features: (Add as array items)
     - Real-time stock market data
     - Biometric authentication
     - AI investment recommendations
     - Multi-currency support
     - Interactive charts with animations
   - Technologies: Swift, SwiftUI, Combine, Core Data, Firebase, Charts API
   - Metrics: 1.5M+ downloads, 4.7★ App Store rating
   - Order: 1
   - Featured: Yes

Repeat for all 6 projects.

### Step 5: Update Frontend to Use Sanity

The frontend is already configured to fetch from Sanity! You just need to enable it.

Replace the content fetching in your components to use Sanity data.

## 🔄 Using Mock Data vs Sanity Data

### Current State (Mock Data)
Your app currently uses `/app/frontend/src/mock.js` for data.

### Switching to Sanity
Once you've added content to Sanity, update your components to fetch from Sanity instead of mock data.

Example in `/app/frontend/src/components/Portfolio.jsx`:

```javascript
import { client } from '../sanity/client';
import { projectsQuery, skillsQuery, personalInfoQuery } from '../sanity/queries';
import { urlFor } from '../sanity/client';

// Fetch data on component mount
useEffect(() => {
  async function fetchData() {
    const personalData = await client.fetch(personalInfoQuery);
    const skillsData = await client.fetch(skillsQuery);
    const projectsData = await client.fetch(projectsQuery);
    
    setPersonalInfo(personalData);
    setSkills(skillsData);
    setProjects(projectsData);
  }
  
  fetchData();
}, []);
```

## 📦 Deploying Sanity Studio

### Option 1: Deploy to Sanity's Cloud (Recommended)

```bash
cd /app/studio
npx sanity deploy
```

You'll get a URL like: `https://your-project.sanity.studio`

### Option 2: Self-host on Vercel/Netlify

Build the studio:
```bash
cd /app/studio
yarn build
```

Deploy the `dist` folder to any static hosting service.

## 🌐 Deploying Frontend to Cloudflare Pages

1. **Build your frontend**:
```bash
cd /app/frontend
yarn build
```

2. **In Cloudflare Pages Dashboard**:
   - Connect your Git repository
   - Build command: `yarn build`
   - Build output directory: `build`
   - Environment variables:
     - `REACT_APP_SANITY_PROJECT_ID`: your-project-id
     - `REACT_APP_SANITY_DATASET`: production

3. **Deploy** - Cloudflare will build and deploy automatically!

## 🔒 CORS Settings

Sanity Studio needs to allow your domain. Add your Cloudflare Pages URL:

1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to "API" → "CORS Origins"
4. Add:
   - `http://localhost:3000` (for development)
   - `https://your-site.pages.dev` (your Cloudflare Pages URL)

## 📝 Managing Content

### Adding a New Project
1. Open Sanity Studio
2. Go to "Project"
3. Click "Create new"
4. Fill in all fields
5. Upload image
6. Set display order
7. Click "Publish"

Your website updates automatically (CDN refresh ~60 seconds)!

### Editing Skills
1. Open Sanity Studio
2. Find the skill you want to edit
3. Update the level or any other field
4. Click "Publish"

### Changing Personal Info
1. Open Sanity Studio
2. Go to "Personal Information"
3. Edit any field
4. Click "Publish"

## 🎨 Image Guidelines

### Project Images
- **Recommended size**: 1200x800px
- **Format**: JPG or PNG
- **File size**: < 500KB
- **Style**: Abstract, colorful, relevant to project theme

Sanity automatically optimizes and serves images via CDN!

## 🐛 Troubleshooting

### "Project ID not found"
- Make sure you've updated `sanity.config.js` with your project ID
- Check that `.env.local` has the correct project ID

### "CORS error"
- Add your domain to CORS origins in Sanity dashboard
- Include both http://localhost:3000 and your production URL

### "No content showing"
- Make sure you've published (not just saved draft) in Sanity Studio
- Check browser console for errors
- Verify your queries in Sanity Vision tool

## 🚀 Next Steps

1. ✅ Complete Sanity setup
2. ✅ Add all your content
3. ✅ Test locally
4. ✅ Deploy Sanity Studio
5. ✅ Deploy frontend to Cloudflare Pages
6. ✅ Update content anytime via Sanity Studio!

## 📚 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity React Guide](https://www.sanity.io/guides/sanity-and-react)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)

## 💡 Benefits of This Setup

✅ **No Backend Server Needed** - Sanity handles everything
✅ **Free Tier** - Generous limits for personal portfolios
✅ **Real-time Updates** - Content changes appear automatically
✅ **Beautiful CMS** - Easy-to-use interface for managing content
✅ **CDN-Powered** - Fast loading worldwide
✅ **Perfect for Cloudflare Pages** - Static build, no server needed
✅ **Version Control** - Track all changes to your content

---

Need help? The Sanity community is very active on [Discord](https://slack.sanity.io/)!
