import { FormValues } from "@/types";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getProfilePic = async () => {
  const { data } = await axios.get(`${API_URL}/v1/user/profile-pic`);
  return data;
};

export const addPhoneNumber = async (
  values: FormValues
): Promise<FormValues> => {
  const { data } = await axios({
    method: "PUT",
    url: `${API_URL}/v1/user/add-phone-number`,
    data: values,
  });
  console.log("phone data = ", data);
  return data;
};
