import { createSlice } from "@reduxjs/toolkit";
import { market } from "../../utils/marketCard";
import { cardData } from "../../utils/cardData";
import { list } from "../../utils/listData";


const initialState = {
	market: market,
	cardData: cardData,
	singleItem: {},
	singleDisplay: {},
	totalCards: 0,
	numOfPages: 1,
	page: 1,
	gridSet: false,
	filteredData: [],
};

const detailSlice = createSlice({
	name: "detail",
	initialState,
	reducers: {
		showSingle: (state, action) => {
			state.singleItem = market.find((item) => {
				return item.id === action.payload;
			});
		},

		display: (state, action) => {
			state.singleItem = cardData.find((item) => {
				return item.id === action.payload;
			});
		},
		changePage: (state, { payload }) => {
			state.page = payload;
		},
		gridComp: (state) => {
			state.gridSet = false;
		},
		gridTrue: (state) => {
			state.gridSet = true;
		},
		// filterData: (state, action) => {
		// 	state.filteredData = action.payload;
		// },
        filterCard: (state, action) =>{
            state.filteredData = list.filter((item)=>{
                return item.category === action.payload
            })
        }
	},
});

export const { showSingle, display, changePage, gridComp, gridTrue, filterData, filterCard } =
	detailSlice.actions;
export default detailSlice.reducer;
