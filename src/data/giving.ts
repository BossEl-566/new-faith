export type GivingMethod = {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  details: {
    label: string;
    value: string;
  }[];
};

export const givingMethods: GivingMethod[] = [
  {
    id: "mobile-money",
    name: "Mobile Money",
    description:
      "Give conveniently through Mobile Money when the church's official payment number is made available.",
    enabled: false,
    details: [],
  },
  {
    id: "bank-transfer",
    name: "Bank Transfer",
    description:
      "Support the ministry through direct bank transfer using the church's verified banking information.",
    enabled: false,
    details: [],
  },
  {
    id: "qr-payment",
    name: "QR Payment",
    description:
      "A verified church payment QR code can be made available here for convenient giving.",
    enabled: false,
    details: [],
  },
];

export const givingPrinciples = [
  {
    title: "Worship",
    description:
      "Giving is one way believers participate in worship and express gratitude to God.",
  },
  {
    title: "Ministry",
    description:
      "Financial support helps sustain the work, programmes and practical needs of the church.",
  },
  {
    title: "Outreach",
    description:
      "Giving can support evangelism, community outreach and efforts to take the gospel beyond the church walls.",
  },
  {
    title: "Stewardship",
    description:
      "We encourage giving to be approached thoughtfully, willingly and responsibly.",
  },
];

export const givingFaqs = [
  {
    question: "Can I give through Mobile Money?",
    answer:
      "The website is prepared to display the church's official Mobile Money details once they are confirmed and supplied.",
  },
  {
    question: "Can I give through bank transfer?",
    answer:
      "Yes, the website can support verified bank-transfer details once the church provides the official account information.",
  },
  {
    question: "Will online payment details be verified?",
    answer:
      "Only payment information officially supplied and approved by New Christian Faith Ministry should be displayed on this website.",
  },
  {
    question: "Can I give directly at church?",
    answer:
      "Visitors and members may also enquire at the church about the giving methods available during services and church activities.",
  },
];