import Image from "next/image";
import React from "react";
import Hamburger from "@/public/assets/Hamburger.png";
import Logo from "@/public/assets/logo.png";
import Notification from "@/public/assets/Bell.png";
const Navbar = () => {
  return (
    <nav
      className=" w-full h-20 bg-white flex justify-between 
    items-center   p-7"
    >
      <Image
        src={Hamburger}
        alt="hamburger menu"
        className=" size-12 lg:hidden"
      />
      <Image src={Logo} alt="logo" className="w-[136px] h-6" />
      <div className=" flex justify-between items-center w-[290px] text-color--4C4D4F text-sm max-lg:w-fit ">
        <p className=" max-lg:hidden">Sunday, 20 August</p>
        <p className=" max-lg:hidden">1:50 PM</p>
        <div className="size-12 flex justify-center items-center bg-color--F8F8F8 rounded-[14px] ">
          <Image src={Notification} alt="notification" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
