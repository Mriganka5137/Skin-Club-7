import React from "react";
import { RadioGroup } from "../ui/radio-group";
import VisaCard from "./VisaCard";
import MasterCard from "./MasterCard";

const SavedCards = () => {
  return (
    <div className=" space-y-2 mobile:space-y-4">
      <h3 className="text-[10px] mobile:text-[16px] text-color--4C4D4F">
        Saved Cards
      </h3>
      <RadioGroup defaultValue="visa">
        <VisaCard cardNumber="**** **** 1157" />
        <MasterCard cardNumber="**** **** 1157" />
      </RadioGroup>
    </div>
  );
};

export default SavedCards;
