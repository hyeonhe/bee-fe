import Home from "pages/Home";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "pages/SignUp";
import Login from "pages/Login";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
