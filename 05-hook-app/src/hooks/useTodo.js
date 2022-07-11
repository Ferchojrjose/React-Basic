import { useEffect, useReducer } from "react";
import { todoReduce } from "../components/08-useReducer/TodoReducer";

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReduce, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const onNewTodo = (newTodo) => {

        const action = {
            type: 'add Todo',
            payload: newTodo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {

        // console.log({id});
        dispatch({
            type: 'remove todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => {

        dispatch({
            type: 'toggle todo',
            payload: id
        });

    }

    return {
        todos,
        onNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }

}
