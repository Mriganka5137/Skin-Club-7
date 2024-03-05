import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { Separator } from "../ui/separator";

const PaymentSteps = () => {
  return (
    <div className=" flex items-center gap-1 ">
      <BsCheck2 className="size-7 text-white bg-color--36C490 rounded-full p-1 flex-shrink-0 mobile:size-12 mobile:p-2.5" />
      <p className=" text-[8px] mobile:text-[14px]">Shipping</p>
      <div className="w-[90px] border-t max-mobile:w-[20px] max-mobile:flex-shrink-0"></div>
      {/* <Separator className="w-[90px] max-mobile:w-[20px]" /> */}
      <div className="size-7 bg-color--4C4D4F rounded-full text-white text-[8px] flex justify-center items-center flex-shrink-0 mobile:size-12 mobile:p-2.5 mobile:text-[12px]">
        2
      </div>
      <p className=" text-[8px] mobile:text-[14px]">Billing</p>
      <div className="w-[90px] border-t max-mobile:w-[20px]"></div>

      <div className="size-7  rounded-full text-black text-[8px] flex justify-center items-center border border-black border-opacity-45 flex-shrink-0 mobile:size-12 mobile:p-2.5 mobile:text-[12px]">
        3
      </div>
      <p className=" text-[8px] mobile:text-[14px]">Confirmation</p>
    </div>
  );
};

export default PaymentSteps;
