import axios from "axios";
import {
  OffersType,
  responseType,
  OfferDataType,
  MyOffer,
  MyOfferType,
} from "../types";

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

export const getMyOffers = async (): Promise<MyOfferType> => {
  const { data } = await axios.get(`${API_URL}/v1/driver/my-offer`);
  return data;
};

export const deleteMyOffer = async (offerId: string): Promise<responseType> => {
  const { data } = await axios({
    method: "DELETE",
    url: `${API_URL}/v1/driver/delete-offer/${offerId}`,
  });
  return data;
};

export const editMyOffer = async (offerId: string, value: MyOffer) => {
  const { data } = await axios({
    method: "PUT",
    url: `${API_URL}/v1/driver/edit-offer/${offerId}`,
    data: value,
  });
  return data;
};
