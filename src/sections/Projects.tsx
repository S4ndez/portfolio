import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  FolderGit2,
  X,
  Zap,
  ShoppingBag,
  GitBranch,
  Layers,
  ChevronRight,
  BookOpen,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
   TYPES
────────────────────────────────────────────────────────────── */

type DetailSection = {
  heading: string;
  points: string[];
};

type Project = {
  title: string;
  description: string;  // short — shown on card
  screenshot: string | null;
  githubLogo?: boolean;  // show GitHub SVG instead of folder icon
  liveUrl: string | null;
  tech: string[];
  detail?: {            // long — shown in Read More modal
    problem: string;
    sections: DetailSection[];
    impact: string;
  };
};

/* ──────────────────────────────────────────────────────────────
   PROJECT DATA
────────────────────────────────────────────────────────────── */

const automationProjects: Project[] = [
  {
    title: 'Exit Interview Form to PDF',
    description:
      'Automated the exit interview process by converting Microsoft Forms submissions directly into formatted PDF documents in one shot, streamlining HR offboarding.',
    screenshot: '/microsoft_power_automate_logo.png',
    liveUrl: null,
    tech: ['Power Automate', 'Microsoft Forms', 'OneDrive', 'PDF Conversion'],
  },
  {
    title: 'Automated Support Ticketing System',
    description:
      'Built a ticketing system that auto-replies to support emails with a Ticket ID, forwards the issue to a developer channel, and sends automated resolution emails once sorted.',
    screenshot: '/microsoft_power_automate_logo.png',
    liveUrl: null,
    tech: ['Power Automate', 'Outlook', 'Teams/Slack', 'Email Automation'],
  },
  {
    title: 'HR Engagement Scheduled Flows',
    description:
      'Created scheduled cloud flows to automatically send greetings for festivals, employee birthdays, and work anniversaries, boosting team morale and simplifying HR tasks.',
    screenshot: '/microsoft_power_automate_logo.png',
    liveUrl: null,
    tech: ['Power Automate', 'Scheduled Flows', 'SharePoint', 'Outlook'],
  },
];

/* ──────────────────────────────────────────────────────────────
   ✏️  E-COMMERCE PROJECTS — ADD YOUR PROJECTS HERE
   ──────────────────────────────────────────────────────────────
   For each project, fill in:
     title       → Project / client name
     description → 1-2 sentence summary shown on the card
     screenshot  → Image path, e.g. '/projects/taviya.png'
                   (place images inside the /public/projects/ folder)
     liveUrl     → Live site URL, or null if not public
     tech        → Array of tech / tools used
   ──────────────────────────────────────────────────────────────
   EXAMPLE ENTRY:
   {
     title: 'Taviya E-Commerce',
     description: 'Full-stack fashion store with variant management, Razorpay checkout, and Shiprocket logistics.',
     screenshot: '/projects/taviya.png',
     liveUrl: 'https://taviya.in',
     tech: ['Next.js', 'MongoDB', 'Razorpay', 'Shiprocket'],
   },
────────────────────────────────────────────────────────────── */

