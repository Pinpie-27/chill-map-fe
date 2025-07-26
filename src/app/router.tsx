import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomerMeLayout from "../layouts/customer/CustomerLayout";

const router = createBrowserRouter([
  {
    path: "/customer",
    element: <CustomerMeLayout />,
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
