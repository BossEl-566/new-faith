export type NavigationChild = {
  label: string;
  href: string;
};

export type NavigationItem = {
  label: string;
  href?: string;
  children?: NavigationChild[];
};

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    children: [
      {
        label: "Our Story",
        href: "/about",
      },
      {
        label: "Vision & Mission",
        href: "/about#vision-mission",
      },
      {
        label: "Leadership",
        href: "/about#leadership",
      },
      {
        label: "Founders",
        href: "/about#founders",
      },
    ],
  },
  {
    label: "Ministries",
    children: [
      {
        label: "Youth Ministry",
        href: "/ministries#youth",
      },
      {
        label: "Women's Ministry",
        href: "/ministries#women",
      },
      {
        label: "Men's Ministry",
        href: "/ministries#men",
      },
      {
        label: "Children's Ministry",
        href: "/ministries#children",
      },
      {
        label: "Music & Choir",
        href: "/ministries#music",
      },
      {
        label: "Media Team",
        href: "/ministries#media",
      },
      {
        label: "Evangelism",
        href: "/ministries#evangelism",
      },
      {
        label: "Prayer Ministry",
        href: "/ministries#prayer",
      },
    ],
  },
  {
    label: "Sermons",
    href: "/sermons",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Give",
    href: "/give",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];