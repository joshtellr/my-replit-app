import { 
  type User, 
  type InsertUser, 
  type InsertContactMessage, 
  type ContactMessage,
  type Stats,
  type InsertStats,
  type Project,
  type InsertProject,
  type Article,
  type InsertArticle
} from "@shared/schema";
import { FiBriefcase, FiBookOpen, FiClock, FiAward } from "react-icons/fi";

// Define interface for Stats object
interface StatData {
  id: number;
  title: string;
  value: string;
  icon: string;
  iconColor: string;
}

// Define interface for Skill object
interface Skill {
  name: string;
  color: string;
}

// Define interface for Experience object
interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  logo: string;
  responsibilities: string[];
  skills: Skill[];
}

// Define interface for Education object
interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  location: string;
  logo: string;
  achievements: string[];
  keywords: Skill[];
}

// Define interface for Skill object with level
interface SkillWithLevel {
  id: number;
  name: string;
  level: string;
}

// Define interface for Certification object
interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
}

// Define interface for Resume object
interface Resume {
  experience: Experience[];
  education: Education[];
  skills: SkillWithLevel[];
  certifications: Certification[];
}

// Define interface for Project Contributor
interface ProjectContributor {
  avatarUrl: string;
}

// Define interface for Project object
interface ProjectData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  status: "Completed" | "In Progress" | "Planning";
  category: string;
  categoryColor: string;
  contributors: ProjectContributor[];
  lastUpdated: string;
  caseStudyUrl?: string;
  featured: boolean;
}

