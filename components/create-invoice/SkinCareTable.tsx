"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { GiCancel } from "react-icons/gi";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Treatment {
  name?: string;
  rate?: number;
  noOfSection?: number;
  total?: number;
}
const SkinCareTable = () => {
  const [treatment, setTreatment] = useState<Treatment[]>([
    {
      name: "Vitamin A Night Serum",
      rate: 145,
      noOfSection: 8,
      total: 1160,
    },
    {
      name: "Vitamin A Night Serum",
      rate: 145,
      noOfSection: 8,
      total: 1160,
    },
  ]);

  const handleInputChange = (
    index: number,
    field: string,
    value: string | number
  ) => {
    const updatedTreatments = [...treatment];
    updatedTreatments[index] = {
      ...updatedTreatments[index],
      [field]: value,
    };
    setTreatment(updatedTreatments);
  };
  return (
    <div className="w-full border border-color--4C4D4F border-opacity-20  px-5 py-2 pb-4  rounded-[14px] bg-color--F8F8F8 max-sm:px-1 ">
      <Table>
        <TableHeader className="">
          <TableRow className="border-b-[1px] border-color--4C4D4F border-opacity-10 max-sm:text-[8px] ">
            <TableHead className="max-sm:p-1 max-sm:h-4 max-lg:w-[300px] max-md:w-[200px] max-sm:w-[150px] ">
              Skincare Items
            </TableHead>
            <TableHead className="max-sm:p-1 max-sm:h-4">Rate</TableHead>
            <TableHead className="max-sm:p-1 max-sm:h-4">Qty</TableHead>
            <TableHead className="max-sm:p-1 max-sm:h-4">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {treatment.map((treatment, index) => (
            <TableRow key={index} className="border-none">
              <TableCell className="max-sm:p-1 max-lg:p-2">
                <Input
                  className="border-[1px] border-color--4C4D4F border-opacity-20 max-sm:h-6 max-sm:text-[8px]"
                  type="text"
                  value={treatment.name}
                  onChange={(e) =>
                    handleInputChange(index, "name", e.target.value)
                  }
                />
              </TableCell>
              <TableCell className="max-sm:p-1 max-lg:p-2">
                <Input
                  className="border-[1px] border-color--4C4D4F border-opacity-20 max-sm:h-6 max-sm:text-[8px]"
                  type="number"
                  value={treatment.rate}
                  onChange={(e) =>
                    handleInputChange(index, "rate", parseInt(e.target.value))
                  }
                />
              </TableCell>
              <TableCell className="max-sm:p-1 max-lg:p-2">
                <Input
                  className="border-[1px] border-color--4C4D4F border-opacity-20 max-sm:h-6 max-sm:text-[8px]"
                  type="number"
                  value={treatment.noOfSection}
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      "noOfSection",
                      parseInt(e.target.value)
                    )
                  }
                />
              </TableCell>
              <TableCell className="max-sm:p-1 max-lg:p-2 flex items-center gap-2">
                <Input
                  className="border-[1px] border-color--4C4D4F border-opacity-20 max-sm:h-6 max-sm:text-[8px]"
                  type="number"
                  value={treatment.total}
                  onChange={(e) =>
                    handleInputChange(index, "total", parseInt(e.target.value))
                  }
                />
                <GiCancel
                  className="md:hidden size-7  max-sm:size-4 text-color--4C4D4F 
                "
                />
                <RiDeleteBin6Line className="max-md:hidden size-5" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="text-right space-x-2 max-lg:hidden">
        <Button className="w-[144px] rounded-[12px]">Add</Button>
        <Button
          variant="outline"
          className="border-red-500 w-[144px] rounded-[12px]
                 text-red-500 "
        >
          Remove
        </Button>
      </div>
      <div className=" text-left lg:hidden px-5 max-sm:px-1 max-sm:mt-2">
        <Button className="rounded-full w-48 max-sm:text-[8px] max-sm:w-[105px] max-sm:h-7">
          Add Item
        </Button>
      </div>
    </div>
  );
};

export default SkinCareTable;
