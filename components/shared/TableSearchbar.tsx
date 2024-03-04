import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Separator } from "../ui/separator";

const TableSearchbar = () => {
  return (
    <div className=" bg-color--F8F8F8 h-9 rounded-[8px] flex justify-between items-center max-tablet:text-[8px] ">
      <input
        type="text"
        placeholder="Search by patient name"
        className="bg-transparent w-full h-full px-4  placeholder:text-xs text-color--4C4D4F opacity-50 placeholder:font-extralight max-tablet:placeholder:text-[8px]"
      />
      <Separator orientation="vertical" className="h-1/2 mr-2 stroke-2" />
      <FaMagnifyingGlass className="mr-5  text-color--4C4D4F opacity-50" />
    </div>
  );
};

export default TableSearchbar;
