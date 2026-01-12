#!/bin/bash

# Quick fix for autoprefixer missing error
# Run this script to resolve the dependency issue

echo "🔧 Fixing autoprefixer dependency issue..."
echo ""

# Navigate to project directory
cd /Users/sonamjsherpa/Desktop/roocheck

# Remove node_modules and package-lock.json
echo "📦 Cleaning up old dependencies..."
rm -rf node_modules package-lock.json

# Fresh install
echo "⬇️  Installing all dependencies fresh..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "You can now run:"
    echo "  npm run dev"
    echo ""
else
    echo ""
    echo "❌ Installation failed. Please run manually:"
    echo "  cd /Users/sonamjsherpa/Desktop/roocheck"
    echo "  rm -rf node_modules package-lock.json"
    echo "  npm install"
    echo ""
fi
