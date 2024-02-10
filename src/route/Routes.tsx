import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/home/Home";
import UserDetails from "@/pages/home/UserDetails";
  
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
          loader: ({params}) => fetch(`https://dummyjson.com/users/${params.id}`)
      }
      ]
    },
  ]);
  
export default router;