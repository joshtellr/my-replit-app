import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { FiArrowLeft, FiFilter, FiSearch } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";
import ProjectCard from "@/components/dashboard/ProjectCard";

const Projects = () => {
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const { data: projects, isLoading } = useQuery({
    queryKey: ['/api/projects'],
  });

  const filteredProjects = projects?.filter((project: any) => {
    const matchesStatus = !statusFilter || project.status === statusFilter;
    const matchesCategory = !categoryFilter || project.category === categoryFilter;
    const matchesSearch = !searchQuery || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesStatus && matchesCategory && matchesSearch;
  }) || [];

  const projectsData = isLoading ? [
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
      caseStudyUrl: "/projects/help-center-redesign"
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
      caseStudyUrl: "/projects/customer-feedback-analysis"
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
      caseStudyUrl: "/projects/support-chat-widget"
    }
  ] : filteredProjects;

  const categories = Array.from(new Set(projects?.map((p: any) => p.category) || [
    "Web App", "SaaS", "API", "UX/UI Design", "Data Science"
  ]));
  
  const statuses = Array.from(new Set(projects?.map((p: any) => p.status) || [
    "Completed", "In Progress", "Planning"
  ]));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-8 pb-12">
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-2">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mr-2">
              <FiArrowLeft className="mr-1" /> Back
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-neutral-800">Projects</h1>
        </div>
        <p className="text-sm text-neutral-600">
          Browse through my portfolio of completed and ongoing projects
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div 
        className="mb-8 bg-white p-4 rounded-lg shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <Label htmlFor="search" className="mb-2 block text-sm">Search</Label>
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
              <Input
                id="search"
                type="text"
                placeholder="Search projects..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="w-full md:w-48">
            <Label htmlFor="status" className="mb-2 block text-sm">Status</Label>
            <Select 
              value={statusFilter} 
              onValueChange={setStatusFilter}
            >
              <SelectTrigger id="status">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Statuses</SelectItem>
                {statuses.map((status) => (
                  <SelectItem key={status} value={status}>{status}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-full md:w-48">
            <Label htmlFor="category" className="mb-2 block text-sm">Category</Label>
            <Select 
              value={categoryFilter} 
              onValueChange={setCategoryFilter}
            >
              <SelectTrigger id="category">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => {
              setStatusFilter("");
              setCategoryFilter("");
              setSearchQuery("");
            }}
            className="h-10 w-10"
          >
            <FiFilter className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {projectsData.length > 0 ? (
          projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <ProjectCard
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
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center">
            <h3 className="text-lg font-medium text-neutral-900 mb-1">No projects found</h3>
            <p className="text-neutral-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Projects;
