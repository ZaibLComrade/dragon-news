import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
function Root() {

	return <div className="container mx-auto py-14 text-custom-dark-1">
		<Outlet/>
		<Navbar/>
	</div>
}

export default Root;
