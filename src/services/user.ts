import { FormValues, responseType, inputValue } from "@/types";
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
  return data;
};

export const resetPassword = async (
  values: FormValues
): Promise<responseType> => {
  const { data } = await axios({
    method: "POST",
    url: `${API_URL}/v1/user/reset-password`,
    data: values,
  });
  return data;
};

export const updatePassword = async (values: inputValue) => {
  const { data } = await axios({
    method: "PUT",
    url: `${API_URL}/v1/user/update-password`,
    data: values,
  });
  return data;
};
