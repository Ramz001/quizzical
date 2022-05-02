import { useDispatch,useSelector } from "react-redux"
import { selectOption } from "../features/quiz/quizSlice"

export default function Question(props){
    const dispatch = useDispatch()
    const { questionNumber } = props
    const individualProp = props[questionNumber]
    const { question, answers } = individualProp

    const answersMap = answers.map(answer => {
        return (
            <button 
                key={answer.id}
                className={`border-2 border-clr-primary px-3 py-[2px] rounded-xl text-xs md:text-sm ${answer.styles}`}
                onClick={() => dispatch(selectOption({id: answer.id, questionNumber }))}
                >{answer.option}
            </button>
        )}
    )

    return (
        <div>
            <h1 className="font-bold text-lg md:text-2xl mb-2 max-w-lg">{question}</h1>
            <div className="flex flex-wrap gap-8 my-2 border-b border-border-primary pb-4">
                {answersMap}
            </div>
        </div>
    )
}

