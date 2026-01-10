# xdmGzDev Portfolio Website - Product Requirements Document

## Original Problem Statement
Build a modern, responsive portfolio website for a Senior iOS Engineer, "xdmGzDev".

## Core Requirements
- **Design:** Clean, modern dark theme with subtle blue/teal accents, inspired by xdmgz.dev
- **Skills Display:** Use "years of experience" instead of percentage-based ratings
- **Content Management:** CMS-powered content via Sanity.io
- **Bilingual Support:** Full English and Spanish translations
- **Contact Form:** Working form with Web3Forms integration
- **Deployment Ready:** Prepared for Cloudflare Pages deployment

## User Personas
- **Primary User:** xdmGzDev (site owner) - manages content via Sanity CMS
- **Target Audience:** Potential clients, recruiters, and collaborators viewing the portfolio

## Tech Stack
- **Frontend:** React + TailwindCSS + Shadcn UI
- **CMS:** Sanity.io (headless)
- **Data Strategy:** Hybrid mock/live system (toggle via `REACT_APP_USE_SANITY`)
- **Form Backend:** Web3Forms (configured, endpoint needed)

---

## What's Been Implemented

### Completed Features (Dec 2025)
- [x] Full responsive React portfolio with dark theme
- [x] Hero section with animated content
- [x] About section with highlight cards and dynamic tag cloud
- [x] Skills section with "years of experience" cards (not percentages)
- [x] Projects section with 6 sample projects and modal details
- [x] Contact section with working form layout
- [x] Language toggle (EN/ES) in navigation
- [x] Sanity.io schema setup for all content types
- [x] **Full bilingual support for ALL sections** (Jan 2026)
  - Hero: title, description
  - About: content, highlights (title + description), cloudTags
  - Skills: all descriptions
  - Projects: descriptions, features, metrics
  - Contact: all form labels & services
  - Mock data and Sanity schemas both updated with Spanish fields

### File Structure
```
/app
├── frontend/
│   ├── src/
│   │   ├── components/   # About, Contact, Hero, Projects, Skills, Navigation
│   │   ├── sanity/       # Sanity client and GROQ queries
│   │   ├── mock.js       # All mock data with EN/ES translations
│   │   └── App.js
│   └── .env.local        # REACT_APP_USE_SANITY=false (using mock data)
├── studio/               # Sanity.io project
│   ├── schemaTypes/      # personalInfo, contactInfo, skill, project schemas
│   └── import-data.sh    # Data import script
└── /docs
    ├── SANITY_SETUP_GUIDE.md
    ├── DEPLOYMENT_GUIDE.md
    └── CONTACT_FORM_SETUP.md
```

---

## Pending Tasks (Prioritized)

### P1 - Contact Form Finalization
- **Status:** Form UI built, needs endpoint configuration
- **Action:** User provides Web3Forms endpoint URL
- **File:** `/app/frontend/.env.local` → add `REACT_APP_FORM_ENDPOINT`

### P2 - Sanity.io Production Setup
- **Status:** Schemas ready, mock data complete
- **Action:** User follows `SANITY_SETUP_GUIDE.md` to:
  1. Create Sanity project
  2. Configure project ID in frontend
  3. Import mock data using provided script
  4. Set `REACT_APP_USE_SANITY=true`

### P3 - Cloudflare Pages Deployment
- **Status:** Guide created (`DEPLOYMENT_GUIDE.md`)
- **Action:** User deploys when ready

---

## Environment Configuration

### Current Settings (`/app/frontend/.env.local`)
```
REACT_APP_USE_SANITY=false  # Using mock data
REACT_APP_SANITY_PROJECT_ID=your-project-id
REACT_APP_SANITY_DATASET=production
REACT_APP_FORM_ENDPOINT=    # Needs Web3Forms endpoint
```

### Sanity Schemas
- `personalInfo`: name, title, description, aboutContent/Es, highlights, cloudTags/Es
- `contactInfo`: title/Es, subtitle/Es, services/Es, formEndpoint
- `skill`: name, years, category, description/Es
- `project`: title, description/Es, features/Es, technologies, metrics/Es, image

---

## Notes
- The app currently runs with mock data - no Sanity connection required
- All Web3Forms integration is ready, just needs the endpoint URL
- Spanish translations verified working across all sections (Jan 2026)
