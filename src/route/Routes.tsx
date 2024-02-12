import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/home/Home";
import UserDetails from "@/pages/home/UserDetails";
import AddUser from "@/pages/home/AddUser";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
            index: true,
            element: <Home></Home>
        },
        {
          path: "/:id",
          element: <UserDetails></UserDetails>,
          loader: ({params}) => fetch(`https://technext-backend-beta.vercel.app/users/${params.id}`)
        },
        {
          path: "add-user",
          element: <AddUser></AddUser>
        },
      ]
    },
  ]);
  
export default router;