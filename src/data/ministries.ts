export type Ministry = {
  name: string;
  shortName: string;
  slug: string;
  leader: string | null;
  meeting: string | null;
  description: string;
  longDescription: string;
  image: string | null;
  gallery: string[];
};

export const ministries: Ministry[] = [
  {
    name: "Youth Ministry",
    shortName: "Youth",
    slug: "youth",
    leader: "Ps Samuel Baah",
    meeting: "Mondays • 7:00 PM – 8:00 PM",
    description:
      "Empowering young people to grow in Christ, discover purpose and build strong spiritual foundations.",
    longDescription:
      "The Youth Ministry creates a space where young people can grow in the knowledge of God's Word, develop meaningful Christian friendships, discover their gifts and learn to live boldly for Christ. Through fellowship, teaching, prayer, worship and service, the ministry equips young believers to become spiritually grounded and purpose-driven.",
    image: "/images/youth-ministry.jpg",
    gallery: [
      "/images/youth-ministry.jpg",
      "/images/youth-ministry-2.jpg",
      "/images/youth-group-photo.jpg",
    ],
  },
  {
    name: "Women's Ministry",
    shortName: "Women",
    slug: "women",
    leader: null,
    meeting: null,
    description:
      "Building women of faith, prayer, wisdom, service and godly influence.",
    longDescription:
      "The Women's Ministry exists to strengthen women spiritually, encourage meaningful fellowship and create opportunities for prayer, discipleship, mentorship and service. The ministry seeks to equip women to live out their faith confidently within the church, family and wider community.",
    image: null,
    gallery: [],
  },
  {
    name: "Men's Ministry",
    shortName: "Men",
    slug: "men",
    leader: null,
    meeting: null,
    description:
      "Developing Christ-centered men who lead with integrity, responsibility and spiritual maturity.",
    longDescription:
      "The Men's Ministry brings men together for fellowship, biblical teaching, prayer, mentorship and service. Its purpose is to encourage men to become spiritually mature disciples who demonstrate integrity, responsibility, leadership and Christlike character in every area of life.",
    image: "/images/men-ministry.jpg",
    gallery: ["/images/men-ministry.jpg"],
  },
  {
    name: "Children's Ministry",
    shortName: "Children",
    slug: "children",
    leader: "Mrs Sophia Odame",
    meeting: null,
    description:
      "Helping children know Jesus and establish strong biblical foundations from an early age.",
    longDescription:
      "The Children's Ministry introduces children to Jesus Christ through age-appropriate biblical teaching, prayer, worship, activities and fellowship. Our desire is to help each child understand God's love and begin building a strong foundation of faith that can grow with them throughout life.",
    image: null,
    gallery: [],
  },
  {
    name: "Music & Choir Ministry",
    shortName: "Music & Choir",
    slug: "music",
    leader: null,
    meeting: null,
    description:
      "Serving God and the church through Christ-centered worship, music, praise and song.",
    longDescription:
      "The Music and Choir Ministry supports the worship life of the church through music, singing, praise and spiritual preparation. The ministry serves during church gatherings and special occasions while developing the musical and spiritual gifts of its members for the glory of God.",
    image: "/images/music-team.jpg",
    gallery: [
      "/images/music-team.jpg",
      "/images/singing-ministry.jpg",
    ],
  },
  {
    name: "Media Team",
    shortName: "Media",
    slug: "media",
    leader: null,
    meeting: null,
    description:
      "Using communication, technology and digital media to support the work and message of the church.",
    longDescription:
      "The Media Team supports the ministry through photography, video, audio, livestreaming, design, communication and digital platforms. The team helps preserve church moments, extend the reach of sermons and events, and ensure that the message of the ministry can reach people both inside and outside the church.",
    image: "/images/media-team.jpg",
    gallery: ["/images/media-team.jpg"],
  },
  {
    name: "Evangelism Ministry",
    shortName: "Evangelism",
    slug: "evangelism",
    leader: null,
    meeting: null,
    description:
      "Taking the gospel beyond the church walls and reaching people with the message of Jesus Christ.",
    longDescription:
      "Evangelism is central to the mission of New Christian Faith Ministry. Through street evangelism, personal outreach, community engagement and other evangelistic activities, members are encouraged to share the gospel and help lead souls toward the saving knowledge of Jesus Christ.",
    image: "/images/street-envagelism1.jpg",
    gallery: [
      "/images/street-envagelism1.jpg",
      "/images/street-envagelism2.jpg",
      "/images/street-envagelism3.jpg",
    ],
  },
  {
    name: "Prayer Ministry",
    shortName: "Prayer",
    slug: "prayer",
    leader: null,
    meeting: null,
    description:
      "Strengthening the spiritual life of the church through prayer, intercession and dependence on God.",
    longDescription:
      "The Prayer Ministry encourages the church to remain deeply rooted in prayer and dependence on God. Through personal prayer, corporate intercession and dedicated prayer gatherings, the ministry supports the spiritual needs of individuals, families, the church and the wider community.",
    image: null,
    gallery: [],
  },
];