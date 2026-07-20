import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  ChevronRight,
  Building2,
} from 'lucide-react';

const experiences = [
  {
    role: 'Technical Operations Lead',
    company: 'Webgeon Results Private Limited',
    period: '2025',
    fullPeriod: 'June 2025 – Present',
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
    period: '2024',
    fullPeriod: 'Oct 2024 – June 2025',
    type: 'Internship',
    highlights: [
      'Built and automated small internal tools, scripts, and workflows to reduce manual engineering operations.',
      'Automated Deployment process of Static Business website using CI/CD and GitHub Actions.',
      'Assisted the HR Manager in key people operations tasks including payslip generation, employee onboarding, attendance, and record management.',
      'Structured employee lifecycle documentation and coordinated basic team support tasks.'
    ],
    tech: [ 'CI/CD', 'HR Payroll Systems', 'Firebase'],
  },
  {
    role: 'Treasurer and Event Coordinator',
    company: 'IEEE FISAT SB',
    period: '2023',
    fullPeriod: 'May 2023 – April 2025',
    type: 'Volunteer',
    highlights: [
      'Managed end-to-end financial operations for the student branch — overseeing budgeting, fund allocation, and expense tracking.',
      'Sourced and negotiated with vendors, securing partnerships for technical events and workshops.',
      'Served as main coordinator for events, managing logistics, vendor payments, and day-of execution.'
    ],
    tech: ['Financial Operations', 'Budgeting', 'Vendor Management', 'Event Logistics'],
  },
];

// Pre-generated static particles config to avoid hydration mismatch
const STATIC_PARTICLES = Array.from({ length: 28 }).map((_, i) => {
  const seed1 = Math.sin(i * 12.34);
  const seed2 = Math.cos(i * 56.78);
  return {
    id: i,
    offset: 25 + Math.abs(seed1) * 50, // 25% to 75%
    top: `${Math.abs(seed2) * 100}%`,
    size: 1.5 + Math.abs(seed1) * 2.5, // 1.5px to 4px
    duration: 6 + Math.abs(seed2) * 6, // 6s to 12s
    delay: Math.abs(seed1) * 4,
    xDrift: 4 + Math.abs(seed2) * 8,
    yDrift: 15 + Math.abs(seed1) * 15,
  };
});

