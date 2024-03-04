import Invoice from "@/components/shared/Invoice";
import Table from "@/components/shared/Table";

export default function Home() {
  return (
    <main className=" px-6 py-8">
      <h1 className=" text-3xl font-light text-color--4C4D4F">Invoice</h1>
      <h3 className=" mt-2  text-color--4C4D4F opacity-85 text-lg">
        Invoice list
      </h3>
      <div className="flex max-lg:flex-col gap-6 ">
        <Table />
        <Invoice />
      </div>
    </main>
  );
}
