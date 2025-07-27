# GitHub Pages Deployment Guide

This guide will help you deploy your Product Manager Portfolio to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Node.js and npm installed

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `portfolio` or `my-portfolio`)
5. Make it public (required for free GitHub Pages)
6. Don't initialize with README (we'll push our existing code)
7. Click "Create repository"

### 2. Update Configuration

Before pushing to GitHub, update these files:

#### Update `package.json`
Change the homepage URL to match your repository:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name"
}
```

#### Update `public/index.html`
Change the title to your name:
```html
<title>Your Name - Product Manager</title>
```

### 3. Push Code to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Product Manager Portfolio"

# Add remote repository
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git push -u origin main
```

### 4. Deploy to GitHub Pages

#### Method 1: Using npm scripts (Recommended)

```bash
# Install dependencies
npm install

# Deploy to GitHub Pages
npm run deploy
```

This will:
1. Build your project
2. Create a `gh-pages` branch
3. Push the built files to GitHub

#### Method 2: Manual deployment

```bash
# Build the project
npm run build

# Create gh-pages branch
git checkout -b gh-pages

# Remove all files except build
rm -rf src public package.json package-lock.json tailwind.config.js postcss.config.js README.md .gitignore

# Move build files to root
mv build/* .

# Remove build folder
rm -rf build

# Commit and push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# Switch back to main branch
git checkout main
```

### 5. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section (in the left sidebar)
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch
6. Click "Save"

### 6. Access Your Website

Your portfolio will be available at:
```
https://yourusername.github.io/your-repo-name
```

It may take a few minutes for the changes to appear.

## Custom Domain (Optional)

If you want to use a custom domain:

1. Purchase a domain (e.g., from Namecheap, GoDaddy, etc.)
2. In your repository settings → Pages:
   - Enter your custom domain
   - Check "Enforce HTTPS"
3. Add a `CNAME` file in your `public` folder:
   ```
   yourdomain.com
   ```
4. Configure DNS with your domain provider:
   - Add a CNAME record pointing to `yourusername.github.io`

## Troubleshooting

### Common Issues

1. **404 Error**: Make sure you're using the correct URL format
2. **Build fails**: Check that all dependencies are installed
3. **Styling issues**: Ensure Tailwind CSS is properly configured
4. **Images not loading**: Check that image paths are correct

### Debugging Steps

1. Check the Actions tab in your repository for build logs
2. Verify the `gh-pages` branch contains the built files
3. Check browser console for JavaScript errors
4. Ensure all file paths are relative, not absolute

### Performance Optimization

1. Optimize images before adding them
2. Use WebP format when possible
3. Compress large files
4. Consider lazy loading for images

## Updating Your Website

To update your website after making changes:

```bash
# Make your changes
# Commit and push to main branch
git add .
git commit -m "Update portfolio content"
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

## Security Considerations

1. Don't commit sensitive information (API keys, passwords)
2. Use environment variables for any configuration
3. Regularly update dependencies
4. Enable security alerts in GitHub

## Analytics (Optional)

To add Google Analytics:

1. Create a Google Analytics account
2. Get your tracking ID
3. Add the tracking code to `public/index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

## Support

If you encounter issues:

1. Check the [GitHub Pages documentation](https://pages.github.com/)
2. Review the [React deployment guide](https://create-react-app.dev/docs/deployment/)
3. Search for similar issues on GitHub
4. Create an issue in your repository

---

**Your portfolio is now live! 🎉** 