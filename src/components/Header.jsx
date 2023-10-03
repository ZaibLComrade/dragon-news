import logo from "../assets/logo.png";
import moment from "moment";
import Highlights from "./Highlights";

export default function Header() {
	return <header className="mx-auto">
		<img className="mx-auto" src={ logo } alt=""/>
		<p className="mx-auto mt-5 text-lg text-custom-dark-2 w-max">Journalism without Fear or Favour</p>
		<p className="mx-auto w-max mt-[10px] font-medium">
			<span>{ moment().format("dddd") }</span>
			<span>, </span>
			<span className="text-custom-dark-2">{ moment().format("MMMM DD YYYY") }</span>
		</p>
		<div className="mx-auto pl-4 flex py-4 mt-[30px] bg-custom-dark-3 gap-5">
			<button className="px-6 py-3 text-xl font-medium text-white border border-custom-red hover:bg-transparent hover:text-custom-red bg-custom-red">Latest</button>
			<Highlights/>
		</div>
	</header>
}
