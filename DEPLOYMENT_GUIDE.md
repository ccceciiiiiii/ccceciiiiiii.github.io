# GitHub Pages Deployment Fix

## Current Issue
Your React portfolio is deployed to the `gh-pages` branch, but GitHub Pages is still serving the README.md from the `main` branch.

## Solution: Configure GitHub Pages Settings

### Step 1: Go to GitHub Repository Settings
1. Visit: https://github.com/ccceciiiiiii/ccceciiiiiii.github.io
2. Click on **"Settings"** tab (at the top)

### Step 2: Configure Pages Source
1. Scroll down to **"Pages"** in the left sidebar
2. Under **"Source"**, change from "Deploy from a branch" to:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
3. Click **"Save"**

### Step 3: Wait for Deployment
- It may take 5-10 minutes for the changes to take effect
- You can check the deployment status in the "Pages" section

## Alternative: Manual Deployment

If the above doesn't work, try this manual approach:

```bash
# Build the project
npm run build

# Create gh-pages branch locally
git checkout -b gh-pages

# Copy build files to root
cp -r build/* .

# Commit and push
git add .
git commit -m "Deploy React app to GitHub Pages"
git push origin gh-pages

# Switch back to main
git checkout main
```

## Expected Result
After fixing the configuration, your website should show:
- Your name: "Wenchu Zhang"
- Professional title: "Product Manager"
- Navigation menu with Home, About, Experience, Projects
- Your actual portfolio content instead of README.md

## Troubleshooting
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Try incognito/private mode
- Check GitHub Actions for deployment status
- Wait 10-15 minutes for changes to propagate 