"use client";
import { useEffect, useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import { HiMiniXMark } from "react-icons/hi2";
import { IoMailOutline } from "react-icons/io5";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";

const ConfirmButton = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  }, []);
  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          variant="default"
          className="rounded-full text-[8px] mobile:text-[14px] h-7 w-[106px] mobile:h-12 mobile:w-[200px]  "
        >
          Confirm Payment
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="h-fit   w-[80%] rounded-md">
        <AlertDialogHeader className=" h-fit space-y-2">
          <BsCheck2 className="size-7 text-white bg-color--36C490 rounded-full p-1 flex-shrink-0 mobile:size-12 mobile:p-2.5" />
          <AlertDialogTitle className="flex flex-col items-center gap-5 text-color--36C490 text-[24px] mobile:text-[44px] tablet:text-[36px] font-light mt-4 ">
            Payment Successful
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="p-10 text-color--4C4D4F text-[9px] mobile:text-[17px] tablet:text-[14px]">
          <div className="flex justify-between">
            <p>Payment Type</p>
            <p>Net Banking</p>
          </div>
          <div className="flex justify-between">
            <p>Bank</p>
            <p>HDFC</p>
          </div>
          <div className="flex justify-between">
            <p>Mobile</p>
            <p>+91 123456789</p>
          </div>
          <div className="flex justify-between">
            <p>Email</p>
            <p>bdebashis182@gmail.com</p>
          </div>
          <div className="flex justify-between mt-5 text-black font-bold">
            <p>Amount Paid</p>
            <p>$180.00</p>
          </div>
          <div className="flex justify-between text-black font-bold">
            <p>Transaction ID</p>
            <p>#123456789065432</p>
          </div>
        </div>

        <AlertDialogFooter className="flex-row items-center">
          <Button variant="alert" className="flex items-center gap-2">
            <IoMailOutline className="size-2.5 mobile:size-5 tablet:size-4" />
            Send to mail
          </Button>
          <AlertDialogCancel
            onClick={() => {
              setOpen(false);
            }}
          >
            <HiMiniXMark />
            Close
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmButton;
