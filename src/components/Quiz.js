import Question from './Question'
import { useSelector, useDispatch } from 'react-redux'
import { checkAnswers } from '../features/quiz/quizSlice'
import { reset } from '../features/quiz/quizSlice'
import BlueBlob from './BlueBlob'
import YellowBlob from './YellowBlob'
import '../index.css'

export default function Quiz(){
    const dispatch = useDispatch()
    const { data, quizChecked, correctAnswers, totalQuestionsNumber } = useSelector(state => state.quiz)
    return(
        <div className='h-screen bg-bg-primary text-clr-primary flex flex-col justify-center items-center'>
            <div className='flex flex-col mx-4 pt-12 pb-5'>
                <Question id={data.id} {...data} questionNumber={0}/>
                <Question id={data.id} {...data} questionNumber={1}/>
                <Question id={data.id} {...data} questionNumber={2}/>
                <Question id={data.id} {...data} questionNumber={3}/>
                <Question id={data.id} {...data} questionNumber={4}/>
            </div>
            {!quizChecked && <button 
                onClick={() => dispatch(checkAnswers())}
                className='px-8 py-3 main-btn mb-9'>
                    Check answers
            </button>}
            {quizChecked && <div className='flex items-center gap-8 justify-between mb-10 md:mb-9'>
                    <h2 className='md:text-lg sm:text-2xl'>You scored {correctAnswers}/{totalQuestionsNumber} correct answers!</h2>
                    <button
                        className='main-btn px-3 py-1 sm:px-5 sm:py-2'
                        onClick={() => dispatch(reset())}
                    >
                        Play Again
                    </button>
                </div>}
            <div className='fixed -top-16 -right-16 sm:-top-8 sm:-right-8'>
                <YellowBlob />
            </div>
            <div className='fixed -bottom-20 -left-20 sm:-bottom-8 sm:-left-8'>
                <BlueBlob />
            </div>
        </div>
    )
}
