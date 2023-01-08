import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const data = [
  {
    title: "Rides",
    others: [
      { label: "Food delivery", link: "/" },
      { label: "Grocery delivery", link: "/" },
      { label: "Scooters", link: "/" },
      { label: "Car-sharing", link: "/" },
      { label: "Business", link: "/" },
      { label: "Airports", link: "/" },
      { label: "Cities", link: "/" },
    ],
  },
  {
    title: "Partner with Rides",
    others: [
      { label: "Sign up as a driver", link: "/" },
      { label: "Sign up as a courier", link: "/" },
      { label: "Fleets", link: "/" },
      { label: "Franchise", link: "/" },
      { label: "Influencers", link: "/" },
    ],
  },
  {
    title: "Company",
    others: [
      { label: "About us", link: "/" },
      { label: "Careers", link: "/" },
      { label: "Blue plan", link: "/" },
      { label: "Press", link: "/" },
      { label: "Blog", link: "/" },
      { label: "Brand guidlines", link: "/" },
    ],
  },
];

export const socialMedia = [
  { icon: <FacebookRoundedIcon />, link: "/", id: 1 },
  { icon: <TwitterIcon />, link: "/", id: 2 },
  { icon: <InstagramIcon />, link: "/", id: 3 },
  { icon: <LinkedInIcon />, link: "/", id: 4 },
];

export const footer = [
  "Get the Rides app",
  "Get the Rides Food app",
  "Request a ride online",
];

export const footerDetails = [
  { label: "Supplier Code of Conduct", link: "/" },
  { label: "Legal", link: "/" },
  { label: "Cookies", link: "/" },
  { label: "Security", link: "/" },
];
