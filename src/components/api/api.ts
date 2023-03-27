import axios from "axios";

export const getTemplateApi = () => axios.get(`/api`);
export const createTemplateApi = (payload: any) =>
  axios.post(`/api`, { ...payload });
