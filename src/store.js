import { configureStore } from "@reduxjs/toolkit";

import detailSlice from "./features/detail/detailSlice";

export const store = configureStore({
    reducer: {
        detail: detailSlice,
    },
});