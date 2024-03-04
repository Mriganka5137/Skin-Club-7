import { sidebar } from "@/lib/data";
import React from "react";
import { Button } from "../ui/button";

const Sidebar = () => {
  return (
    <div className="bg-white w-60 sidebar text-color--4C4D4F  flex flex-col gap-9 px-4 pb-5 max-[1440px]:hidden">
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
  );
};

export default Sidebar;
