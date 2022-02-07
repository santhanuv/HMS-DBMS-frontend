import useAuth from "./useAuth";
import { refreshAccessToken } from "../api/session.api";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const { response, err } = await refreshAccessToken();
    if (response.data) {
      const authData = {
        accessToken: response.data?.accessToken,
        roles: response.data?.roles,
      };

      setAuth(authData);
      return authData.accessToken;
    } else if (err) {
      console.log(err);
      return null;
    }
  };

  return refresh;
};

export default useRefreshToken;
