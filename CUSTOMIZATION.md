# Portfolio Customization Guide

This guide will help you customize your Product Manager Portfolio with your personal information, experience, and projects.

## Quick Setup

Run the automated setup script to quickly update basic information:

```bash
npm run setup
```

This will prompt you for your name, contact information, and social media links, then automatically update the relevant files.

## Manual Customization

### 1. Personal Information

#### Update Your Name and Title
- **File**: `src/components/Home.js`
- **Lines**: 8, 12
- **What to change**: Replace "Your Name" with your actual name and update the title

#### Update Contact Information
- **File**: `src/components/Contact.js`
- **Lines**: 25-45
- **What to change**: Update email, phone, location, and social media links

#### Update Navigation
- **File**: `src/components/Navbar.js`
- **Line**: 25
- **What to change**: Replace "Your Name" with your actual name

### 2. About Section

#### Personal Story
- **File**: `src/components/About.js`
- **Lines**: 35-50
- **What to change**: Write your personal story, background, and what drives you

#### Profile Picture
- **File**: `src/components/About.js`
- **Lines**: 20-22
- **What to change**: Replace the User icon with your actual profile picture

```jsx
// Replace this:
<div className="w-32 h-32 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
  <User size={48} className="text-white" />
</div>

// With this:
<img 
  src="/path/to/your/photo.jpg" 
  alt="Your Name" 
  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
/>
```

### 3. Experience Section

#### Work History
- **File**: `src/components/Experience.js`
- **Lines**: 6-50
- **What to change**: Replace the sample experiences with your actual work history

```javascript
const experiences = [
  {
    id: 1,
    title: "Your Actual Job Title",
    company: "Your Company Name",
    location: "City, State",
    period: "2022 - Present",
    description: "Your actual job description",
    achievements: [
      "Your actual achievement 1",
      "Your actual achievement 2",
      "Your actual achievement 3"
    ],
    skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"]
  },
  // Add more experiences...
];
```

### 4. Projects Section

#### Project Portfolio
- **File**: `src/components/Projects.js`
- **Lines**: 6-120
- **What to change**: Replace sample projects with your actual projects

```javascript
const projects = [
  {
    id: 1,
    title: "Your Actual Project Name",
    description: "Your actual project description",
    category: "Project Category",
    duration: "Project duration",
    team: "Team size",
    impact: "Measurable impact",
    image: "/path/to/project/image.jpg", // or use placeholder
    links: [
      { name: "Case Study", url: "your-actual-url", icon: FileText },
      { name: "Live Demo", url: "your-actual-url", icon: ExternalLink }
    ],
    skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"]
  },
  // Add more projects...
];
```

#### Project Images
- Add your project images to the `public` folder
- Update the `image` property in each project object
- Recommended size: 400x250 pixels

### 5. Skills Section

#### Skills and Proficiency
- **File**: `src/components/Skills.js`
- **Lines**: 8-120
- **What to change**: Update skills, proficiency levels, and categories

```javascript
const skillCategories = [
  {
    id: 1,
    title: "Your Skill Category",
    icon: Target, // Choose appropriate icon
    description: "Description of this skill category",
    skills: [
      { name: "Skill Name", level: 95 }, // Level: 0-100
      // Add more skills...
    ]
  },
  // Add more categories...
];
```

#### Additional Tools
- **File**: `src/components/Skills.js`
- **Lines**: 180-190
- **What to change**: Update the list of additional tools you use

#### Certifications
- **File**: `src/components/Skills.js`
- **Lines**: 200-220
- **What to change**: Add your actual certifications

### 6. Styling and Design

#### Colors
- **File**: `tailwind.config.js`
- **Lines**: 5-30
- **What to change**: Customize the color scheme

```javascript
colors: {
  primary: {
    50: '#your-color-50',
    100: '#your-color-100',
    // ... update all primary colors
  },
  secondary: {
    // ... update secondary colors
  }
}
```

#### Fonts
- **File**: `tailwind.config.js`
- **Line**: 35
- **What to change**: Update the font family

```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
}
```

#### Custom CSS
- **File**: `src/index.css`
- **Lines**: 20-50
- **What to change**: Add custom CSS classes and animations

### 7. SEO and Meta Information

#### Page Title and Description
- **File**: `public/index.html`
- **Lines**: 6, 10-13
- **What to change**: Update title and meta description

```html
<title>Your Name - Your Title</title>
<meta name="description" content="Your actual description" />
```

#### Favicon
- Replace `public/favicon.ico` with your own favicon
- Recommended size: 32x32 pixels

### 8. Resume Download

#### Add Resume File
- Add your resume PDF to the `public` folder
- **File**: `src/components/Home.js`
- **Line**: 35
- **What to change**: Update the download link

```jsx
<a
  href="/path/to/your/resume.pdf"
  className="btn-secondary inline-flex items-center gap-2"
  download
>
  <Download size={20} />
  Download Resume
</a>
```

## Content Guidelines

### Writing Your Story
- Keep it personal but professional
- Focus on what drives you and your approach to product management
- Include specific examples of your impact
- Show your personality while maintaining credibility

### Describing Projects
- Use the STAR method (Situation, Task, Action, Result)
- Include measurable outcomes and metrics
- Highlight your role and responsibilities
- Mention the technologies and tools used

### Listing Skills
- Be honest about your proficiency levels
- Focus on skills relevant to product management
- Include both technical and soft skills
- Update regularly as you learn new skills

### Contact Information
- Use a professional email address
- Include your actual phone number if you're comfortable
- Update social media links to your actual profiles
- Consider adding a calendar booking link

## Testing Your Changes

1. **Start the development server**:
   ```bash
   npm start
   ```

2. **Test on different devices**:
   - Desktop
   - Tablet
   - Mobile

3. **Check all pages**:
   - Home
   - About
   - Experience
   - Projects
   - Skills
   - Contact

4. **Test functionality**:
   - Navigation
   - Contact form
   - External links
   - Download links

## Deployment Checklist

Before deploying to GitHub Pages, ensure you've:

- [ ] Updated all personal information
- [ ] Added your actual experience
- [ ] Included your real projects
- [ ] Updated skills and proficiency levels
- [ ] Added your profile picture
- [ ] Updated contact information
- [ ] Tested all functionality
- [ ] Updated the homepage URL in `package.json`
- [ ] Added your resume file

## Need Help?

If you need assistance with customization:

1. Check the [React documentation](https://reactjs.org/docs/)
2. Review the [Tailwind CSS documentation](https://tailwindcss.com/docs)
3. Look at the component files for examples
4. Create an issue in your repository

---

**Happy customizing! 🎨** 