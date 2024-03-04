"use client";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Separator } from "../ui/separator";
import TableSearchbar from "./TableSearchbar";
import DateFilter from "./DateFilter";
import DataTable from "./DataTable";

const TableContainer = () => {
  return (
    <section className=" bg-white rounded-[14px] max-lg:bg-transparent  max-lg:text-[12px] w-full xl:w-[750px]">
      <div className="px-7 py-6 flex justify-between items-center max-sm:px-2 max-sm:py-2">
        <TableSearchbar />
        <DateFilter />
      </div>
      <Separator />
      <DataTable />
    </section>
  );
};

export default TableContainer;
