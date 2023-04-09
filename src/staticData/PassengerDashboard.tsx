import { OfferDetails, Offers } from "../types";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HistoryIcon from "@mui/icons-material/History";

export const pages = [
  {
    icon: <DirectionsCarIcon />,
    label: "Available rides",
    link: "/available-rides",
  },
  { icon: <HistoryIcon />, label: "Ride history", link: "/history" },
];

export const offerData: OfferDetails[] = [
  {
    label: "Location",
    type: "text",
    name: Offers.location,
    placeholder: "Your location",
  },
  {
    label: "Destination",
    type: "text",
    name: Offers.destination,
    placeholder: "Your destination",
  },
  {
    label: "Amount",
    type: "number",
    name: Offers.amount,
  },
];
