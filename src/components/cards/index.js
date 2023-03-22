import React, { useEffect, useRef } from "react";
import Card from "../card";
import "./index.scss";
import { cardData } from "../../utils/cardData";

const Cards = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;

		let scrollInterval = setInterval(() => {
			container.scroll({
				left: container.scrollLeft + 40, // adjust the scrolling speed by changing this value
				behavior: "smooth",
			});

			if (
				container.scrollLeft + container.clientWidth >=
				container.scrollWidth
			) {
				container.scrollLeft = 0;
			}
		}, 1000); // adjust the interval duration by changing this value

		return () => clearInterval(scrollInterval);
	}, []);

	return (
		<>
			<div className="latest-drop">
				<div className="latest-drop_title">
					<h1>Latest drop</h1>
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
						{cardData.map((item, index) => {
							return (
								<div className="card-width" key={index}>
									<Card {...item} />
								</div>
							);
						})}
					</div>
					{/* <div className="card-width">
							<Card />
						</div>
						<div className="card-width">
							<Card />
						</div>
						<div className="card-width">
							<Card />
						</div>
						<div className="card-width">
							<Card />
						</div> */}
					{/* </div> */}
				</div>
			</div>
		</>
	);
};

export default Cards;
