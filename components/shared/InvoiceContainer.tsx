import { Button } from "../ui/button";
import InvoiceCard from "./InvoiceCard";
import { CiEdit } from "react-icons/ci";
import { PiPrinterThin } from "react-icons/pi";
interface InvoiceContainerProps {
  edit?: boolean;
  url?: "create-invoice" | "/";
}
const InvoiceContainer = ({ edit, url }: InvoiceContainerProps) => {
  return (
    <div className="  bg-white p-4 rounded-[14px] max-lg:w-full max-lg:h-[1500px] max-sm:h-[900px] max-sm:p-3 flex-shrink-0 flex flex-col justify-between max-lg:justify-start max-lg:gap-20 max-sm:pb-10 w-full xl:w-[377px] gap-20">
      <div>
        <div className=" flex justify-between items-center">
          <h3 className=" text-[14px] max-lg:text-[28px] max-sm:text-[15px]">
            Preview Invoice
          </h3>
          <div className="flex justify-between gap-5 items-center">
            {edit && (
              <CiEdit className="size-9 p-2 bg-color--F8F8F8  rounded-[8px] max-lg:size-20 max-lg:p-4 max-sm:size-10 max-sm:p-3 " />
            )}
            <PiPrinterThin className="size-9 p-2 bg-color--F8F8F8  rounded-[8px] max-lg:size-20 max-lg:p-4 max-sm:size-10 max-sm:p-3 " />
          </div>
        </div>
        <InvoiceCard />
        {url === "/" && (
          <div className=" flex justify-center mt-12 max-lg:hidden">
            <Button className="rounded-full text-[14px] px-8 py-4 h-12 font-light ">
              Create New Invoice
            </Button>
          </div>
        )}
      </div>

      {url === "create-invoice" && (
        <div className="flex max-lg:flex-col justify-center gap-2 items-center">
          <Button
            variant="outline"
            className="rounded-full text-[14px] px-8 py-4 h-12 font-light  max-lg:h-24 max-lg:text-[28px] max-lg:w-[375px] max-sm:w-[210px] max-sm:h-[55px] max-sm:text-base "
          >
            Save
          </Button>
          <Button className="rounded-full text-[14px] px-8 py-4 h-12 font-light  max-lg:h-24 max-lg:text-[28px] max-lg:w-[375px] max-sm:w-[210px] max-sm:h-[55px] max-sm:text-base ">
            Save & Send
          </Button>
        </div>
      )}
    </div>
  );
};

export default InvoiceContainer;
