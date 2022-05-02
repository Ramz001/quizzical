import { nanoid } from "@reduxjs/toolkit"

export default [
    {
        id: nanoid(),
        question: 'How would one say goodbye in Spanish?',
        answers: [
            { option: 'Adios', id: nanoid(), selected: false, correct: true, styles:"" },
            { option: 'Hola', id: nanoid(), selected: false, correct: false, styles:"" },
            { option: 'Revoir', id: nanoid(), selected: false, correct: false, styles:""} ,
            { option: 'Salir', id: nanoid(), selected: false, correct: false, styles:"" },
        ],
    },
    {
        id: nanoid(),
        question: 'Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?',
        answers: [
            { option: 'Cabbage Patch Kids', id: nanoid(), selected: false, correct: false, styles:"" },
            { option: 'Transformers', id: nanoid(), selected: false, correct: false, styles:""} ,
            { option: 'Care Bears', id: nanoid(), selected: false, correct: true, styles:"" },
            { option: "Rubic's Cube", id: nanoid(), selected: false, correct: false, styles:"" },
        ]
    },
    {
        id: nanoid(),
        question: 'What is the hottest planet in our solar system?',
        answers: [
            { option: 'Mercury', id: nanoid(), selected: false, correct: false, styles:"" },
            { option: 'Venus', id: nanoid(), selected: false, correct: true, styles:"" },
            { option: 'Mars', id: nanoid(), selected: false, correct: false, styles:"" },
            { option: 'Saturn', id: nanoid(), selected: false, correct: false, styles:"" },
        ]
    },
    {
        id: nanoid(),
        question: 'In which coutry was the caesar salad invented?',
        answers: [
            { option: 'Italy', id: nanoid(), selected: false, correct: false, styles:"" },
            { option: 'Mexico', id: nanoid(), selected: false, correct: true, styles:"", styles:"" },
            { option: 'Portugal', id: nanoid(), selected: false, correct: false, styles:"" },
            { option: 'France', id: nanoid(), selected: false, correct: false, styles:"" },
        ]
    },
    {
        id: nanoid(),
        question: 'How many hearts does an octopus have?',
        answers: [
            { option: 'one', id: nanoid(), selected: false, correct: false, styles:"" },
            { option: 'two', id: nanoid(), selected: false, correct: false, styles:"" },
            { option: 'three', id: nanoid(), selected: false, correct: true, styles:"" },
            { option: 'four', id: nanoid(), selected: false, correct: false, styles:"" },
        ]
    }
]