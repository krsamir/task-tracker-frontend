import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Main from "./components/Main";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Main />
      </QueryClientProvider>
    </>
  );
}

export default App;
