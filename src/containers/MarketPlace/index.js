import React from "react";
import Cards from "../../components/cards";
import MarketCard from "../../components/marketCards";
import Market from "../../components/marketPlaceCard";
import './index.scss'
import { cardData } from "../../utils/cardData";
import CardGrid from "../../components/cardGrid";

const MarketPlace = () => {
	return (
		<>
			<div>
				<div className="market-section">
					<Market />
					<MarketCard />
				</div>
				<div className="market">
					<Cards label={"Latest Drops"} data={cardData}  />
					<CardGrid/>
				</div>
			</div>
		</>
	);
};

export default MarketPlace;
