import { createSlice } from "@reduxjs/toolkit";
import { market } from "../../utils/marketCard";
import { cardData } from "../../utils/cardData";

const initialState = {
    market: market,
    cardData: cardData,
   singleItem: {},
   singleDisplay: {},
   totalCards: 0,
   numOfPages: 1,
   page: 1
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

        },
        changePage: (state, {payload})=>{
            state.page = payload;
        }
    }
})

export const {showSingle, display, changePage} = detailSlice.actions;
export default detailSlice.reducer;
