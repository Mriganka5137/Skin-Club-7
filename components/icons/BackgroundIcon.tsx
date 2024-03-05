import { cn } from "@/lib/utils";
import React from "react";
interface BackgroundIconProps {
  className?: string;
}

const BackgroundIcon = ({ className }: BackgroundIconProps) => {
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
        d="M7.75781 18.9153V41.0923C7.75781 42.4496 8.29701 43.7514 9.25678 44.7111C10.2165 45.6709 11.5183 46.2101 12.8756 46.2101H43.5823C44.9396 46.2101 46.2414 45.6709 47.2011 44.7111C48.1609 43.7514 48.7001 42.4496 48.7001 41.0923V18.9153M7.75781 18.9153V13.7975C7.75781 12.4402 8.29701 11.1384 9.25678 10.1787C10.2165 9.21888 11.5183 8.67969 12.8756 8.67969H43.5823C44.9396 8.67969 46.2414 9.21888 47.2011 10.1787C48.1609 11.1384 48.7001 12.4402 48.7001 13.7975V18.9153M7.75781 18.9153H48.7001M12.8756 13.7975H12.8938V13.8157H12.8756V13.7975ZM17.9934 13.7975H18.0116V13.8157H17.9934V13.7975ZM23.1112 13.7975H23.1294V13.8157H23.1112V13.7975Z"
        stroke="#4C4D4F"
        strokeWidth="1.05042"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BackgroundIcon;
