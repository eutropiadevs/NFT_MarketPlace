import React from "react";
import { useSelector } from "react-redux";
import "./index.scss";
import Tabs from "../../components/tabs";


const SingleProduct = () => {
	const showSingle = useSelector((store) => store.detail.singleItem);
	return (
		<>
			<div>
				<div className="nft-product-page">
					<div className="nft-image">
						<img src={showSingle.img} alt="NFT" />
					</div>
					<div className="nft-details">
						<h1>{showSingle.author}</h1>
						<h2>by Author</h2>
						<p className="nft-edition">Edition #1 of 10</p>
						<p className="nft-description">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
						<p className="nft-price">Price: 0.1 ETH</p>
						<div className="btn-flex">
							<button className="place-bid-button">Place a Bid</button>
							<div className="btn-flex_sub">
								<button className="like-button">Like</button>
								<button className="share-button">Share</button>
							</div>
						</div>
					</div>
				</div>

				<div>
					<Tabs />
				</div>
			</div>
		</>
	);
};

export default SingleProduct;