export function Experience() {
  return (
    <section id="experience" className="py-28 px-4 md:px-8 w-full max-w-6xl z-10 relative">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 text-[#81D8D0] font-mono text-[11px] mb-4 bg-white/5 border border-white/5 px-4 py-2 rounded-full uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work Experience</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-4 tracking-tight">
            Professional Journey
          </h2>
          <p className="text-white/40 text-sm max-w-lg mx-auto font-sans leading-relaxed">
            Building and automating technical operations that make a real difference, delivering scalable products.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Base vertical line (static background) */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10" />

          {/* Floating particle clusters behind center line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-12 pointer-events-none overflow-hidden z-0">
            {STATIC_PARTICLES.map((p) => (
              <motion.div
                key={p.id}
                style={{
                  position: 'absolute',
                  left: `${p.offset}%`,
                  top: p.top,
                  width: p.size,
                  height: p.size,
                  borderRadius: '50%',
                  backgroundColor: '#81D8D0',
                  opacity: 0.15,
                }}
                animate={{
                  y: [-p.yDrift, p.yDrift, -p.yDrift],
                  x: [-p.xDrift, p.xDrift, -p.xDrift],
                  opacity: [0.08, 0.25, 0.08],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <div className="space-y-24">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial="inactive"
                  whileInView="active"
                  viewport={{ once: true, amount: 0.4 }}
                  className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0 w-full"
                >
                  {/* Timeline Station Point */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center group shadow-xl relative">
                      {/* Active station node */}
                      <motion.div 
                        variants={{
                          inactive: { scale: 1, backgroundColor: "rgba(255, 255, 255, 0.15)" },
                          active: { 
                            scale: 1.1, 
                            backgroundColor: "#81D8D0",
                            boxShadow: "0 0 10px #81D8D0"
                          }
                        }}
                        className="w-2.5 h-2.5 rounded-full transition-all duration-500"
                      />

                      {/* Active particle burst aura */}
                      <motion.div
                        variants={{
                          inactive: { opacity: 0 },
                          active: { opacity: 0.7 }
                        }}
                        className="absolute inset-[-12px] pointer-events-none overflow-visible"
                      >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#81D8D0]/30 animate-ping" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-[#81D8D0]/40 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Left Column (Desktop) */}
                  <div className="w-full md:w-1/2 md:pr-12 md:text-right flex flex-col items-start md:items-end justify-center ml-10 md:ml-0 order-2 md:order-1">
                    {isEven ? (
                      /* Card is on left side */
                      <TimelineCard exp={exp} />
                    ) : (
                      /* SVG decoration on left side */
                      <TimelineVisual index={idx} />
                    )}
                  </div>

                  {/* Right Column (Desktop) */}
                  <div className="w-full md:w-1/2 md:pl-12 flex flex-col items-start justify-center ml-10 md:ml-0 order-3 md:order-2">
                    {!isEven ? (
                      /* Card is on right side */
                      <TimelineCard exp={exp} />
                    ) : (
                      /* SVG decoration on right side */
                      <TimelineVisual index={idx} />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   TIMELINE CARD COMPONENT (WITH INTEGRATED YEAR HEADER)
   ────────────────────────────────────────────────────────────── */
function TimelineCard({ exp }: { exp: any }) {
  return (
    <motion.div
      variants={{
        inactive: { opacity: 0, y: 30, scale: 0.95 },
        active: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, type: 'spring', damping: 20 } }
      }}
      className="w-full max-w-lg"
    >
      <div className="ios-glass rounded-[32px] p-6 hover:bg-white/[0.04] transition-all duration-500 border border-white/5 hover:border-[#81D8D0]/20 group cursor-default relative overflow-hidden shadow-xl">
        {/* Glow border matching active state */}
        <motion.div 
          variants={{
            inactive: { opacity: 0 },
            active: { opacity: 0.12 }
          }}
          className="absolute inset-0 bg-gradient-to-br from-[#81D8D0] to-transparent pointer-events-none filter blur-[40px] transition-opacity duration-700"
        />

        <div className="space-y-4 relative z-10">
          {/* Card Header */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#81D8D0] bg-[#81D8D0]/10 border border-[#81D8D0]/20 px-2.5 py-1 rounded-full">
                {exp.fullPeriod}
              </span>
              <span className="text-[10px] font-mono text-white/40 bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                {exp.type}
              </span>
            </div>
            
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white group-hover:text-[#81D8D0] transition-colors leading-tight font-sans">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-1.5 mt-1.5 text-xs text-white/50 font-mono">
                  <Building2 className="w-3.5 h-3.5 text-[#81D8D0]" />
                  <span>{exp.company}</span>
                </div>
              </div>

              {/* Large year inside card header, transitioning style */}
              <motion.span
                variants={{
                  inactive: { WebkitTextStroke: "1.5px rgba(255,255,255,0.12)", color: "transparent" },
                  active: { 
                    color: "#81D8D0", 
                    WebkitTextStroke: "1.5px transparent",
                    filter: "drop-shadow(0 0 10px rgba(129,216,208,0.4))"
                  }
                }}
                className="text-4xl md:text-5xl font-black font-sans leading-none tracking-tighter transition-all duration-700 select-none"
              >
                {exp.period}
              </motion.span>
            </div>
          </div>

          {/* Highlights */}
          <ul className="space-y-2 pt-3 border-t border-white/5">
            {exp.highlights.map((highlight: string, i: number) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-white/60 text-xs leading-relaxed"
              >
                <ChevronRight className="w-3.5 h-3.5 text-[#81D8D0]/60 mt-0.5 shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
            {exp.tech.map((t: string, i: number) => (
              <span
                key={i}
                className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/40 border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────
   TIMELINE DECORATIVE VISUALS (SVGs ONLY, HIDDEN ON MOBILE)
   ────────────────────────────────────────────────────────────── */
function TimelineVisual({ index }: { index: number }) {
  return (
    <motion.div
      variants={{
        inactive: { opacity: 0.15, scale: 0.9, y: 15 },
        active: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
      }}
      className="hidden md:flex items-center w-full justify-center py-4"
    >
      <div className="relative w-36 h-20 bg-white/0 overflow-visible">
        {index === 0 && (
          /* Visual 1: Workflow automation connections network */
          <svg className="w-full h-full overflow-visible" viewBox="0 0 144 80">
            {/* Connection Paths */}
            <motion.path 
              d="M 20 40 L 72 40 M 72 40 L 124 15 M 72 40 L 124 65" 
              stroke="rgba(255,255,255,0.05)" 
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <motion.path 
              d="M 20 40 L 72 40 M 72 40 L 124 15 M 72 40 L 124 65" 
              stroke="#81D8D0" 
              strokeWidth="1.5"
              variants={{
                inactive: { pathLength: 0 },
                active: { pathLength: 1 }
              }}
              transition={{ duration: 2.2, repeat: Infinity, repeatType: "loop" }}
            />
            {/* Interactive Nodes */}
            <circle cx="20" cy="40" r="3" fill="#81D8D0" />
            <circle cx="72" cy="40" r="4.5" fill="#81D8D0" />
            <circle cx="124" cy="15" r="3" fill="#81D8D0" />
            <circle cx="124" cy="65" r="3" fill="#81D8D0" />

            <circle cx="124" cy="15" r="5" stroke="#81D8D0" strokeWidth="1" fill="none" className="animate-pulse" />
          </svg>
        )}

        {index === 1 && (
          /* Visual 2: Bezier curve animation */
          <svg className="w-full h-full overflow-visible" viewBox="0 0 144 80">
            {/* Grid line background */}
            <line x1="10" y1="65" x2="134" y2="65" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            
            {/* Bezier Path */}
            <motion.path
              d="M 15 65 Q 72 0 129 65"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="2"
            />
            <motion.path
              d="M 15 65 Q 72 0 129 65"
              fill="none"
              stroke="#81D8D0"
              strokeWidth="2"
              variants={{
                inactive: { pathLength: 0 },
                active: { pathLength: 1 }
              }}
              transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
            />

            {/* Bezier handles */}
            <line x1="15" y1="65" x2="72" y2="0" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <line x1="129" y1="65" x2="72" y2="0" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

            <circle cx="72" cy="0" r="3" fill="#81D8D0" />
            <circle cx="15" cy="65" r="3" fill="#81D8D0" />
            <circle cx="129" cy="65" r="3" fill="#81D8D0" />
          </svg>
        )}

        {index === 2 && (
          /* Visual 3: Connected Ring nodes matrix */
          <svg className="w-full h-full overflow-visible" viewBox="0 0 144 80">
            <motion.g animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} style={{ transformOrigin: '72px 40px' }}>
              {/* Outer orbit */}
              <circle cx="72" cy="40" r="28" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" fill="none" />
              
              {/* Connected planet dots */}
              <circle cx="44" cy="40" r="3" fill="#81D8D0" />
              <circle cx="100" cy="40" r="3" fill="#81D8D0" />
              <circle cx="72" cy="12" r="3" fill="#81D8D0" />
              <circle cx="72" cy="68" r="3" fill="#81D8D0" />
            </motion.g>

            {/* Center Hub */}
            <circle cx="72" cy="40" r="6" fill="#81D8D0" />
            <circle cx="72" cy="40" r="10" stroke="#81D8D0" strokeWidth="1" fill="none" className="animate-ping" />
          </svg>
        )}
      </div>
    </motion.div>
  );
}




