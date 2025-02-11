
import React from "react";

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  expanded?: boolean;
  onToggle?: () => void;
  className?: string; // Added className prop
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  children,
  expanded = true,
  onToggle,
  className = "", // Default to empty string
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-stretch gap-5 text-sm text-[#0B0B0B] font-medium tracking-[0.04px] justify-between">
        <h3 className="my-auto">{title}</h3>
        <button onClick={onToggle}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/324a6c17ba2fcc8593605dd78e88fa44ddb095dab16b52b75e58370c574e225c?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-5 shrink-0"
            alt=""
          />
        </button>
      </div>
      {expanded && <div className="mt-3">{children}</div>}
    </div>
  );
};

