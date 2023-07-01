import {
    createBrowserRouter 
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Dashboard from "../Layout/Dashboard";
import AddProject from "../Pages/Dashboard/AddProject/AddProject";
import AddBlog from "../Pages/Dashboard/AddBlog/AddBlog";
import PortfolioDetail from "../Pages/PortfolioDetail/PortfolioDetail";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'detail/:id',
          element:<PortfolioDetail></PortfolioDetail>,
          loader:({params})=> fetch(`https://my-portfolio-server-iota-ebon.vercel.app/allprojects/${params.id}`)
        }
      ]
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'/dashboard/addproject',
          element:<AddProject></AddProject>
        },
        {
          path:'/dashboard/addblog',
          element:<AddBlog></AddBlog>
        }
      ]
    }
  ]);