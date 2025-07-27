import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-max">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold gradient-text">
                Wenchu Zhang
              </h3>
              <p className="text-secondary-300 leading-relaxed">
                Product Manager passionate about building products that users love 
                and businesses value. Let's create something amazing together.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-secondary-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-secondary-300">
                <p>sishuilideyu@163.com</p>
                <p>+86 13316880739</p>
                <p>Shenzhen, CN</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-secondary-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-secondary-400 text-sm">
                © {currentYear} Wenchu Zhang. All rights reserved.
              </p>
              
              <p className="text-secondary-400 text-sm flex items-center gap-1">
                Made with <Heart size={14} className="text-red-500" /> using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 