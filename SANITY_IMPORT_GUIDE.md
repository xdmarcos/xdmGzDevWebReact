# Quick Start: Import Data to Sanity.io

This guide shows you how to import all your portfolio content (English + Spanish) to Sanity.io.

## Prerequisites

1. **Sanity account** - Sign up at [sanity.io](https://www.sanity.io/login/sign-up)
2. **Node.js 18+** - [Download](https://nodejs.org/)
3. **Sanity CLI** - Install with: `npm install -g @sanity/cli`

---

## Step 1: Create Your Sanity Project

```bash
# Login to Sanity
sanity login

# Navigate to the studio folder
cd studio

# Initialize your project (creates a new Sanity project)
sanity init --reconfigure
```

When prompted:
- **Select project:** Create new project
- **Project name:** xdmgzdev-portfolio
- **Dataset:** Yes (use default 'production')

**Write down your Project ID!** (shown after initialization)

---

## Step 2: Get an API Token

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Click on your project
3. Go to **API** → **Tokens**
4. Click **Add API token**
5. Set:
   - Name: `Import Token`
   - Permissions: `Editor`
6. Click **Save** and **copy the token**

---

## Step 3: Configure Environment

Create a `.env` file in the `/studio` folder:

```bash
cd studio
cp .env.example .env
```

Edit `.env` with your values:
```
SANITY_PROJECT_ID=abc123xyz
SANITY_WRITE_TOKEN=skRW1a2b3c4d5e...
```

---

## Step 4: Run the Import

```bash
cd studio
node importMockData.cjs
```

**Expected output:**
```
╔════════════════════════════════════════════════════════════╗
║     SANITY.IO BILINGUAL DATA IMPORT                        ║
║     xdmGzDev Portfolio - English & Spanish                 ║
╚════════════════════════════════════════════════════════════╝

📌 Project ID: abc123xyz
📌 Dataset: production

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 PERSONAL INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ✅ Name: xdmGzDev
   ✅ Title (EN): Senior iOS Engineer
   ✅ Title (ES): Ingeniero Senior de iOS
   ...

╔════════════════════════════════════════════════════════════╗
║     🎉 IMPORT COMPLETED SUCCESSFULLY!                      ║
╚════════════════════════════════════════════════════════════╝
```

---

## Step 5: Upload Project Images

1. Open Sanity Studio:
   ```bash
   cd studio
   sanity dev
   ```
   Or visit your deployed studio at `https://your-studio.sanity.studio`

2. Go to **Projects**
3. Click on each project
4. Upload an image in the **Project Image** field
5. Click **Publish**

---

## Step 6: Connect Your Frontend

Update `frontend/.env.local`:

```bash
REACT_APP_SANITY_PROJECT_ID=abc123xyz
REACT_APP_USE_SANITY=true
```

---

## What Gets Imported

| Content | English | Spanish |
|---------|---------|---------|
| **Personal Info** | name, title, description, about, cloudTags, highlights | titleEs, descriptionEs, aboutContentEs, cloudTagsEs, highlightsEs |
| **Contact Info** | title, subtitle, services | titleEs, subtitleEs, servicesEs |
| **Skills (15)** | name, years, category, description | descriptionEs |
| **Projects (6)** | title, description, features, metrics | descriptionEs, featuresEs, metricsEs |

---

## Troubleshooting

### "SANITY_PROJECT_ID is not set"
- Make sure `.env` file exists in `/studio` folder
- Check the file contains `SANITY_PROJECT_ID=your-id`

### "SANITY_WRITE_TOKEN is not set"
- Get a token from sanity.io/manage → API → Tokens
- Make sure token has "Editor" permissions

### "Permission denied"
- Your token might have "Viewer" instead of "Editor" permissions
- Create a new token with "Editor" access

### Import runs but site still shows mock data
- Change `REACT_APP_USE_SANITY=true` in frontend/.env.local
- Restart the frontend: `npm start`

---

## Need to Re-import?

The script automatically deletes existing data before importing. Just run:
```bash
cd studio
node importMockData.cjs
```
