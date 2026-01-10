# Import Mock Data to Sanity

This guide shows you how to automatically import all your mock data into Sanity.io.

## 🚀 Quick Start (5 minutes)

### Step 1: Get Your Sanity Project Ready

```bash
cd /app/studio
npx sanity init  # If you haven't already
```

Note your **Project ID** from the output.

### Step 2: Get a Write Token

1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to **API** → **Tokens**
4. Click **Add API token**
   - Name: "Import Script"
   - Permissions: **Editor** or **Administrator**
5. Copy the token

### Step 3: Configure Environment

Create `/app/studio/.env`:

```env
SANITY_PROJECT_ID=your-project-id
SANITY_WRITE_TOKEN=your-write-token-here
```

### Step 4: Install Dependencies

```bash
cd /app/studio
yarn add dotenv
```

### Step 5: Run Import Script

```bash
cd /app/studio
node importMockData.js
```

You should see:
```
🚀 Starting import to Sanity...

📝 Importing Personal Information...
✅ Personal Info created: xxx

📧 Importing Contact Information...
✅ Contact Info created: xxx

🎯 Importing Skills...
✅ Skill created: Swift
✅ Skill created: SwiftUI
...

💼 Importing Projects...
✅ Project created: FinanceFlow Pro
...

🎉 Import completed successfully!
```

## 📋 What Gets Imported

- ✅ **1 Personal Info** - Name, title, about content, highlights, cloud tags
- ✅ **1 Contact Info** - Contact section content, services, social links
- ✅ **15 Skills** - All your iOS skills with years of experience
- ✅ **6 Projects** - All project details (except images)

## 🖼️ Uploading Project Images

The import script creates projects without images (Sanity images must be uploaded as assets). To add images:

### Option 1: Manual Upload in Studio

1. Open Sanity Studio at `http://localhost:3333`
2. Go to each Project
3. Click on the image field
4. Upload the abstract image
5. Publish

### Option 2: Use Image URLs Directly

The script outputs the image URLs. You can:
1. Download each image from the URL
2. Upload to Sanity Studio

Image URLs from the script:
```
FinanceFlow Pro: https://images.unsplash.com/photo-1762279389002-7b6abd7bd6c6?w=800&q=80
HealthTrack Elite: https://images.unsplash.com/photo-1709634539435-f9fccaf0fda1?w=800&q=80
ShopSphere: https://images.unsplash.com/photo-1709626011485-6fe000ea2dbc?w=800&q=80
LearnHub Academy: https://images.unsplash.com/photo-1762326866764-1ef1a008e0ad?w=800&q=80
TravelMate Navigator: https://images.unsplash.com/photo-1748716460543-1916e86eebee?w=800&q=80
MindfulSpace: https://images.unsplash.com/photo-1759481269661-2eb42cc1d3db?w=800&q=80
```

## ✅ After Import

### 1. Review in Sanity Studio

```bash
cd /app/studio
yarn dev
```

Open http://localhost:3333

Check all documents:
- Personal Information ✅
- Contact Information ✅
- Skills (15 items) ✅
- Projects (6 items) ✅

### 2. Publish All Documents

In Sanity Studio, each document needs to be published:
1. Click on each document
2. Click **Publish** button
3. Repeat for all documents

### 3. Enable Sanity in Frontend

Update `/app/frontend/.env.local`:

```env
REACT_APP_SANITY_PROJECT_ID=your-project-id
REACT_APP_SANITY_DATASET=production
REACT_APP_USE_SANITY=true  # Change to true
```

Restart frontend:
```bash
sudo supervisorctl restart frontend
```

### 4. Verify

Visit http://localhost:3000 - your portfolio should now load data from Sanity!

## 🔄 Re-importing Data

If you need to re-import (e.g., after schema changes):

### Option 1: Delete & Re-import

```bash
# Delete all documents
cd /app/studio
npx sanity dataset delete production --yes
npx sanity dataset create production

# Re-import
node importMockData.js
```

### Option 2: Selective Update

Modify `importMockData.js` to use `createOrReplace` instead of `create`:

```javascript
const doc = await client.createOrReplace({
  _id: 'personalInfo-singleton',
  _type: 'personalInfo',
  ...mockData.personalInfo
})
```

## 🐛 Troubleshooting

### "Project ID not found"

Make sure your `.env` file has the correct project ID:
```bash
cat /app/studio/.env
```

### "Authentication failed"

Your write token might be wrong or expired:
1. Generate a new token at https://www.sanity.io/manage
2. Update `.env` file
3. Try again

### "Document validation failed"

Some fields might be required. Check the error message and:
1. Update the schema in `/app/studio/schemaTypes/`
2. Or update the mock data in `importMockData.js`

### "Module not found"

Install dependencies:
```bash
cd /app/studio
yarn add dotenv @sanity/client
```

### Import is slow

This is normal. Each document is created individually. For 23 documents, it should take 10-30 seconds.

## 💡 Tips

### Update Mock Data First

Before importing, make sure your mock data in `/app/frontend/src/mock.js` is exactly how you want it. The import script reads the same data structure.

### Batch Operations

For large datasets, consider using Sanity's transaction API:

```javascript
const transaction = client.transaction()
mockData.skills.forEach(skill => {
  transaction.create({ _type: 'skill', ...skill })
})
await transaction.commit()
```

### Keep Script Updated

If you change your schemas, update `importMockData.js` to match.

## 📚 Resources

- [Sanity Import/Export](https://www.sanity.io/docs/import-data)
- [Sanity Client Docs](https://www.sanity.io/docs/js-client)
- [API Tokens](https://www.sanity.io/docs/api-tokens)

## 🎯 Summary

```bash
# Quick commands
cd /app/studio
npx sanity init                    # Setup Sanity
# Add SANITY_PROJECT_ID and SANITY_WRITE_TOKEN to .env
yarn add dotenv
node importMockData.js            # Import all data
yarn dev                          # Open Studio, upload images, publish
# Set REACT_APP_USE_SANITY=true in frontend
sudo supervisorctl restart frontend  # Restart frontend
```

That's it! Your mock data is now in Sanity and your portfolio is CMS-powered! 🎉
