import Marquee from "react-fast-marquee";

export default function Highlights() {
	return <Marquee 
		autoFill={ true }
		pauseOnHover={ true }
		speed={ 100 }
	>
		<p className="text-lg font-semibold">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
	</Marquee>
}
