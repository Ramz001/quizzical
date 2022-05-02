import { useDispatch } from "react-redux"
import BlueBlob from "./BlueBlob"
import YellowBlob from "./YellowBlob" 
import { closeModal } from '../features/modal/modalSlice'
import '../index.css'

export default function Modal(){
    const dispatch = useDispatch()

    return (
        <div className='bg-bg-primary text-clr-primary absolute right-0 left-0 top-0 bottom-0 flex justify-center items-center'>
            <div className="fixed left-0 bottom-0 ">
                <BlueBlob />
            </div>
            <div className="fixed right-0 top-0">
                <YellowBlob />
            </div>
            <div>
                <div className="flex flex-col items-center ">
                    <h1 className="font-bold text-3xl mb-1 ">Quizzical</h1>
                    <p className="mb-4 tracking-[.05em]">Some miscalenous quizzes</p>
                    <button 
                        className="px-12 py-3 main-btn"
                        onClick={() => dispatch(closeModal())}
                        >
                            Start the Quiz!
                    </button>
                </div>
            </div>
        </div>
    )
}