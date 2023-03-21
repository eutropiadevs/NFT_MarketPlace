import React from "react";
import "./index.scss";

const SingleCard = ({text1, para, img }) => {
	

	return (
		<>
			<div className="single-card" >
				<img src={img} alt='img'/>
				<div className="single-card_container">
					<h3>{text1}</h3>
					<p>{para}</p>
				</div>
			</div>
		</>
	);
};

export default SingleCard;
