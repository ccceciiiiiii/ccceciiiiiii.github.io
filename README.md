# Product Manager Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS, designed specifically for product managers to showcase their experience, projects, and skills.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Six Main Sections**:
  - **Home**: Hero section with introduction and key stats
  - **About**: Personal background and professional story
  - **Experience**: Timeline of work history and achievements
  - **Projects**: Portfolio of product management work
  - **Skills**: Comprehensive skills matrix with proficiency levels
  - **Contact**: Contact form and social media links
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized for performance
- **GitHub Pages Ready**: Easy deployment to GitHub Pages

## Tech Stack

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Lucide React**: Beautiful icons
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Customization

### Personal Information

Update the following files with your personal information:

1. **`public/index.html`**: Update the title and meta description
2. **`package.json`**: Update the homepage URL for GitHub Pages
3. **All component files**: Replace placeholder content with your actual information

### Key Files to Customize

- `src/components/Home.js`: Update name, title, and introduction
- `src/components/About.js`: Add your personal story and background
- `src/components/Experience.js`: Add your work experience
- `src/components/Projects.js`: Add your actual projects
- `src/components/Skills.js`: Update skills and proficiency levels
- `src/components/Contact.js`: Update contact information and social links

### Styling

The website uses Tailwind CSS with a custom color scheme. You can modify:

- `tailwind.config.js`: Update colors, fonts, and other design tokens
- `src/index.css`: Add custom CSS classes and animations

## Deployment to GitHub Pages

### Method 1: Using gh-pages package (Recommended)

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Make sure your `package.json` has the correct homepage URL:
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Method 2: Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Create a new branch called `gh-pages`**
   ```bash
   git checkout -b gh-pages
   ```

3. **Copy build files to root**
   ```bash
   cp -r build/* .
   ```

4. **Commit and push**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

5. **Configure GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "gh-pages" branch as source
   - Save the settings

### Method 3: GitHub Actions (Automatic Deployment)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation bar
│   ├── Home.js         # Home page
│   ├── About.js        # About page
│   ├── Experience.js   # Experience page
│   ├── Projects.js     # Projects page
│   ├── Skills.js       # Skills page
│   ├── Contact.js      # Contact page
│   └── Footer.js       # Footer component
├── App.js              # Main app component
├── index.js            # React entry point
└── index.css           # Global styles and Tailwind imports

public/
├── index.html          # HTML template
└── manifest.json       # PWA manifest

tailwind.config.js      # Tailwind CSS configuration
postcss.config.js       # PostCSS configuration
package.json            # Dependencies and scripts
```

## Customization Checklist

Before deploying, make sure to update:

- [ ] Your name throughout the website
- [ ] Contact information (email, phone, location)
- [ ] Social media links
- [ ] Work experience and achievements
- [ ] Project details and links
- [ ] Skills and proficiency levels
- [ ] Personal story and background
- [ ] Profile picture (replace placeholder)
- [ ] Resume download link
- [ ] GitHub Pages URL in package.json

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The website is optimized for performance with:

- Lazy loading of components
- Optimized images
- Minified CSS and JavaScript
- Efficient routing
- Responsive images

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the portfolio, please:

1. Check the documentation above
2. Search existing issues
3. Create a new issue with detailed information

## Acknowledgments

- [React](https://reactjs.org/) for the framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) for icons
- [React Router](https://reactrouter.com/) for routing

---

**Happy coding! 🚀** 