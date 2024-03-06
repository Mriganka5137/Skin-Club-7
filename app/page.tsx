import PaymentContainer from "@/components/payment/PaymentContainer";
import InvoiceContainer from "@/components/shared/InvoiceContainer";

const EditInvoicePage = () => {
  return (
    <div className="  flex-grow w-full px-6 py-8 ">
      <h1 className=" text-3xl font-light text-color--4C4D4F">Payment</h1>
      <h3 className=" mt-2  text-color--4C4D4F opacity-85 text-[20px]">
        Create a invoice for your patients
      </h3>
      <div className="flex flex-col lg:flex-row gap-6 mt-8 w-full max-sm:mt-2 ">
        <PaymentContainer />
        <InvoiceContainer edit={true} />
      </div>
    </div>
  );
};

export default EditInvoicePage;
