import { useState } from "react";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <MobileHeader 
        isMobileOpen={isMobileOpen} 
        toggleMobileMenu={toggleMobileMenu} 
      />
      <Sidebar isMobileOpen={isMobileOpen} />
      
      <main className="flex-1 bg-neutral-100 pb-8">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
