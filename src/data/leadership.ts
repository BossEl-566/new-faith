export type ChurchLeader = {
  name: string;
  role: string;
  image: string | null;
  description: string;
};

export const founders: ChurchLeader[] = [
  {
    name: "Rev Kingsley Asiedu",
    role: "Founder • First Leader of the Church",
    image: "/images/kingsley-asiedu.jpg",
    description:
      "A founder of New Christian Faith Ministry and the first leader of the church, serving during its foundational years.",
  },
  {
    name: "Rev Emmanuel Nkrumah",
    role: "Founder",
    image: "/images/emmanuel-nkrumah.jpg",
    description:
      "A founding leader of New Christian Faith Ministry who later served the church through twenty-five years of leadership from 2000 to 2025.",
  },
  {
    name: "Rev Fredrick Odame",
    role: "Founder",
    image: "/images/fredrick-odame.jpg",
    description:
      "One of the founding leaders whose faith and commitment contributed to the establishment of New Christian Faith Ministry.",
  },
  {
    name: "Rev Dickson Amoah",
    role: "Founder",
    image: "/images/dickson-amoah.jpg",
    description:
      "One of the founding leaders of New Christian Faith Ministry.",
  },
  {
    name: "Mr Felix Nyame",
    role: "Founder",
    image: "/images/felix-nyame.jpg",
    description:
      "One of the founders whose contribution forms part of the heritage of New Christian Faith Ministry.",
  },
  {
    name: "Mr Samuel Afful",
    role: "Founder",
    image: "/images/samuel-afful.jpg",
    description:
      "One of the founders whose service contributed to the establishment and early development of the ministry.",
  },
];

export const foundingMembers: ChurchLeader[] = [
  {
    name: "Pastor Francis Obuobi",
    role: "Founding Member",
    image: "/images/francis-obuobi.jpg",
    description:
      "A founding member who contributed to the early life and development of New Christian Faith Ministry.",
  },
];

export const pastoralLeadership: ChurchLeader[] = [
  {
    name: "Rev Nicholas Yeboah",
    role: "Head Pastor",
    image: "/images/pastor-yeboah.jpg",
    description:
      "Providing pastoral leadership, spiritual direction and oversight for the continuing work of New Christian Faith Ministry.",
  },
  {
    name: "Pastor Chrisman Boakye Yiadom",
    role: "Pastor",
    image: "/images/chrisman-yiadom.jpg",
    description:
      "Serving the church through pastoral ministry, spiritual guidance and support for the continuing work of the ministry.",
  },
  {
    name: "Rev Paul Ayirebi",
    role: "Pastor",
    image: "/images/paul-ayirebi.jpg",
    description:
      "Serving New Christian Faith Ministry through pastoral ministry and spiritual leadership.",
  },
  {
    name: "Ps Samuel Baah",
    role: "Youth Pastor",
    image: "/images/pastor-baah.jpg",
    description:
      "Leading and serving the Youth Ministry as young people grow in faith, fellowship, responsibility and purpose.",
  },
];

export const ministryLeadership: ChurchLeader[] = [
  {
    name: "Miss Grace Yankey",
    role: "Children's Ministry Leader",
    image: "/images/grace-yankey.jpg",
    description:
      "Leading the Children's Ministry and helping children establish strong biblical foundations and grow in their knowledge of Christ.",
  },
  {
    name: "Mrs Joyce Sarfo Manu",
    role: "Deaconess • Women's Ministry Leader",
    image: "/images/joyce-sarfo-manu.jpg",
    description:
      "Serving as a deaconess and providing leadership for the Women's Ministry.",
  },
];

export const executiveLeadership: ChurchLeader[] = [
  {
    name: "Mr Williams Sturf",
    role: "Chairman",
    image: "/images/williams-sturf.jpg",
    description:
      "Serving the church as Chairman and supporting the leadership and administration of the ministry.",
  },
  {
    name: "Miss Felicia Falade",
    role: "Church Secretary",
    image: "/images/felicia-falade.jpg",
    description:
      "Supporting the administration, coordination and organisational work of the church.",
  },
  {
    name: "Mr Kennedy Owusu",
    role: "Financial Secretary",
    image: "/images/kennedy-owusu.jpg",
    description:
      "Serving the church through financial administration, record keeping and stewardship.",
  },
];

export const elders: ChurchLeader[] = [
  {
    name: "Mr Joseph Arthur",
    role: "Elder",
    image: "/images/joseph-arthur.jpg",
    description:
      "Serving the church through spiritual leadership, counsel and support for the ministry.",
  },
  {
    name: "Mr Jonah Ofosu Amoako",
    role: "Elder",
    image: "/images/jonah-amoako.jpg",
    description:
      "Serving the church through spiritual leadership, counsel and support for the ministry.",
  },
  {
    name: "Mr Kingsford Okyere",
    role: "Elder",
    image: "/images/kingsford-okyere.jpg",
    description:
      "Serving the church through spiritual leadership, counsel and support for the ministry.",
  },
];

export const deacons: ChurchLeader[] = [
  {
    name: "Mr Benoni Odoi-Boye Odoi",
    role: "Deacon",
    image: "/images/benoni-odoi.jpg",
    description:
      "Serving the church through diaconal ministry and practical support for the congregation.",
  },
  {
    name: "Mr Henry Yeboah",
    role: "Deacon",
    image: "/images/henry-yeboah.jpg",
    description:
      "Serving the church through diaconal ministry and practical support for the congregation.",
  },
  {
    name: "Mr Benjamin Tetteh",
    role: "Deacon",
    image: "/images/benjamin-tetteh.jpg",
    description:
      "Serving the church through diaconal ministry and practical support for the congregation.",
  },
  {
    name: "Mr John Adams",
    role: "Deacon",
    image: "/images/john-adams.jpg",
    description:
      "Serving the church through diaconal ministry and practical support for the congregation.",
  },
  {
    name: "Mrs Gloria Akua Bimpomaa Amoako",
    role: "Deaconess",
    image: "/images/gloria-bimpomaa.jpg",
    description:
      "Serving the church through diaconal ministry and practical support for the congregation.",
  },
  {
    name: "Mrs Joyce Sarfo Manu",
    role: "Deaconess",
    image: "/images/joyce-sarfo-manu.jpg",
    description:
      "Serving the church through diaconal ministry while also leading the Women's Ministry.",
  },
];

export const leadership: ChurchLeader[] = [
  ...pastoralLeadership,
  ...ministryLeadership,
  ...executiveLeadership,
  ...elders,
  ...deacons,
];