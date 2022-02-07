import { sessionAxios as axios } from "../config/axios";
const url = "/sessions";

const createSession = async ({ email, password }) => {
  if (!email || !password)
    throw new Error("Provide a valid username and password");

  try {
    const response = await axios.post(
      url,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
          withCredentials: true,
        },
      }
    );
    return { data: response.data };
  } catch (err) {
    return { err };
  }
};

const refreshAccessToken = async () => {
  try {
    const response = await axios.get(`${url}/refresh-token`, {
      withCredentials: true,
    });

    return { response };
  } catch (err) {
    return { err };
  }
};

export { createSession, refreshAccessToken };
