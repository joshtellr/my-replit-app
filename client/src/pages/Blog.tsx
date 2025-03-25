import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { FiArrowLeft, FiBook, FiCode, FiBriefcase, FiSearch } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import ArticleItem from "@/components/dashboard/ArticleItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const { data: articles, isLoading } = useQuery({
    queryKey: ['/api/articles'],
  });

  const articlesData = isLoading ? [
    {
      id: 1,
      title: "Best Practices for Customer Support Ticketing Systems",
      date: "Apr 23, 2023",
      readTime: "5 min read",
      category: "Support",
      icon: <FiBook />,
      iconBgColor: "bg-primary-100",
      iconColor: "text-primary",
      summary: "Learn how to optimize your customer support workflow with these proven ticketing system strategies.",
      url: "/blog/best-practices-for-customer-support-ticketing-systems"
    },
    {
      id: 2,
      title: "How to Improve Your Support Team's Efficiency with Automation",
      date: "Mar 15, 2023",
      readTime: "7 min read",
      category: "Automation",
      icon: <FiCode />,
      iconBgColor: "bg-secondary-100",
      iconColor: "text-secondary",
      summary: "Discover automation techniques that can save your support team time and improve customer satisfaction.",
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
      summary: "Explore how artificial intelligence is transforming customer support while enhancing human capabilities.",
      url: "/blog/future-of-customer-support-ai-human-collaboration"
    },
    {
      id: 4,
      title: "Building a Customer-Centric Support Culture",
      date: "Jan 12, 2023",
      readTime: "6 min read",
      category: "Culture",
      icon: <FiBriefcase />,
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      summary: "Steps to create a support culture that puts the customer at the center of every decision.",
      url: "/blog/building-customer-centric-support-culture"
    },
    {
      id: 5,
      title: "Measuring Support Success: Beyond CSAT Scores",
      date: "Dec 5, 2022",
      readTime: "8 min read",
      category: "Metrics",
      icon: <i className="bx bx-line-chart"></i>,
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600",
      summary: "Why customer satisfaction scores don't tell the whole story and what metrics you should track instead.",
      url: "/blog/measuring-support-success-beyond-csat"
    },
    {
      id: 6,
      title: "From Support Agent to Manager: Career Growth in Customer Service",
      date: "Nov 18, 2022",
      readTime: "9 min read",
      category: "Career",
      icon: <i className="bx bx-trending-up"></i>,
      iconBgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      summary: "A roadmap for customer support professionals looking to advance their careers into management roles.",
      url: "/blog/support-agent-to-manager-career-growth"
    }
  ] : articles;

  const filteredArticles = articlesData?.filter((article) => {
    const matchesSearch = !searchQuery || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "all" || article.category.toLowerCase() === activeCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", ...Array.from(new Set(articlesData?.map(a => a.category.toLowerCase())))];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-8 pb-12">
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
          <h1 className="text-2xl font-bold text-neutral-800">Blog</h1>
        </div>
        <p className="text-sm text-neutral-600">
          Knowledge base articles and insights on customer support and related topics
        </p>
      </motion.div>

      {/* Search and Filters */}
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="relative mb-4">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
          <Input
            type="text"
            placeholder="Search articles..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="mb-4 flex flex-wrap">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="capitalize"
              >
                {category === "all" ? "All Categories" : category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </motion.div>

      {/* Articles List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader className="bg-neutral-50 border-b border-neutral-200 py-4">
            <CardTitle>Knowledge Base Articles</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {filteredArticles && filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
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
              ))
            ) : (
              <div className="py-10 px-4 text-center">
                <p className="text-neutral-600">No articles found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-2"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Blog;
