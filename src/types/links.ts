import React from "react";

export interface NavLink {
  link: string;
  path: string;
}

export interface DataItem {
  title: string;
  others: { label: string; link: string }[];
}

export interface IconLink {
  icon: React.ReactElement;
  link: string;
  id: number;
}

export interface LinkFooter {
  label: string;
  link: string;
}

export interface OffersType {
  location: string;
  destination: string;
  amount: number;
}

export interface EditProfileType {
  isOpen: boolean;
  handleClickClose: () => void;
  setIsOpen: (show: boolean) => void;
}

export interface handleClickType {
  handleClick: (show: boolean) => void;
}

