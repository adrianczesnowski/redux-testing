import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
    name: "characters",
    initialState: [],
    reducers: {
        add(state, action) {
            state.unshift(action.payload);
        },
        remove(state, action) {
            state.splice(state.indexOf(action.payload), 1);
        }
    }
});

export default personSlice;
export const { add, remove } = personSlice.actions;