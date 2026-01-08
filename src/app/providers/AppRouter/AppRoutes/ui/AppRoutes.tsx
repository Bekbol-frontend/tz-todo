import { HomePageAsync } from "@/pages/HomePage";
import { appRoutes } from "@/shared/config/routeConfig";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "../../AppLayout";
import { CreateUserPageLazy } from "@/pages/CreateUserPage";
import { UpdateUserPageLazy } from "@/pages/UpdateUserPage";
import { NotFoundPageAsync } from "@/pages/NotFoundPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={appRoutes.home} element={<HomePageAsync />} />
        <Route path={appRoutes.createUser} element={<CreateUserPageLazy />} />
        <Route
          path={`${appRoutes.updateUser}/:id`}
          element={<UpdateUserPageLazy />}
        />
        <Route path={appRoutes.notFound} element={<NotFoundPageAsync />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
