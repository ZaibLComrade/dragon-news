import { FaGoogle, FaGithub } from "react-icons/fa";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import qZone1 from "../assets/qZone1.png";
import qZone2 from "../assets/qZone2.png";
import qZone3 from "../assets/qZone3.png";

export default function NavRight() {
	return <div>
		<h2 className="text-xl font-semibold">Login With</h2>
		<div className="mt-6 space-y-2">
			<button className="flex items-center justify-center w-full py-2 text-blue-500 border border-blue-500 rounded-lg gap-2">
				<div>
					<FaGoogle className="block"/>
				</div>
				<div>
					<p className="">Login with Google</p>
				</div>
			</button>
			<button className="flex items-center justify-center w-full py-2 border border-black rounded-lg gap-2 ">
				<div>
					<FaGithub className="block"/>
				</div>
				<div>
					<p className="">Login with Github</p>
				</div>
			</button>
		</div>
		<div className="mt-[30px] space-y-5 text-xl font-semibold pr-4">
			<h2>Find Us On</h2>
			<div className="text-base font-medium text-custom-dark-2">
				<div className="border border-custom-dark-4 border-b-0 rounded-t-[5px] flex items-center gap-[10px] py-4 pl-4">
					<img src={ facebook } alt=""/>
					<p>Facebook</p>
				</div>
				<div className="border border-custom-dark-4 flex border-b-0 items-center gap-[10px] py-4 pl-4">
					<img src={ twitter } alt=""/>
					<p>Twitter</p>
				</div>
				<div className="border border-custom-dark-4 rounded-b-[5px] flex items-center gap-[10px] py-4 pl-4">
					<img src={ instagram } alt=""/>
					<p>Twitter</p>
				</div>
			</div>
		</div>
		
		<div className="px-1 pb-4 mt-4 bg-custom-dark-3">
			<h2 className="py-4 pl-4 text-xl font-semibold">Q Zone</h2>
			<div className="space-y-5">
				<img className="object-cover w-full" src={ qZone1 } alt=""/>
				<img className="object-cover w-full" src={ qZone2 } alt=""/>
				<img className="object-cover w-full" src={ qZone3 } alt=""/>
			</div>
		</div>
	</div>
}
