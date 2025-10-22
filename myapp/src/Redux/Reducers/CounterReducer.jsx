export const CounterReducer = (state = { value: 6 }, action) => {
    switch (action.type) {
        case 'counter/increment': return { value: state.value + 1 }
        case 'counter/decrement': return { value: state.value - 1 }
        case 'hello': return {
            messag: 'hille mohamed '
        }
        default:
            return state

    }
}