const ecommerceProjects: Project[] = [
  // ── Project 1 ──────────────────────────────────────────────
  {
    title: 'Rajalaxmi Textiles B2B Ecommerce Website',              // ← Project name
    description: 'Developed a Full stack B2B  e-commerce website with next js and Razorpay Payment Gateway integration.',        // ← Short description (shown on card)
    screenshot: '/projects/raju.jpg',       // ← e.g. '/projects/project1.png'  |  null = no image
    liveUrl: 'https://www.rajlaxmitextiles.com/',          // ← e.g. 'https://yoursite.com'    |  null = hide button
    tech: [  'Next.js', 'MongoDB', 'Razorpay', ],               // ← e.g. ['Next.js', 'MongoDB', 'Razorpay']
  },

  // ── Project 2 ──────────────────────────────────────────────
  {
    title: 'Taviya E-commerce Website',
    description: 'Next js Ecommerce website with Shiprocket and Razorpay Payment Gateway integration.',
    screenshot: '/projects/tavya.jpg',
    liveUrl: 'https://www.taviyastudio.in/',
    tech: [  'Next.js', 'MongoDB', 'Razorpay','Shiprocket' ],
  },

  // ── Project 3 ──────────────────────────────────────────────
  {
    title: 'Qsuite 360',
    description: 'Internal Project management tool for developers and QA with github API integration.',
    screenshot: null,
    liveUrl: 'https://client-renewals.webgeon.com/dashboard',
    tech: [ 'react','express JS'],
  },

  {
    title: 'Webgeon HRMS',
    description: 'HRMS application for managing employee records and attendance management ,Payslip generation etc.',
    screenshot: null,
    liveUrl: 'https://hrms.webgeon.com/',
    tech: [ 'react','express JS'],
  },

  {
    title: 'Elaura Ecommerce Website',
    description: 'E-commerce website for clothing brand Elaura .',
    screenshot: '/projects/elra.jpg',
    liveUrl: 'https://elaura.co.in/',
    tech: [ 'Next.js','MongoDB','Razorpay'],
  },

  {
    title: 'Spiritual Root Yoga Video Streaming Platform',
    description: 'Video Streaming Platform for Spiritual Root Yoga.',
    screenshot: '/projects/sprt.jpg',
    liveUrl: 'https://www.spiritualrootglobal.com/',
    tech: [ 'Next.js','MongoDB','Stripe','Video Streaming'],
  },
  // ── Add more projects by copying the block above ────────────
];

const githubProjects: Project[] = [
  {
    title: 'Firebase CI/CD — Zero-Login Deployment',
    description:
      'Automated Firebase deployments via GitHub Actions using a CI token — so any developer can deploy with just 3 standard git commands, no Google sign-in or manual CLI steps required.',
    screenshot: '/GitHub-logo.jpg',
    githubLogo: true,
    liveUrl: null,
    tech: ['GitHub Actions', 'Firebase Hosting', 'CI Token', 'YAML', 'Shell'],
    detail: {
      problem:
        'Firebase Hosting is tied to Google accounts. Every developer who needed to deploy had to: sign into their Google account, run `firebase login`, select the correct project manually, and execute multiple CLI commands — making deployment error-prone and inaccessible to the full team.',
      sections: [
        {
          heading: 'What I built',
          points: [
            'A GitHub Actions workflow that runs on every push to the `main` branch.',
            'Firebase authentication handled entirely via a `FIREBASE_TOKEN` stored as a GitHub Secret — no Google sign-in needed.',
            'The workflow automatically installs dependencies, builds the project, and deploys to Firebase Hosting in one pipeline.',
            'Developers only need to run: `git add .` → `git commit -m "message"` → `git push` — and deployment happens automatically.',
          ],
        },
        {
          heading: 'How the CI token works',
          points: [
            'Generated once using `firebase login:ci` on an authorised machine.',
            'Stored securely in GitHub repository secrets as `FIREBASE_TOKEN`.',
            'The Actions workflow injects this token at deploy time — so no interactive login is ever required in CI.',
            'The token is scoped to the specific Firebase project, preventing accidental cross-project deployments.',
          ],
        },
      ],
      impact:
        'Reduced the deployment process from 6–8 manual steps to 3 standard git commands. Any team member can now trigger a production deployment without needing Firebase CLI access or a linked Google account — saving setup time and eliminating deployment errors.',
    },
  },
  {
    title: 'Automated Project Report Generator',
    description:
      'GitHub Action that auto-generates a complete, printable project report — commit history, developer contributions, timeline, and QA issues — all synced from GitHub\'s own API into a structured Markdown file.',
    screenshot: '/GitHub-logo.jpg',
    githubLogo: true,
    liveUrl: null,
    tech: ['GitHub Actions', 'GitHub API', 'Markdown', 'Node.js', 'YAML'],
    detail: {
      problem:
        'For long-running client projects (spanning months or years), there was no structured way to produce an audit report. Managers and clients had no single document showing what was built, who built it, the timeline, and what bugs were tracked — making internal audits and handovers painful and manual.',
      sections: [
        {
          heading: 'What the report contains',
          points: [
            'Full commit log with commit messages, author names, and timestamps — auto-fetched from the repo.',
            'Developer contribution breakdown — commits per developer over the project lifecycle.',
            'Project timeline from first commit to latest release, with milestone markers.',
            'QA-raised issues synced directly from GitHub Issues via the GitHub API — showing bug title, status (open/closed), assigned developer, and resolution date.',
            'A summary section showing total commits, total issues, bug-fix ratio, and active contributors.',
          ],
        },
        {
          heading: 'How it works',
          points: [
            'A GitHub Actions workflow is triggered on demand (via `workflow_dispatch`) or on every release tag.',
            'A Node.js script calls the GitHub REST API to fetch commits, contributors, and issues for the repository.',
            'The script processes and formats this data into a structured Markdown file — `PROJECT_REPORT.md`.',
            'The generated file is committed back to the repository automatically, keeping the report version-controlled and always up to date.',
            'The Markdown format is print-ready — can be exported to PDF for client handovers or internal audits.',
          ],
        },
      ],
      impact:
        'Eliminated manual audit report creation entirely. What previously took hours of copy-pasting from GitHub, Jira, and spreadsheets is now a single automated run. The report serves as a complete, printable record of the project — used for internal audits, client handovers, and sprint retrospectives.',
    },
  },
];

