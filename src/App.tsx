import Home from "pages/Home";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
