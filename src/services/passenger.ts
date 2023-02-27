import axios from "axios";
import { OffersResponse, FormValues } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAllOffers = async (
  page: number,
  size: number
): Promise<OffersResponse> => {
  const { data } = await axios.get(
    `${API_URL}/v1/driver/offers?page=${page}&size=${size}`
  );
  return data as OffersResponse;
};

export const editUserProfile = async (values: FormValues) => {
  const { data } = await axios({
    method: "PUT",
    url: `${API_URL}/v1/user/edit-profile`,
    data: values,
  });
  return data;
};

export const joinRide = async (rideId: string) => {
  const { data } = await axios({
    method: "PUT",
    url: `${API_URL}/v1/passenger/join-ride/${rideId}`,
  });
  return data;
};

export const getSelectRide = async (
  rideOfferId: string
): Promise<OffersResponse> => {
  const { data } = await axios.get(
    `${API_URL}/v1/passenger/select-offer/${rideOfferId}`
  );
  return data;
};
