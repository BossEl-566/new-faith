export type GalleryCategory =
  | "Church Life"
  | "Worship"
  | "Prayer"
  | "Youth"
  | "Evangelism"
  | "Ministries"
  | "Leadership";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: GalleryCategory;
  aspect: "landscape" | "portrait" | "square";
};

export const galleryImages: GalleryImage[] = [
  {
  id: "church-overview",
  src: "/images/church-overview.jpg",
  alt: "New Christian Faith Ministry church",
  title: "Our Church",
  category: "Church Life",
  aspect: "landscape",
},
{
  id: "youth-vibe",
  src: "/images/youth-vibe.jpg",
  alt: "Young people at New Christian Faith Ministry",
  title: "Life Together",
  category: "Youth",
  aspect: "landscape",
},
{
  id: "men-praying",
  src: "/images/men-praying.jpg",
  alt: "Men praying at New Christian Faith Ministry",
  title: "A Moment Of Prayer",
  category: "Prayer",
  aspect: "landscape",
},
{
  id: "dickson-amoah",
  src: "/images/dickson-amoah.jpg",
  alt: "Rev Dickson Amoah",
  title: "Rev Dickson Amoah",
  category: "Leadership",
  aspect: "portrait",
},
{
  id: "felix-nyame",
  src: "/images/felix-nyame.jpg",
  alt: "Mr Felix Nyame",
  title: "Mr Felix Nyame",
  category: "Leadership",
  aspect: "portrait",
},
{
  id: "chrisman-yiadom",
  src: "/images/chrisman-yiadom.jpg",
  alt: "Pastor Chrisman Boakye Yiadom",
  title: "Pastor Chrisman Boakye Yiadom",
  category: "Leadership",
  aspect: "portrait",
},
{
  id: "joseph-arthur",
  src: "/images/joseph-arthur.jpg",
  alt: "Mr Joseph Arthur",
  title: "Mr Joseph Arthur",
  category: "Leadership",
  aspect: "portrait",
},
{
  id: "kennedy-owusu",
  src: "/images/kennedy-owusu.jpg",
  alt: "Mr Kennedy Owusu",
  title: "Mr Kennedy Owusu",
  category: "Leadership",
  aspect: "portrait",
},
{
  id: "benoni-odoi",
  src: "/images/benoni-odoi.jpg",
  alt: "Mr Benoni Odoi-Boye Odoi",
  title: "Mr Benoni Odoi-Boye Odoi",
  category: "Leadership",
  aspect: "portrait",
},
{
  id: "joyce-sarfo-manu",
  src: "/images/joyce-sarfo-manu.jpg",
  alt: "Mrs Joyce Sarfo Manu",
  title: "Mrs Joyce Sarfo Manu",
  category: "Leadership",
  aspect: "portrait",
},
{
  id: "gloria-bimpomaa",
  src: "/images/gloria-bimpomaa.jpg",
  alt: "Mrs Gloria Akua Bimpomaa Amoako",
  title: "Mrs Gloria Akua Bimpomaa Amoako",
  category: "Leadership",
  aspect: "portrait",
},
{
  id: "jonah-amoako",
  src: "/images/jonah-amoako.jpg",
  alt: "Mr Jonah Ofosu Amoako",
  title: "Mr Jonah Ofosu Amoako",
  category: "Leadership",
  aspect: "portrait",
},
  {
    id: "street-evangelism-1",
    src: "/images/street-envagelism1.jpg",
    alt: "New Christian Faith Ministry street evangelism",
    title: "Street Evangelism",
    category: "Evangelism",
    aspect: "landscape",
  },
  {
    id: "street-evangelism-2",
    src: "/images/street-envagelism2.jpg",
    alt: "New Christian Faith Ministry outreach",
    title: "Sharing The Gospel",
    category: "Evangelism",
    aspect: "portrait",
  },
  {
    id: "street-evangelism-3",
    src: "/images/street-envagelism3.jpg",
    alt: "New Christian Faith Ministry evangelism",
    title: "Community Outreach",
    category: "Evangelism",
    aspect: "landscape",
  },

  {
    id: "youth-ministry-1",
    src: "/images/youth-ministry.jpg",
    alt: "New Christian Faith Ministry youth ministry",
    title: "Youth Ministry",
    category: "Youth",
    aspect: "portrait",
  },
  {
    id: "youth-ministry-2",
    src: "/images/youth-ministry-2.jpg",
    alt: "Young people at New Christian Faith Ministry",
    title: "Youth Fellowship",
    category: "Youth",
    aspect: "landscape",
  },
  {
    id: "youth-group",
    src: "/images/youth-group-photo.jpg",
    alt: "New Christian Faith Ministry youth group",
    title: "Growing Together",
    category: "Youth",
    aspect: "landscape",
  },

  {
    id: "music-team",
    src: "/images/music-team.jpg",
    alt: "New Christian Faith Ministry music team",
    title: "Music Ministry",
    category: "Worship",
    aspect: "landscape",
  },
  {
    id: "singing-ministry",
    src: "/images/singing-ministry.jpg",
    alt: "New Christian Faith Ministry singing ministry",
    title: "Worship Through Song",
    category: "Worship",
    aspect: "portrait",
  },

  {
    id: "media-team",
    src: "/images/media-team.jpg",
    alt: "New Christian Faith Ministry media team",
    title: "Media Team",
    category: "Ministries",
    aspect: "landscape",
  },
  {
    id: "mens-ministry",
    src: "/images/men-ministry.jpg",
    alt: "New Christian Faith Ministry men's ministry",
    title: "Men's Ministry",
    category: "Ministries",
    aspect: "portrait",
  },

  {
    id: "emmanuel-nkrumah",
    src: "/images/emmanuel-nkrumah.jpg",
    alt: "Rev Emmanuel Nkrumah",
    title: "Rev Emmanuel Nkrumah",
    category: "Leadership",
    aspect: "portrait",
  },
  {
    id: "fredrick-odame",
    src: "/images/fredrick-odame.jpg",
    alt: "Rev Fredrick Odame",
    title: "Rev Fredrick Odame",
    category: "Leadership",
    aspect: "portrait",
  },
  {
    id: "pastor-yeboah",
    src: "/images/pastor-yeboah.jpg",
    alt: "Ps Nicolas Yeboah",
    title: "Ps Nicolas Yeboah",
    category: "Leadership",
    aspect: "portrait",
  },
  {
    id: "pastor-baah",
    src: "/images/pastor-baah.jpg",
    alt: "Ps Samuel Baah",
    title: "Ps Samuel Baah",
    category: "Leadership",
    aspect: "portrait",
  },
  {
    id: "sophia-odame",
    src: "/images/sophia-odame.jpg",
    alt: "Mrs Sophia Odame",
    title: "Mrs Sophia Odame",
    category: "Leadership",
    aspect: "portrait",
  },
  {
    id: "felicia-falade",
    src: "/images/felicia-falade.jpg",
    alt: "Miss Felicia Falade",
    title: "Miss Felicia Falade",
    category: "Leadership",
    aspect: "portrait",
  },
];

export const galleryCategories = [
  "All",
  "Church Life",
  "Worship",
  "Prayer",
  "Youth",
  "Evangelism",
  "Ministries",
  "Leadership",
] as const;

export type GalleryFilter =
  (typeof galleryCategories)[number];