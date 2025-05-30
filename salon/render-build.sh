#!/usr/bin/env bash
set -e
echo "Installing dependencies..."
npm install 
echo "Building Expo web app..."
npx expo export:web
echo "Build complete."
