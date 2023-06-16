import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "react-query";
import { Notifications } from "@mantine/notifications";
import { UserProvider } from "./contexts/UserContext.jsx";
import App from "./App.jsx";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      cacheTime: 30000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider
        theme={{
          colors:{
            blue:'rgb(55, 73, 111)'
          },
          globalStyles: (theme) => ({
            ".mantine-Modal-title": {
              margin: "auto",
              fontWeight: "bold",
              color: "rgb(0,0,0,0.5)",
            },
          }),
        }}
      >
        <UserProvider>
          <QueryClientProvider client={queryClient}>
            <Notifications
              position="top-center"
              zIndex={2077}
              style={{ marginTop: "60px" }}
            />
            <App />
          </QueryClientProvider>
        </UserProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
