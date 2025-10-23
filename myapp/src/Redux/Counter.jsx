import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCounterValue } from './Store/counterSetector'

import { increment, decrement, } from './Store/counterActions';



export default function Counter({ value }) {
    const selector = useSelector(selectCounterValue)
    const dispatch = useDispatch()

    return (
        <>
            <div className="text-center mt-5">
                <h2>Counter:</h2>
                <h3>{selector}</h3>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <div className="btn-group">
                        <button className="btn btn-primary" onClick={() => dispatch(increment())}>Increment</button>
                        <button className="btn btn-primary" onClick={() => dispatch(decrement())}>Decrement</button>

                    </div>


                </div>
            </div>
        </>
    )
}



// export const CounterStore = connect(
//     (state) => ({
//         value: selectCounterValue(state),
//         messag: selectCounterMessage(state),
//     }),
//     (dispatch) => ({
//         increment: () => dispatch(increment()),
//         decrement: () => dispatch(decrement()),
//         showMessage: () => dispatch(setMessage('hello mohamed'))
//     })
// )(Counter);


