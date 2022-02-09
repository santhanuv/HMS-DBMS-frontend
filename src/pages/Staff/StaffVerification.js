import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { confirmStaff } from "../../api/staff.api";

const StaffVerification = () => {
  const { token } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [resData, setResData] = useState({});

  useEffect(() => {
    const postToken = async () => {
      if (!token) {
        setIsLoading(false);
        return;
      }
      const { response, err } = await confirmStaff(token);
      if (response) setResData(response?.data || {});
      else {
        console.log("err", err);
        setIsError(true);
      }
      setIsLoading(false);
    };

    postToken();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : !isError ? (
        <Navigate
          to="/staffRegistration"
          state={{ staffData: { ...resData } }}
          replace
        />
      ) : (
        <h1>Error</h1>
      )}
    </div>
  );
};

export default StaffVerification;
