export const sidebar = [
  { label: "Overview", sub: [] },
  { label: "Profile", sub: [] },
  { label: "Appointments", sub: [] },
  { label: "History", sub: ["Videos", "Videos Library"] },
  { label: "Messages", sub: [] },
  { label: "Support", sub: ["FAQ's", "Procedure Information"] },
  { label: "Aftercare", sub: ["Quizzies", "Health & Skin Assesment"] },
  { label: "Finances", sub: [] },
];
export interface Payment {
  Patient: string;
  Time: string;
  date: Date;
  Total: number;
  Status: "In Progress" | "Complete" | "Canceled";
}

export const payments = [
  {
    Patient: "Alice Smith",
    Time: "12:00 PM - 1:30 PM",
    date: new Date("2021-10-10"),
    Total: 220,
    Status: "Complete",
  },
  {
    Patient: "Bob Johnson",
    Time: "1:00 PM - 2:00 PM",
    date: new Date("2021-10-10"),
    Total: 300,
    Status: "In Progress",
  },
  {
    Patient: "Emma Brown",
    Time: "12:30 PM - 2:00 PM",
    date: new Date("2021-10-10"),
    Total: 350,
    Status: "Canceled",
  },
  {
    Patient: "David Wilson",
    Time: "12:00 PM - 2:00 PM",
    date: new Date("2021-10-10"),
    Total: 400,
    Status: "Complete",
  },
  {
    Patient: "Grace Taylor",
    Time: "12:00 PM - 1:00 PM",
    date: new Date("2021-10-10"),
    Total: 150,
    Status: "In Progress",
  },
  {
    Patient: "Olivia Martinez",
    Time: "12:30 PM - 1:30 PM",
    date: new Date("2021-10-10"),
    Total: 280,
    Status: "Canceled",
  },
  {
    Patient: "James Anderson",
    Time: "12:30 PM - 2:00 PM",
    date: new Date("2021-10-10"),
    Total: 450,
    Status: "Complete",
  },
  {
    Patient: "Sophia White",
    Time: "12:00 PM - 1:30 PM",
    date: new Date("2021-10-10"),
    Total: 320,
    Status: "In Progress",
  },
  {
    Patient: "Liam Clark",
    Time: "1:00 PM - 2:00 PM",
    date: new Date("2021-10-10"),
    Total: 200,
    Status: "Canceled",
  },
  {
    Patient: "Ava Lee",
    Time: "12:00 PM - 1:00 PM",
    date: new Date("2021-10-10"),
    Total: 180,
    Status: "Complete",
  },
];
