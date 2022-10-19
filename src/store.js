import { configureStore } from "@reduxjs/toolkit";

import personSlice from "./personSlice";

export default function storeConfig() {
    const store = configureStore({
        reducer: personSlice.reducer,
        preloadedState: ["Adrian Czesnowski", "Leon Kamiński", "Adam Nowak"]
    });
    return store;
}
