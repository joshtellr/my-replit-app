import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ArticleItemProps {
  icon: ReactNode;
  iconBgColor: string;
  iconColor: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  url: string;
}

const ArticleItem = ({
  icon,
  iconBgColor,
  iconColor,
  title,
  date,
  readTime,
  category,
  url,
}: ArticleItemProps) => {
  return (
    <motion.a 
      href={url}
      className="block hover:bg-neutral-50 border-b border-neutral-200 last:border-b-0 transition-colors"
      whileHover={{ backgroundColor: "rgb(249, 250, 251)" }}
    >
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`flex-shrink-0 ${iconBgColor} rounded-full p-2`}>
              <span className={`text-xl ${iconColor}`}>{icon}</span>
            </div>
            <div className="ml-4">
              <h4 className="text-sm font-medium text-neutral-800">{title}</h4>
              <div className="mt-1 flex items-center text-xs text-neutral-500">
                <span>{date}</span>
                <span className="mx-2">•</span>
                <span>{readTime}</span>
                <span className="mx-2">•</span>
                <span>{category}</span>
              </div>
            </div>
          </div>
          <div className="ml-2 flex-shrink-0">
            <i className="bx bx-chevron-right text-neutral-400"></i>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default ArticleItem;
