import React, { useEffect, useRef } from "react";
import Card from "../card";
import "./index.scss";


const Cards = ({label,data,style}) => {
	const containerRef = useRef(null);
	console.log(data)

	useEffect(() => {
		const container = containerRef.current;

		let scrollInterval = setInterval(() => {
			container.scroll({
				left: container.scrollLeft + 300, 
				behavior: "smooth",
			});

			if (
				container.scrollLeft + container.clientWidth >=
				container.scrollWidth
			) {
				container.scrollLeft = 0;
			}
		}, 2000); 

		return () => clearInterval(scrollInterval);
	}, []);

	return (
		<>
			<div className="latest-drop">
				<div className="latest-drop_title">
					<h1>{label}</h1>
					<div className="btn-container">
						<button>View All</button>
					</div>
				</div>
				<div className="latest-drop_cards">
					<div
						className="latest-drop_cards_flow"
						ref={containerRef}
						style={{ overflow: "scroll", behavior: "smooth" }}
					>
						{data.map((item, index) => {
							return (
								<div className="card-width" key={index}>
									<Card {...item} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Cards;
