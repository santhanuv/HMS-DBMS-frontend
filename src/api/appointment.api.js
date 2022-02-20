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

const getAllAppointments = async (axios) => {
  try {
    if (!axios) throw new Error("No axios instance");
    const response = await axios.get(url);
    return { response };
  } catch (err) {
    return { err };
  }
};

const deleteAppointment = async (axios, appointmentID) => {
  try {
    if (!axios) throw new Error("No axios instance");
    const response = await axios.delete(`${url}/${appointmentID}`);
    return { response };
  } catch (err) {
    return { err };
  }
};

export { createAppointment, getAllAppointments, deleteAppointment };
