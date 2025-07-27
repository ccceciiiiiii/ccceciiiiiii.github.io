#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🎨 Product Manager Portfolio Setup\n');
console.log('This script will help you customize your portfolio with your personal information.\n');

const questions = [
  {
    name: 'fullName',
    question: 'What is your full name? ',
    default: 'Your Name'
  },
  {
    name: 'title',
    question: 'What is your professional title? ',
    default: 'Product Manager'
  },
  {
    name: 'email',
    question: 'What is your email address? ',
    default: 'your.email@example.com'
  },
  {
    name: 'phone',
    question: 'What is your phone number? ',
    default: '+1 (555) 123-4567'
  },
  {
    name: 'location',
    question: 'Where are you located? ',
    default: 'San Francisco, CA'
  },
  {
    name: 'linkedin',
    question: 'What is your LinkedIn profile URL? ',
    default: 'https://linkedin.com/in/yourprofile'
  },
  {
    name: 'twitter',
    question: 'What is your Twitter handle? ',
    default: 'https://twitter.com/yourhandle'
  },
  {
    name: 'github',
    question: 'What is your GitHub profile URL? ',
    default: 'https://github.com/yourusername'
  },
  {
    name: 'repoName',
    question: 'What is your GitHub repository name? ',
    default: 'portfolio'
  }
];

const answers = {};

function askQuestion(index) {
  if (index >= questions.length) {
    updateFiles();
    return;
  }

  const q = questions[index];
  rl.question(q.question, (answer) => {
    answers[q.name] = answer || q.default;
    askQuestion(index + 1);
  });
}

function updateFiles() {
  console.log('\n📝 Updating files with your information...\n');

  // Update package.json
  const packageJsonPath = path.join(__dirname, '..', 'package.json');
  let packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  packageJson.homepage = `https://${answers.fullName.toLowerCase().replace(/\s+/g, '')}.github.io/${answers.repoName}`;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  // Update public/index.html
  const indexHtmlPath = path.join(__dirname, '..', 'public', 'index.html');
  let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
  indexHtml = indexHtml.replace(/Your Name - Product Manager/g, `${answers.fullName} - ${answers.title}`);
  fs.writeFileSync(indexHtmlPath, indexHtml);

  // Update components
  const componentsDir = path.join(__dirname, '..', 'src', 'components');
  
  // Update Home.js
  const homePath = path.join(componentsDir, 'Home.js');
  let homeContent = fs.readFileSync(homePath, 'utf8');
  homeContent = homeContent.replace(/Your Name/g, answers.fullName);
  homeContent = homeContent.replace(/Product Manager & Strategic Thinker/g, answers.title);
  fs.writeFileSync(homePath, homeContent);

  // Update About.js
  const aboutPath = path.join(componentsDir, 'About.js');
  let aboutContent = fs.readFileSync(aboutPath, 'utf8');
  aboutContent = aboutContent.replace(/Your Name/g, answers.fullName);
  aboutContent = aboutContent.replace(/\[Your City\]/g, answers.location);
  fs.writeFileSync(aboutPath, aboutContent);

  // Update Contact.js
  const contactPath = path.join(componentsDir, 'Contact.js');
  let contactContent = fs.readFileSync(contactPath, 'utf8');
  contactContent = contactContent.replace(/your\.email@example\.com/g, answers.email);
  contactContent = contactContent.replace(/\+1 \(555\) 123-4567/g, answers.phone);
  contactContent = contactContent.replace(/San Francisco, CA/g, answers.location);
  contactContent = contactContent.replace(/https:\/\/linkedin\.com\/in\/yourprofile/g, answers.linkedin);
  contactContent = contactContent.replace(/https:\/\/twitter\.com\/yourhandle/g, answers.twitter);
  contactContent = contactContent.replace(/https:\/\/github\.com\/yourusername/g, answers.github);
  fs.writeFileSync(contactPath, contactContent);

  // Update Footer.js
  const footerPath = path.join(componentsDir, 'Footer.js');
  let footerContent = fs.readFileSync(footerPath, 'utf8');
  footerContent = footerContent.replace(/Your Name/g, answers.fullName);
  footerContent = footerContent.replace(/your\.email@example\.com/g, answers.email);
  footerContent = footerContent.replace(/\+1 \(555\) 123-4567/g, answers.phone);
  footerContent = footerContent.replace(/San Francisco, CA/g, answers.location);
  fs.writeFileSync(footerPath, footerContent);

  // Update Navbar.js
  const navbarPath = path.join(componentsDir, 'Navbar.js');
  let navbarContent = fs.readFileSync(navbarPath, 'utf8');
  navbarContent = navbarContent.replace(/Your Name/g, answers.fullName);
  fs.writeFileSync(navbarPath, navbarContent);

  console.log('✅ Files updated successfully!');
  console.log('\n📋 Next steps:');
  console.log('1. Review and customize the content in each component file');
  console.log('2. Add your actual work experience in src/components/Experience.js');
  console.log('3. Add your real projects in src/components/Projects.js');
  console.log('4. Update your skills and proficiency levels in src/components/Skills.js');
  console.log('5. Add your profile picture (replace the placeholder icon)');
  console.log('6. Test the website locally with: npm start');
  console.log('7. Deploy to GitHub Pages with: npm run deploy');
  console.log('\n🎉 Your portfolio is ready to be customized!');

  rl.close();
}

askQuestion(0); 