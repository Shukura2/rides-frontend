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
