export type GalleryCategory =
  | "Church Life"
  | "Worship"
  | "Prayer"
  | "Sermon"
  | "Fellowship"
  | "Youth"
  | "Evangelism"
  | "Ministries"
  | "Culture";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: GalleryCategory;
  aspect: "landscape" | "portrait" | "square";
};

export const galleryImages: GalleryImage[] = [
  /* ========================================================
     CHURCH LIFE
  ======================================================== */
  {
    id: "church-overview",
    src: "/images/church-overview.jpg",
    alt: "New Christian Faith Ministries church",
    title: "Our Church",
    category: "Church Life",
    aspect: "landscape",
  },
  {
    id: "church-members-vibes",
    src: "/images/church-members-vibes.jpeg",
    alt: "Members of New Christian Faith Ministries together",
    title: "Life Together",
    category: "Church Life",
    aspect: "landscape",
  },
  {
    id: "greeting",
    src: "/images/greeting.jpeg",
    alt: "Members greeting one another at church",
    title: "Church Fellowship",
    category: "Fellowship",
    aspect: "landscape",
  },
  {
    id: "greeting-1",
    src: "/images/greeting-1.jpeg",
    alt: "Members sharing fellowship",
    title: "Welcome & Fellowship",
    category: "Fellowship",
    aspect: "landscape",
  },

  /* ========================================================
     SERMON
  ======================================================== */
  {
    id: "sermon-listeners",
    src: "/images/church-members-listening-to-sermon.jpeg",
    alt: "Church members listening to a sermon",
    title: "Listening To The Word",
    category: "Sermon",
    aspect: "landscape",
  },
  {
    id: "sermon-listeners-1",
    src: "/images/church-members-listening-to-sermon-1.jpeg",
    alt: "Congregation listening to a sermon",
    title: "Gathered Around The Word",
    category: "Sermon",
    aspect: "landscape",
  },
  {
    id: "sermon-listeners-2",
    src: "/images/church-members-listening-to-sermon-2.jpeg",
    alt: "Church congregation during a sermon",
    title: "The Word Of God",
    category: "Sermon",
    aspect: "landscape",
  },
  {
    id: "sermon-listeners-3",
    src: "/images/church-members-listening-to-sermon-3.jpeg",
    alt: "Members attending a church sermon",
    title: "Faith Through The Word",
    category: "Sermon",
    aspect: "landscape",
  },
  {
    id: "pastor-preaching-traditional",
    src: "/images/pastor-in-traditional-wear-preaching.jpg",
    alt: "Pastor preaching at New Christian Faith Ministries",
    title: "Preaching The Word",
    category: "Sermon",
    aspect: "portrait",
  },

  /* ========================================================
     WORSHIP
  ======================================================== */
  {
    id: "worship-section",
    src: "/images/worship-section.jpeg",
    alt: "Worship at New Christian Faith Ministries",
    title: "Worship",
    category: "Worship",
    aspect: "landscape",
  },
  {
    id: "worship-section-1",
    src: "/images/worship-section-1.jpeg",
    alt: "Church worship service",
    title: "A Moment Of Worship",
    category: "Worship",
    aspect: "landscape",
  },
  {
    id: "worship-section-2",
    src: "/images/worship-section-2.jpeg",
    alt: "Congregation worshipping",
    title: "Worship Together",
    category: "Worship",
    aspect: "landscape",
  },
  {
    id: "singer-singing",
    src: "/images/singer-singing.jpeg",
    alt: "Singer leading worship",
    title: "Leading Worship",
    category: "Worship",
    aspect: "portrait",
  },
  {
    id: "singer-singing-2",
    src: "/images/singer-singing-2.jpeg",
    alt: "Singer at New Christian Faith Ministries",
    title: "A Song Of Praise",
    category: "Worship",
    aspect: "portrait",
  },
  {
    id: "music-team",
    src: "/images/music-team.jpg",
    alt: "New Christian Faith Ministries music team",
    title: "Music Ministry",
    category: "Worship",
    aspect: "landscape",
  },
  {
    id: "singing-ministry",
    src: "/images/singing-ministry.jpg",
    alt: "New Christian Faith Ministries singing ministry",
    title: "Worship Through Song",
    category: "Worship",
    aspect: "portrait",
  },

  /* ========================================================
     PRAYER
  ======================================================== */
  {
    id: "member-praying",
    src: "/images/member-praying.jpeg",
    alt: "Member praying at New Christian Faith Ministries",
    title: "In Prayer",
    category: "Prayer",
    aspect: "portrait",
  },
  {
    id: "member-praying-1",
    src: "/images/member-praying1.jpeg",
    alt: "Church member praying",
    title: "Seeking God",
    category: "Prayer",
    aspect: "portrait",
  },
  {
    id: "men-praying",
    src: "/images/men-praying.jpg",
    alt: "Men praying at New Christian Faith Ministries",
    title: "Men In Prayer",
    category: "Prayer",
    aspect: "landscape",
  },

  /* ========================================================
     YOUTH
  ======================================================== */
  {
    id: "youth-ministry",
    src: "/images/youth-ministry.jpg",
    alt: "New Christian Faith Ministries youth ministry",
    title: "Youth Ministry",
    category: "Youth",
    aspect: "portrait",
  },
  {
    id: "youth-ministry-2",
    src: "/images/youth-ministry-2.jpg",
    alt: "Young people at New Christian Faith Ministries",
    title: "Youth Fellowship",
    category: "Youth",
    aspect: "landscape",
  },
  {
    id: "youth-group",
    src: "/images/youth-group-photo.jpg",
    alt: "New Christian Faith Ministries youth group",
    title: "Growing Together",
    category: "Youth",
    aspect: "landscape",
  },
  {
    id: "youth-vibe",
    src: "/images/youth-vibe.jpg",
    alt: "Young people enjoying fellowship",
    title: "Youth Life",
    category: "Youth",
    aspect: "landscape",
  },

  /* ========================================================
     EVANGELISM
  ======================================================== */
  {
    id: "street-evangelism-1",
    src: "/images/street-envagelism1.jpg",
    alt: "New Christian Faith Ministries street evangelism",
    title: "Street Evangelism",
    category: "Evangelism",
    aspect: "landscape",
  },
  {
    id: "street-evangelism-2",
    src: "/images/street-envagelism2.jpg",
    alt: "New Christian Faith Ministries outreach",
    title: "Sharing The Gospel",
    category: "Evangelism",
    aspect: "portrait",
  },
  {
    id: "street-evangelism-3",
    src: "/images/street-envagelism3.jpg",
    alt: "New Christian Faith Ministries evangelism",
    title: "Community Outreach",
    category: "Evangelism",
    aspect: "landscape",
  },

  /* ========================================================
     MINISTRIES
  ======================================================== */
  {
    id: "mens-ministry",
    src: "/images/men-ministry.jpg",
    alt: "New Christian Faith Ministries Men's Ministry",
    title: "Men's Ministry",
    category: "Ministries",
    aspect: "landscape",
  },
  {
    id: "media-team",
    src: "/images/media-team.jpg",
    alt: "New Christian Faith Ministries Media Team",
    title: "Media Ministry",
    category: "Ministries",
    aspect: "landscape",
  },

  /* ========================================================
     CULTURE
  ======================================================== */
  {
    id: "traditional-sunday-wear",
    src: "/images/traditional-sunday-wear.jpg",
    alt: "Traditional Sunday at New Christian Faith Ministries",
    title: "Traditional Sunday",
    category: "Culture",
    aspect: "landscape",
  },
  {
    id: "traditional-wear",
    src: "/images/traditional-wear.jpg",
    alt: "Members in traditional wear",
    title: "Celebrating Our Heritage",
    category: "Culture",
    aspect: "portrait",
  },
  {
    id: "traditional-wear-2",
    src: "/images/traditional-wear2.jpg",
    alt: "Traditional attire at church",
    title: "Faith & Heritage",
    category: "Culture",
    aspect: "portrait",
  },

  /* ========================================================
     SPECIAL MOMENTS
  ======================================================== */
  {
    id: "assigning-pastor-role",
    src: "/images/assigning-pastor-new-role-at-head-office.jpg",
    alt: "Pastor receiving a new role at the Head Office",
    title: "A New Assignment",
    category: "Church Life",
    aspect: "landscape",
  },
];

export const galleryCategories = [
  "All",
  "Church Life",
  "Worship",
  "Prayer",
  "Sermon",
  "Fellowship",
  "Youth",
  "Evangelism",
  "Ministries",
  "Culture",
] as const;

export type GalleryFilter =
  (typeof galleryCategories)[number];