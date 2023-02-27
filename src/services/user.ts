import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getProfilePic = async () => {
  const { data } = await axios.get(`${API_URL}/v1/user/profile-pic`);
  return data;
};
