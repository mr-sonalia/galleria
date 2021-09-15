import { useEffect, useState } from "react";
import MasonryTile from "./MasonryTile";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MasonryContainer = ({ data }) => {
	const [tileRefs, setTileRefs] = useState([]);
	gsap.registerPlugin(ScrollTrigger);

	const refSetterHandler = (ref) => {
		setTileRefs((prev) => [...prev, ref]);
	};

	useEffect(() => {
		tileRefs.forEach((ref) => {
			const element = ref.current;
			gsap.fromTo(
				element,
				{
					translateY: "150px",
					opacity: 0,
					visibility: "hidden",
				},
				{
					opacity: 1,
					visibility: "visible",
					duration: 0.4,
					translateY: "0px",
					scrollTrigger: {
						trigger: element,
						start: "top center+=100",
						toggleActions: "play none none reverse",
					},
				}
			);
		});
	});

	console.log(tileRefs);
	const items = data.map((item) => <MasonryTile key={item.id} item={item} setRef={refSetterHandler} />);

	return <div className="masonry">{items}</div>;
};

export default MasonryContainer;
