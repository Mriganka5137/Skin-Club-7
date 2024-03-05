import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Hamburger from "@/public/assets/Hamburger.png";
import Image from "next/image";
import { sidebar } from "@/lib/data";
import { Button } from "../ui/button";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="desktop:hidden">
        <Image src={Hamburger} alt="hamburger menu" className=" size-12 " />
      </SheetTrigger>
      <SheetContent side="left" className="w-fit h-screen overflow-auto">
        <div className="bg-white w-full  sidebar text-color--4C4D4F  flex flex-col gap-9 px-4 pb-5  ">
          {sidebar.map((item, index) => (
            <div key={index} className="first:mt-10 px-4">
              <p className="  text-lg font-light">{item.label}</p>
              {item.sub && (
                <div className="flex flex-col gap-4">
                  {item.sub.map((subItem, subIndex) => (
                    <p
                      className=" text-sm  ml-4 first:mt-5 font-extralight"
                      key={subIndex}
                    >
                      {subItem}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Button className="bg-color--FFF9F1 text-color--4C4D4F text-lg font-light flex justify-start h-12 rounded-[14px]">
            <span className="">Virtual Consultation</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
