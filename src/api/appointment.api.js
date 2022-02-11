const url = "/appointments";

const createAppointment = async (axios, data) => {
  try {
    if (!axios || !data) throw new Error("No axios or data");
    const response = await axios.post(url, data);
    return { response };
  } catch (err) {
    return { err };
  }
};

export { createAppointment };
