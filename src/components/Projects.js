import React from 'react';
import { ExternalLink, FileText, Users, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Promoting Review Production",
      description: "To tackle the pain point where over 90% of reviews are text-free (thus reducing the consumption value of location detail pages), build a link of user notes → AI extraction → review base words on the AI platform, converting user notes into raw materials for review production. ",
      category: "Product Strategy",
      duration: "3 months",
      team: "1 people",
      impact: "After launch, the daily number of high-quality reviews published increased by 350.6%, and the number of image-included reviews increased by 260.6%.",
      image: "/一键发评论.png",
      links: [
        { name: "Case Study", url: "#", icon: FileText },
        { name: "Live Demo", url: "#", icon: ExternalLink }
      ],
      skills: ["User Research", "UX Design", "A/B Testing", "Analytics"]
    },
    // {
    //   id: 2,
    //   title: "Mobile App Launch",
    //   description: "Successfully launched a mobile app from concept to 100K+ downloads, managing the entire product lifecycle and go-to-market strategy.",
    //   category: "Mobile Product",
    //   duration: "12 months",
    //   team: "12 people",
    //   impact: "100K+ downloads",
    //   image: "https://via.placeholder.com/400x250/10B981/FFFFFF?text=Mobile+App",
    //   links: [
    //     { name: "App Store", url: "#", icon: ExternalLink },
    //     { name: "Strategy Deck", url: "#", icon: FileText }
    //   ],
    //   skills: ["Mobile Development", "App Store Optimization", "User Acquisition", "Product Marketing"]
    // },
    // {
    //   id: 3,
    //   title: "SaaS Dashboard Analytics",
    //   description: "Designed and implemented comprehensive analytics dashboard for SaaS platform, providing actionable insights to 10,000+ users.",
    //   category: "Data Product",
    //   duration: "4 months",
    //   team: "6 people",
    //   impact: "10K+ active users",
    //   image: "https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Analytics+Dashboard",
    //   links: [
    //     { name: "Product Spec", url: "#", icon: FileText },
    //     { name: "Demo", url: "#", icon: ExternalLink }
    //   ],
    //   skills: ["Data Visualization", "SQL", "Product Analytics", "User Research"]
    // },
    // {
    //   id: 4,
    //   title: "Customer Feedback System",
    //   description: "Built an integrated customer feedback system that improved response time by 60% and increased customer satisfaction scores.",
    //   category: "Internal Tools",
    //   duration: "3 months",
    //   team: "4 people",
    //   impact: "60% faster response",
    //   image: "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Feedback+System",
    //   links: [
    //     { name: "Documentation", url: "#", icon: FileText },
    //     { name: "GitHub", url: "#", icon: Github }
    //   ],
    //   skills: ["System Design", "API Integration", "User Testing", "Process Optimization"]
    // },
    // {
    //   id: 5,
    //   title: "Marketplace Platform",
    //   description: "Developed a two-sided marketplace connecting service providers with customers, achieving $2M+ in transaction volume.",
    //   category: "Marketplace",
    //   duration: "18 months",
    //   team: "15 people",
    //   impact: "$2M+ volume",
    //   image: "https://via.placeholder.com/400x250/EF4444/FFFFFF?text=Marketplace",
    //   links: [
    //     { name: "Live Platform", url: "#", icon: ExternalLink },
    //     { name: "Business Plan", url: "#", icon: FileText }
    //   ],
    //   skills: ["Marketplace Strategy", "Payment Systems", "Trust & Safety", "Growth Hacking"]
    // },
    // {
    //   id: 6,
    //   title: "AI-Powered Recommendation Engine",
    //   description: "Implemented machine learning recommendation system that increased user engagement by 30% and average session time by 25%.",
    //   category: "AI/ML Product",
    //   duration: "8 months",
    //   team: "10 people",
    //   impact: "30% engagement increase",
    //   image: "https://via.placeholder.com/400x250/06B6D4/FFFFFF?text=AI+Recommendations",
    //   links: [
    //     { name: "Technical Paper", url: "#", icon: FileText },
    //     { name: "Demo", url: "#", icon: ExternalLink }
    //   ],
    //   skills: ["Machine Learning", "Data Science", "Product Analytics", "A/B Testing"]
    // }
  ];

  return (
    <div className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">Projects</h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            A showcase of my product management work, from strategy to execution. 
            Each project represents a unique challenge and learning opportunity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card group hover:scale-105 transition-transform duration-300">
              {/* Project Image */}
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-white/90 text-secondary-800 text-xs font-medium rounded">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="flex items-center gap-4 text-xs text-secondary-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    {project.team}
                  </div>
                </div>

                {/* Impact */}
                <div className="bg-primary-50 text-primary-700 px-3 py-2 rounded-lg">
                  <span className="text-sm font-medium">{project.impact}</span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1">
                  {project.skills.slice(0, 3).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                  {project.skills.length > 3 && (
                    <span className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded">
                      +{project.skills.length - 3} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-2 border-t border-secondary-100">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      <link.icon size={14} />
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-secondary-600 mb-4">
            Want to see more of my work or discuss a potential collaboration?
          </p>
          <a
            href="/contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects; 