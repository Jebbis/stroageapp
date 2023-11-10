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
    imgURL: "/assets/create.svg",
    route: "/create-storage",
    label: "Create storage",
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
    clientName: "Matti",
    clientId: "1",
    storages: [
      {
        storageName: "Espoo",
        storageCapacity: 20,
        lastDelivery: "20.12.2023",
        details: "",
      },
      {
        storageName: "TestEspoo",
        storageCapacity: 20,
        lastDelivery: "20.12.2023",
        details: "",
      },
      {
        storageName: "Kirkkonummi",
        storageCapacity: 20,
        lastDelivery: "20.12.2023",
        details: "",
      },
      {
        storageName: "Rovaniemi",
        storageCapacity: 20,
        lastDelivery: "20.12.2023",
        details: "",
      },
    ],
  },
  {
    clientName: "Ismo",
    clientId: "2",
    storages: [
      {
        storageName: "Helsinki",
        storageCapacity: 40,
        lastDelivery: "05.08.2023",
        details: "",
      },
    ],
  },
  {
    clientName: "Tuula",
    clientId: "3",
    storages: [
      {
        storageName: "Joku",
        storageCapacity: 80,
        lastDelivery: "16.03.2023",
        details: "",
      },
    ],
  },
  {
    clientName: "Seppo",
    clientId: "4",
    storages: [
      {
        storageName: "Ryasda",
        storageCapacity: 50,
        lastDelivery: "31.11.2023",
        details: "",
      },
    ],
  },
];
