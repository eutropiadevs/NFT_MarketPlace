import React from "react";
import "../card/index.scss";
import "./index.scss";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img4.jpg";
import diamond from "../../assets/img/diamond.jpg";
import { single } from "../../utils/marketCard";

const SingleCard = () => {
	console.log(single.text1);

	return (
		<>
			<div key={single.id} className="card-section card-summary">
				<div className="card-section_img">
					<img className="main-img" src={diamond} alt={diamond} />
				</div>
				<div className="card-section_info">
					<div className="person-img">
						<img src={img1} />
						<img src={img2} />
						<img src={img3} />
						<img src={img4} />
					</div>
					<div className="info-container">
						<div className="info-container_first">
							<h5>{single.text1}</h5>
							<p>{single.para}</p>
							<button>{single.btn}</button>
						</div>
						<div className="info-container_second align">
							<h3>1.00ETH</h3>
							<p>$3,618.36</p>
							<button>View Artwork</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleCard;
