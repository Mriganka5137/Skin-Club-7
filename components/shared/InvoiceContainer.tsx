import { HiOutlinePrinter } from "react-icons/hi";
import { Button } from "../ui/button";
import InvoiceCard from "./InvoiceCard";
const InvoiceContainer = () => {
  return (
    <div className=" w-[377px] bg-white p-4 rounded-[14px] max-lg:w-full max-lg:h-[1500px] max-sm:h-[800px] max-sm:p-2">
      <div className=" flex justify-between items-center">
        <h3 className=" text-[14px] max-lg:text-[28px] max-sm:text-[15px]">
          Preview Invoice
        </h3>
        <div className="size-10 bg-color--F8F8F8 flex justify-center items-center rounded-[8px] max-lg:size-20 max-sm:size-10">
          <HiOutlinePrinter className="size-5 stroke-1 stroke-color--4C4D4F cursor-pointer max-lg:size-10 max-sm:size-50" />
        </div>
      </div>
      <InvoiceCard />
      <div className=" flex justify-center mt-12 max-lg:hidden">
        <Button className="rounded-full text-[14px] px-8 py-4 h-12 font-light ">
          Create New Invoice
        </Button>
      </div>
    </div>
  );
};

export default InvoiceContainer;
