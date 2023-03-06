import axios from "axios";
import { OffersType, responseType, OfferDataType } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const createOffers = async (
  values: OffersType
): Promise<responseType> => {
  const { data } = await axios({
    method: "POST",
    url: `${API_URL}/v1/driver/add-ride`,
    data: values,
  });
  return data;
};

export const userJoinRide = async (): Promise<OfferDataType> => {
  const { data } = await axios.get(`${API_URL}/v1/passenger/joined`);
  return data;
};
