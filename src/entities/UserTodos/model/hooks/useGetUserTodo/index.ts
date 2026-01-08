import { queryKeys } from "@/shared/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { getUserTodos } from "../../services";

export const useGetUserTodo = () => {
  return useQuery({
    queryKey: [queryKeys.getUserTodos],
    queryFn: getUserTodos,
  });
};
