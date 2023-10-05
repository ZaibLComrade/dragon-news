import {useEffect, useState} from "react"
import { NavLink } from "react-router-dom";

export default function NavLeft() {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch("categories.json")
			.then(response => response.json())
			.then(resource => setCategories(resource))
		.catch(error => console.error(error));
	}, [])
	
	const navActiveStatus = (isActive, isPending) => {
		console.log(isActive, isPending);
		if(isActive) return "text-red-500";
		else return "text-blue-500"
	}
	
	return <div>
		<div>
			<h2 className="text-xl font-semibold">All Categories</h2>
			<div>
				<nav>
					<ul className="mt-5 ">
						{
							categories.map(category => 
								<li 
									className="text-xl font-medium text-[#9F9F9F]"
									key={ category.id }
								>
									<button className="w-full py-4 pl-4 text-left rounded-[5px] hover:text-black hover:bg-custom-dark-4">{ category.name }</button>
								</li>
							) 
						}
					</ul>
				</nav>
			</div>
		</div>
	</div>
}
