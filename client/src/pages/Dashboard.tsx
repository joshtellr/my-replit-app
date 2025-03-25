import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { FiBriefcase, FiBookOpen, FiClock, FiAward, FiTrendingUp, FiList, FiAward as FiAwardIcon } from "react-icons/fi";
import { FiSearch, FiChevronDown, FiSend } from "react-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StatsCard from "@/components/dashboard/StatsCard";
import ExperienceCard from "@/components/dashboard/ExperienceCard";
import ProjectCard from "@/components/dashboard/ProjectCard";
import ArticleItem from "@/components/dashboard/ArticleItem";
import ContactForm from "@/components/dashboard/ContactForm";
import { Link } from "wouter";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ['/api/stats'],
  });
  
  const { data: resume, isLoading: resumeLoading } = useQuery({
    queryKey: ['/api/resume/highlights'],
  });
  
  const { data: projects, isLoading: projectsLoading } = useQuery({
    queryKey: ['/api/projects/recent'],
  });
  
  const { data: articles, isLoading: articlesLoading } = useQuery({
    queryKey: ['/api/articles/recent'],
  });

  // Default data if API response is loading
  const statsData = statsLoading ? [
    { id: 1, title: "Projects Completed", value: "24", icon: <FiBriefcase className="text-2xl" />, iconColor: "text-primary" },
    { id: 2, title: "Blog Articles", value: "15", icon: <FiBookOpen className="text-2xl" />, iconColor: "text-secondary" },
    { id: 3, title: "Years Experience", value: "7+", icon: <FiClock className="text-2xl" />, iconColor: "text-success" },
    { id: 4, title: "Certifications", value: "5", icon: <FiAward className="text-2xl" />, iconColor: "text-accent" },
  ] : stats;

  const resumeHighlights = resumeLoading ? [
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
    }
  ] : resume;

  const recentProjects = projectsLoading ? [
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
      caseStudyUrl: "/projects/customer-support-dashboard"
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
      caseStudyUrl: "/projects/knowledge-base-system"
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
      caseStudyUrl: "/projects/ticket-automation-tool"
    }
  ] : projects;

  const recentArticles = articlesLoading ? [
    {
      id: 1,
      title: "Best Practices for Customer Support Ticketing Systems",
      date: "Apr 23, 2023",
      readTime: "5 min read",
      category: "Support",
      icon: <i className="bx bx-book"></i>,
      iconBgColor: "bg-primary-100",
      iconColor: "text-primary",
      url: "/blog/best-practices-for-customer-support-ticketing-systems"
    },
    {
      id: 2,
      title: "How to Improve Your Support Team's Efficiency with Automation",
      date: "Mar 15, 2023",
      readTime: "7 min read",
      category: "Automation",
      icon: <i className="bx bx-code-block"></i>,
      iconBgColor: "bg-secondary-100",
      iconColor: "text-secondary",
      url: "/blog/improve-support-team-efficiency-with-automation"
    },
    {
      id: 3,
      title: "The Future of Customer Support: AI and Human Collaboration",
      date: "Feb 8, 2023",
      readTime: "10 min read",
      category: "AI",
      icon: <i className="bx bx-bulb"></i>,
      iconBgColor: "bg-accent-100",
      iconColor: "text-accent",
      url: "/blog/future-of-customer-support-ai-human-collaboration"
    }
  ] : articles;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-8">
      {/* Page Header */}
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-neutral-800">Dashboard</h1>
          <Link href="/contact">
            <Button>
              <FiSend className="mr-2 h-4 w-4" /> New Ticket
            </Button>
          </Link>
        </div>
        <p className="mt-1 text-sm text-neutral-600">
          Welcome to my interactive portfolio designed as a support ticketing system.
        </p>
      </motion.div>
      
      {/* Stats Overview */}
      <motion.div 
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {statsData?.map((stat) => (
          <motion.div key={stat.id} variants={itemVariants}>
            <StatsCard
              icon={stat.icon}
              title={stat.title}
              value={stat.value}
              iconColor={stat.iconColor}
            />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Tabs Navigation */}
      <div className="border-b border-neutral-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("overview")}
            className={`group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "overview"
                ? "border-primary text-primary"
                : "border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
            }`}
          >
            <FiTrendingUp className="text-xl mr-2" />
            <span>Overview</span>
          </button>
          <button
            onClick={() => setActiveTab("activity")}
            className={`group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "activity"
                ? "border-primary text-primary"
                : "border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
            }`}
          >
            <FiList className="text-xl mr-2" />
            <span>Recent Activity</span>
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "skills"
                ? "border-primary text-primary"
                : "border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
            }`}
          >
            <FiAwardIcon className="text-xl mr-2" />
            <span>Skills</span>
          </button>
        </nav>
      </div>
      
      {/* Search and Filter */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="w-full md:w-64 mb-4 md:mb-0">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-neutral-400" />
              </div>
              <Input
                type="text"
                className="pl-10"
                placeholder="Search tickets..."
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Status
              <FiChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              Category
              <FiChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Resume Section */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-lg font-medium text-neutral-800 mb-4">Resume Highlights</h2>
        <Card>
          <CardHeader className="bg-neutral-50 border-b border-neutral-200 py-4 flex flex-row items-center justify-between">
            <CardTitle className="text-md">Professional Experience</CardTitle>
            <Badge variant="default" className="bg-success">Active</Badge>
          </CardHeader>
          <CardContent className="p-6">
            {resumeHighlights?.map((experience) => (
              <ExperienceCard
                key={experience.id}
                title={experience.title}
                company={experience.company}
                period={experience.period}
                location={experience.location}
                logo={experience.logo}
                responsibilities={experience.responsibilities}
                skills={experience.skills}
              />
            ))}
            
            <div className="text-center mt-4">
              <Link href="/resume">
                <Button variant="outline">
                  View Full Resume
                  <i className="bx bx-right-arrow-alt ml-2"></i>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      {/* Projects Section */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-neutral-800">Recent Projects</h2>
          <Link href="/projects">
            <a className="text-sm text-primary hover:text-primary-700 font-medium">View All</a>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentProjects?.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              status={project.status}
              category={project.category}
              categoryColor={project.categoryColor}
              contributors={project.contributors}
              lastUpdated={project.lastUpdated}
              caseStudyUrl={project.caseStudyUrl}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Blog Section */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-neutral-800">Latest Articles</h2>
          <Link href="/blog">
            <a className="text-sm text-primary hover:text-primary-700 font-medium">View All</a>
          </Link>
        </div>
        <Card>
          <CardHeader className="bg-neutral-50 border-b border-neutral-200 py-4">
            <CardTitle className="text-md">Knowledge Base Articles</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {recentArticles?.map((article) => (
              <ArticleItem
                key={article.id}
                icon={article.icon}
                iconBgColor={article.iconBgColor}
                iconColor={article.iconColor}
                title={article.title}
                date={article.date}
                readTime={article.readTime}
                category={article.category}
                url={article.url}
              />
            ))}
            
            <div className="text-center py-4 border-t border-neutral-200">
              <Button variant="outline">Load More Articles</Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-neutral-800">Create New Ticket</h2>
        </div>
        <Card>
          <CardHeader className="bg-neutral-50 border-b border-neutral-200 py-4">
            <CardTitle className="text-md">Contact Form</CardTitle>
            <p className="mt-1 text-sm text-neutral-500">Fill in the details below to get in touch with me.</p>
          </CardHeader>
          <CardContent className="p-6">
            <ContactForm />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Dashboard;
