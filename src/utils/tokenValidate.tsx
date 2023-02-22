import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { authSelectors } from "@/features/userSlice";

export const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};

const TokenValidate = ({ children }) => {
  const [access, setAccess] = useState(false);
  const router = useRouter();
  const { user } = useSelector(authSelectors);

  const isTokenValidate = () => {
    const decodeToken = jwt_decode(user.token);
    const { exp } = decodeToken;
    const currentDate = Date.now();
    if (currentDate >= exp * 1000) {
      return router.push("/login");
    }
    setAuthorizationToken(user.token);
    setAccess(true);
  };

  useEffect(() => {
    if (!user?.token) {
      router.push("/login");
      return;
    }
    isTokenValidate();
  }, []);

  if (access) return <div> {children}</div>;
  return;
};

export default TokenValidate;
