"use client";
import React, { useState } from "react";
import Image from "next/image";
import TemplateInvoice from "@/public/assets/template.png";
import { cn } from "@/lib/utils";
const TemplatesTab = () => {
  const [selected, setSelected] = useState(5);
  return (
    <div className="grid grid-cols-3  tablet:grid-cols-4 gap-x-5 mobile:gap-x-9 tablet:gap-x-3 gap-y-4 mobile:gap-y-9 tablet:gap-y-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
        <Image
          key={item}
          src={TemplateInvoice}
          alt="Template Invoice"
          quality={100}
          onClick={() => setSelected(item)}
          className={cn(
            "w-[130px] mobile:w-[233px] tablet:w-[160px] cursor-pointer",
            selected === item ? "border border-color--4C4D4F rounded-md" : ""
          )}
        />
      ))}
    </div>
  );
};

export default TemplatesTab;
