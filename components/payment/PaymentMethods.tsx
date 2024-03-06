import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const PaymentMethods = () => {
  return (
    <div className="">
      <h3 className="text-[10px] mobile:text-[16px] text-color--4C4D4F">
        Payment Method
      </h3>
      <RadioGroup
        defaultValue="credit"
        className="flex gap-4 mobile:gap-7 mt-2 max-mobile:gap-2"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="credit" id="r1" className="mobile:size-5" />
          <Label htmlFor="r1" className="payment-text">
            Credit/Debit card
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="net-banking"
            id="r2"
            className="mobile:size-5"
          />
          <Label htmlFor="r2" className="payment-text">
            Net Banking
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="paypal" id="r3" className="mobile:size-5" />
          <Label htmlFor="r3" className="payment-text">
            Paypal
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="bitcoin" id="r4" className="mobile:size-5" />
          <Label htmlFor="r4" className="payment-text">
            Bitcoin
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default PaymentMethods;
