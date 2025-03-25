import { FiMenu, FiX } from "react-icons/fi";

interface MobileHeaderProps {
  isMobileOpen: boolean;
  toggleMobileMenu: () => void;
}

const MobileHeader = ({ isMobileOpen, toggleMobileMenu }: MobileHeaderProps) => {
  return (
    <header className="bg-white border-b border-neutral-200 p-4 flex justify-between items-center md:hidden">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-white">
          <span className="font-semibold">JD</span>
        </div>
        <h1 className="font-semibold text-lg">John's Portfolio</h1>
      </div>
      <button 
        onClick={toggleMobileMenu} 
        className="text-neutral-600 focus:outline-none"
        aria-label={isMobileOpen ? "Close menu" : "Open menu"}
      >
        {isMobileOpen ? (
          <FiX className="text-2xl" />
        ) : (
          <FiMenu className="text-2xl" />
        )}
      </button>
    </header>
  );
};

export default MobileHeader;
