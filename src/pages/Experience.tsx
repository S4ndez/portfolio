import React from 'react';
import { Terminal, Briefcase, GitCommit, Calendar } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
export function Experience() {
  const experiences = [
  {
    role: 'Technical Operations Lead',
    company: 'Current',
    period: 'Present',
    highlights: [
    'Built and optimized GitHub Actions automations across multiple repositories',
    'Implemented CI/CD pipelines improving deployment consistency and speed',
    'Developed internal tools for automation and dashboards for operational visibility',
    'Managed releases, monitored systems, and resolved production issues',
    'Drove process automation and reduced manual workload across teams',
    'Led multiple technical projects from initiation to delivery']

  },
  {
    role: 'Technical Operations Intern',
    company: 'Previous',
    period: 'Past',
    highlights: [
    'Supported CI/CD pipelines, code deployments, and GitHub automation setups',
    'Built small tools/scripts to automate repetitive tasks',
    'Supported documentation, monitoring, and issue triage',
    'Assisted HR Manager in basic documentation and payslip generation']

  }];

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-cyan font-mono">
          <Terminal className="w-5 h-5" />
          <span>$ ./show_experience.sh</span>
        </div>
        <h1 className="text-4xl font-bold font-mono text-white">Experience</h1>
      </div>

      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {experiences.map((exp, idx) =>
        <div
          key={idx}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-surface shadow-neon-cyan text-cyan shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Briefcase className="w-4 h-4" />
            </div>

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
              <GlassCard hoverEffect delay={idx * 0.2}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold font-mono text-white group-hover:text-cyan transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) =>
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-300 text-sm">
                  
                      <GitCommit className="w-4 h-4 text-cyan/50 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                )}
                </ul>
              </GlassCard>
            </div>
          </div>
        )}
      </div>
    </div>);

}