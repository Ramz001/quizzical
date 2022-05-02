import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: true
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        closeModal: (state) => {
            state.isOpen = false;
        }
    }
})

export const { closeModal } = modalSlice.actions; 

export default modalSlice.reducer;