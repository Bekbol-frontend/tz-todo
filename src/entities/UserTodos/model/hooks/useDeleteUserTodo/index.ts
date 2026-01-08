import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserTodos } from "../../services";
import { queryKeys } from "@/shared/queryKeys";
import { useMessageContext } from "@/shared/lib/hooks/useMessageContext";

interface IProps {
  setUserId: (value: React.SetStateAction<string | null>) => void;
}

export const useDeleteUserTodo = ({ setUserId }: IProps) => {
  const queryClient = useQueryClient();
  const { messageApi } = useMessageContext();

  return useMutation({
    mutationFn: deleteUserTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.getUserTodos] });
      setUserId(null);
      messageApi.success("Успешное удаление!");
    },
    onError: (error) => {
      messageApi.error(`Ошибка: ${error.message}`);
    },
  });
};
