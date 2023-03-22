import { createSlice } from "@reduxjs/toolkit";
import { market } from "../../utils/marketCard";
import { cardData } from "../../utils/cardData";

const initialState = {
    market: market,
    cardData: cardData,
   singleItem: {},
   singleDisplay: {}
};


const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers:{
        showSingle: (state, action) =>{
           state.singleItem = market.find(item =>{
               return item.id === action.payload;
            })
          
        },

        display: (state, action)=>{
           state.singleItem = cardData.find(item =>{
               return item.id === action.payload;
            })

        }
    }
})

export const {showSingle, display} = detailSlice.actions;
export default detailSlice.reducer;
