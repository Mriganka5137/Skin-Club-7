import { cn } from "@/lib/utils";
import React from "react";

interface LayoutIconProps {
  className?: string;
}
const LayoutIcon = ({ className }: LayoutIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="55"
      viewBox="0 0 56 55"
      fill="none"
      className={cn("size-14 mobile:size-24 tablet:size-12", className)}
    >
      <path
        d="M46.9183 6.52734H9.38785C8.7846 6.52734 8.20605 6.76699 7.77949 7.19355C7.35292 7.62012 7.11328 8.19866 7.11328 8.80192V46.3323C7.11328 46.9356 7.35292 47.5141 7.77949 47.9407C8.20605 48.3673 8.7846 48.6069 9.38785 48.6069H46.9183C47.5215 48.6069 48.1001 48.3673 48.5266 47.9407C48.9532 47.5141 49.1929 46.9356 49.1929 46.3323V8.80192C49.1929 8.19866 48.9532 7.62012 48.5266 7.19355C48.1001 6.76699 47.5215 6.52734 46.9183 6.52734Z"
        stroke="#4C4D4F"
      />
      <path d="M28.1562 6.52734V48.6069" stroke="#4C4D4F" />
      <path d="M49.196 27.5664H28.1562" stroke="#4C4D4F" />
    </svg>
  );
};

export default LayoutIcon;
