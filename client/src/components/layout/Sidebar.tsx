import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { FiHome, FiUser, FiBriefcase, FiBookOpen, FiMessageSquare, FiHelpCircle } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

interface SidebarProps {
  isMobileOpen: boolean;
}

const Sidebar = ({ isMobileOpen }: SidebarProps) => {
  const [location] = useLocation();

  const navigationItems = [
    { href: "/", label: "Dashboard", icon: <FiHome className="text-xl mr-3" /> },
    { href: "/resume", label: "Resume", icon: <FiUser className="text-xl mr-3" />, badge: "5" },
    { href: "/projects", label: "Projects", icon: <FiBriefcase className="text-xl mr-3" />, badge: "10", badgeColor: "bg-success" },
    { href: "/blog", label: "Blog", icon: <FiBookOpen className="text-xl mr-3" />, badge: "New", badgeColor: "bg-accent" },
    { href: "/contact", label: "Contact", icon: <FiMessageSquare className="text-xl mr-3" /> },
  ];

  const socialLinks = [
    { href: "https://linkedin.com", label: "LinkedIn", icon: <FaLinkedin className="text-xl mr-3 text-blue-600" /> },
    { href: "https://github.com", label: "GitHub", icon: <FaGithub className="text-xl mr-3" /> },
    { href: "https://twitter.com", label: "Twitter", icon: <FaTwitter className="text-xl mr-3 text-blue-400" /> },
  ];

  return (
    <aside 
      className={cn(
        "md:flex md:flex-col w-full md:w-64 bg-white border-r border-neutral-200 h-screen flex-shrink-0 md:sticky top-0",
        isMobileOpen ? "block absolute z-50 h-screen w-64" : "hidden"
      )}
    >
      {/* Brand Logo */}
      <div className="p-4 border-b border-neutral-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-white">
            <span className="font-semibold">JD</span>
          </div>
          <h1 className="font-semibold text-lg">John's Portfolio</h1>
        </div>
      </div>

      {/* User Info */}
      <div className="p-4 border-b border-neutral-200">
        <div className="flex items-center space-x-3">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
            alt="Profile" 
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">John Doe</h2>
            <p className="text-xs text-neutral-500">Product Support Specialist</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto py-4">
        <div className="px-3 mb-3">
          <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider px-3">Menu</h3>
          <ul className="mt-2 space-y-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <a 
                    className={cn(
                      "group flex items-center px-3 py-2 text-sm rounded-md hover:bg-neutral-100 transition-colors",
                      location === item.href 
                        ? "bg-primary-50 text-primary border-l-4 border-primary" 
                        : "text-neutral-700"
                    )}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className={cn(
                        "ml-auto text-xs rounded-full px-2 py-0.5 text-white", 
                        item.badgeColor || "bg-neutral-200 text-neutral-800"
                      )}>
                        {item.badge}
                      </span>
                    )}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-3 mt-5">
          <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider px-3">Social Links</h3>
          <ul className="mt-2 space-y-1">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center px-3 py-2 text-sm rounded-md text-neutral-700 hover:bg-neutral-100 transition-colors"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Help & Support */}
      <div className="p-4 border-t border-neutral-200">
        <a href="#" className="flex items-center text-sm text-neutral-700 hover:text-primary transition-colors">
          <FiHelpCircle className="text-xl mr-2" />
          <span>Help & Resources</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
