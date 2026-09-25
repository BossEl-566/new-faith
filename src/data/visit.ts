export type ServiceItem = {
  title: string;
  day: string | null;
  time: string | null;
  description: string;
};

export const services: ServiceItem[] = [];

/*
  ADD REAL SERVICE TIMES WHEN PROVIDED:

  {
    title: "Sunday Worship",
    day: "Sunday",
    time: "8:00 AM",
    description:
      "Our main Sunday worship gathering.",
  }

  Do not leave example schedules in production.
*/

export const whatToExpect = [
  {
    title: "Christ-Centered Worship",
    description:
      "Gather with the church family in worship and praise centered on Jesus Christ.",
  },
  {
    title: "Prayer",
    description:
      "Prayer remains an important part of the spiritual life and fellowship of the church.",
  },
  {
    title: "The Word Of God",
    description:
      "The ministry is committed to teaching and living by the true, undiluted Word of God.",
  },
  {
    title: "Fellowship",
    description:
      "Meet people across generations and experience life together as part of the church community.",
  },
];

export const visitFaqs = [
  {
    question: "Where is the Head Office located?",
    answer:
      "The Head Office of New Christian Faith Ministry is located at Kwashieman in Accra. Use the Google Maps button on this page for directions.",
  },
  {
    question: "Do you have another branch?",
    answer:
      "Yes. Ebenezer Assemblies is located at Awoshie, adjacent to the DVLA, and is led by Ps Paul.",
  },
  {
    question: "What time are services?",
    answer:
      "The current service schedule has not yet been supplied for publication. Once confirmed, service days and times will appear on this page.",
  },
  {
    question: "Is there a children's ministry?",
    answer:
      "Yes. New Christian Faith Ministry has a Children's Ministry led by Mrs Sophia Odame. Visitors can ask a church leader on arrival for the current children's programme arrangements.",
  },
  {
    question: "How can I join a ministry?",
    answer:
      "Visit the Ministries page to explore available ministries. You can also speak with church leadership when you visit or use the Contact page.",
  },
  {
    question: "How can I become a member?",
    answer:
      "Membership information can be discussed directly with the church. Use the Contact page or speak with a church leader during your visit.",
  },
];