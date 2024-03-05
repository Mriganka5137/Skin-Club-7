import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";

interface TreatmentProps {
  name: string;
  amount: number;
}
const TreatmentsTable = ({ name, amount }: TreatmentProps) => {
  return (
    <div className=" px-5 py-2 border rounded-[14px] bg-color--F8F8F8 border-color--4C4D4F border-opacity-20 max-xl:hidden">
      <Table className="">
        <TableHeader className="">
          <TableRow className="border-b-[1px] border-color--4C4D4F border-opacity-10">
            <TableHead className="w-2/4">Treatments</TableHead>
            <TableHead className="w-[50px]">Amount</TableHead>
            <TableHead className="w-1/4"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          <TableRow className="">
            <TableCell className="">{name}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell className="flex gap-2 px-0">
              <Button className="w-[144px] rounded-[12px]">Add</Button>
              <Button
                variant="outline"
                className="border-red-500 w-[144px] rounded-[12px]
                 text-red-500 "
              >
                Remove
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TreatmentsTable;
