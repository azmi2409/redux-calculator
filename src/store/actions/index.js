import {
    ADD,
    SUBTRACT,
    DIVIDE,
    MULTIPLY,
    CLEAR,
    EQUAL,
    SET_NUMBER
} from '../constant/'

const add = (payload) => ({
    type: ADD,
    payload
})

const subtract = (payload) => ({
    type: SUBTRACT,
    payload
})

const divide = (payload) => ({
    type: DIVIDE,
    payload
})

const multiply = (payload) => ({
    type: MULTIPLY,
    payload
})

const clear = () => ({
    type: CLEAR
})

const equal = () => ({
    type: EQUAL
})

const setNumber = (payload) => {
    return {
        type: SET_NUMBER,
        payload
    }
}

export {
    add,
    subtract,
    multiply,
    divide,
    clear,
    setNumber,
    equal
}