import { configureStore } from "@reduxjs/toolkit";

const initialState = {

}


const store = configureStore({
    initialState,
    reducer: {
        // Add your reducers here
    }
});


export default store