import React from "react";
import { Card, CardContent } from "../ui/card";
import { RadioGroupItem } from "../ui/radio-group";
import Image from "next/image";
import mastercard from "@/public/assets/mastercard.png";
interface Props {
  cardNumber: string;
}
const MasterCard = ({ cardNumber }: Props) => {
  return (
    <div className="border-[1px] border-color--4C4D4F rounded-lg h-[56px] border-opacity-35 flex justify-between items-center px-4 mobile:h-[100px] mobile:px-7 ">
      <div className="flex items-center gap-1 mobile:gap-2">
        <RadioGroupItem
          value="mastercard"
          id="r1"
          className="size-3 mobile:size-5"
        />
        <Image
          src={mastercard}
          alt="image"
          width={100}
          height={100}
          className=" w-[56px] h-[35px] mobile:w-[100px] mobile:h-[62px]"
        />
      </div>
      <div className="text-right">
        <p className="text-[11px] mobile:text-[16px] text-color--4C4D4F font-sans">
          {cardNumber}
        </p>
        <p className=" text-[13px] text-color--4C4D4F font-sans font-light mobile:text-[24px]">
          Master Card
        </p>
      </div>
    </div>
  );
};

export default MasterCard;
