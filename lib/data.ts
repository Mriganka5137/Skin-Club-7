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

export const cosmeticTreatments = [
  {
    name: "Facial Cleansing",
    description:
      "A deep cleansing treatment to remove impurities and unclog pores, leaving the skin refreshed and revitalized.",
    duration: "60 minutes",
    price: "$80",
  },
  {
    name: "Chemical Peel",
    description:
      "A chemical solution is applied to the skin to exfoliate dead skin cells and stimulate new cell growth, resulting in smoother, brighter skin.",
    duration: "45 minutes",
    price: "$120",
  },
  {
    name: "Microdermabrasion",
    description:
      "A minimally invasive procedure that uses a special applicator to gently sand away the outer layer of skin, revealing a smoother, more even complexion.",
    duration: "30 minutes",
    price: "$100",
  },
  {
    name: "Dermaplaning",
    description:
      "A technique that uses a sterile surgical scalpel to gently exfoliate the top layer of dead skin cells and remove fine vellus hair (peach fuzz), resulting in smoother, brighter skin.",
    duration: "45 minutes",
    price: "$150",
  },
  {
    name: "Micro-needling",
    description:
      "A procedure that uses fine needles to create tiny punctures in the skin, stimulating collagen and elastin production, and promoting skin repair and regeneration.",
    duration: "60 minutes",
    price: "$200",
  },
  {
    name: "HydraFacial",
    description:
      "A hydrating and exfoliating treatment that cleanses, extracts, and hydrates the skin, leaving it clearer, brighter, and more radiant.",
    duration: "45 minutes",
    price: "$180",
  },
  {
    name: "Laser Skin Resurfacing",
    description:
      "A laser treatment that removes damaged skin cells and stimulates collagen production, resulting in smoother, firmer, and more youthful-looking skin.",
    duration: "60 minutes",
    price: "$300",
  },
  {
    name: "Acne Treatment",
    description:
      "A customized treatment targeting acne-prone skin, including deep cleansing, exfoliation, extraction, and acne-fighting ingredients to reduce breakouts and improve skin clarity.",
    duration: "60 minutes",
    price: "$150",
  },
  {
    name: "Botox",
    description:
      "A minimally invasive procedure that involves injecting botulinum toxin into targeted facial muscles to reduce the appearance of wrinkles and fine lines.",
    duration: "30 minutes",
    price: "$250",
  },
  {
    name: "Fillers",
    description:
      "Injectable substances, such as hyaluronic acid or collagen, used to restore volume and fullness to the face, reduce wrinkles, and enhance facial contours.",
    duration: "60 minutes",
    price: "$400",
  },
  {
    name: "LED Light Therapy",
    description:
      "A non-invasive treatment that uses specific wavelengths of light to stimulate collagen production, reduce inflammation, and improve the overall tone and texture of the skin.",
    duration: "30 minutes",
    price: "$80",
  },
  {
    name: "PRP Therapy (Platelet-Rich Plasma)",
    description:
      "A procedure that uses the patient's own blood plasma, enriched with platelets, to promote tissue repair, collagen production, and hair growth, resulting in rejuvenated skin.",
    duration: "60 minutes",
    price: "$350",
  },
  {
    name: "CoolSculpting",
    description:
      "A non-surgical fat reduction treatment that freezes and destroys fat cells, resulting in a more contoured body shape.",
    duration: "60 minutes",
    price: "$500",
  },
  {
    name: "Ultherapy",
    description:
      "A non-invasive procedure that uses ultrasound technology to lift and tighten the skin on the face, neck, and chest, resulting in a more youthful appearance.",
    duration: "90 minutes",
    price: "$600",
  },
  {
    name: "Thread Lift",
    description:
      "A minimally invasive procedure that uses dissolvable threads to lift and tighten sagging skin on the face, resulting in a more lifted and youthful appearance.",
    duration: "60 minutes",
    price: "$450",
  },
];
