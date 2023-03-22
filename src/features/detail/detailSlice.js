import { createSlice } from "@reduxjs/toolkit";


import { market } from "../../utils/marketCard";

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
           state.singleItem = market.find(item =>{
               return item.id === action.payload;
            })
          
        },

        display: (state)=>{
            state.singleDisplay = state.singleItem

        }
    }
})

export const {showSingle, display} = detailSlice.actions;
export default detailSlice.reducer;
