import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./components/Home"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root/>,
		children: [
			{
				path: "/",
				element: <Home/>
			}
		]
	}
])
