"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { payments } from "@/lib/data";
import { cn, formatDate } from "@/lib/utils";
import { Badge } from "../ui/badge";

const DataTable = () => {
  const [selected, setSelected] = useState(5);
  return (
    <div className="px-7 py-6 max-tablet:px-2 ">
      <div className="border rounded-xl overflow-hidden max-lg:border-none">
        <Table className=" text-[10px] max-lg:text-[12px] max-sm:text-[8px]">
          <TableHeader className=" text-color--4C4D4F opacity-80 text-xs font-light max-lg:bg-white">
            <TableRow className="border-none ">
              <TableHead className="  text-left">Patient</TableHead>
              <TableHead className=" w-fit">Time</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-color--F8F8F8 max-lg:bg-transparent">
            {payments.map((payment, index) => (
              <TableRow
                className={cn(
                  "cursor-pointer",
                  selected === index && "bg-white"
                )}
                key={index}
                onClick={() => setSelected(index)}
              >
                <TableCell className=" max-tablet:p-3">
                  {payment.Patient}
                </TableCell>
                <TableCell className="w-fit max-tablet:p-3">
                  {payment.Time}
                </TableCell>
                <TableCell className=" max-tablet:p-3">
                  {formatDate(payment.date)}
                </TableCell>
                <TableCell className=" max-tablet:p-3">
                  ${payment.Total}
                </TableCell>
                <TableCell className="  max-tablet:p-3 text-right">
                  <Badge
                    className={cn(
                      "font-extralight rounded-[10px]",
                      payment.Status === "In Progress"
                        ? "bg-color--F1B34A"
                        : "bg-color--36C490",
                      payment.Status === "Canceled" &&
                        "bg-color--FFF9F1 text-color--4C4D4F",
                      "text-[10px] max-lg:text-[12px] max-sm:text-[5px]"
                    )}
                  >
                    {payment.Status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="max-lg:bg-transparent">
            <TableRow className="hover:bg-inherit ">
              <TableCell colSpan={5} align="center">
                <span className="underline text-sm cursor-pointer">
                  View More
                </span>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
