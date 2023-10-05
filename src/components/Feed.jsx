import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

export default function Feed() {
	return <div className="grid mt-[76px] grid-cols-4">
		<NavLeft/>
		<div className="col-span-2">
			<h2 className="text-xl font-semibold">Dragon News Home</h2>
			<div>
				
			</div>
		</div>
		<NavRight/>
	</div>
}
