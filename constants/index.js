export const sidebarLinks = [
  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "Overview",
  },
  {
    imgURL: "/assets/search.svg",
    route: "/storages",
    label: "Storages",
  },
  {
    imgURL: "/assets/user.svg",
    route: "/profile",
    label: "Profile",
  },
];

export const profileTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "replies", label: "Replies", icon: "/assets/members.svg" },
  { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
];

export const communityTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "members", label: "Members", icon: "/assets/members.svg" },
  { value: "requests", label: "Requests", icon: "/assets/request.svg" },
];

export const placeholderStorages = [
  { name: "Storage 1", id: 1, storageSize: 100 },
  { name: "Storage 2", id: 2, storageSize: 20 },
  { name: "Storage 3", id: 3, storageSize: 55 },
  { name: "Storage 4", id: 4, storageSize: 80 },
  { name: "Storage 5", id: 5, storageSize: 23 },
];

export const placeStorages = [
  {
    asiakas: "Matti",
    id: "1",
    varastot: [
      {
        nimi: "Espoo",
        varastonkoko: 20,
        viimejakelu: "20.12.2023",
      },
      {
        nimi: "TestEspoo",
        varastonkoko: 20,
        viimejakelu: "20.12.2023",
      },
      {
        nimi: "Kirkkonummi",
        varastonkoko: 20,
        viimejakelu: "20.12.2023",
      },
      {
        nimi: "Rovaniemi",
        varastonkoko: 20,
        viimejakelu: "20.12.2023",
      },
    ],
  },
  {
    asiakas: "Ismo",
    id: "2",

    varastot: [
      {
        nimi: "Helsinki",
        varastonkoko: 40,
        viimejakelu: "05.08.2023",
      },
    ],
  },
  {
    asiakas: "Tuula",
    id: "3",

    varastot: [
      {
        nimi: "Joku",
        varastonkoko: 80,
        viimejakelu: "16.03.2023",
      },
    ],
  },
  {
    asiakas: "Seppo",
    id: "4",

    varastot: [
      {
        nimi: "Ryasda",
        varastonkoko: 50,
        viimejakelu: "31.11.2023",
      },
    ],
  },
];
