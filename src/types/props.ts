export type Props = {
  text: string;
};

export interface ChildrenProps {
  children: React.ReactNode;
}

export enum Offers {
  amount = "amount",
  destination = "destination",
  location = "location",
}

export interface OfferDetails {
  label: string;
  name: Offers;
  placeholder?: string;
  type: string;
}
