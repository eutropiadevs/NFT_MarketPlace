import React from "react";
import { useSelector } from "react-redux";
import "./index.scss";
import { useState } from "react";
// import { items } from "../../utils/singleCard";

const SingleProduct = () => {
	const showSingle = useSelector((store) => store.detail.singleItem);
	//   const [data, setData] = useState(items)

	const [activeTab, setActiveTab] = useState(0);
	
	const handleTabClick = (tabIndex) => {
		setActiveTab(tabIndex);
	};

	return (
		<>
			<div>
				<div className="nft-product-page">
					<div className="nft-image">
						<img src={showSingle.img} alt="NFT" />
					</div>
					<div className="nft-details">
						<h1>NFT Name</h1>
						<h2>by Author</h2>
						<p className="nft-edition">Edition #1 of 10</p>
						<p className="nft-description">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
						<p className="nft-price">Price: 0.1 ETH</p>
						<button className="place-bid-button">Place a Bid</button>
						<button className="like-button">Like</button>
						<button className="share-button">Share</button>
					</div>
				</div>

				<div>
					<div className="tabs">
						<div className="tabs__header">
							<button
								className={`tabs__header-item ${
									activeTab === 1 && "tabs__header-item--active"
								}`}
								onClick={() => handleTabClick(1)}
							>
								Tab 1
							</button>
							<button
								className={`tabs__header-item ${
									activeTab === 2 && "tabs__header-item--active"
								}`}
								onClick={() => handleTabClick(2)}
							>
								Tab 2
							</button>
							<button
								className={`tabs__header-item ${
									activeTab === 3 && "tabs__header-item--active"
								}`}
								onClick={() => handleTabClick(3)}
							>
								Tab 3
							</button>
						</div>
						<div className="tabs__content">
							<div
								className={`tabs__content-item ${
									activeTab === 1 && "tabs__content-item--active"
								}`}
							>
								<p>This is the content for Tab 1.</p>
							</div>
							<div
								className={`tabs__content-item ${
									activeTab === 2 && "tabs__content-item--active"
								}`}
							>
								<p>This is the content for Tab 2.</p>
							</div>
							<div
								className={`tabs__content-item ${
									activeTab === 3 && "tabs__content-item--active"
								}`}
							>
								<p>This is the content for Tab 3.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleProduct;
