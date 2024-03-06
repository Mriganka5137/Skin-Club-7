import React from "react";
import { Button } from "../ui/button";
import ConfirmButton from "./ConfirmButton";

const PaymentConfirmation = () => {
  return (
    <div className=" mt-4 mobile:mt-8 tablet:mt-10">
      <p className="w-2/3 text-[8px] mobile:text-[14px] tablet:w-full">
        By Clicking on ‘Confirm Payment’ I agree with the terms and conditions
        of the Company.
      </p>
      <div className="flex gap-2 mt-2.5 mobile:mt-5 tablet:mt-4">
        <Button
          variant="outline"
          className="rounded-full text-[8px] mobile:text-[14px] h-7 w-[106px] mobile:h-12 mobile:w-[200px] "
        >
          Save
        </Button>

        <ConfirmButton />
      </div>
    </div>
  );
};

export default PaymentConfirmation;
