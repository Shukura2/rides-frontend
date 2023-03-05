import axios from "axios";
import { OffersType, responseType } from "@/types";

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
