import React from "react";
import TableSearchbar from "../shared/TableSearchbar";
import { GrClose } from "react-icons/gr";
import TemplatesIcon from "../icons/TemplatesIcon";
import LayoutIcon from "../icons/LayoutIcon";
import AssetsIcon from "../icons/AssetsIcon";
import ColorsIcon from "../icons/ColorsIcon";
import BackgroundIcon from "../icons/BackgroundIcon";
import ShapesIcon from "../icons/ShapesIcon";
import ImagesIcon from "../icons/ImagesIcon";
import IconsIcon from "../icons/IconsIcon";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
const ElementsContainer = () => {
  return (
    <div className=" max-tablet:w-full w-[377px]  flex-shrink-0 bg-white rounded-[10px] mobile:rounded-[18px] tablet:rounded-[14px] p-5 mobile:p-16 tablet:p-6">
      <h4 className="text-[14px] mobile:text-[26px] tablet:text-[14px] text-color--4C4D4F font-light">
        Template Elements
      </h4>
      <div className="flex w-full justify-between items-center gap-5 mt-7">
        <TableSearchbar />
        <GrClose />
      </div>
      {/* Icons Grid */}
      <div className=" grid grid-cols-2 gap-x-4 gap-y-4 justify-items-center mt-10">
        <div className=" template-icons">
          <TemplatesIcon />
          <span>Templates</span>
        </div>
        <div className=" template-icons">
          <LayoutIcon />
          <span>Layout</span>
        </div>
        <div className=" template-icons">
          <AssetsIcon />
          <span>Assets</span>
        </div>
        <div className=" template-icons">
          <ColorsIcon />
          <span>Color</span>
        </div>
        <div className=" template-icons">
          <BackgroundIcon />
          <span>Background</span>
        </div>
        <div className=" template-icons">
          <ShapesIcon />
          <span>Shapes</span>
        </div>
        <div className=" template-icons">
          <ImagesIcon />
          <span>Images</span>
        </div>
        <div className=" template-icons">
          <IconsIcon />
          <span>Icons</span>
        </div>
      </div>
      <p className="mt-5 text-[14px] mobile:text-[26px] tablet:text-[14px] text-black text-opacity-50">
        Signature
      </p>
      <div className="w-full h-[112px] mobile:h-[202px] tablet:h-[100px] border mt-1 rounded-lg flex flex-col justify-end pb-5 items-center ">
        <Separator className="w-[90%] mt-5  bg-black bg-opacity-100" />
      </div>
      <div className=" w-full flex justify-center">
        <Button className="rounded-full p-5 w-2/3  mt-5 text-[14px] mobile:text-[26px] tablet:text-[14px] h-[50px] mobile:h-[100px] tablet:h-[50px]">
          Save & Send
        </Button>
      </div>
    </div>
  );
};

export default ElementsContainer;
