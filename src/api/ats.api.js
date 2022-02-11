const url = "/ats";

const getAllATS = async (axios, params) => {
  try {
    if (!axios) throw new Error("No axios");
    const response = await axios.get(`${url}/available`, {
      params,
    });
    return { response };
  } catch (err) {
    return { err };
  }
};

export { getAllATS };
