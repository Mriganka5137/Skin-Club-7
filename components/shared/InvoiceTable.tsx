"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
interface Item {
  item: string;
  rate: number;
  qty: number;
}

const InvoiceTable = () => {
  const [cart, setCart] = useState<Item[]>([
    {
      item: "Vitamin A Night Serum",
      rate: 90,
      qty: 2,
    },
    {
      item: "Anti Wrinkle treatment",
      rate: 1480,
      qty: 1,
    },
    {
      item: "Hair Care Session",
      rate: 145,
      qty: 8,
    },
  ]);
  return (
    <div className=" rounded-[5px] overflow-hidden border mt-8 max-lg:rounded-[10px] max-sm:rounded-[5px]">
      <Table className="text-[10px] max-lg:text-[20px] max-sm:text-[10px] font-light">
        <TableHeader className="">
          <TableRow className=" bg-black ">
            <TableHead className="text-white text-left max-lg:p-5">
              Item
            </TableHead>
            <TableHead className="text-white max-lg:p-5">Rate</TableHead>
            <TableHead className="text-white max-lg:p-5">Qty</TableHead>
            <TableHead className="text-white text-right max-lg:p-5">
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart.map((item, index) => (
            <TableRow key={index} className=" border-none">
              <TableCell className=" p-3  max-lg:p-5 max-sm:p-3">
                {item.item}
              </TableCell>
              <TableCell className=" p-3 text-right  max-lg:p-5 max-sm:p-3">
                ${item.rate}
              </TableCell>
              <TableCell className=" p-3 text-right  max-lg:p-5 max-sm:p-3">
                {item.qty}
              </TableCell>
              <TableCell className="text-right p-3  max-lg:p-5 max-sm:p-3">
                ${item.rate * item.qty}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InvoiceTable;
