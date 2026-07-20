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
  ArrowUpRight,
  Play,
  Settings,
  Users,
  FileText,
  Mail,
  Calendar,
  Cloud,
  Cpu,
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
  githubLogo?: boolean;
  liveUrl: string | null;
  tech: string[];
  detail: {
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
    screenshot: null,
    liveUrl: null,
    tech: ['Power Automate', 'Microsoft Forms', 'OneDrive', 'PDF Conversion'],
    detail: {
      problem:
        'Manual data entry was required to transfer survey answers from Microsoft Forms into formal PDF records for HR archives, causing offboarding delays and administrative overhead.',
      sections: [
        {
          heading: 'Key Details',
          points: [
            'Microsoft Forms submission triggers the cloud flow in real time.',
            'Dynamically generates structured HTML template with employee answers.',
            'Converts HTML to PDF using OneDrive conversion actions.',
            'Saves the file directly to SharePoint and sends an email notification to the HR team.',
          ],
        },
      ],
      impact:
        'Fully automated the document creation workflow, saving HR teams approximately 15 minutes per employee and eliminating manual transposition errors.',
    },
  },
  {
    title: 'Automated Support Ticketing System',
    description:
      'Built a ticketing system that auto-replies to support emails with a Ticket ID, forwards the issue to a developer channel, and sends automated resolution emails once sorted.',
    screenshot: null,
    liveUrl: null,
    tech: ['Power Automate', 'Outlook', 'Teams/Slack', 'Email Automation'],
    detail: {
      problem:
        'Customer support emails were manually triaged, resulting in delayed responses, lack of tracking, and critical bugs slipping through.',
      sections: [
        {
          heading: 'Key Details',
          points: [
            'Triggers automatically when a new email arrives in the support mailbox.',
            'Generates a unique Ticket ID and sends an instant acknowledgment email to the client.',
            'Posts details directly to a dedicated developer channel in MS Teams/Slack.',
            'Monitors status updates to send automated resolution follow-up emails.',
          ],
        },
      ],
      impact:
        'Reduced first-response time to under 2 minutes and eliminated missed tickets by ensuring visibility across development teams.',
    },
  },
  {
    title: 'HR Engagement Scheduled Flows',
    description:
      'Created scheduled cloud flows to automatically send greetings for festivals, employee birthdays, and work anniversaries, boosting team morale and simplifying HR tasks.',
    screenshot: null,
    liveUrl: null,
    tech: ['Power Automate', 'Scheduled Flows', 'SharePoint', 'Outlook'],
    detail: {
      problem:
        'Manually tracking and sending anniversary/birthday greetings was time-consuming for the HR department, leading to missed dates and low team engagement.',
      sections: [
        {
          heading: 'Key Details',
          points: [
            'Scheduled to run daily at 9:00 AM to scan employee directories.',
            'Calculates birth dates and work anniversary milestones automatically.',
            'Sends personalized graphic cards and emails using Outlook.',
            'Pulls updated employee data directly from a SharePoint list.',
          ],
        },
      ],
      impact:
        'Achieved 100% on-time delivery of employee greetings, boosting team morale and saving HR several hours of monthly tracking.',
    },
  },
];

