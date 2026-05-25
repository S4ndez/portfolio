import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  GitCommit,
  ChevronRight,
  Building2,
} from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

const experiences = [
  {
    role: 'Technical Operations Lead',
    company: 'Webgeon Results Private Limited',
    period: 'June 2025 – Present',
    type: 'Full-time',
    highlights: [
      'Own end-to-end technical delivery — from requirements gathering and architecture planning to deployment and post-launch support — acting as the single point of accountability for every release.',
      'Led SEO operations across projects: implemented OG tags, robots.txt, sitemaps, and favicons, consistently achieving 100/100 Lighthouse SEO scores.',
      'Integrated Meta Pixel, Google Tag Manager, and Microsoft Clarity across platforms — setting up custom events, heatmaps, scroll-depth analytics, rage-click insights, and session recordings for data-driven decision-making.',
      'Delivered 30+ E-commerce Projects and acted as the primary delivery manager — coordinating client expectations, sprint planning, and cross-team execution from kickoff to sign-off.',
      'Act as the bridge between clients and the development team: converting sales handovers into SRS, defining architecture, planning implementation logic, and guiding dev & QA teams through execution.',
      'Collaborated with the CTO on complex system design decisions, and drove performance improvements — optimizing API calls, fixing bottlenecks, implementing automatic OTP submission, and improving page load times.',
      'Integrated third-party services including payment gateways, logistics APIs (Shiprocket, DTDC), and e-commerce platforms — deepening expertise in distributed systems and real-world production integrations.',
    ],
    tech: ['React', 'Next.js', 'MongoDB', 'CI/CD', 'GitHub Actions', 'SEO', 'Meta Pixel', 'GTM', 'Performance Optimization', 'Razorpay', 'Shiprocket'],
  },
  {
    role: 'HR and Technical Operations Intern',
    company: 'Webgeon Results Private Limited',
    period: 'Oct 2024 – June 2025',
    type: 'Internship',
    highlights: [
      'Built and automated small internal tools, scripts, and workflows to reduce manual engineering operations.',
      'Automated Deplyment process of Static Business website using CI/CD and Github Actions.',
      'Assisted the HR Manager in key people operations tasks including payslip generation, employee onboarding, attendance, and record management.',
      'Structured employee lifecycle documentation and coordinated basic team support tasks.'
    ],
    tech: [ 'CI/CD', 'HR Payroll Systems', 'Firebase'],
  },
  {
    role: 'Treasurer and Event Coordinator',
    company: 'IEEE FISAT SB',
    period: 'May 2023 – April 2025',
    type: 'Volunteer',
    highlights: [
      'Managed end-to-end financial operations for the student branch — overseeing budgeting, fund allocation, and expense tracking.',
      'Sourced and negotiated with vendors, securing partnerships for technical events and workshops.',
      'Served as main coordinator for events, managing logistics, vendor payments, and day-of execution.'
    ],
    tech: ['Financial Operations', 'Budgeting', 'Vendor Management', 'Event Logistics'],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-cyan font-mono text-sm mb-4 bg-cyan/5 border border-cyan/10 px-4 py-2 rounded-full">
            <Briefcase className="w-4 h-4" />
            <span>Work Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-white mb-4">
            Professional Journey
          </h2>
          <p className="text-gray-400 font-mono max-w-xl mx-auto">
            Building and automating technical operations that make a real
            difference
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan/50 via-blue/50 to-violet/50" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0
                    ? 'md:flex-row'
                    : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-cyan border-4 border-background shadow-neon-cyan" />
                </div>

                {/* Spacer for one side */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content Card */}
                <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                  <GlassCard hoverEffect delay={0}>
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-bold font-mono text-white">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Building2 className="w-4 h-4 text-cyan" />
                            <span className="text-cyan font-mono text-sm">
                              {exp.company}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400 bg-white/5 px-3 py-1.5 rounded-full">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </div>
                          <span className="text-xs font-mono text-violet bg-violet/10 border border-violet/20 px-2 py-1 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2.5">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-300 text-sm"
                          >
                            <ChevronRight className="w-4 h-4 text-cyan/60 mt-0.5 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                        {exp.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
