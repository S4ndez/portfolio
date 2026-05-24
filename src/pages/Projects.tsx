import React from 'react';
import {
  Terminal,
  Github,
  ExternalLink,
  FolderGit2,
  Activity,
  LayoutDashboard,
  Layers } from
'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { Badge } from '../components/Badge';
export function Projects() {
  const projects = [
  {
    title: 'GitHub Automation System',
    role: 'Ops + Developer',
    icon: <FolderGit2 className="w-6 h-6 text-cyan" />,
    description:
    'Automated PR reviews, tagging, versioning, and deployment triggers.',
    impact: 'Fewer manual steps, faster releases, standardized workflow.',
    tech: ['GitHub Actions', 'Bash', 'Node.js', 'Webhooks'],
    color: 'cyan'
  },
  {
    title: 'CI/CD Pipeline Optimization',
    role: 'Ops + Developer',
    icon: <Activity className="w-6 h-6 text-blue" />,
    description:
    'Implemented workflow that reduced deployment time. Added checks, validations, and automated reports.',
    impact: 'Reduced deployment time by 40%, zero-downtime releases.',
    tech: ['CI/CD', 'Docker', 'Firebase', 'Shell'],
    color: 'blue'
  },
  {
    title: 'Internal Tools & Dashboards',
    role: 'Ops + Developer',
    icon: <LayoutDashboard className="w-6 h-6 text-violet" />,
    description:
    'Custom dashboards for monitoring or workflow automation. Scripts to reduce manual operations tasks.',
    impact:
    'Centralized visibility, eliminated 10+ hours of manual work weekly.',
    tech: ['React', 'Firebase', 'REST APIs', 'Python'],
    color: 'violet'
  },
  {
    title: 'Client Release Governance',
    role: 'Technical Operations Lead',
    icon: <Layers className="w-6 h-6 text-cyan" />,
    description:
    'Utility tools used across projects to ensure deployment governance and production validation.',
    impact: 'Standardized release process across 5+ client projects.',
    tech: ['GitHub Actions', 'Jira API', 'Slack Bots'],
    color: 'cyan'
  }];

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-cyan font-mono">
          <Terminal className="w-5 h-5" />
          <span>$ ls -la ~/projects</span>
        </div>
        <h1 className="text-4xl font-bold font-mono text-white">
          High-Impact Projects
        </h1>
        <p className="text-gray-400 font-mono max-w-2xl">
          Showcasing technical work focused on automation, internal tooling, and
          operational efficiency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) =>
        <GlassCard
          key={idx}
          hoverEffect
          delay={idx * 0.1}
          className="flex flex-col h-full">
          
            <div className="flex items-start justify-between mb-4">
              <div
              className={`p-3 rounded-lg bg-${project.color}/10 border border-${project.color}/20`}>
              
                {project.icon}
              </div>
              <div className="flex gap-2">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="mb-4 flex-grow">
              <h3 className="text-xl font-bold font-mono text-white mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-cyan font-mono mb-4">
                Role: {project.role}
              </p>

              <div className="space-y-3 text-sm text-gray-300">
                <p>{project.description}</p>
                <div className="bg-white/5 p-3 rounded-md border border-white/10 border-l-2 border-l-cyan">
                  <strong className="text-white font-mono text-xs uppercase tracking-wider block mb-1">
                    Impact
                  </strong>
                  {project.impact}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
              {project.tech.map((tech, i) =>
            <Badge key={i} variant="gray">
                  {tech}
                </Badge>
            )}
            </div>
          </GlassCard>
        )}
      </div>
    </div>);

}