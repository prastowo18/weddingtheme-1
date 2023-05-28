import * as utils from "../utils/httpClient";

export const getList = async (params: any) => {
  return await utils.HttpClient.get(`/api/guestbook`, { params });
};
export const createList = async (payload: any) => {
  return await utils.HttpClient.post("/api/guestbook", payload);
};
