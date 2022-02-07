import axios from "../config/axios";
const uri = "/genders";

const getGenders = async () => {
  try {
    const response = await axios.get(uri);
    return { data: response.data };
  } catch (err) {
    return { err };
  }
};

export { getGenders };
