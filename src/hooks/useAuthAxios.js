import { useEffect } from "react";
import { authAxios } from "../config/axios";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useAuthAxios = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = authAxios.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err)
    );

    const responseIntercept = authAxios.interceptors.response.use(
      (response) => response,
      async (err) => {
        const prevReq = err?.config;
        if (err?.response?.status === 401 && !prevReq.sent) {
          prevReq.sent = true;
          const newAccessToken = await refresh();
          prevReq.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return await authAxios(prevReq);
        }
        return Promise.reject(err);
      }
    );

    return () => {
      authAxios.interceptors.request.eject(requestIntercept);
      authAxios.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return authAxios;
};

export default useAuthAxios;
