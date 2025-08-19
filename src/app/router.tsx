import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomerMeLayout from "../layouts/customer/CustomerLayout";
import NotFoundPage from "../features/customer/pages/notfound/NotFoundPage";
import AuthLayout from "../layouts/auth/AuthLayout";
import LoginPage from "../components/auth/login/LoginPage";
import SignUpPage from "../components/auth/signup/SignUpPage";
import { ExampleButton } from "../components/ui/button/ExampleButton";
import { ExampleInput } from "../components/ui/input/ExampleInput";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NotFoundPage />,
  },
  {
    path: "/customer",
    element: <CustomerMeLayout />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "/example",
    element: <ExampleButton />,
  },
  {
    path: "/exampleInput",
    element: <ExampleInput />,
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
