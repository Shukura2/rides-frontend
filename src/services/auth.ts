import axios from "axios";
import { FormValues, LoginValues } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const signupUser = async (values: FormValues) => {
  const { data } = await axios({
    method: "post",
    baseURL: `${API_URL}/v1/auth/passenger-signup`,
    data: values,
  });
  return data;
};

export const signupDriver = async (values: FormValues) => {
  const { data } = await axios({
    method: "post",
    baseURL: `${API_URL}/v1/auth/driver-signup`,
    data: values,
  });
  return data;
};

export const loginUsers = async (values: LoginValues) => {
  const { data } = await axios({
    method: "post",
    baseURL: `${API_URL}/v1/auth/login`,
    data: values,
  });
  return data;
};
