import { ReactNode } from "react";

interface StatsCardProps {
  icon: ReactNode;
  title: string;
  value: string | number;
  iconColor?: string;
}

const StatsCard = ({ icon, title, value, iconColor = "text-primary" }: StatsCardProps) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className={iconColor}>{icon}</div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-neutral-500 truncate">{title}</dt>
              <dd>
                <div className="text-lg font-medium text-neutral-900">{value}</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
