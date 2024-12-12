import tourImg1 from "../images/tour-1.jpeg";
import tourImg2 from "../images/tour-2.jpeg";
import tourImg3 from "../images/tour-3.jpeg";
import tourImg4 from "../images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
  { id: 4, href: "#featured", text: "featured" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "squarespace" },
];
export const servicesData = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 1,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 1,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];
export const toursData = [
  {
    id: 1,
    tourImage: tourImg1,
    tourDate: "august 26th, 2020",
    tourInfo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourTitle: "Tibet Adventure",
    tourMap: "china",
    tourDuration: "6 days",
    tourPrice: "$2100",
  },
  {
    id: 2,
    tourImage: tourImg2,
    tourDate: "october 1th, 2020",
    tourInfo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourTitle: "best of java",
    tourMap: "indonesia",
    tourDuration: "11 days",
    tourPrice: "$1400",
  },
  {
    id: 3,
    tourImage: tourImg3,
    tourDate: "september 15th, 2020",
    tourInfo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis",
    tourTitle: "explore hong kong",
    tourMap: "hong kong",
    tourDuration: "8 days",
    tourPrice: "$5000",
  },
  {
    id: 4,
    tourImage: tourImg4,
    tourDate: "december 5th, 2019",
    tourInfo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourTitle: "kenya highlights",
    tourMap: "kenya",
    tourDuration: "20 days",
    tourPrice: "$3300",
  },
];
