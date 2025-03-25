import { motion } from "framer-motion";

interface Skill {
  name: string;
  color: string;
}

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  logo: string;
  responsibilities: string[];
  skills: Skill[];
}

const ExperienceCard = ({
  title,
  company,
  period,
  location,
  logo,
  responsibilities,
  skills,
}: ExperienceCardProps) => {
  return (
    <motion.div 
      className="border-b border-neutral-200 pb-5 mb-5 last:mb-0 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-base font-medium text-neutral-800">{title}</h4>
          <p className="text-sm text-neutral-600">{company}</p>
          <div className="mt-1 flex items-center text-sm text-neutral-500">
            <i className="bx bx-calendar-alt mr-1"></i>
            <span>{period}</span>
            <span className="mx-2">•</span>
            <i className="bx bx-map mr-1"></i>
            <span>{location}</span>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img src={logo} alt={`${company} logo`} className="h-10 w-10 rounded" />
        </div>
      </div>
      <div className="mt-3">
        <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${skill.color}`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
