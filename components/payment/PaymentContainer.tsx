"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import PaymentConfirmation from "./PaymentConfirmation";
import AddNewCard from "./PaymentDetails";
import PaymentMethods from "./PaymentMethods";
import PaymentSteps from "./PaymentSteps";
import SavedCards from "./SavedCards";

const PaymentContainer = () => {
  const [addCard, setAddCard] = useState(false);
  return (
    <div className=" w-full bg-white xl:w-[800px]  px-4 py-6 rounded-lg space-y-6">
      <PaymentSteps />
      <PaymentMethods />
      {addCard ? <AddNewCard /> : null}
      {!addCard && (
        <>
          <SavedCards />
          <div className="flex justify-center">
            <Button
              variant="outline"
              className=" rounded-full w-[100px] mobile:w-[186px] mobile:h-12 h-7 text-[7px] border-color--4C4D4F mobile:text-[14px] border-opacity-50 text-color--4C4D4F"
              onClick={() => setAddCard(true)}
            >
              ADD New Card
            </Button>
          </div>
        </>
      )}

      <PaymentConfirmation />
    </div>
  );
};

export default PaymentContainer;
