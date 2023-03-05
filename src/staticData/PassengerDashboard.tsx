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

export const offerData = [
  {
    label: "Location",
    type: "text",
    name: "location",
    placeholder: "Your location",
  },
  {
    label: "Destination",
    type: "text",
    name: "destination",
    placeholder: "Your destination",
  },
  {
    label: "Amount",
    type: "number",
    name: "amount",
  },
];
