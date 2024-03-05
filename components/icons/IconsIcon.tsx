import { cn } from "@/lib/utils";
import React from "react";
interface IconsIconProps {
  className?: string;
}
const IconsIcon = ({ className }: IconsIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      className={cn("size-14 mobile:size-24 tablet:size-12", className)}
    >
      <path
        d="M49.1929 31.8367V9.09098C49.1929 8.48772 48.9532 7.90918 48.5266 7.48261C48.1001 7.05605 47.5215 6.81641 46.9183 6.81641H9.38785C8.7846 6.81641 8.20605 7.05605 7.77949 7.48261C7.35292 7.90918 7.11328 8.48772 7.11328 9.09098V46.6214C7.11328 47.2247 7.35292 47.8032 7.77949 48.2298C8.20605 48.6563 8.7846 48.896 9.38785 48.896H32.1336"
        stroke="#4C4D4F"
        strokeWidth="1.05042"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.6625 48.8991C45.3732 48.8991 49.1921 45.0803 49.1921 40.3695C49.1921 35.6587 45.3732 31.8398 40.6625 31.8398C35.9517 31.8398 32.1328 35.6587 32.1328 40.3695C32.1328 45.0803 35.9517 48.8991 40.6625 48.8991Z"
        stroke="#4C4D4F"
        strokeWidth="1.05042"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.6336 34.3367L22.2109 21.9141"
        stroke="#4C4D4F"
        strokeWidth="1.05042"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.6027 22.5804C21.8589 22.5804 22.8773 21.562 22.8773 20.3058C22.8773 19.0496 21.8589 18.0312 20.6027 18.0312C19.3465 18.0312 18.3281 19.0496 18.3281 20.3058C18.3281 21.562 19.3465 22.5804 20.6027 22.5804Z"
        stroke="#4C4D4F"
        strokeWidth="1.05042"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconsIcon;
