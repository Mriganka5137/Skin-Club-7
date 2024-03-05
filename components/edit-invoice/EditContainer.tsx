import React from "react";
import { Separator } from "../ui/separator";
import InvoiceCard from "../shared/InvoiceCard";
import InvoiceCardEdit from "./InvoiceCardEdit";

const EditContainer = () => {
  return (
    <div className=" w-full tablet:w-[1000px] border   tablet:bg-white rounded-[14px] max-tablet:border-none">
      <div className=" p-7">
        <h3 className=" text-[14px] mobile:text-[24px]">Edit Invoice</h3>
        <p className=" text-[11px] mobile:text-[20px] text-color--4C4D4F text-opacity-50 font-light">
          custom Invoice layout editing
        </p>
      </div>
      <Separator className="bg-border bg-opacity-0" />
      <div className="w-full flex justify-center items-center  tablet:py-20 ">
        <InvoiceCardEdit />
      </div>
    </div>
  );
};

export default EditContainer;
