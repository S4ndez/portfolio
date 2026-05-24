import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  FolderGit2,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
} from 'lucide-react';

/*
  ============================================================
  PROJECT DATA — UPDATE THIS ARRAY WITH YOUR ACTUAL PROJECTS
  ============================================================
  
  For each project, provide:
  - title: Project name
  - description: Short description of the project
  - screenshot: Path to screenshot image (place in /public folder)
  - liveUrl: Live URL of the project (or null)
  - tech: Array of technologies used
  - category: Category for filtering
  
  Place your project screenshots in the /public/projects/ folder.
  Example: /public/projects/project1.png
*/

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with product management, cart, checkout, and payment integration. Built with Next.js and MongoDB.',
    screenshot: null, // Replace: '/projects/ecommerce.png'
    liveUrl: 'https://example.com',
    tech: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Razorpay'],
    category: 'Web App',
  },
  {
    title: 'CI/CD Pipeline Dashboard',
    description:
      'Internal dashboard for monitoring CI/CD pipeline status, deployment history, and build metrics across multiple repositories.',
    screenshot: null, // Replace: '/projects/cicd-dashboard.png'
    liveUrl: 'https://example.com',
    tech: ['React', 'Firebase', 'GitHub API', 'Chart.js'],
    category: 'Dashboard',
  },
  {
    title: 'GitHub Automation System',
    description:
      'Automated PR reviews, tagging, versioning, and deployment triggers. Reduced manual steps and standardized workflow across repos.',
    screenshot: null, // Replace: '/projects/github-auto.png'
    liveUrl: null,
    tech: ['GitHub Actions', 'Bash', 'Node.js', 'Webhooks'],
    category: 'Automation',
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio built with React, Vite, Framer Motion and Tailwind CSS. Features dark mode, glass morphism, and smooth animations.',
    screenshot: null, // Replace: '/projects/portfolio.png'
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    category: 'Web App',
  },
  {
    title: 'Internal Tools Suite',
    description:
      'Custom dashboards and scripts for monitoring, workflow automation, and reducing manual operations tasks across teams.',
    screenshot: null, // Replace: '/projects/internal-tools.png'
    liveUrl: null,
    tech: ['React', 'Python', 'REST APIs', 'Firebase'],
    category: 'Dashboard',
  },
  {
    title: 'Release Governance Platform',
    description:
      'Utility tools ensuring deployment governance and production validation across 5+ client projects. Standardized release process.',
    screenshot: null, // Replace: '/projects/release-gov.png'
    liveUrl: null,
    tech: ['GitHub Actions', 'Jira API', 'Slack Bots', 'Node.js'],
    category: 'Automation',
  },
];

const categories = ['All', ...new Set(projects.map((p) => p.category))];

// Project card component
function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: (typeof projects)[0];
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-panel rounded-xl overflow-hidden hover:border-cyan/30 hover:shadow-neon-cyan/10 transition-all duration-500 h-full flex flex-col">
        {/* Screenshot area */}
        <div
          className="relative h-48 sm:h-52 overflow-hidden cursor-pointer"
          onClick={onClick}
        >
          {project.screenshot ? (
            <img
              src={project.screenshot}
              alt={project.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-surface via-surfaceHover to-surface flex items-center justify-center">
              <div className="text-center space-y-2">
                <FolderGit2 className="w-10 h-10 text-cyan/30 mx-auto" />
                <p className="text-xs text-gray-600 font-mono">
                  Add screenshot
                </p>
              </div>
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <span className="text-white text-xs font-mono flex items-center gap-1.5 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full border border-white/20">
              <Eye className="w-3 h-3" />
              Preview
            </span>
          </div>

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-mono text-cyan bg-background/80 backdrop-blur border border-cyan/20 px-2.5 py-1 rounded-full">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-lg font-bold font-mono text-white mb-2 group-hover:text-cyan transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-3 border-t border-white/5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan hover:text-white transition-colors group/link"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="border-b border-transparent group-hover/link:border-cyan transition-colors">
                  Live Demo
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Modal for image preview
function ImageModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0] | null;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative max-w-4xl w-full glass-panel rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-background/80 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={project.title}
            className="w-full max-h-[60vh] object-contain bg-black"
          />
        ) : (
          <div className="w-full h-64 bg-gradient-to-br from-surface to-surfaceHover flex items-center justify-center">
            <p className="text-gray-500 font-mono text-sm">
              No screenshot added yet
            </p>
          </div>
        )}

        <div className="p-6">
          <h3 className="text-xl font-bold font-mono text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4">{project.description}</p>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono text-cyan hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Live Site
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-cyan font-mono text-sm mb-4 bg-cyan/5 border border-cyan/10 px-4 py-2 rounded-full">
            <Layers className="w-4 h-4" />
            <span>Featured Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-white mb-4">
            Things I've Built
          </h2>
          <p className="text-gray-400 font-mono max-w-xl mx-auto">
            A collection of projects spanning web apps, automation systems, and
            internal tooling
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg font-mono text-xs transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-cyan/10 text-cyan border border-cyan/30 shadow-neon-cyan/10'
                  : 'bg-white/5 text-gray-400 border border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid — 3 columns on desktop, 1 on mobile */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={idx}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 font-mono">
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ImageModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
