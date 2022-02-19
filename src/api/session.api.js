import { sessionAxios as axios } from "../config/axios";
const url = "/sessions";

const createSession = async ({ email, password, role }) => {
  if (!email || !password)
    throw new Error("Provide a valid username and password");

  try {
    const response = await axios.post(
      url,
      { email, password, role },
      {
        headers: {
          "Content-Type": "application/json",
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
    const response = await axios.get(`${url}/refresh-token`);

    return { response };
  } catch (err) {
    return { err };
  }
};

const deleteSession = async () => {
  try {
    const response = await axios.delete(`${url}`);
    return { response };
  } catch (err) {
    return { err };
  }
};

export { createSession, refreshAccessToken, deleteSession };
