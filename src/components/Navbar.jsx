import { NavLink } from "react-router-dom";
import user from "../assets/user.png";

export default function Navbar() {
	return <div className="mx-auto mt-[22px] grid grid-cols-3">
		<div className="flex items-center col-start-2">
			<div className="mx-auto w-max space-x-4">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/career">Career</NavLink>
			</div>
		</div>
		<div className="flex justify-end">
			<div className="flex h-[50px] items-center gap-2">
				<div className="h-full">
					<img className="object-cover w-full h-full rounded-full" src={ user } alt=""/>
				</div>
				<div>
					<button className="px-16 py-3 text-xl font-semibold text-white bg-custom-dark-1">Login</button>
				</div>
			</div>
		</div>
	</div>
}
