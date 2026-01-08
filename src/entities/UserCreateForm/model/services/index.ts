import { API } from "@/shared/api/api";
import type { IUserCreateData } from "../types";
import type { IUser } from "@/entities/UserTodos";

export const getUserByIdTodo = async (id: string) => {
  return await API.get<IUser>(`users/${id}`);
};

export const createUserTodo = async (data: IUserCreateData) => {
  return await API.post("users", data);
};

export const updateUserTodo = async ({
  id,
  data,
}: {
  id: string;
  data: IUserCreateData;
}) => {
  return await API.put(`users/${id}`, data);
};
