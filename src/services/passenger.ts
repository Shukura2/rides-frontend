import axios from "axios";
import { OffersResponse } from "@/types/responses";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAllOffers = async (
  page: number,
  size: number
): Promise<OffersResponse> => {
  const { data } = await axios.get(
    `${API_URL}/v1/driver/offers?page=${page}&size=${size}`
  );
  console.log("data = ", data);
  return data as OffersResponse;
};

export const getProfilePic = async () => {
  const { data } = await axios.get(`${API_URL}/v1/user/profile-pic`);
  return data;
};
