import TabsContainer from "@/components/create-invoice/TabsContainer";
import InvoiceContainer from "@/components/shared/InvoiceContainer";
import TableContainer from "@/components/shared/TableContainer";
import React from "react";

const CreateInvoivePage = () => {
  return (
    <div className="  flex-grow w-full px-6 py-8  ">
      <h1 className=" text-3xl font-light text-color--4C4D4F">Invoice</h1>
      <h3 className=" mt-2  text-color--4C4D4F opacity-85 text-lg">
        Create a invoice for your patients
      </h3>
      <div className="flex max-lg:flex-col gap-6 mt-8 w-full max-sm:mt-2   ">
        <TabsContainer />
        <InvoiceContainer edit={true} url="create-invoice" />
      </div>
    </div>
  );
};

export default CreateInvoivePage;
