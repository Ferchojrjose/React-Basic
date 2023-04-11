//Hook: Es una funcion que retorna algo
/*
    Este Hook retorna un objeto con funciones
    de un contador.
*/
import { useState } from "react"

export const UseCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    //Funcion incrementa la variable
    const increment = (value = 1) => {
        setCounter(counter + value);
    }

    //Funcion decre,emta la variable
    const decrement = () => {
        setCounter(counter - 1);
    }

    //Funcion decre,emta la variable
    const reset = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}