const ecommerceProjects: Project[] = [
  {
    title: 'Rajalaxmi Textiles B2B Ecommerce Website',
    description: 'Developed a Full stack B2B e-commerce website with next js and Razorpay Payment Gateway integration.',
    screenshot: '/projects/raju.jpg',
    liveUrl: 'https://www.rajlaxmitextiles.com/',
    tech: ['Next.js', 'MongoDB', 'Razorpay'],
    detail: {
      problem:
        'B2B bulk buyers needed a robust platform to browse fabrics and place bulk orders with secure payment processing.',
      sections: [
        {
          heading: 'Key Details',
          points: [
            'Custom bulk pricing tiers based on quantity ordered.',
            'Seamless Razorpay checkout integration for secure transactions.',
            'Responsive catalog optimized for mobile browsing.',
            'Admin dashboard for order management and inventory tracking.',
          ],
        },
      ],
      impact: 'Streamlined bulk purchasing operations and increased digital order volume.',
    },
  },
  {
    title: 'Taviya E-commerce Website',
    description: 'Next js Ecommerce website with Shiprocket and Razorpay Payment Gateway integration.',
    screenshot: '/projects/tavya.jpg',
    liveUrl: 'https://www.taviyastudio.in/',
    tech: ['Next.js', 'MongoDB', 'Razorpay', 'Shiprocket'],
    detail: {
      problem:
        'The client needed an integrated shopping experience combining online store navigation, payment processing, and automated shipping.',
      sections: [
        {
          heading: 'Key Details',
          points: [
            'Dynamic product catalog built using Next.js.',
            'Full checkout integration with Razorpay.',
            'Shiprocket shipping carrier integration for automated tracking and logistics.',
            'Responsive design for seamless mobile and desktop browsing.',
          ],
        },
      ],
      impact: 'Automated order fulfillment and shipping processes, reducing administrative overhead.',
    },
  },
  {
    title: 'Elaura Ecommerce Website',
    description: 'E-commerce website for clothing brand Elaura.',
    screenshot: '/projects/elra.jpg',
    liveUrl: 'https://elaura.co.in/',
    tech: ['Next.js', 'MongoDB', 'Razorpay'],
    detail: {
      problem:
        'A modern clothing brand needed a visually appealing storefront with smooth transitions and fast loading times to showcase apparel.',
      sections: [
        {
          heading: 'Key Details',
          points: [
            'Aesthetic catalog with high-quality product images.',
            'Optimized checkout experience with Razorpay.',
            'Secure MongoDB backend for user accounts and shopping sessions.',
            'Tailored styling matching the brand\'s identity.',
          ],
        },
      ],
      impact: 'Improved user retention and customer conversion rate.',
    },
  },
  {
    title: 'Spiritual Root Yoga Video Streaming Platform',
    description: 'Video Streaming Platform for Spiritual Root Yoga.',
    screenshot: '/projects/sprt.jpg',
    liveUrl: 'https://www.spiritualrootglobal.com/',
    tech: ['Next.js', 'MongoDB', 'Stripe', 'Video Streaming'],
    detail: {
      problem:
        'Users needed a subscription-based platform to access and stream yoga tutorial videos on demand.',
      sections: [
        {
          heading: 'Key Details',
          points: [
            'Subscription model and paywall powered by Stripe.',
            'Secure video streaming and storage integrations.',
            'Custom user profiles to track course progress.',
            'Search and filter functionality for video categories.',
          ],
        },
      ],
      impact: 'Created a new recurring revenue stream and expanded user access to tutorials globally.',
    },
  },
  {
    title: 'Kaishi E-commerce Website',
    description: 'Full responsive and dynamic e-commerce website for a clothing brand in Kerala with integrated courier and payment networks.',
    screenshot: '/projects/kais.jpg',
    liveUrl: null,
    tech: ['Next.js', 'MongoDB', 'Razorpay', 'Shiprocket'],
    detail: {
      problem: 'A new Kerala-based clothing brand needed an interactive, responsive online store to handle payment collections and courier integrations seamlessly.',
      sections: [
        {
          heading: 'Key Details',
          points: [
            'Fully responsive and dynamic storefront optimized for mobile shopping.',
            'Razorpay payment gateway integration for secure checkout workflows.',
            'Shiprocket courier API integration to automate shipping and package tracking.',
          ],
        },
      ],
      impact: 'Provided a complete direct-to-consumer online presence, automating sales and order shipping processes.',
    },
  },
  {
    title: 'Swaarasya E-commerce & POS Platform',
    description: 'Hybrid e-commerce storefront integrated with offline POS and order management systems.',
    screenshot: '/projects/swya.jpg',
    liveUrl: null,
    tech: ['Next.js', 'Node.js', 'MongoDB', 'POS Integration'],
    detail: {
      problem: 'The merchant struggled to manage inventory and sales records across separate online storefronts and offline retail channels.',
      sections: [
        {
          heading: 'Key Details',
          points: [
            'Unified offline Point of Sale (POS) dashboard to capture physical store transactions.',
            'Omnichannel order management to process both online e-commerce and offline store orders.',
            'Automated invoice printing module for store billing and receipts.',
            'Synchronized inventory system updating automatically across all sales channels.',
          ],
        },
      ],
      impact: 'Consolidated online and offline business operations into a single platform, eliminating discrepancy in inventory and records.',
    },
  },
];

