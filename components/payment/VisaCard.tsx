import React from "react";
import { RadioGroupItem } from "../ui/radio-group";
import Image from "next/image";
import visa from "@/public/assets/visa.png";
interface Props {
  cardNumber: string;
}
const VisaCard = ({ cardNumber }: Props) => {
  return (
    <div className="border-[1px] border-color--4C4D4F rounded-lg h-[56px] border-opacity-35 flex justify-between items-center px-4 mobile:h-[100px] mobile:px-7 ">
      <div className="flex items-center gap-1">
        <RadioGroupItem value="visa" id="r1" className="size-3 mobile:size-5" />
        <Image
          src={visa}
          alt="image"
          width={100}
          height={100}
          className=" w-[56px] h-[18px] mobile:w-[100px] mobile:h-[32px]"
        />
      </div>
      <div className="text-right">
        <p className="text-[11px] mobile:text-[16px] text-color--4C4D4F font-sans">
          {cardNumber}
        </p>
        <p className=" text-[13px] text-color--4C4D4F font-sans font-light mobile:text-[24px]">
          VISA Card
        </p>
      </div>
    </div>
  );
};

export default VisaCard;
