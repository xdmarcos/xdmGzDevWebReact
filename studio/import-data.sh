#!/bin/bash

echo "================================================"
echo "   Import Mock Data to Sanity.io"
echo "================================================"
echo ""

# Check if we're in the right directory
if [ ! -f "importMockData.cjs" ]; then
    echo "❌ Error: Please run this script from /app/studio directory"
    echo "   cd /app/studio && ./import-data.sh"
    exit 1
fi

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "⚠️  No .env file found. Creating one..."
    cat > .env << EOF
# Add your Sanity credentials here
SANITY_PROJECT_ID=YOUR_PROJECT_ID
SANITY_WRITE_TOKEN=YOUR_WRITE_TOKEN
EOF
    echo "✅ Created .env file"
    echo ""
    echo "📝 Please edit /app/studio/.env and add:"
    echo "   1. Your SANITY_PROJECT_ID (get it from 'sanity init')"
    echo "   2. Your SANITY_WRITE_TOKEN (get it from https://www.sanity.io/manage)"
    echo ""
    echo "Then run this script again."
    exit 1
fi

# Source the .env file
export $(cat .env | grep -v '^#' | xargs)

# Check if credentials are set
if [ "$SANITY_PROJECT_ID" = "YOUR_PROJECT_ID" ] || [ -z "$SANITY_PROJECT_ID" ]; then
    echo "❌ SANITY_PROJECT_ID not set in .env file"
    echo "   Run 'npx sanity init' to get your project ID"
    exit 1
fi

if [ "$SANITY_WRITE_TOKEN" = "YOUR_WRITE_TOKEN" ] || [ -z "$SANITY_WRITE_TOKEN" ]; then
    echo "❌ SANITY_WRITE_TOKEN not set in .env file"
    echo "   Get a write token from: https://www.sanity.io/manage"
    exit 1
fi

echo "✅ Configuration found"
echo "   Project ID: $SANITY_PROJECT_ID"
echo "   Token: ${SANITY_WRITE_TOKEN:0:10}..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    yarn install
fi

echo "🚀 Starting import..."
echo ""

# Run the import script
node importMockData.cjs

echo ""
echo "================================================"
echo "   Import Script Completed"
echo "================================================"
