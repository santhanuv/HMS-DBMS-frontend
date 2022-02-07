import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import useRefreshToken from "../../hooks/useRefreshToken";
import useAuth from "../../hooks/useAuth";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);

  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    let isMounted = true;

    const getNewAccessToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.log(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    if (!auth?.accessToken) getNewAccessToken();
    else setIsLoading(false);
  }, []);

  return <>{isLoading ? <h1>Loading...</h1> : <Outlet />}</>;
};

export default PersistLogin;
