import { createSlice } from "@reduxjs/toolkit";


import { market } from "../../utils/marketCard";
console.log(market)
const initialState = {
    market: market,
   singleItem: {},
   singleDisplay: {}
};


const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers:{
        showSingle: (state, action) =>{
            console.log(action.payload)
            console.log(market)
           state.singleItem = market.find(item =>{
               return item.id === action.payload;
            })
            console.log(state.singleItem)
        },

        display: (state)=>{
            state.singleDisplay = state.singleItem
            console.log(state.singleDisplay);
        }
    }
})

export const {showSingle, display} = detailSlice.actions;
export default detailSlice.reducer;
