import { queryKeys } from "@/shared/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { getUserByIdTodo } from "../../services";

export const useGetUserById = (id?: string) => {
  return useQuery({
    queryKey: [queryKeys.getUserByIdTodo],
    queryFn: () => getUserByIdTodo(id!),
    enabled: !!id,
  });
};
