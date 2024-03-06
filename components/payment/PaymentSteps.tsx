import { BsCheck2 } from "react-icons/bs";

const PaymentSteps = () => {
  return (
    <div className=" flex items-center gap-2 justify-between ">
      {/* step 1 */}
      <div className="flex items-center gap-1 flex-shrink-0">
        <BsCheck2 className="size-7 text-white bg-color--36C490 rounded-full p-1 flex-shrink-0 mobile:size-12 mobile:p-2.5" />
        <p className=" text-[8px] mobile:text-[14px]">Shipping</p>
      </div>
      <div className="border-t-[1px] border-color--4C4D4F border-opacity-15 flex-shrink w-full"></div>
      {/* step 2 */}
      <div className="flex items-center gap-1 flex-shrink-0">
        <div className="size-7 bg-color--4C4D4F rounded-full text-white text-[8px] flex justify-center items-center flex-shrink-0 mobile:size-12 mobile:p-2.5 mobile:text-[12px]">
          2
        </div>
        <p className=" text-[8px] mobile:text-[14px]">Billing</p>
      </div>
      <div className="border-t-[1px] border-color--4C4D4F border-opacity-15 flex-shrink w-full"></div>
      <div className="flex items-center gap-1 flex-shrink-0">
        <div className="size-7  rounded-full text-black text-[8px] flex justify-center items-center border border-black border-opacity-45 flex-shrink-0 mobile:size-12 mobile:p-2.5 mobile:text-[12px]">
          3
        </div>
        <p className=" text-[8px] mobile:text-[14px]">Confirmation</p>
      </div>
    </div>
  );
};

export default PaymentSteps;
