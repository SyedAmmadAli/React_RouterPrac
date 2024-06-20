import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/about";
import Login from "../pages/Auth/Login";


const publicRoute = createBrowserRouter([
    { path: "/", element: <Home />},
    { path: "/about", element: <About />},
    { path: "/auth/login", element: < Login />}

])

export {publicRoute}