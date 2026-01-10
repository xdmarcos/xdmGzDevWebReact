#!/bin/bash

echo "=================================="
echo "Sanity CMS Setup Script"
echo "=================================="
echo ""

echo "Step 1: Navigate to studio directory..."
cd /app/studio

echo ""
echo "Step 2: Initialize Sanity project..."
echo "Please follow the prompts to create your Sanity project."
echo ""
npx sanity@latest init

echo ""
echo "=================================="
echo "Setup Complete!"
echo "=================================="
echo ""
echo "Next steps:"
echo "1. Copy your Project ID from the output above"
echo "2. Update /app/studio/sanity.config.js with your Project ID"
echo "3. Update /app/frontend/.env.local with your Project ID"
echo "4. Start Sanity Studio: cd /app/studio && yarn dev"
echo "5. Add your content through the Sanity Studio interface"
echo "6. Enable Sanity in frontend by setting REACT_APP_USE_SANITY=true in .env.local"
echo ""
