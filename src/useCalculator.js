import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    add,
    subtract,
    multiply,
    divide,
    clear,
    setNumber,
    equal
}
    from './store/actions/'

export const useCalculator = () => {

    const { currentValue, previousValue, operator, view } = useSelector(state => state)
    const dispatch = useDispatch()

    const displayValue = React.useMemo(() => view ? operator : currentValue, [currentValue, operator, view])

    const handleNumberClick = (number) => {
        dispatch(setNumber(number))
    }

    const calculatorObject = useMemo(() => ([
        {
            val: 1,
            onClick: () => handleNumberClick(1)
        },
        {
            val: 2,
            onClick: () => handleNumberClick(2)
        },
        {
            val: 3,
            onClick: () => handleNumberClick(3)

        },
        {
            val: "+",
            onClick: () => dispatch(add())
        },
        {
            val: 4,
            onClick: () => handleNumberClick(4)
        },
        {
            val: 5,
            onClick: () => handleNumberClick(5)
        },
        {
            val: 6,
            onClick: () => handleNumberClick(6)
        },
        {
            val: "-",
            onClick: () => dispatch(subtract())
        },
        {
            val: 7,
            onClick: () => handleNumberClick(7)
        },
        {
            val: 8,
            onClick: () => handleNumberClick(8)
        },
        {
            val: 9,
            onClick: () => handleNumberClick(9)
        },
        {
            val: "*",
            onClick: () => dispatch(multiply())
        },
        {
            val: "AC",
            onClick: () => dispatch(clear())
        },
        {
            val: 0,
            onClick: () => handleNumberClick(0)
        },
        {
            val: "=",
            onClick: () => dispatch(equal())
        },
        {
            val: "/",
            onClick: () => dispatch(divide())
        }

    ]), [])

    return [calculatorObject, displayValue]
}