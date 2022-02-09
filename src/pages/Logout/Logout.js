import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { deleteSession } from "../../api/session.api";

const Logout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const logout = async () => {
      const { err } = await deleteSession();
      if (err) {
        console.log(err);
      }
      if (isMounted) setIsError(true);
    };

    logout();
    if (isMounted) setIsLoading(false);

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Logging Out</p>
      ) : (
        <Navigate to={isError ? "/error" : "/"} replace />
      )}
    </div>
  );
};

export default Logout;
