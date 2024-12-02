export interface Category {
  id: number;
  name: string;
  href: string;
  image: string;
}

export const categoryData: Category[] = [
  {
    id: 1,
    name: "Sneakers",
    href: "/sneakers",
    image: "/assets/img/giay1.jpg",
  },
  {
    id: 2,
    name: "Running Shoes",
    href: "/running-shoes",
    image: "/assets/img/giay2.jpg",
  },
  {
    id: 3,
    name: "Formal Shoes",
    href: "/formal-shoes",
    image: "/assets/img/giay3.jpeg",
  },
  {
    id: 4,
    name: "Boots",
    href: "/boots",
    image: "/assets/img/giay4.jpg",
  },
  {
    id: 5,
    name: "Sandals",
    href: "/sandals",
    image: "/assets/img/giay5.jpg",
  },
  {
    id: 6,
    name: "Default Category",
    href: "/default",
    image: "/assets/img/defaultImage.jpg",
  },
];
