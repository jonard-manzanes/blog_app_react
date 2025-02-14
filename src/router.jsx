import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./auth/Signup" ;
import Login from "./auth/Login";
import Home from "./pages/Home_page/Home";
import Create_post from "./pages/Create_page/Create_post";


export const router = createBrowserRouter([
    { path: "/", element: <App/> },
    { path: "/signup", element: <Signup/> },
    { path: "/login", element: <Login />},
    { path: "/home", element: <Home/>},
    { path: "/create_post", element: <Create_post/>}
]);