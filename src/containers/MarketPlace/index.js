import React from "react";
import Cards from "../../components/cards";
import MarketCard from "../../components/marketCards";
import Market from "../../components/marketPlaceCard";
import { market } from "../../utils/marketCard";
import './index.scss'

const MarketPlace = () => {
  
	return (
		<>
			<div>
				<div className="market-section">
					<Market />
					<MarketCard />
				</div>
                <Cards/>
			</div>
		</>
	);
};

export default MarketPlace;
