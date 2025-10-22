export const INCREMENT = 'counter/increment';
export const DECREMENT = 'counter/decrement';
export const SET_MESSAGE = 'counter/setMessage';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const setMessage = (msg) => ({ type: SET_MESSAGE, payload: msg });
