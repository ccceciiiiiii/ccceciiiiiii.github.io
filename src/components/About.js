import React from 'react';
import { User, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-secondary-900 mb-4">About Me</h1>
            <p className="text-lg text-secondary-600">
              Get to know me better - my journey, values, and what drives me
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Image/Personal Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 text-center">
                <div className="w-32 h-32 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User size={48} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Wenchu Zhang</h3>
                <p className="text-secondary-600">Product Manager</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-secondary-700">Based in Shenzhen, CN</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-secondary-700">Available for opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-secondary-700">Passionate about user-centered design</span>
                </div>
              </div>
            </div>

            {/* Right Column - Story */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-secondary-900">My Story</h2>
              <div className="space-y-4 text-secondary-700 leading-relaxed">
                <p>
                  I started my journey in product management with a curiosity about how technology 
                  can solve real-world problems. Over the years, I've had the privilege of working 
                  with amazing teams to build products that impact millions of users.
                </p>
                <p>
                  My approach combines data-driven decision making with deep user empathy. 
                  I believe that the best products come from understanding both the business 
                  objectives and the human needs behind every feature.
                </p>
                <p>
                  When I'm not working on products, you can find me exploring new technologies, 
                  reading about industry trends, or mentoring aspiring product managers.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Target size={24} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">User-First Approach</h3>
              <p className="text-secondary-600">
                Every decision starts with understanding user needs and pain points
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Heart size={24} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Passion for Impact</h3>
              <p className="text-secondary-600">
                Driven by creating products that make a meaningful difference
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <User size={24} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Collaborative Leadership</h3>
              <p className="text-secondary-600">
                Building strong relationships across teams to achieve shared goals
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 