// Define interface for Article object
interface ArticleData {
  id: number;
  title: string;
  date: string;
  readTime: string;
  category: string;
  icon: string;
  iconBgColor: string;
  iconColor: string;
  summary: string;
  url: string;
  featured: boolean;
}

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact methods
  saveContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  
  // Stats methods
  getStats(): Promise<StatData[]>;
  
  // Resume methods
  getResume(): Promise<Resume>;
  getResumeHighlights(): Promise<Experience[]>;
  
  // Projects methods
  getProjects(): Promise<ProjectData[]>;
  getRecentProjects(): Promise<ProjectData[]>;
  
  // Articles methods
  getArticles(): Promise<ArticleData[]>;
  getRecentArticles(): Promise<ArticleData[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private stats: StatData[];
  private resume: Resume;
  private projects: ProjectData[];
  private articles: ArticleData[];
  
  private currentUserId: number;
  private currentContactId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    
    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Initialize stats
    this.stats = [
      { id: 1, title: "Projects Completed", value: "24", icon: "FiBriefcase", iconColor: "text-primary" },
      { id: 2, title: "Blog Articles", value: "15", icon: "FiBookOpen", iconColor: "text-secondary" },
      { id: 3, title: "Years Experience", value: "7+", icon: "FiClock", iconColor: "text-success" },
      { id: 4, title: "Certifications", value: "5", icon: "FiAward", iconColor: "text-accent" },
    ];

    // Initialize resume data
    this.resume = {
      experience: [
        {
          id: 1,
          title: "Senior Product Support Specialist",
          company: "Zendesk, Inc.",
          period: "Jan 2020 - Present",
          location: "San Francisco, CA",
          logo: "https://logo.clearbit.com/zendesk.com",
          responsibilities: [
            "Led a team of 5 support specialists handling enterprise client requests",
            "Improved ticket resolution time by 32% through process optimization",
            "Collaborated with product teams to implement customer-requested features"
          ],
          skills: [
            { name: "Zendesk", color: "bg-blue-100 text-blue-800" },
            { name: "Intercom", color: "bg-indigo-100 text-indigo-800" },
            { name: "Customer Support", color: "bg-green-100 text-green-800" },
            { name: "Team Leadership", color: "bg-yellow-100 text-yellow-800" }
          ]
        },
        {
          id: 2,
          title: "Technical Support Specialist",
          company: "Intercom",
          period: "Mar 2018 - Dec 2019",
          location: "Remote",
          logo: "https://logo.clearbit.com/intercom.com",
          responsibilities: [
            "Managed 50+ customer support tickets daily with 98% satisfaction rate",
            "Developed internal knowledge base reducing time to resolution",
            "Conducted client training sessions on product features"
          ],
          skills: [
            { name: "Intercom", color: "bg-indigo-100 text-indigo-800" },
            { name: "Customer Support", color: "bg-green-100 text-green-800" },
            { name: "Knowledge Base", color: "bg-purple-100 text-purple-800" }
          ]
        },
        {
          id: 3,
          title: "Customer Success Representative",
          company: "Freshdesk",
          period: "Jun 2016 - Feb 2018",
          location: "Boston, MA",
          logo: "https://logo.clearbit.com/freshworks.com",
          responsibilities: [
            "Handled tier 1 support for SaaS customers",
            "Created documentation and video tutorials for common issues",
            "Achieved 95% satisfaction rating across all customer interactions"
          ],
          skills: [
            { name: "Freshdesk", color: "bg-green-100 text-green-800" },
            { name: "Documentation", color: "bg-blue-100 text-blue-800" },
            { name: "SaaS", color: "bg-purple-100 text-purple-800" }
          ]
        }
      ],
      education: [
        {
          id: 1,
          institution: "University of California, Berkeley",
          degree: "Bachelor of Science in Computer Science",
          period: "2012 - 2016",
          location: "Berkeley, CA",
          logo: "https://logo.clearbit.com/berkeley.edu",
          achievements: [
            "Graduated with honors (3.8 GPA)",
            "Senior Project: Automated Customer Support Chatbot",
            "Teaching Assistant for Introduction to Programming"
          ],
          keywords: [
            { name: "Computer Science", color: "bg-blue-100 text-blue-800" },
            { name: "AI", color: "bg-purple-100 text-purple-800" },
            { name: "Teaching", color: "bg-yellow-100 text-yellow-800" }
          ]
        }
      ],
      skills: [
        { id: 1, name: "Customer Support Platforms", level: "Expert" },
        { id: 2, name: "Technical Troubleshooting", level: "Expert" },
        { id: 3, name: "Knowledge Base Development", level: "Advanced" },
        { id: 4, name: "User Training", level: "Advanced" },
        { id: 5, name: "JavaScript", level: "Intermediate" },
        { id: 6, name: "React", level: "Intermediate" },
        { id: 7, name: "Python", level: "Intermediate" },
        { id: 8, name: "SQL", level: "Intermediate" }
      ],
      certifications: [
        { id: 1, name: "Zendesk Support Administrator", issuer: "Zendesk", date: "2021" },
        { id: 2, name: "Certified Customer Support Professional", issuer: "ICMI", date: "2020" },
        { id: 3, name: "Intercom Product Specialist", issuer: "Intercom", date: "2019" },
        { id: 4, name: "Freshdesk Support Specialist", issuer: "Freshworks", date: "2017" },
        { id: 5, name: "ITIL Foundation", issuer: "Axelos", date: "2016" }
      ]
    };

    // Initialize projects data
    this.projects = [
      {
        id: 1,
        title: "Customer Support Dashboard",
        description: "A real-time dashboard for tracking support metrics",
        imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        status: "Completed",
        category: "Web App",
        categoryColor: "bg-blue-100 text-blue-800",
        contributors: [
          { avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
          { avatarUrl: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" }
        ],
        lastUpdated: "2 weeks ago",
        caseStudyUrl: "/projects/customer-support-dashboard",
        featured: true
      },
      {
        id: 2,
        title: "Knowledge Base System",
        description: "Self-service platform for customer inquiries",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        status: "In Progress",
        category: "SaaS",
        categoryColor: "bg-purple-100 text-purple-800",
        contributors: [
          { avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" }
        ],
        lastUpdated: "3 days ago",
        caseStudyUrl: "/projects/knowledge-base-system",
        featured: true
      },
      {
        id: 3,
        title: "Ticket Automation Tool",
        description: "AI-powered ticket routing and prioritization",
        imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        status: "Completed",
        category: "API",
        categoryColor: "bg-green-100 text-green-800",
        contributors: [
          { avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
          { avatarUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
          { avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" }
        ],
        lastUpdated: "1 month ago",
        caseStudyUrl: "/projects/ticket-automation-tool",
        featured: true
      },
      {
        id: 4,
        title: "Help Center Redesign",
        description: "UX/UI redesign of customer support help center",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        status: "Completed",
        category: "UX/UI Design",
        categoryColor: "bg-yellow-100 text-yellow-800",
        contributors: [
          { avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" }
        ],
        lastUpdated: "3 months ago",
        caseStudyUrl: "/projects/help-center-redesign",
        featured: false
      },
      {
        id: 5,
        title: "Customer Feedback Analysis Tool",
        description: "NLP-based system for analyzing support ticket sentiment",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        status: "In Progress",
        category: "Data Science",
        categoryColor: "bg-blue-100 text-blue-800",
        contributors: [
          { avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" },
          { avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" }
        ],
        lastUpdated: "1 week ago",
        caseStudyUrl: "/projects/customer-feedback-analysis",
        featured: false
      },
      {
        id: 6,
        title: "Support Chat Widget",
        description: "Embeddable chat widget for customer websites",
        imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        status: "Planning",
        category: "Web App",
        categoryColor: "bg-blue-100 text-blue-800",
        contributors: [
          { avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" }
        ],
        lastUpdated: "2 days ago",
        caseStudyUrl: "/projects/support-chat-widget",
        featured: false
      }
    ];

    // Initialize articles data
    this.articles = [
      {
        id: 1,
        title: "Best Practices for Customer Support Ticketing Systems",
        date: "Apr 23, 2023",
        readTime: "5 min read",
        category: "Support",
        icon: "FiBook",
        iconBgColor: "bg-primary-100",
        iconColor: "text-primary",
        summary: "Learn how to optimize your customer support workflow with these proven ticketing system strategies.",
        url: "/blog/best-practices-for-customer-support-ticketing-systems",
        featured: true
      },
      {
        id: 2,
        title: "How to Improve Your Support Team's Efficiency with Automation",
        date: "Mar 15, 2023",
        readTime: "7 min read",
        category: "Automation",
        icon: "FiCode",
        iconBgColor: "bg-secondary-100",
        iconColor: "text-secondary",
        summary: "Discover automation techniques that can save your support team time and improve customer satisfaction.",
        url: "/blog/improve-support-team-efficiency-with-automation",
        featured: true
      },
      {
        id: 3,
        title: "The Future of Customer Support: AI and Human Collaboration",
        date: "Feb 8, 2023",
        readTime: "10 min read",
        category: "AI",
        icon: "FiBulb",
        iconBgColor: "bg-accent-100",
        iconColor: "text-accent",
        summary: "Explore how artificial intelligence is transforming customer support while enhancing human capabilities.",
        url: "/blog/future-of-customer-support-ai-human-collaboration",
        featured: true
      },
      {
        id: 4,
        title: "Building a Customer-Centric Support Culture",
        date: "Jan 12, 2023",
        readTime: "6 min read",
        category: "Culture",
        icon: "FiBriefcase",
        iconBgColor: "bg-blue-100",
        iconColor: "text-blue-600",
        summary: "Steps to create a support culture that puts the customer at the center of every decision.",
        url: "/blog/building-customer-centric-support-culture",
        featured: false
      },
      {
        id: 5,
        title: "Measuring Support Success: Beyond CSAT Scores",
        date: "Dec 5, 2022",
        readTime: "8 min read",
        category: "Metrics",
        icon: "FiBarChart2",
        iconBgColor: "bg-green-100",
        iconColor: "text-green-600",
        summary: "Why customer satisfaction scores don't tell the whole story and what metrics you should track instead.",
        url: "/blog/measuring-support-success-beyond-csat",
        featured: false
      },
      {
        id: 6,
        title: "From Support Agent to Manager: Career Growth in Customer Service",
        date: "Nov 18, 2022",
        readTime: "9 min read",
        category: "Career",
        icon: "FiTrendingUp",
        iconBgColor: "bg-yellow-100",
        iconColor: "text-yellow-600",
        summary: "A roadmap for customer support professionals looking to advance their careers into management roles.",
        url: "/blog/support-agent-to-manager-career-growth",
        featured: false
      }
    ];
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact methods
  async saveContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactId++;
    const contactMessage: ContactMessage = { 
      ...message, 
      id, 
      createdAt: new Date() 
    };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }
  
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
  
  // Stats methods
  async getStats(): Promise<StatData[]> {
    return this.stats;
  }
  
  // Resume methods
  async getResume(): Promise<Resume> {
    return this.resume;
  }
  
  async getResumeHighlights(): Promise<Experience[]> {
    // Return only the first 2 experiences as highlights
    return this.resume.experience.slice(0, 2);
  }
  
  // Projects methods
  async getProjects(): Promise<ProjectData[]> {
    return this.projects;
  }
  
  async getRecentProjects(): Promise<ProjectData[]> {
    // Return only featured projects or first 3 if none are featured
    const featuredProjects = this.projects.filter(project => project.featured);
    return featuredProjects.length > 0 ? featuredProjects : this.projects.slice(0, 3);
  }
  
  // Articles methods
  async getArticles(): Promise<ArticleData[]> {
    return this.articles;
  }
  
  async getRecentArticles(): Promise<ArticleData[]> {
    // Return only featured articles or first 3 if none are featured
    const featuredArticles = this.articles.filter(article => article.featured);
    return featuredArticles.length > 0 ? featuredArticles : this.articles.slice(0, 3);
  }
}

export const storage = new MemStorage();
