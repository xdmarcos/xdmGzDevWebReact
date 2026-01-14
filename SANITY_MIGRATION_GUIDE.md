# Sanity Schema Migration Guide

This guide explains how to safely migrate your existing Sanity data to the new schema structure without losing any content.

---

## Overview of Changes

### New Schema Added
- **`projectsSection`** - Manages Projects section title, subtitle, and labels (bilingual)

### Updated Schemas
- **`project`** - Added `projectUrl` field for App Store links
- **`contactInfo`** - Added `formEndpoint` field for dynamic form configuration

---

## Pre-Migration Checklist

Before starting, make sure you have:
- [ ] Access to your Sanity project dashboard ([sanity.io/manage](https://sanity.io/manage))
- [ ] Your Sanity Project ID
- [ ] A Sanity API token with "Editor" permissions
- [ ] Backed up your current content (optional but recommended)

---

## Step 1: Backup Your Current Data (Recommended)

### Option A: Export via Sanity CLI
```bash
cd studio
sanity dataset export production ./backup-$(date +%Y%m%d).tar.gz
```

### Option B: Manual Backup
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to **Datasets** → **production**
4. Click **Export** to download a backup

---

## Step 2: Deploy New Schemas to Sanity

The new schemas need to be deployed to your Sanity project so the Studio recognizes them.

### 2.1 Update Your Local Studio Files

Make sure your `/studio` folder has the latest schema files:

```
studio/
├── schemaTypes/
│   ├── index.js           # Updated to include projectsSection
│   ├── personalInfo.js    # Existing
│   ├── contactInfo.js     # Existing
│   ├── skill.js           # Existing
│   ├── project.js         # Updated (added projectUrl)
│   └── projectsSection.js # NEW
```

### 2.2 Verify Schema Index

Check that `/studio/schemaTypes/index.js` includes all schemas:

```javascript
import personalInfo from './personalInfo'
import skill from './skill'
import project from './project'
import contactInfo from './contactInfo'
import projectsSection from './projectsSection'

export const schemaTypes = [personalInfo, skill, project, contactInfo, projectsSection]
```

### 2.3 Deploy Schema Changes

```bash
cd studio
sanity deploy
```

This updates your Sanity Studio with the new schema definitions.

---

## Step 3: Add New Fields to Existing Documents

Since we're adding new optional fields, your existing data will remain intact. You just need to populate the new fields.

### 3.1 Add `projectUrl` to Existing Projects

1. Open your Sanity Studio
2. Go to **Projects**
3. For each project, add the **Project URL** field:
   - Example: `https://apps.apple.com/app/your-app-name`
4. Click **Publish** for each project

### 3.2 Add `formEndpoint` to Contact Info

1. Go to **Contact Information**
2. Find the **Form Submission Endpoint** field
3. Enter: `https://api.web3forms.com/submit`
4. Click **Publish**

### 3.3 Create Projects Section Document

This is a **new document** that needs to be created:

1. In Sanity Studio, click **+ Create**
2. Select **Projects Section**
3. Fill in all fields:

| Field | English Value | Spanish Value |
|-------|---------------|---------------|
| Section Title | Featured Projects | Proyectos Destacados |
| Section Subtitle | Showcasing my expertise in iOS development through innovative mobile applications | Mostrando mi experiencia en desarrollo iOS a través de aplicaciones móviles innovadoras |
| Features Label | Key Features | Características Clave |
| Technologies Label | Technologies | Tecnologías |
| View Button Label | View on App Store | Ver en App Store |

4. Click **Publish**

---

## Step 4: Verify Data in Sanity Studio

After adding the new fields, verify everything is correct:

### Checklist:
- [ ] **Personal Info**: Has `title`, `titleEs`, `description`, `descriptionEs`, `aboutContent`, `aboutContentEs`, `cloudTags`, `cloudTagsEs`, `highlights` (with bilingual fields)
- [ ] **Contact Info**: Has `title`, `titleEs`, `subtitle`, `subtitleEs`, `services`, `servicesEs`, `formEndpoint`, `email`, `github`, `linkedin`
- [ ] **Projects Section**: Created with all bilingual fields
- [ ] **Each Project**: Has `projectUrl`, `description`, `descriptionEs`, `features`, `featuresEs`, `metrics`, `metricsEs`
- [ ] **Each Skill**: Has `description`, `descriptionEs`

---

## Step 5: Update Frontend Environment

Ensure your Cloudflare Pages has all required environment variables:

| Variable | Value |
|----------|-------|
| `REACT_APP_SANITY_PROJECT_ID` | your-project-id |
| `REACT_APP_SANITY_DATASET` | production |
| `REACT_APP_USE_SANITY` | true |
| `REACT_APP_WEB3FORMS_KEY` | your-web3forms-key |

---

## Step 6: Redeploy Frontend

After updating Sanity data:

```bash
git add .
git commit -m "Update schemas for Sanity migration"
git push
```

Cloudflare Pages will automatically rebuild and deploy.

---

## Step 7: Verify Live Site

Test all sections in both languages:

1. **Hero Section**
   - [ ] Name displays correctly
   - [ ] Title shows in selected language
   - [ ] Description shows in selected language

2. **About Section**
   - [ ] Content shows in selected language
   - [ ] Cloud tags translate correctly
   - [ ] Highlight cards translate correctly

3. **Skills Section**
   - [ ] All skill descriptions translate

4. **Projects Section**
   - [ ] Section title/subtitle translate
   - [ ] Project descriptions translate
   - [ ] Features translate in modal
   - [ ] Metrics translate
   - [ ] "View on App Store" button appears and works
   - [ ] External link icons visible on cards

5. **Contact Section**
   - [ ] Title/subtitle translate
   - [ ] Services list translates
   - [ ] Form labels translate
   - [ ] Form submission works

---

## Alternative: Full Re-Import (Clean Slate)

If you prefer to start fresh or your data is minimal:

### Warning: This will DELETE all existing Sanity data!

```bash
cd studio

# Set your credentials
export SANITY_PROJECT_ID="your-project-id"
export SANITY_WRITE_TOKEN="your-token"

# Run the import script
node importMockData.cjs
```

This will:
1. Delete all existing documents
2. Import fresh data from the mock file
3. Include all bilingual content

After import, you'll need to:
1. Upload images for each project in Sanity Studio
2. Update personal information with your real data
3. Publish all documents

---

## Troubleshooting

### "Unknown document type: projectsSection"
- Run `sanity deploy` to push schema changes to Sanity

### Data not showing on live site
- Check CORS settings in Sanity (add your domain)
- Verify `REACT_APP_USE_SANITY=true` in Cloudflare
- Check browser console for errors

### Spanish translations not working
- Ensure all `*Es` fields are populated in Sanity
- Make sure documents are **Published** (not just saved as drafts)

### Form not submitting
- Check `formEndpoint` is set in Contact Info document
- Verify `REACT_APP_WEB3FORMS_KEY` is set in Cloudflare

---

## Schema Reference

### projectsSection (NEW)
```javascript
{
  title: "Featured Projects",
  titleEs: "Proyectos Destacados",
  subtitle: "...",
  subtitleEs: "...",
  featuresLabel: "Key Features",
  featuresLabelEs: "Características Clave",
  technologiesLabel: "Technologies",
  technologiesLabelEs: "Tecnologías",
  viewButtonLabel: "View on App Store",
  viewButtonLabelEs: "Ver en App Store"
}
```

### project (Updated)
```javascript
{
  // Existing fields...
  projectUrl: "https://apps.apple.com/app/..." // NEW
}
```

### contactInfo (Updated)
```javascript
{
  // Existing fields...
  formEndpoint: "https://api.web3forms.com/submit" // NEW
}
```

---

## Summary

| Step | Action | Time |
|------|--------|------|
| 1 | Backup data (optional) | 2 min |
| 2 | Deploy new schemas | 2 min |
| 3 | Add new fields to documents | 10-15 min |
| 4 | Verify in Sanity Studio | 5 min |
| 5 | Update Cloudflare env vars (if needed) | 2 min |
| 6 | Redeploy frontend | 3 min |
| 7 | Test live site | 5 min |

**Total estimated time: 30-35 minutes**

---

Your portfolio should now be fully dynamic with all content manageable from Sanity Studio in both English and Spanish!
