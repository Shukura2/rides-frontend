import { useRouter } from "next/router";
import {
  useState,
  createContext,
  useContext,
  useCallback,
  useEffect,
} from "react";
import jwt_decode from "jwt-decode";
import { Data } from "@/types/auth";

const DataContext = createContext({});

export const DataProvider = ({ children }: { children: JSX.Element }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState({});

  const isTokenValidate = () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/passenger-login");
      }
      if (token) {
        const decodeToken: Data = jwt_decode(token);
        const { exp } = decodeToken;
        const currentDate = Date.now();
        if (currentDate >= exp * 1000) {
          router.push("/passenger-login");
          localStorage.removeItem("token");
        } else {
          setIsAuthenticated(true);
          setUserData(decodeToken);
          return;
        }
      }
    } catch (error) {
      router.push("/passenger-login");
    }
  };

  useEffect(() => {
    isTokenValidate();
  }, [setUserData]);

  if (isAuthenticated) {
    return (
      <DataContext.Provider value={userData}>{children}</DataContext.Provider>
    );
  }
};

export const useDataContext = () => {
  return useContext(DataContext);
};
