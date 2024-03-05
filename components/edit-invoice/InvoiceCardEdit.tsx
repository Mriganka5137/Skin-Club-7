"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Separator } from "../ui/separator";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "../ui/table";
interface Item {
  item: string;
  rate: number;
  qty: number;
}
const InvoiceCardEdit = () => {
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
    <Card className="mt-5 border-color--4C4D4F border-opacity-20 tablet:w-[345px]  w-full">
      <CardHeader className="">
        <Image
          src={Logo}
          alt="logo"
          quality={100}
          className="w-[113px] mobile:w-[200px] tablet:w-[90px]"
        />
      </CardHeader>
      <CardContent className=" p-6 mobile:p-12 tablet:p-5">
        <div className=" flex items-center justify-start gap-2 ">
          <h3 className="uppercase text-color--4C4D4F text-[12px] mobile:text-[21px] tablet:text-[10px]">
            Summery
          </h3>
          <div className="  border-color--4C4D4F w-full opacity-20 border-b-[0.25px]"></div>
        </div>
        <div className=" flex  gap-20 mt-5 text-[15px] mobile:text-[26px] tablet:text-[12px]">
          <h3>Dr. Vihang</h3>
          <h3>Jane Doe</h3>
        </div>
        {/* <InvoiceTable /> */}
        <div className=" rounded-[5px] overflow-hidden border mt-10 mobile:rounded-[12px] tablet:rounded-[5px]">
          <Table className="text-[12px] mobile:text-[21px] tablet:text-[10px] font-light">
            <TableHeader className="">
              <TableRow className=" bg-black ">
                <TableHead className="text-white text-left p-5 mobile:p-4">
                  Item
                </TableHead>
                <TableHead className="text-white p-5 mobile:p-4">
                  Rate
                </TableHead>
                <TableHead className="text-white p-5 mobile:p-4">Qty</TableHead>
                <TableHead className="text-white text-right p-5 mobile:p-4">
                  Amount
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart.map((item, index) => (
                <TableRow key={index} className=" border-none">
                  <TableCell className="  p-3 mobile:p-5 tablet:p-3">
                    {item.item}
                  </TableCell>
                  <TableCell className="  p-3 mobile:p-5 tablet:p-3">
                    ${item.rate}
                  </TableCell>
                  <TableCell className="  p-3 mobile:p-5 tablet:p-3">
                    {item.qty}
                  </TableCell>
                  <TableCell className="text-right  p-3 mobile:p-5 tablet:p-3">
                    ${item.rate * item.qty}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* End */}
        <div className=" flex  items-end text-[12px] mobile:text-[21px] tablet:text-[10px] font-light flex-col  mt-5 gap-1.5">
          <div className=" flex gap-8 max-lg:gap-24 max-sm:gap-8 pr-3">
            <h3>Subtotal</h3>
            <h3>$2820.00</h3>
          </div>
          <div className=" flex gap-10 text-color--4C4D4F opacity-50 max-lg:gap-28 max-sm:gap-10 pr-3">
            <h3>tax</h3>
            <h3>$00.00</h3>
          </div>
          <div className=" flex gap-10 text-color--4C4D4F opacity-50 max-lg:gap-28 max-sm:gap-10 pr-3">
            <h3>Discount</h3>
            <h3>$00.00</h3>
          </div>
          <Separator className="w-full" />
          <div className=" flex gap-10 mt-2 max-lg:gap-28 max-sm:gap-10  pr-3   ">
            <h3>total</h3>
            <h3>$2820.00</h3>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="bg-color--F8F8F8 w-full px-3 py-2 text-[12px] mobile:text-[20px] tablet:text-[10px]">
          <h4>Notes/Terms</h4>
          <p className=" text-black opacity-50">
            Lorem ipsum dolor sit amet. Sit eaque assumenda qui.
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default InvoiceCardEdit;
