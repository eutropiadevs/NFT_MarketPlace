import React from "react";
import "./index.scss";
import { collection } from "../../utils/singleCard";

const Collection = () => {
	return (
		<>
			<div className="latest-drop">
				<div className="latest-drop_title">
					<h1>Top Collections over last</h1>
					<div className="btn-container">
						<button>View All</button>
					</div>
				</div>
				<div className="latest-drop_cards">
					<div className="latest-drop_cards_items">
						
						{collection.map((item) => {
							return (
								<div className="tab-items_single" key={item.id}>
									<img className="tab-items_img" src={item.image} alt="img" />
									<div className="tab-items_content">
										<h4>{item.title}</h4>
										<p>{item.year}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Collection;
