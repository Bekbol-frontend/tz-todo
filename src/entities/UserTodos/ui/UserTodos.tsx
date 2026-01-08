import UserTodoTable from "./UserTodoTable/UserTodoTable";
import { ErrorContent } from "@/shared/ui/ErrorContent";
import { useGetUserTodo } from "../model/hooks/useGetUserTodo";
import { SectionTop } from "@/shared/ui/SectionTop";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { appRoutes } from "@/shared/config/routeConfig";

function UserTodos() {
  const { data, isLoading, isError, error } = useGetUserTodo();

  const navigate = useNavigate();

  const onToCreatePage = useCallback(() => {
    navigate(appRoutes.createUser);
  }, [navigate]);

  if (isError && error) {
    return <ErrorContent title="Error" desc={error.message} />;
  }

  return (
    <>
      <SectionTop title="User Todos" onClick={onToCreatePage} />
      <UserTodoTable data={data?.data} loading={isLoading} />
    </>
  );
}

export default UserTodos;
