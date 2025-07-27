import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-max section-padding">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
              Hi, I'm <span className="gradient-text">Wenchu Zhang</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-secondary-600 mb-8">
              Product Manager
            </h2>
            
            <p className="text-lg text-secondary-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              I help companies build products that users love and businesses value. 
              With expertise in product strategy, user research, and cross-functional leadership, 
              I bridge the gap between business objectives and user needs.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/projects"
                className="btn-primary inline-flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={20} />
              </Link>
              
              <button className="btn-secondary inline-flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-secondary-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">20+</div>
              <div className="text-secondary-600">Products Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
              <div className="text-secondary-600">Companies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 