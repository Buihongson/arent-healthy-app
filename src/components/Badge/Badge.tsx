import React from 'react';
import classNames from 'classnames';

interface IBadgeIconProps {
  icon: string;
  badgeNumber?: number;
  className?: string;
}

const Badge = ({
  icon,
  badgeNumber,
  className = 'w-6 h-6',
}: IBadgeIconProps) => {
  return (
    <div className="relative">
      <img src={icon} alt="" className={classNames('mr-2', className)} />
      {badgeNumber && (
        <div className="absolute top-0 right-0 -translate-y-1/3 w-4 h-4 bg-[#EA6C00] rounded-full flex items-center justify-center text-xs text-white">
          {badgeNumber}
        </div>
      )}
    </div>
  );
};

export default Badge;
