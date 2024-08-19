import Home from "pages/Home";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "pages/SignUp";
import Login from "pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Mypage from "pages/Mypage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/mypage", element: <Mypage /> },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