/* ──────────────────────────────────────────────────────────────
   TAB DEFINITIONS
────────────────────────────────────────────────────────────── */

const TABS = [
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    sublabel: 'Full-Stack Platforms',
    icon: ShoppingBag,
    accent: 'cyan',
    projects: ecommerceProjects,
  },
  {
    id: 'github',
    label: 'GitHub Automation',
    sublabel: 'DevOps & Tooling',
    icon: GitBranch,
    accent: 'violet',
    projects: githubProjects,
  },
  {
    id: 'automation',
    label: 'Power Automate',
    sublabel: 'Workflow Automation',
    icon: Zap,
    accent: 'yellow',
    projects: automationProjects,
  },
] as const;

type TabId = (typeof TABS)[number]['id'];

const accentMap: Record<string, { tab: string; badge: string; dot: string; glow: string }> = {
  yellow: {
    tab: 'border-yellow-400/50 bg-yellow-400/5 text-yellow-400',
    badge: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    dot: 'bg-yellow-400',
    glow: 'shadow-[0_0_20px_rgba(250,204,21,0.15)]',
  },
  cyan: {
    tab: 'border-cyan/50 bg-cyan/5 text-cyan',
    badge: 'text-cyan bg-cyan/10 border-cyan/20',
    dot: 'bg-cyan',
    glow: 'shadow-[0_0_20px_rgba(6,182,212,0.15)]',
  },
  violet: {
    tab: 'border-violet/50 bg-violet/5 text-violet',
    badge: 'text-violet bg-violet/10 border-violet/20',
    dot: 'bg-violet',
    glow: 'shadow-[0_0_20px_rgba(139,92,246,0.15)]',
  },
};

/* ──────────────────────────────────────────────────────────────
   GITHUB SVG LOGO
────────────────────────────────────────────────────────────── */

function GitHubLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.046.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.874.12 3.176.77.838 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.697.825.578C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────────
   PROJECT CARD
────────────────────────────────────────────────────────────── */

