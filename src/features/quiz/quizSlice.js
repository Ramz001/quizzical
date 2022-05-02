import { createSlice } from "@reduxjs/toolkit";
import data from '../../data'

const initialState = {
    data,
    correctAnswers: 0,
    totalQuestionsNumber: 0,
    quizChecked: false
}

const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        selectOption: (state, action) => {
            const { data } = state
            const { id, questionNumber } = action.payload;
            const individualProp = data[questionNumber]
            const individualOption = individualProp.answers.find(answer => answer.id === id)
            individualProp.answers.forEach(answer => (answer.selected = false , answer.styles = ''))
            individualOption.selected = true
            individualOption.styles = 'bg-btn-select border-0'
        },
        checkAnswers: (state) => {
            state.quizChecked = true
            state.correctAnswers = 0
            state.data.forEach(question => {
                question.answers.forEach(answer => {
                    if(answer.selected && answer.correct){
                        state.correctAnswers++
                        answer.styles = 'bg-btn-correct border-0'
                    }
                    if(answer.selected && !answer.correct){
                        answer.styles = 'bg-btn-wrong border-0'
                    }
                    if(!answer.selected){
                        answer.styles = 'text-border-primary border-border-primary'
                    }
                })
            })
            state.totalQuestionsNumber = state.data.length
        },
        reset: (state) => {
            state.quizChecked = false
            state.correctAnswers = 0
            state.data.forEach(question => {
                question.answers.forEach(answer => {
                    answer.selected = false
                    answer.styles = ''
                })
            })
        }
    }
})

export const { selectOption, checkAnswers, reset } = quizSlice.actions;

export default quizSlice.reducer