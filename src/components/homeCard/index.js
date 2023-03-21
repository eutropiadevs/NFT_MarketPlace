import React from "react";
import "../card/index.scss";
import './index.scss'
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img4.jpg";
import diamond from "../../assets/img/diamond.jpg";

const HomeCard = ({ text1, para, btn, text2, para1, btn1 }) => {
	console.log(text1);

	return (
		<>
			<div className="card-section card-summary">
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
							<h5>100ETHICON#01</h5>
							<p>Toaling wang</p>
							<button>Place a bid</button>
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

export default HomeCard;
