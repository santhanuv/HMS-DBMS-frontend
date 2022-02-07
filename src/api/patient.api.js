import axios from "../config/axios";
const uri = "/patients";

const registerPatient = async ({
  firstName,
  lastName,
  email,
  password,
  dob,
  phoneNumber,
  emergencyNumber,
  gender,
  state,
  district,
  address,
}) => {
  try {
    const response = await axios.post(
      uri,
      {
        firstName,
        lastName,
        email,
        password,
        dob,
        phoneNumber,
        emergencyNumber,
        gender,
        state,
        district,
        address,
      },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    return { data: response.data };
  } catch (err) {
    return { err };
  }
};

export { registerPatient };
