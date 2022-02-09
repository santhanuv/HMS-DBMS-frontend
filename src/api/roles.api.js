const url = "/roles";

const getAllRoles = async (axios) => {
  try {
    const response = await axios.get(url);
    return { response };
  } catch (err) {
    return { err };
  }
};

export { getAllRoles };
