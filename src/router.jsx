import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root/>,
		children: [
			{
				path: "/",
				element: <Home/>,
			},
			{
				path: "/login",
				element: <Login/>
			},
			{
				path: "/register",
				element: <Register/>
			}
		]
	}
])
