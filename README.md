# iOS Developer Portfolio with Sanity CMS

A modern, bilingual iOS developer portfolio built with React and powered by Sanity.io CMS. Perfect for deployment on Cloudflare Pages.

## 🎯 Features

### Portfolio Features
- ✅ **Modern Design**: Dark theme with cyan/teal accents
- ✅ **Bilingual**: English/Spanish support
- ✅ **Responsive**: Mobile-first design
- ✅ **Animated**: Smooth transitions and micro-interactions
- ✅ **Abstract Images**: Modern, non-realistic project visuals
- ✅ **Sections**: Hero, About, Skills (filterable), Projects (modal view), Contact

### CMS Features
- ✅ **Sanity.io Integration**: Headless CMS for content management
- ✅ **No Backend Needed**: Static site with dynamic content
- ✅ **Real-time Updates**: Content changes appear instantly
- ✅ **Image Optimization**: Automatic CDN delivery
- ✅ **Easy Management**: Beautiful studio interface

## 🚀 Quick Start

### Current Status
Your portfolio is **already running** with mock data at `http://localhost:3000`

### To Enable CMS (Optional)

1. **Initialize Sanity** (5 minutes):
   ```bash
   ./setup-sanity.sh
   ```

2. **Update Configuration**:
   - Copy your Project ID from Sanity
   - Update `/app/studio/sanity.config.js`
   - Update `/app/frontend/.env.local`
   - Set `REACT_APP_USE_SANITY=true`

3. **Start Sanity Studio**:
   ```bash
   cd /app/studio
   yarn dev
   ```
   Opens at `http://localhost:3333`

4. **Add Content**: Use the Sanity Studio interface

## 📂 Project Structure

```
/app/
├── frontend/               # React application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Portfolio.jsx      # Main component (CMS-enabled)
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   ├── sanity/        # Sanity integration
│   │   │   ├── client.js  # Sanity client config
│   │   │   └── queries.js # GROQ queries
│   │   └── mock.js        # Mock data (fallback)
│   ├── .env.local         # Environment variables
│   └── package.json
│
├── studio/                # Sanity Studio (CMS)
│   ├── schemaTypes/       # Content schemas
│   │   ├── personalInfo.js
│   │   ├── skill.js
│   │   └── project.js
│   ├── sanity.config.js   # Studio configuration
│   └── package.json
│
├── SANITY_SETUP_GUIDE.md  # Detailed CMS setup
├── DEPLOYMENT_GUIDE.md    # Cloudflare Pages deployment
└── setup-sanity.sh        # Quick setup script
```

## 🔧 Configuration

### Switch Between Mock Data and Sanity CMS

**Using Mock Data (Current Default)**:
```env
# /app/frontend/.env.local
REACT_APP_USE_SANITY=false
```

**Using Sanity CMS (After Setup)**:
```env
# /app/frontend/.env.local
REACT_APP_SANITY_PROJECT_ID=your-project-id
REACT_APP_SANITY_DATASET=production
REACT_APP_USE_SANITY=true
```

## 🌐 Deployment

### Cloudflare Pages Deployment

1. Push to GitHub
2. Connect to Cloudflare Pages
3. Configure:
   ```yaml
   Build command: cd frontend && yarn install && yarn build
   Build output: frontend/build
   ```
4. Add environment variables
5. Deploy!

**Full guide**: See `DEPLOYMENT_GUIDE.md`

## 📖 Documentation

- **`SANITY_SETUP_GUIDE.md`** - Complete CMS setup (5 minutes)
- **`DEPLOYMENT_GUIDE.md`** - Cloudflare Pages deployment
- **Sanity Docs**: https://www.sanity.io/docs
- **Cloudflare Docs**: https://developers.cloudflare.com/pages/

## 🎨 Content Management

### Option 1: Edit Mock Data (No CMS)
Edit `/app/frontend/src/mock.js` for personal info, skills, and projects

### Option 2: Use Sanity Studio (With CMS)
1. Set up Sanity (see `SANITY_SETUP_GUIDE.md`)
2. Manage content at `http://localhost:3333`
3. Publish changes - they appear instantly!

## 🛠️ Development

```bash
# Frontend
cd /app/frontend
yarn start          # http://localhost:3000

# Sanity Studio (after setup)
cd /app/studio
yarn dev            # http://localhost:3333
```

## ✨ What's Included

### 6 Sample iOS Projects
1. **FinanceFlow Pro** - Financial management app
2. **HealthTrack Elite** - Health & fitness tracker
3. **ShopSphere** - E-commerce platform
4. **LearnHub Academy** - Educational app
5. **TravelMate Navigator** - Travel companion
6. **MindfulSpace** - Meditation app

### 15 iOS Skills
Swift, SwiftUI, UIKit, Combine, Core Data, CloudKit, Firebase, REST APIs, GraphQL, Xcode, Git, Fastlane, TestFlight, MVVM, Clean Architecture

### Bilingual Support
Complete English and Spanish translations included

## 🚀 Quick Commands

```bash
# Run setup script
./setup-sanity.sh

# Start frontend
cd frontend && yarn start

# Start Sanity Studio
cd studio && yarn dev

# Build for production
cd frontend && yarn build

# Deploy Sanity Studio
cd studio && npx sanity deploy
```

## 🎯 Use Cases

1. **Personal Portfolio**: Deploy quickly with mock data
2. **Client Project**: Set up CMS for easy client updates
3. **Agency Template**: Reuse for multiple clients

## 📞 Support

- Sanity: https://slack.sanity.io/
- Cloudflare: https://community.cloudflare.com/
- React: https://react.dev/

---

**Current Status**: ✅ Portfolio live with mock data | 📝 CMS ready to configure

**Next Step**: Follow `SANITY_SETUP_GUIDE.md` to enable content management
