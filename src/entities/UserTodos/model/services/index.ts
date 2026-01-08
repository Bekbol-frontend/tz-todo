import { API } from "@/shared/api/api";
import type { IUser } from "../types";

export const getUserTodos = async () => {
  return await API.get<IUser[]>("users");
};

export const deleteUserTodos = async (id: string) => {
  return await API.delete<IUser>(`users/${id}`);
};