const saasProjects: Project[] = [
  {
    title: 'Nexchat WhatsApp Automation SaaS',
    description: 'SaaS platform enabling automated customer support, broadcast messaging, and direct Meta API integration to replace high-paying 3rd party tools.',
    screenshot: '/nexchat.jpg',
    liveUrl: 'https://web.webgeon.com/',
    tech: ['Nextjs', 'Node.js', 'MongoDB', 'Meta Cloud API', 'Razorpay' , 'MessageQue'],
    detail: {
      problem:
        'Businesses struggled to automate repetitive messaging tasks and relied on expensive third-party WhatsApp integration software, which increased operating costs and limited flexibility.',
      sections: [
        {
          heading: 'Key Details',
          points: [
            'Developed a WhatsApp SaaS product where clients / businesses can easily connect their own WhatsApp Business Account.',
            'Researched the Meta Graph API documentation and directly integrated it to allow clients to seamlessly send notifications.',
            'Enabled clients to automate their repetitive manual tasks and communication workflows.',
            'Integrated an advanced WhatsApp chatbot to handle automatic customer responses and flows.',
            'Allowed multiple customer support agents to manage chats concurrently in real-time.',
            'Implemented interactive customized messaging templates and customized chat flows.',
            'Designed automatic notifications for cart abandonment recovery via WhatsApp messaging.',
          ],
        },
      ],
      impact: 'Replaced high-paying third-party WhatsApp integration software, successfully creating a new recurring revenue source for the company while letting clients automate repetitive manual workflows.',
    },
  },
];

const otherSoftwareProjects: Project[] = [
  {
    title: 'Qsuite 360',
    description: 'All-in-one internal project management platform uniting business development, project managers, developers, finance, and QA.',
    screenshot: null,
    liveUrl: 'https://qsuite360.webgeon.com/',
    tech: ['React', 'Express JS', 'GitHub API' ,'Godaddy API ' , 'Razorpay Payment Gateway'],
    detail: {
      problem:
        'Teams in different domains operated in silos across scattered tools (for quotes, payment tracking, signing, tasks, commits, and QA checklists), causing delays and communication gaps.',
      sections: [
        {
          heading: 'Key Details',
          points: [
            'Business Development: Enabled engineering and sales teams to easily generate and send custom quotations.',
            'Finance & Renewals: Built central tracking tools for monitoring payments and client subscription renewals.',
            'Onboarding & e-Signing: Empowered project managers to onboard clients, assign team members, and send contracts for secure e-signing.',
            'Developer & QA Hub: Integrated with GitHub API to sync active developer commits, sprint tasks, and review pipelines.',
            'Quality Assurance: Allowed QA engineers to create testing checklists and upload project handover documentation in one place.',
          ],
        },
      ],
      impact: 'Created a single unified tool where employees across all domains can collaborate, dramatically increasing sprint velocity and transparency.',
    },
  },
  {
    title: 'Webgeon HRMS',
    description: 'HRMS web application and companion mobile apps developed to manage employee lifecycles, payroll, recruitment, and HR operations.',
    screenshot: null,
    liveUrl: 'https://hrms.webgeon.com/',
    tech: ['React', 'Express JS', 'Node.js'],
    detail: {
      problem:
        'The company lacked a centralized HR tool to automate employee check-ins, payroll sheets, and talent recruitment processes in-house.',
      sections: [
        {
          heading: 'Key Details',
          points: [
            'Mobile Apps: Released companion mobile applications for employees to manage their attendance and employee profiles on the go.',
            'Document Workflows: Enabled sending automated offer letters and onboarding packets directly through the platform.',
            'Recruitment & Filtration: Integrated active resume filtration features to screen candidates and streamline hiring.',
            'Self-Service Portal: Handled employee check-in logs, leave approvals, and automated payslip generation.',
          ],
        },
      ],
      impact: 'Empowered employees to manage their own records via mobile and web, while reducing HR manual workload and paperwork.',
    },
  },
];

