"use client"

import ProjectCard from "./project-card"
import ProjectModal from "./projectModal"

const projects = [
  {
    id: "vertex",
    title: "Vertex – Team Management Reimagined",
    description:
      "A modern team collaboration platform featuring workspaces, projects, tasks, and real-time team chat with smart notifications.",
    longDescription:
      "Vertex is a comprehensive team collaboration tool designed for speed and clarity. It integrates project management with real-time communication, featuring role-based permissions, an invitation-based membership system, and an advanced chat system with edit history and seen receipts. Built with Next.js 16, it focuses on instant updates via Firestore listeners and a clean, system-aware user experience.",
    features: [
      "Workspaces and projects with role-based permissions",
      "Task management with prioritization and status flows",
      "Real-time team chat with edit history and seen receipts",
      "Invitation-based system with a dedicated notification inbox",
      "Smart notifications with unread counts and filtering",
      "User profiles with bio, stats, and personal task feeds",
      "Advanced settings for account, appearance, and security",
      "Light and dark mode with polished system-aware toggles",
      "Optimized SEO with dynamic OG images and PWA support",
    ],
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Firebase / Firestore",
      "Cloudinary",
      "Framer Motion",
    ],
    liveUrl: "https://vertex-team.vercel.app",
    githubUrl: "https://github.com/mohAymann/vertex",
    status: "Completed",
    type: "Personal Project",
    image: "@/public/vertex.png",
  },
  {
    id: "efham",
    title: "Efham (افهم) – Learning Management System",
    description:
      "A streamlined LMS platform designed to manage educational content, assignments, and quizzes for single-subject environments.",
    longDescription:
      "Efham is a dedicated Learning Management System built to bridge the gap between teachers and students. It features a robust Teacher Dashboard for managing students, creating assignments, and building quizzes, alongside a Student Dashboard for submissions and performance tracking. The app utilizes a relational Firestore schema to maintain data integrity across users, grades, and course materials.",
    features: [
      "Teacher Dashboard for student and class management",
      "Quiz Builder and Assignment Hub with deadline tracking",
      "Student portal for assignment submissions and active quizzes",
      "Unified Gradebook for manual and automatic performance tracking",
      "Role-based access control (Teacher vs. Student)",
      "Real-time data synchronization with Firestore",
      "Progress monitoring via a dedicated 'My Grades' section",
      "Clean, distraction-free UI using ShadCN and Tailwind CSS",
    ],
    techStack: [
      "Next.js",
      "Firebase / Firestore",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    liveUrl: "https://efham.vercel.app",
    githubUrl: "https://github.com/MohAymann/efham",
    status: "Completed",
    type: "Personal Project",
    image: "@/public/efham.png",
  },
  {
    id: "premium-base-store",
    title: "Premium Base – Corporate E-Commerce Solution",
    description:
      "A high-end, production-ready e-commerce platform featuring a cinematic design, advanced admin customization, and robust security architecture.",
    longDescription:
      "Premium Base Store is a modular e-commerce engine built for high-end brands. It features a glassmorphic UI with cinematic elements like dynamic video players and Framer Motion animations. Beyond the storefront, it includes a powerful Admin Dashboard that allows for deep site customization (feature blocks, brand story, and dynamic footers) and implements advanced security through high-level Firestore rules and atomic inventory protection.",
    features: [
      "Cinematic Homepage with dynamic hero video and glassmorphic UI",
      "Advanced Admin Dashboard for full site and inventory management",
      "Deep customization of feature blocks, brand story, and social links",
      "High-Security Firestore Rules with Role-Based Access Control (RBAC)",
      "Atomic Inventory Shield to prevent stock overselling and price tampering",
      "Premium checkout flow with real-time stock and price integrity",
      "Dynamic filtering system by categories, price, and arrivals",
      "Global theming control (logos, brand identity, and accents) from admin",
      "Fully responsive and optimized for mobile, tablet, and ultra-wide screens",
    ],
    techStack: [
      "Next.js",
      "Firebase / Firestore",
      "Tailwind CSS",
      "Framer Motion",
      "Cloudinary",
      "Shadcn UI",
      "Radix UI",
    ],
    liveUrl: "https://base-store-two.vercel.app",
    githubUrl: "https://github.com/MohAymann/base-store",
    status: "Completed",
    type: "Personal Project",
    image: "@/public/base-store.png",
  },
  {
    id: "ma7l",
    title: "Ma7l (محل) – Modern POS & Inventory Management",
    description:
      "A modern Point of Sale and inventory management system with barcode scanning, real-time analytics, thermal receipt printing, and smart stock tracking.",
    longDescription:
      "Ma7l is a production-ready Point of Sale (POS) and inventory management platform built for small and medium-sized businesses. It combines a fast checkout experience with barcode scanning, intelligent inventory management, sales analytics, and thermal receipt printing. The application emphasizes performance, security, and an Arabic-first user experience, while providing real-time business insights and a streamlined workflow for merchants.",
    features: [
      "Fast POS system with hardware and camera-based barcode scanning",
      "Automatic stock deduction with real-time inventory tracking",
      "Comprehensive sales history with invoice details and filtering",
      "Thermal receipt generation optimized for 80mm printers",
      "Business analytics dashboard with revenue, profit, and sales insights",
      "Low-stock alerts and category-based inventory management",
      "Secure JWT authentication with email verification and bcrypt encryption",
      "Responsive Arabic-first interface built for desktop, tablet, and mobile",
      "Production-ready architecture with MongoDB and scalable backend design",
    ],
    techStack: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "shadcn/ui",
      "JWT",
      "Nodemailer",
      "html5-qrcode",
    ],
    liveUrl: "https://ma7l.vercel.app",
    githubUrl: "https://github.com/MohAymann/Ma7l",
    status: "Completed",
    type: "Personal Project",
    image: "@/public/ma7l.png",
  },
];




export default function Projects() {
  return (
    <div id="projects" className="border-t p-20 bg-background">
      <h1 className="text-center text-4xl font-bold mb-10">Projects</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">A selection of projects where I design, build, and refine real-world web interfaces.</p>
      <div className="flex flex-wrap justify-center gap-10 w-full">
        {projects.map((project, index) => (
          <div key={index} className="w-full sm:w-[calc(50%-2.5rem)] lg:w-[calc(25%-2.5rem)] min-w-75">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <ProjectModal />
      <p className="text-center text-muted-foreground mt-16 text-lg">
        Want to see more? Check my <a href="https://github.com/MohAymann" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline underline-offset-4 transition-all">GitHub</a>
      </p>
    </div>
  )
}
