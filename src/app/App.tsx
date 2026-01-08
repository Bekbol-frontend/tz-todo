import { AntdConfigProvider } from "./providers/AntdConfigProvider";
import { AppRoutes } from "./providers/AppRouter/AppRoutes";

function App() {
  return (
    <AntdConfigProvider>
      <AppRoutes />
    </AntdConfigProvider>
  );
}

export default App;
