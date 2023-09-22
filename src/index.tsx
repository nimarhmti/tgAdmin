import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./styles/global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./config/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config/queryClient";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