const githubProjects: Project[] = [
  {
    title: 'Firebase CI/CD — Zero-Login Deployment',
    description:
      'Automated Firebase deployments via GitHub Actions using a CI token — so any developer can deploy with just 3 standard git commands, no Google sign-in or manual CLI steps required.',
    screenshot: null,
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
    screenshot: null,
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
    id: 'saas_softwares',
    label: 'SaaS & Softwares',
    sublabel: 'Custom Products',
    icon: Cloud,
    accent: '#81D8D0',
    projects: [...saasProjects, ...otherSoftwareProjects],
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    sublabel: 'Full-Stack Platforms',
    icon: ShoppingBag,
    accent: '#81D8D0',
    projects: ecommerceProjects,
  },
  {
    id: 'github',
    label: 'GitHub Automation',
    sublabel: 'DevOps & Tooling',
    icon: GitBranch,
    accent: '#81D8D0',
    projects: githubProjects,
  },
  {
    id: 'automation',
    label: 'Power Automate',
    sublabel: 'Workflow Automation',
    icon: Zap,
    accent: '#81D8D0',
    projects: automationProjects,
  },
] as const;

type TabId = (typeof TABS)[number]['id'];

/* ──────────────────────────────────────────────────────────────
   PROJECT CARD VISUAL MOCKS (WOWing visual aesthetics)
 ────────────────────────────────────────────────────────────── */

