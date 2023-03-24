import React, { useState } from "react";
import Cards from "../../components/cards";
import MarketCard from "../../components/marketCards";
import Market from "../../components/marketPlaceCard";
import './index.scss'
import { cardData } from "../../utils/cardData";
import CardGrid from "../../components/cardGrid";
import ListView from "../../components/listView";
import GridView from "../../components/gridView";
import { useDispatch, useSelector } from "react-redux";
import { gridComp, gridTrue } from "../../features/detail/detailSlice";
import CardFilter from "../../components/filter";
import { FaSistrix } from "react-icons/fa";
import Footer from "../../components/footer";

const MarketPlace = () => {
// 	const [grid, setGrid] = useState(true)
const gridSet = useSelector(store => store.detail.gridSet)
//   if(grid === false){
// 	return <ListView/>
//   }
//   return
const dispatch = useDispatch()


	return (
		<>
			<div className="marketPlace-container">
			
				<div className="market-section">
					<Market />
					<MarketCard />
				</div>
				<div className="market">
					<Cards label={"Latest Drops"} data={cardData}  />
					<CardGrid/>
					<div className="search-container">
						<form>
							<input placeholder="Search" />
							<span><FaSistrix/></span>
						</form>
						<button onClick={()=>dispatch(gridTrue())}>grid</button>
						<button onClick={()=>dispatch(gridComp())}>list</button>
					</div>
					<GridView/>
					<div>
						<Footer/>
					</div>
					{/* <Footer/> */}
					{/* <ListView/> */}
				</div>
			</div>
		</>
	);
};

export default MarketPlace;
