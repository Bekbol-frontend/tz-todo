import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUserTodo } from "../../services";
import { queryKeys } from "@/shared/queryKeys";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/shared/config/routeConfig";
import { useMessageContext } from "@/shared/lib/hooks/useMessageContext";
import type { FormInstance } from "antd";

export const useCreateUserTodo = (form: FormInstance<any>) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { messageApi } = useMessageContext();

  return useMutation({
    mutationFn: createUserTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.getUserTodos] });
      navigate(appRoutes.home);
      messageApi.success("Успешное создание!");
      form.resetFields();
    },
    onError: (error) => {
      messageApi.error(`Ошибка: ${error.message}`);
    },
  });
};
