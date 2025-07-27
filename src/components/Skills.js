import React from 'react';
import { 
  Palette, 
  Database, 
  Users, 
  TrendingUp, 
  Code, 
  BarChart3,
  Zap,
  Target,
  MessageSquare,
  Lightbulb
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Product Management",
      icon: Target,
      description: "Core product management skills and methodologies",
      skills: [
        { name: "Product Strategy", level: 95 },
        { name: "User Research", level: 90 },
        { name: "Roadmap Planning", level: 88 },
        { name: "Requirements Gathering", level: 92 },
        { name: "A/B Testing", level: 85 },
        { name: "Product Analytics", level: 87 }
      ]
    },
    {
      id: 2,
      title: "Design & Prototyping",
      icon: Palette,
      description: "Design tools and prototyping skills",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Sketch", level: 75 },
        { name: "Adobe Creative Suite", level: 70 },
        { name: "InVision", level: 80 },
        { name: "Prototyping", level: 85 },
        { name: "Wireframing", level: 88 }
      ]
    },
    {
      id: 3,
      title: "Data & Analytics",
      icon: BarChart3,
      description: "Data analysis and business intelligence",
      skills: [
        { name: "SQL", level: 85 },
        { name: "Google Analytics", level: 90 },
        { name: "Mixpanel", level: 80 },
        { name: "Tableau", level: 75 },
        { name: "Excel/Sheets", level: 92 },
        { name: "Data Visualization", level: 82 }
      ]
    },
    {
      id: 4,
      title: "Project Management",
      icon: TrendingUp,
      description: "Project management and collaboration tools",
      skills: [
        { name: "Jira", level: 88 },
        { name: "Asana", level: 85 },
        { name: "Trello", level: 90 },
        { name: "Confluence", level: 80 },
        { name: "Agile/Scrum", level: 92 },
        { name: "Kanban", level: 85 }
      ]
    },
    {
      id: 5,
      title: "Technical Skills",
      icon: Code,
      description: "Technical knowledge and development tools",
      skills: [
        { name: "HTML/CSS", level: 75 },
        { name: "JavaScript", level: 65 },
        { name: "React", level: 60 },
        { name: "Git", level: 80 },
        { name: "API Integration", level: 85 },
        { name: "Mobile Development", level: 70 }
      ]
    },
    {
      id: 6,
      title: "Soft Skills",
      icon: Users,
      description: "Leadership and communication skills",
      skills: [
        { name: "Cross-functional Leadership", level: 90 },
        { name: "Stakeholder Management", level: 88 },
        { name: "Public Speaking", level: 85 },
        { name: "Team Building", level: 87 },
        { name: "Conflict Resolution", level: 82 },
        { name: "Strategic Thinking", level: 90 }
      ]
    }
  ];

  const getLevelColor = (level) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-gray-400';
  };

  const getLevelText = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">Skills & Expertise</h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and competencies 
            that I bring to every product management role.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.id} className="card">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <category.icon size={20} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900">
                    {category.title}
                  </h3>
                  <p className="text-sm text-secondary-600">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-secondary-700">
                        {skill.name}
                      </span>
                      <span className="text-xs text-secondary-500">
                        {getLevelText(skill.level)}
                      </span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${getLevelColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
              Additional Tools & Technologies
            </h2>
            <p className="text-secondary-600">
              Other tools and technologies I work with regularly
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Slack", "Zoom", "Notion", "Miro", "Loom", "Hotjar",
              "Optimizely", "Segment", "Amplitude", "Looker", "Mode", "Postman"
            ].map((tool, idx) => (
              <div
                key={idx}
                className="bg-secondary-50 border border-secondary-200 rounded-lg p-4 text-center hover:bg-secondary-100 transition-colors"
              >
                <span className="text-sm font-medium text-secondary-700">
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
              Certifications & Training
            </h2>
            <p className="text-secondary-600">
              Professional certifications and ongoing learning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Certified Scrum Product Owner (CSPO)",
                issuer: "Scrum Alliance",
                year: "2023"
              },
              {
                name: "Google Analytics Individual Qualification",
                issuer: "Google",
                year: "2022"
              },
              {
                name: "Product Management Certificate",
                issuer: "General Assembly",
                year: "2021"
              }
            ].map((cert, idx) => (
              <div key={idx} className="card text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Zap size={24} className="text-primary-600" />
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-secondary-600 mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-secondary-500">
                  {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-secondary-600 mb-4">
            Interested in how these skills can benefit your team?
          </p>
          <a
            href="/contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Let's Discuss
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills; 