function ProjectVisual({ project }: { project: Project }) {
  // If screenshot is present, we try to load it. For other custom ones, we build gorgeous vector styling
  if (project.screenshot) {
    return (
      <img
        src={project.screenshot}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-[1.04] transition-all duration-700 ease-out"
        onError={(e) => {
          // If screenshot fails to load, fallback to CSS graphic
          e.currentTarget.style.display = 'none';
        }}
      />
    );
  }

  // 1. Firebase CI/CD
  if (project.title.includes('Firebase CI/CD')) {
    return (
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/30 via-orange-900/10 to-black flex items-center justify-center p-6 select-none">
        <div className="w-5/6 h-5/6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md p-4 flex flex-col justify-between font-mono text-[9px] text-orange-400">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5"><GitBranch className="w-3 h-3 text-orange-400" /> deploy.yml</span>
            <span className="text-emerald-400 flex items-center gap-1">● active</span>
          </div>
          <div className="flex-1 py-3 space-y-1.5 text-white/50">
            <p className="text-white font-semibold">&gt; git push origin main</p>
            <p className="text-orange-300/80">jobs.deploy.steps:</p>
            <p className="pl-3">- name: Firebase Deploy</p>
            <p className="pl-3 text-orange-400/90">  run: firebase-tools deploy --token $CI_KEY</p>
          </div>
          <div className="flex justify-between items-center text-white/30 pt-1.5 border-t border-white/5">
            <span>Firebase Hosting</span>
            <span className="text-emerald-400">Success (0.9s)</span>
          </div>
        </div>
      </div>
    );
  }

  // 2. Automated Project Report Generator
  if (project.title.includes('Report Generator')) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-black flex items-center justify-center p-6 select-none">
        <div className="w-5/6 h-5/6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md p-4 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-white/60">
            <FileText className="w-4 h-4 text-violet-400" />
            <span>PROJECT_REPORT.md</span>
          </div>
          <div className="flex-1 flex flex-col gap-2 justify-center py-2">
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full" />
            </div>
            <div className="w-5/6 h-1.5 bg-white/5 rounded-full" />
            <div className="w-2/3 h-1.5 bg-white/5 rounded-full" />
          </div>
          <div className="flex justify-between text-[10px] font-mono text-white/40">
            <span>GitHub API Audit</span>
            <span className="text-violet-400 font-bold">100% PDF Ready</span>
          </div>
        </div>
      </div>
    );
  }

  // Nexchat SaaS
  if (project.title.includes('Nexchat')) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 via-slate-950 to-black flex items-center justify-center p-6 select-none">
        <div className="w-5/6 h-5/6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md p-4 flex flex-col justify-between">
          <div className="flex justify-between items-center text-xs font-mono text-white/60">
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4 text-teal-400" />
              <span>Nexchat SaaS</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-400 text-[9px]">Production</span>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-1.5 py-2">
            <div className="flex items-center justify-between text-[10px] font-mono text-white/50 bg-white/5 p-2 rounded border border-white/5">
              <span>Meta Account Link</span>
              <span className="text-emerald-400">Connected</span>
            </div>
          </div>
          <div className="text-[9px] font-mono text-white/30 text-right">
            WhatsApp Cloud API Platform
          </div>
        </div>
      </div>
    );
  }

  // 3. Qsuite 360
  if (project.title.includes('Qsuite 360')) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-950 to-black flex items-center justify-center p-6 select-none">
        <div className="w-5/6 h-5/6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md p-4 flex flex-col justify-between">
          <div className="flex justify-between items-center text-xs font-mono text-white/60">
            <div className="flex items-center gap-2">
              <Settings className="w-4 h-4 text-blue-400" />
              <span>Qsuite 360</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[9px]">Dashboard</span>
          </div>
          <div className="grid grid-cols-3 gap-2 py-2 flex-1 items-center">
            <div className="h-10 bg-white/5 rounded-lg border border-white/5 flex flex-col items-center justify-center">
              <span className="text-[10px] text-white/30">SPRINTS</span>
              <span className="text-xs font-bold text-white">12</span>
            </div>
            <div className="h-10 bg-white/5 rounded-lg border border-white/5 flex flex-col items-center justify-center">
              <span className="text-[10px] text-white/30">QA BUGS</span>
              <span className="text-xs font-bold text-rose-400">0</span>
            </div>
            <div className="h-10 bg-white/5 rounded-lg border border-white/5 flex flex-col items-center justify-center">
              <span className="text-[10px] text-white/30">COMMITS</span>
              <span className="text-xs font-bold text-emerald-400">248</span>
            </div>
          </div>
          <div className="text-[9px] font-mono text-white/30 text-right">
            Connected to GitHub REST API
          </div>
        </div>
      </div>
    );
  }

  // 4. Webgeon HRMS
  if (project.title.includes('HRMS')) {
    return (
      <div className="absolute inset-0 bg-gradient-to-tr from-[#81D8D0]/10 via-black to-black flex items-center justify-center p-6 select-none">
        <div className="w-5/6 h-5/6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md p-4 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="text-xs font-medium text-white/70 flex items-center gap-1.5"><Users className="w-4 h-4 text-[#81D8D0]" /> Webgeon HRMS</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <div className="space-y-2 py-1 flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-3 bg-white/5 p-2 rounded-xl border border-white/5">
              <div className="w-6 h-6 rounded-full bg-[#81D8D0]/20 flex items-center justify-center text-[#81D8D0] text-[9px] font-bold">SG</div>
              <div className="flex-1">
                <div className="h-2 w-16 bg-white/20 rounded-full mb-1"></div>
                <div className="h-1.5 w-24 bg-white/10 rounded-full"></div>
              </div>
              <span className="text-[9px] font-mono text-emerald-400">Check In</span>
            </div>
          </div>
          <div className="flex justify-between text-[9px] font-mono text-white/30">
            <span>Attendance & Payroll</span>
            <span>v2.1.0</span>
          </div>
        </div>
      </div>
    );
  }

  // 5. Exit Interview Form to PDF
  if (project.title.includes('Exit Interview')) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-black to-black flex items-center justify-center p-6 select-none">
        <div className="w-5/6 h-5/6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-white/60 flex items-center gap-1.5"><FileText className="w-4 h-4 text-emerald-400" /> MS Form to PDF</span>
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="flex-1 flex items-center justify-center gap-4 py-2">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">Form</div>
            <div className="text-white/20 text-xs">➔</div>
            <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">PDF</div>
          </div>
          <div className="text-[9px] font-mono text-white/40 text-center">
            Auto-converted in 1.2s via Power Automate
          </div>
        </div>
      </div>
    );
  }

  // 6. Automated Support Ticketing System
  if (project.title.includes('Support Ticketing')) {
    return (
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/20 via-black to-black flex items-center justify-center p-6 select-none">
        <div className="w-5/6 h-5/6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md p-4 flex flex-col justify-between font-mono text-[9px]">
          <div className="flex items-center justify-between text-sky-400">
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> Support Flow</span>
            <span>[TID: 8094]</span>
          </div>
          <div className="flex-1 py-3 space-y-1.5 text-white/50">
            <p className="text-white">✉ incoming_mail @client</p>
            <p className="text-sky-300">↳ Auto-assigned to #dev-alerts</p>
            <p className="text-emerald-400">✓ Status auto-reply dispatched</p>
          </div>
          <div className="flex justify-between items-center text-white/30">
            <span>Slack & Outlook API</span>
            <span className="text-emerald-400">Active</span>
          </div>
        </div>
      </div>
    );
  }

  // 7. HR Engagement Scheduled Flows
  if (project.title.includes('Scheduled Flows')) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-black to-black flex items-center justify-center p-6 select-none">
        <div className="w-5/6 h-5/6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono text-white/60">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> HR Scheduled Flows</span>
            <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 text-[9px]">Chron</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-1 py-2">
            <span className="text-2xl">🎉</span>
            <span className="text-[11px] text-white/70 font-mono">Happy Work Anniversary!</span>
            <span className="text-[9px] text-white/30">Automated Card Sent to Outlook</span>
          </div>
          <div className="text-[9px] font-mono text-[#81D8D0] text-center">
            SharePoint List Synced
          </div>
        </div>
      </div>
    );
  }

  // Default Fallback
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#81D8D0]/10 via-neutral-900/40 to-black flex items-center justify-center">
      <FolderGit2 className="w-10 h-10 text-white/10" />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   PROJECT CARD
 ────────────────────────────────────────────────────────────── */

