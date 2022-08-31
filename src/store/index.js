import { createStore } from "redux"
import {
    ADD,
    SUBTRACT,
    DIVIDE,
    MULTIPLY,
    CLEAR,
    EQUAL,
    SET_NUMBER
} from "./constant"


const calculatorState = {
    currentValue: 0,
    previousValue: 0,
    operator: null,
    view: 0 // 0 for display, 1 for operator
}

const calculator = (state = calculatorState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                operator: '+',
                previousValue: state.currentValue,
                currentValue: 0,
                view: 1
            }
        case SUBTRACT:
            return {
                ...state,
                operator: '-',
                previousValue: state.currentValue,
                currentValue: 0,
                view: 1
            }
        case MULTIPLY:
            return {
                ...state,
                operator: '*',
                previousValue: state.currentValue,
                currentValue: 0,
                view: 1
            }
        case DIVIDE:
            return {
                ...state,
                operator: '/',
                previousValue: state.currentValue,
                currentValue: 0,
                view: 1
            }
        case EQUAL:
            switch (state.operator) {
                case '+':
                    return {
                        ...state,
                        currentValue: state.previousValue + state.currentValue,
                        view: 0
                    }
                case '-':
                    return {
                        ...state,
                        currentValue: state.previousValue - state.currentValue,
                        view: 0
                    }
                case '*':
                    return {
                        ...state,
                        currentValue: state.previousValue * state.currentValue,
                        view: 0
                    }
                case '/':
                    return {
                        ...state,
                        currentValue: state.previousValue / state.currentValue,
                        view: 0
                    }
                default:
                    return state
            }
        case CLEAR:
            return {
                ...calculatorState
            }
        case SET_NUMBER:
            return {
                ...state,
                currentValue: (state.currentValue * 10) + action.payload,
                view: 0
            }
        default:
            return state
    }
}

const store = createStore(calculator)

export default store