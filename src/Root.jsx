import { Outlet } from "react-router-dom";
function Root() {

	return <div className="container mx-auto py-14 text-custom-dark-1">
		<Outlet/>
	</div>
}

export default Root;
