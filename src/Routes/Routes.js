import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Catergory from "../Pages/Category/Category/Catergory";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News/News";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
              path: '/',
              element: <Home></Home>  
            },
            {
                path: '/category/:id',
                element: <Catergory></Catergory>
            },
            {
                path: '/news/:id',
                element: <News></News>
            }
        ]
    }
])