import { useMessageContext } from "@/shared/lib/hooks/useMessageContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { FormInstance } from "antd";
import { useNavigate } from "react-router-dom";
import { updateUserTodo } from "../../services";
import { queryKeys } from "@/shared/queryKeys";
import { appRoutes } from "@/shared/config/routeConfig";

export const useUpdateUserTodo = (form: FormInstance<any>) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { messageApi } = useMessageContext();

  return useMutation({
    mutationFn: updateUserTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.getUserTodos] });
      navigate(appRoutes.home);
      messageApi.success("Успешное обновление!");
      form.resetFields();
    },
    onError: (error) => {
      messageApi.error(`Ошибка: ${error.message}`);
    },
  });
};
