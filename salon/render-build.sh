#!/usr/bin/env bash
set -e
echo "Installing dependencies..."
npm install --force
echo "Building Expo web app..."
npx expo export:web
echo "Build complete."
