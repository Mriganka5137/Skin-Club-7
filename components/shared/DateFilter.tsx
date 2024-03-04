import React from "react";
import { Separator } from "../ui/separator";
import { BiDownArrow } from "react-icons/bi";
import { LucideArrowDownNarrowWide } from "lucide-react";
import { GoChevronDown } from "react-icons/go";
import { BsChevronDown } from "react-icons/bs";

const DateFilter = () => {
  return (
    <div className=" w-fit bg-color--F8F8F8 h-9 rounded-[8px] px-3.5 py-1.5 text-xs flex justify-between items-center text-color--4C4D4F opacity-80 gap-4 max-sm:text-[6px]">
      <span>Select Date:</span>
      <Separator orientation="vertical" />
      <span>20 Aug</span>
      <BsChevronDown className="cursor-pointer" />
    </div>
  );
};

export default DateFilter;
