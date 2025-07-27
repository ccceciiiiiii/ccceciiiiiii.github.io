import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Product Manager Intern",
      company: "Baidu",
      location: "Beijing, CN",
      period: "2025.5 - Present",
      description: "Optimize the C-end product framework design under AI search and build an overall search link of Search as a Service.",
      achievements: [
        "To enhance the comprehensiveness of demand satisfaction, service-oriented components will be attached after the core search needs are met, providing services such as consultation with human-like agents and downloads. In terms of distribution, we will collaborate with strategy engineers to support model strategy optimization and assist in evaluating the user experience of generative results. In terms of design, we will integrate services with authoritative endorsements based on specific vertical categories to achieve both experience improvement and commercial gains. After the launch, the PV_CTR of service-oriented components reached 0.35%, and the conversion rate of landing pages increased by 41%."
      ],
      skills: ["AI PM", "User Research", "Data Analysis"]
    },
    {
      id: 2,
      title: "Product Manager Intern",
      company: "RedNote",
      location: "Shanghai, CN",
      period: "2024.10 - 2025.5",
      description: "Cultivate users' mindset of finding and using local services on RedNote and build an end-to-end transaction chain from interest cultivation to consumption, with a 25% increase in DAU of location detail pages during the period",
      achievements: [
        "Local Product Entrance: Promote the optimization of search and recommendation strategies for location tagging in note publishing, and expand scenario-based applications for location tagging in comments. During this period, the supply of location-related notes increased by 36%. (1) Pre-search Optimization: Optimize the recommendation ranking of tagged locations by combining Gaode’s location weight ranking with RedNote’s location popularity data, resulting in a 4.1% increase in the number of published location-related notes.(2) In-search Optimization: Improve location search results by analyzing user query characteristics and optimizing input prompt strategies, leading to a 1.9% increase in the number of published location-related notes. (3) Experience Optimization: Drive the interactive upgrade of the new framework for location tagging links. After launch, the number of published location-related notes in scenarios such as multi-location tagging and route tagging increased by 16.8%. Product Design for Location Tagging in Comments: To address the issue of outbound traffic in location-sharing scenarios under local notes, support location tagging via blue text links in comments to enhance interaction between locations and the community. After launch, the PV_CTR of location text links in the comment consumption side reached 5.0%, which is 6 times the CTR of highlighted text links in searches.",
        "Local Product Carrier: Lead the design of a location review AI product from scratch, leveraging model capabilities to improve UGC production efficiency and consumption value. (1) Promoting Review Production: To tackle the pain point where over 90% of reviews are text-free (thus reducing the consumption value of location detail pages), build a link of user notes → AI extraction → review base words on the AI platform, converting user notes into raw materials for review production. After launch, the daily number of high-quality reviews published increased by 350.6%, and the number of image-included reviews increased by 260.6%. (2) Display of High-Quality Reviews: To resolve poor-quality reviews under location pages, improve information quality by using AI to extract high-quality reviews for display. Design prompts to build a link of sentiment judgment → keyword extraction → associated consumption tags; classify comments through disassembly and annotation to fit different display scenarios, and accumulate raw data for subsequent aggregated location tags. After launching A/B tests to verify extraction effectiveness and iteratively optimizing the model, the click-through rate of review display scenarios increased by 3.41%."
      ],
      skills: ["AI PM", "User Experience", "A/B Testing"]
    },
    {
      id: 3,
      title: "Product Manager Intern",
      company: "Didi Chuxing",
      location: "Beijing, CN",
      period: "2024.6 - 2025.9",
      description: "Enhance the passenger experience in scenarios where drivers are at fault, and continuously iterate to improve the overall chain of order reassignment and vehicle replacement.",
      achievements: [
        "Enhance the passenger experience in scenarios where drivers are at fault, and continuously iterate to improve the overall chain of order reassignment and vehicle replacement."
      ],
      skills: ["Data Analysis", "User Research"]
    }
  ];

  console.log('Experience component loaded with data:', experiences);

  return (
    <div className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-secondary-900 mb-4">Experience</h1>
            <p className="text-lg text-secondary-600">
              My professional journey in product management
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={experience.id} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-8 top-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2"></div>

                  {/* Content */}
                  <div className="ml-12 md:ml-16">
                    <div className="card">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                          {experience.title}
                        </h3>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-secondary-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Building size={16} />
                            {experience.company}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            {experience.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            {experience.period}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-secondary-700 mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-secondary-900 mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-secondary-700 text-sm flex items-start gap-2">
                              <span className="text-primary-600 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-2">Skills & Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-secondary-600 mb-4">
              Interested in working together? Let's connect!
            </p>
            <a
              href="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 