function ProjectCard({
  project,
  index,
  onReadMore,
  accent,
}: {
  project: Project;
  index: number;
  onReadMore: () => void;
  accent: string;
}) {
  const colors = accentMap[accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="group"
    >
      <div
        className={`glass-panel rounded-xl overflow-hidden transition-all duration-500 h-full flex flex-col hover:border-white/20 ${colors.glow}`}
      >
        {/* Thumbnail */}
        <div className="relative h-40 overflow-hidden bg-gradient-to-br from-surface via-surfaceHover to-surface flex items-center justify-center">
          {project.screenshot ? (
            <img
              src={project.screenshot}
              alt={project.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
          ) : project.githubLogo ? (
            <div className="flex flex-col items-center gap-3">
              <GitHubLogo className="w-14 h-14 text-white/20 group-hover:text-white/40 transition-colors duration-500" />
              <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">GitHub Actions</span>
            </div>
          ) : (
            <FolderGit2 className="w-9 h-9 text-white/10" />
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-base font-bold font-mono text-white mb-2 group-hover:text-white/90 transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          {/* Tech tags */}
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
          <div className="flex items-center gap-4 pt-3 border-t border-white/5">
            {project.detail && (
              <button
                onClick={onReadMore}
                className={`inline-flex items-center gap-1.5 text-xs font-mono transition-colors hover:text-white ${
                  accent === 'violet' ? 'text-violet' : accent === 'cyan' ? 'text-cyan' : 'text-yellow-400'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                Read More
              </button>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan hover:text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────
   DETAIL MODAL (Read More)
────────────────────────────────────────────────────────────── */

function DetailModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  if (!project || !project.detail) return null;
  const { detail } = project;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.93, y: 24 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.93, y: 24 }}
        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
        className="relative max-w-2xl w-full glass-panel rounded-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start gap-4 p-6 pb-4 border-b border-white/5">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
            <GitHubLogo className="w-5 h-5 text-white/60" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold font-mono text-white leading-tight">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {project.tech.map((t, i) => (
                <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet/10 text-violet border border-violet/20">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 p-6 space-y-6">
          {/* Problem */}
          <div>
            <p className="text-xs font-mono text-violet uppercase tracking-widest mb-2">The Problem</p>
            <p className="text-sm text-gray-300 leading-relaxed">{detail.problem}</p>
          </div>

          {/* Sections */}
          {detail.sections.map((sec, si) => (
            <div key={si}>
              <p className="text-xs font-mono text-cyan uppercase tracking-widest mb-3">{sec.heading}</p>
              <ul className="space-y-2">
                {sec.points.map((point, pi) => (
                  <li key={pi} className="flex items-start gap-3 text-sm text-gray-300">
                    <ChevronRight className="w-4 h-4 text-violet/60 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Impact */}
          <div className="rounded-xl bg-violet/5 border border-violet/15 p-4">
            <p className="text-xs font-mono text-violet uppercase tracking-widest mb-2">Impact</p>
            <p className="text-sm text-gray-300 leading-relaxed">{detail.impact}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────
   MAIN EXPORT
────────────────────────────────────────────────────────────── */

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState<TabId>('ecommerce');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const currentTab = TABS.find((t) => t.id === activeTab)!;

  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* BG accents */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-cyan/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 text-cyan font-mono text-sm mb-4 bg-cyan/5 border border-cyan/10 px-4 py-2 rounded-full">
            <Layers className="w-4 h-4" />
            <span>Featured Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-white mb-4">
            Things I've Built
          </h2>
          <p className="text-gray-400 font-mono max-w-xl mx-auto text-sm">
            A curated selection spanning workflow automation, full-stack e-commerce, and developer tooling on GitHub
          </p>
        </motion.div>

        {/* ── Tab Tiles ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            const c = accentMap[tab.accent];

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative group flex flex-col items-start gap-3 p-5 rounded-2xl border transition-all duration-300 text-left
                  ${isActive
                    ? `${c.tab} ${c.glow}`
                    : 'border-white/8 bg-white/3 text-gray-400 hover:border-white/15 hover:bg-white/5'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="tab-dot"
                    className={`absolute top-3 right-3 w-2 h-2 rounded-full ${c.dot}`}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                <div className={`p-2.5 rounded-xl border transition-colors duration-300 ${isActive ? c.tab : 'border-white/8 bg-white/5 text-gray-500 group-hover:text-gray-300'}`}>
                  <Icon className="w-5 h-5" />
                </div>

                <div>
                  <p className={`font-bold font-mono text-sm transition-colors duration-300 ${isActive ? '' : 'text-white/70 group-hover:text-white'}`}>
                    {tab.label}
                  </p>
                  <p className={`text-xs font-mono mt-0.5 transition-colors duration-300 ${isActive ? 'opacity-70' : 'text-gray-500 group-hover:text-gray-400'}`}>
                    {tab.sublabel}
                  </p>
                </div>

                <div className={`text-[10px] font-mono px-2 py-0.5 rounded-full border transition-colors duration-300 ${isActive ? c.badge : 'text-gray-600 bg-white/3 border-white/8'}`}>
                  {tab.projects.length} projects
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* ── Projects Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentTab.projects.map((project, idx) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={idx}
                onReadMore={() => setSelectedProject(project)}
                accent={currentTab.accent}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Detail Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <DetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
