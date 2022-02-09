import axios from "../config/axios";
import { sessionAxios } from "../config/axios";
const url = "/staffs";

const inviteStaff = async (axios, data) => {
  try {
    if (!axios) throw new Error("Unable to send request");
    const response = await axios.post(`${url}/invitation`, data);
    return { response };
  } catch (err) {
    return { err };
  }
};

const confirmStaff = async (token) => {
  try {
    if (!token) throw new Error("No token");
    const response = await sessionAxios.get(`${url}/confirmation/${token}`);
    return { response };
  } catch (err) {
    return { err };
  }
};

const createStaff = async (data) => {
  try {
    if (!axios) throw new Error("No axios given");
    const response = await sessionAxios.post(url, data);
    return { response };
  } catch (err) {
    return { err };
  }
};

const getAllDepartments = async (axios) => {
  try {
    if (!axios) throw new Error("No axios given");
    const response = await axios.get(`${url}/departments`);
    return { response };
  } catch (err) {
    return { err };
  }
};

export { confirmStaff, inviteStaff, getAllDepartments, createStaff };
