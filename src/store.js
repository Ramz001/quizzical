import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './features/modal/modalSlice';
import quizReducer from './features/quiz/quizSlice';

export const store = configureStore({
    reducer:{
        modal: modalReducer,
        quiz: quizReducer
    }
});

