import React from "react";
import "./index.scss";
import { market } from "../../utils/marketCard";

const SingleCard = ({ id, text1, para, img }) => {
	

	return (
		<>
			<div className="single-card" >
				<img src={img} />
				<div className="single-card_container">
					<h3>{text1}</h3>
					<p>{para}</p>
				</div>
			</div>
		</>
	);
};

export default SingleCard;
