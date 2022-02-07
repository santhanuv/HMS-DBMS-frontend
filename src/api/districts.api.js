import axios from "../config/axios";
const uri = "/districts";

const getDistricts = async () => {
  try {
    const response = await axios.get(uri);
    return { data: response.data };
  } catch (err) {
    return { err };
  }
};

export { getDistricts };
