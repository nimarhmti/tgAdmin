import { api } from "../../config/axios";

export const getAllMembers = async () => {
  const data = await api.get("/members");
  return data.data;
};
