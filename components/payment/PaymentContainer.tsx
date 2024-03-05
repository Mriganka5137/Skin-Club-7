import React from "react";
import PaymentSteps from "./PaymentSteps";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import PaymentMethods from "./PaymentMethods";
import PaymentDetails from "./PaymentDetails";

const PaymentContainer = () => {
  return (
    <div className=" w-full bg-white xl:w-[800px]  px-4 py-6 rounded-lg space-y-6">
      <PaymentSteps />
      <PaymentMethods />
      <PaymentDetails />
    </div>
  );
};

export default PaymentContainer;
