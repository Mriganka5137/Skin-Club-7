import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cosmeticTreatments, payments } from "@/lib/data";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { DatePicker } from "../shared/DatePicker";
import TreatmentsTable from "./TreatmentsTable";
import TreatmentsCRUDTable from "./TreatmentsCRUDTable";
import SkinCareTable from "./SkinCareTable";
import Summary from "./Summary";

const CreateInvoiceTab = () => {
  return (
    <section className=" space-y-8 max-sm:space-y-3 ">
      <div className=" flex gap-4 mt-5 max-sm:mt-3 max-sm:gap-2">
        <Label className=" w-full space-y-2 max-sm:space-y-1 ">
          <span className="text-black text-opacity-50 font-light max-sm:text-[8px] ">
            Select Person
          </span>
          <Select>
            <SelectTrigger className="text-color--4C4D4F text-opacity-50 border-[0.5px] font-light border-color--4C4D4F border-opacity-50 max-sm:text-[8px] max-sm:h-7">
              <SelectValue
                className=""
                placeholder="Select the person to whom you will send this"
              />
            </SelectTrigger>
            <SelectContent>
              {payments.map((payment) => (
                <SelectItem
                  key={payment.Patient}
                  value={payment.Patient}
                  className="max-sm:text-[8px] max-sm:p-1"
                >
                  {payment.Patient}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Label>

        <Label className="w-full space-y-2 max-sm:space-y-1">
          <span className="text-black text-opacity-50 font-light max-sm:text-[8px]">
            Invoice Number
          </span>
          <Input className="text-color--4C4D4F text-opacity-50 font-light border-color--4C4D4F border-opacity-50 max-sm:text-[8px] max-sm:h-7" />
        </Label>
      </div>
      <div className=" flex gap-4 max-sm:gap-2 items-center ">
        <Label className=" w-full space-y-2 max-sm:space-y-1 ">
          <span className="text-black text-opacity-50 font-light max-sm:text-[8px]">
            Add a Treatment
          </span>
          <Select>
            <SelectTrigger className="text-color--4C4D4F text-opacity-50 font-light border-color--4C4D4F border-opacity-50 max-sm:text-[8px] max-sm:h-7">
              <SelectValue placeholder="Select a treatment" />
            </SelectTrigger>
            <SelectContent>
              {cosmeticTreatments.map((treatment) => (
                <SelectItem
                  key={treatment.name}
                  value={treatment.name}
                  className="max-sm:text-[8px] max-sm:p-1"
                >
                  {treatment.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Label>

        <Label className="w-full space-y-2 flex flex-col max-sm:space-y-1  pt-1">
          <span className="text-black text-opacity-50 font-light max-sm:text-[8px]">
            Select Date
          </span>
          <DatePicker />
        </Label>
      </div>
      <TreatmentsTable name="Anti Wrinkle treatment" amount={1480} />
      <TreatmentsCRUDTable />
      <SkinCareTable />
      <Summary />
    </section>
  );
};

export default CreateInvoiceTab;
