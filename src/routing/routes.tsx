import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../components/LoginPage";
import UserData from "../components/UserData";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/users", element: <UserData /> },
]);

export default router;
