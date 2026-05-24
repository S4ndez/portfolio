import React from 'react';
import { Terminal, Cpu, GitBranch, Settings, Code, Server } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { Badge } from '../components/Badge';
export function About() {
  const skills = [
  {
    category: 'Technical Operations & DevOps',
    icon: <Server className="w-5 h-5 text-cyan" />,
    items: [
    'CI/CD Pipelines',
    'GitHub Actions Automation',
    'GitHub Webhooks',
    'Deployment & Release Management',
    'Firebase Hosting & Functions',
    'Monitoring, Alerts & Issue Tracking']

  },
  {
    category: 'Development (Internal Tools)',
    icon: <Code className="w-5 h-5 text-blue" />,
    items: [
    'Script Automation',
    'Internal Dashboards',
    'API Integrations',
    'Workflow Optimization Tools',
    'CLI Tools or Utility Scripts']

  },
  {
    category: 'Operational Engineering',
    icon: <Settings className="w-5 h-5 text-violet" />,
    items: [
    'Process Optimization',
    'Cross-Team Coordination',
    'Documentation & Runbooks',
    'Production Validation',
    'Build & Deployment Governance']

  }];

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-cyan font-mono">
          <Terminal className="w-5 h-5" />
          <span>$ cat about.md</span>
        </div>
        <h1 className="text-4xl font-bold font-mono text-white">About Me</h1>
      </div>

      <GlassCard className="prose prose-invert max-w-none">
        <div className="space-y-6 text-gray-300 leading-relaxed font-sans text-lg">
          <p>
            <strong className="text-white font-mono">
              Technical Operations Lead
            </strong>{' '}
            experienced in improving engineering workflows, automating
            processes, and managing deployments.
          </p>
          <p>
            Skilled in GitHub Actions, CI/CD, Firebase workflows, internal
            tooling, monitoring, documentation, and DevOps collaboration.
          </p>
          <p>
            Built multiple internal tools, dashboards, and automations that
            reduced manual effort across teams. Worked on numerous client and
            internal projects — handling releases, issue resolution, and
            operational engineering tasks.
          </p>
          <p className="text-sm text-gray-500 italic">
            * Past experience assisting basic HR processes like employee
            documentation and payslip generation.
          </p>
          <p className="text-cyan font-medium">
            Passionate about process automation, technical systems, and solving
            operational bottlenecks with engineering thinking.
          </p>
        </div>
      </GlassCard>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold font-mono text-white flex items-center gap-2">
          <Cpu className="w-6 h-6 text-cyan" />
          Technical Arsenal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skillGroup, idx) =>
          <GlassCard key={idx} delay={idx * 0.1} hoverEffect>
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                {skillGroup.icon}
                <h3 className="font-mono font-bold text-white text-sm">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) =>
              <Badge
                key={i}
                variant={idx === 0 ? 'cyan' : idx === 1 ? 'blue' : 'violet'}>
                
                    {item}
                  </Badge>
              )}
              </div>
            </GlassCard>
          )}
        </div>
      </div>
    </div>);

}