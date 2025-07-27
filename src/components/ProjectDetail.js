import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Example project data (in a real app, import or fetch this)
const projects = [
  {
    id: 1,
    slug: "promoting-review-production",
    title: "Promoting Review Production",
    images: [
      { src: "/一键发评论.png", caption: "AI-powered review production workflow" }
    ],
    // mainText: `To tackle the pain point where over 90% of reviews are text-free (thus reducing the consumption value of location detail pages), build a link of user notes → AI extraction → review base words on the AI platform, converting user notes into raw materials for review production.\n\nAfter launch, the daily number of high-quality reviews published increased by 350.6%, and the number of image-included reviews increased by 260.6%.`,
    sections: [
      {
        heading: "Background",
        text: "In Rednote, Over 90% of reviews were text-free, reducing the consumption value of location detail pages."
      },
      {
        heading: "Solution",
        text: "By using Rednote’s internal AI platform (similar to Coze), and adjusting prompt words and model temperature, a pipeline from \"user notes → AI extraction → review base words\" was built. This converts location-related content from user notes into raw materials for review creation, lowers the threshold for publishing reviews, and enriches comments under location pages."
      },
      {
        heading: "Impact",
        text: "High-quality reviews increased by 350.6%, image-included reviews by 260.6%."
      }
    ]
  }
];

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <div className="container-max py-16 text-center">Project not found.</div>;
  }

  return (
    <div className="container-max py-16">
      <Link to="/projects" className="text-primary-600 hover:underline">← Back to Projects</Link>
      <h1 className="text-4xl font-bold text-secondary-900 mt-4 mb-6">{project.title}</h1>
      <div className="mb-8">
        {project.images.map((img, idx) => (
          <div key={idx} className="mb-4">
            <img src={img.src} alt={img.caption} className="w-full max-w-2xl mx-auto rounded-lg shadow" />
            {img.caption && <div className="text-secondary-500 text-sm mt-2 text-center">{img.caption}</div>}
          </div>
        ))}
      </div>
      <div className="prose max-w-2xl mx-auto mb-8 whitespace-pre-line">{project.mainText}</div>
      {project.sections && project.sections.map((section, idx) => (
        <div key={idx} className="max-w-2xl mx-auto mb-6">
          <h2 className="text-2xl font-semibold text-secondary-800 mb-2">{section.heading}</h2>
          <p className="text-secondary-700">{section.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetail; 