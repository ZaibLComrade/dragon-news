import { NavLink, Link } from "react-router-dom";
import dummyImage from "../assets/user.png";
import useAuth from "./useAuth";

export default function Navbar() {
	const { user, signOutUser } = useAuth();
	console.log(user);
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
					<img className="object-cover w-full h-full rounded-full" src={ user?.photoURL ? `${user.photoURL}` : dummyImage } alt=""/>
				</div>
				<div>
					{
						user ? <button className="py-3 text-xl font-semibold text-white px-14 bg-custom-dark-1" onClick={ signOutUser }>Sign Out</button> :
						<Link to="/login" className="px-16 py-3 text-xl font-semibold text-white bg-custom-dark-1">Login</Link>
					}
				</div>
			</div>
		</div>
	</div>
}
