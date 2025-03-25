import { motion } from "framer-motion";

interface ProjectContributor {
  avatarUrl: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  status: "Completed" | "In Progress" | "Planning";
  category: string;
  categoryColor: string;
  contributors: ProjectContributor[];
  lastUpdated: string;
  caseStudyUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  status,
  category,
  categoryColor,
  contributors,
  lastUpdated,
  caseStudyUrl,
}: ProjectCardProps) => {
  const statusColors = {
    "Completed": "bg-success",
    "In Progress": "bg-warning",
    "Planning": "bg-blue-500",
  }

  return (
    <motion.div 
      className="bg-white shadow rounded-lg overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="h-48 bg-neutral-200 relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-3 right-3 ${statusColors[status]} text-white text-xs rounded-full px-2 py-1`}>
          {status}
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-medium text-neutral-800">{title}</h3>
            <p className="text-sm text-neutral-500 mt-1">{description}</p>
          </div>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${categoryColor}`}>
            {category}
          </span>
        </div>
        <div className="mt-3 flex items-center">
          <div className="flex -space-x-2 overflow-hidden">
            {contributors.map((contributor, index) => (
              <img 
                key={index}
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white" 
                src={contributor.avatarUrl} 
                alt=""
              />
            ))}
          </div>
          <div className="ml-3 text-xs text-neutral-500">
            <span>Last updated {lastUpdated}</span>
          </div>
        </div>
        {caseStudyUrl && (
          <div className="mt-4">
            <a 
              href={caseStudyUrl} 
              className="text-sm font-medium text-primary hover:text-primary-700 transition-colors"
            >
              View case study →
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