function ProjectCard({
  project,
  index,
  onReadMore,
}: {
  project: Project;
  index: number;
  onReadMore: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group ios-glass p-1.5 rounded-[32px] hover:border-white/10 transition-all duration-500 flex flex-col h-full cursor-pointer"
      onClick={onReadMore}
    >
      {/* Visual Header Grid Panel */}
      <div className="overflow-hidden rounded-[28px] relative aspect-[4/3] bg-[#111] border border-white/5">
        <ProjectVisual project={project} />

        {/* Overlay Hover button */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl border border-white/10 z-20">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Card Info Content */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium text-white group-hover:text-[#81D8D0] transition-colors leading-tight font-sans">
            {project.title}
          </h3>
          <p className="text-xs text-white/40 mt-1 font-light leading-relaxed font-sans">
            {project.description}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-white/50"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-3 border-t border-white/5 text-[11px] font-mono">
            {project.detail && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onReadMore();
                }}
                className="inline-flex items-center gap-1 text-[#81D8D0] hover:text-white transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>View Details</span>
              </button>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-white/50 hover:text-white transition-colors ml-auto"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────
   DETAIL MODAL (Read More case studies)
 ────────────────────────────────────────────────────────────── */

/* Helper to get the correct icon for the detail header */
const getProjectIcon = (project: Project) => {
  const tab = TABS.find((t) => t.projects.some((p) => p.title === project.title));
  return tab ? tab.icon : FolderGit2;
};

function DetailModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  if (!project || !project.detail) return null;
  const { detail } = project;
  const ProjectIcon = getProjectIcon(project);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 15 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 15 }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
        className="relative max-w-2xl w-full ios-glass rounded-[32px] overflow-hidden max-h-[85vh] flex flex-col border border-white/10 shadow-2xl tiffany-glow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner visual graphic representation */}
        <div className="w-full h-44 relative overflow-hidden bg-neutral-950 border-b border-white/5 flex items-center justify-center">
          <ProjectVisual project={project} />
          {/* Overlay gradient to blend into header */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </div>

        {/* Header */}
        <div className="flex items-start gap-4 p-6 pb-4 border-b border-white/5">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
            <ProjectIcon className="w-5 h-5 text-[#81D8D0]" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-medium text-white leading-tight font-sans">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {project.tech.map((t, i) => (
                <span key={i} className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#81D8D0]/10 text-[#81D8D0] border border-[#81D8D0]/20">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 p-6 space-y-6">
          {/* Problem */}
          <div>
            <p className="text-[10px] font-mono text-[#81D8D0] uppercase tracking-widest mb-1.5">The Challenge</p>
            <p className="text-xs text-white/70 leading-relaxed font-sans">{detail.problem}</p>
          </div>

          {/* Sections */}
          {detail.sections.map((sec, si) => (
            <div key={si}>
              <p className="text-[10px] font-mono text-[#81D8D0] uppercase tracking-widest mb-2">{sec.heading}</p>
              <ul className="space-y-2">
                {sec.points.map((point, pi) => (
                  <li key={pi} className="flex items-start gap-2 text-xs text-white/60 font-sans leading-relaxed p-2.5 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-300">
                    <ChevronRight className="w-4 h-4 text-[#81D8D0]/80 mt-0.5 shrink-0 animate-pulse" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Impact */}
          <div className="rounded-2xl bg-[#81D8D0]/5 border border-[#81D8D0]/15 p-4 mt-2">
            <p className="text-[10px] font-mono text-[#81D8D0] uppercase tracking-widest mb-1.5">Business & Tech Impact</p>
            <p className="text-xs text-white/70 leading-relaxed font-sans">{detail.impact}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/5 flex items-center justify-end gap-3 bg-black/40 backdrop-blur-md">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full border border-white/10 text-xs text-white/60 hover:text-white hover:bg-white/5 transition-colors font-mono"
          >
            Close
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full bg-[#81D8D0] text-black hover:bg-white transition-colors duration-300 font-mono text-xs font-semibold flex items-center gap-1.5 shadow-[0_0_15px_rgba(129,216,208,0.25)] hover:shadow-[0_0_20px_rgba(129,216,208,0.5)]"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────
   MAIN EXPORT
 ────────────────────────────────────────────────────────────── */

function ProjectDetailSection({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ProjectIcon = getProjectIcon(project);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="ios-glass p-6 md:p-8 rounded-[32px] border border-white/10 shadow-xl tiffany-glow w-full mb-8 last:mb-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Summary & Live Link (cols: 5) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="space-y-4">
            {/* Header Icon + Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <ProjectIcon className="w-5 h-5 text-[#81D8D0]" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-white font-sans leading-tight">
                {project.title}
              </h3>
            </div>

            {/* Visual Graphic Mockup */}
            <div className="w-full h-44 rounded-[20px] overflow-hidden bg-neutral-950/60 border border-white/5 relative flex items-center justify-center">
              <ProjectVisual project={project} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.tech.map((t, i) => (
                <span key={i} className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#81D8D0]/10 text-[#81D8D0] border border-[#81D8D0]/20">
                  {t}
                </span>
              ))}
            </div>

            {/* Short Description */}
            <p className="text-xs text-white/50 leading-relaxed font-sans font-light">
              {project.description}
            </p>
          </div>

          {/* Action Links */}
          {project.liveUrl && (
            <div className="pt-4 border-t border-white/5">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#81D8D0] text-black hover:bg-white transition-all duration-300 font-mono text-xs font-semibold shadow-[0_0_15px_rgba(129,216,208,0.25)] hover:shadow-[0_0_20px_rgba(129,216,208,0.5)]"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* Right Side: Challenge, Points & Impact (cols: 7) */}
        <div className="lg:col-span-7 space-y-6 border-t lg:border-t-0 lg:border-l border-white/5 pt-6 lg:pt-0 lg:pl-8">
          {/* Challenge */}
          <div>
            <p className="text-[10px] font-mono text-[#81D8D0] uppercase tracking-widest mb-1.5">The Challenge</p>
            <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
              {project.detail.problem}
            </p>
          </div>

          {/* Key Details / Highlights */}
          {project.detail.sections.map((sec, si) => (
            <div key={si}>
              <p className="text-[10px] font-mono text-[#81D8D0] uppercase tracking-widest mb-2">
                {sec.heading}
              </p>
              <ul className="space-y-2">
                {sec.points.map((point, pi) => (
                  <li
                    key={pi}
                    className="flex items-start gap-2.5 text-xs text-white/60 font-sans leading-relaxed p-2.5 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-300"
                  >
                    <ChevronRight className="w-4 h-4 text-[#81D8D0]/80 mt-0.5 shrink-0 animate-pulse" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Business & Tech Impact */}
          <div className="rounded-2xl bg-[#81D8D0]/5 border border-[#81D8D0]/15 p-4">
            <p className="text-[10px] font-mono text-[#81D8D0] uppercase tracking-widest mb-1.5">Business & Tech Impact</p>
            <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
              {project.detail.impact}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────
   MAIN EXPORT
 ────────────────────────────────────────────────────────────── */

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState<TabId>('saas_softwares');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const currentTab = TABS.find((t) => t.id === activeTab)!;

  return (
    <section id="projects" className="py-28 px-4 md:px-8 relative w-full max-w-6xl z-10">
      <div className="w-full" ref={ref}>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[#81D8D0] font-mono text-[11px] mb-4 bg-white/5 border border-white/5 px-4 py-2 rounded-full uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Projects</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-4 tracking-tight">
            Things I've Built
          </h2>
          <p className="text-white/40 text-sm max-w-lg mx-auto font-sans leading-relaxed">
            A curated selection spanning workflow automation, full-stack e-commerce, and developer tooling on GitHub.
          </p>
        </motion.div>

        {/* ── Tab tiles (iOS Pill design) ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center mb-12"
        >
          <div className="ios-glass rounded-full p-1.5 flex flex-wrap items-center gap-1 shadow-xl">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative group flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300
                    ${isActive
                      ? 'text-black font-semibold'
                      : 'text-white/60 hover:text-white'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="project-tab-pill"
                      className="absolute inset-0 bg-[#81D8D0] rounded-full shadow-[0_0_20px_-5px_rgba(129,216,208,0.5)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Projects Grid/Detail Stack ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className={activeTab === 'saas_softwares' ? 'space-y-8 w-full' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}
          >
            {activeTab === 'saas_softwares' ? (
              currentTab.projects.map((project, idx) => (
                <ProjectDetailSection
                  key={project.title}
                  project={project}
                  index={idx}
                />
              ))
            ) : (
              currentTab.projects.map((project, idx) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={idx}
                  onReadMore={() => setSelectedProject(project)}
                />
              ))
            )}
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
