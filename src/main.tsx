import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "./app/providers/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App.tsx";

// main-style
import "./app/styles/main.scss";
import { QueryProvider } from "./app/providers/QueryProvider/index.ts";
import { MessageContextProvider } from "./app/providers/MessageContextProvider/index.ts";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <BrowserRouter>
      <QueryProvider>
        <MessageContextProvider>
          <App />
        </MessageContextProvider>
      </QueryProvider>
    </BrowserRouter>
  </ErrorBoundary>
);
