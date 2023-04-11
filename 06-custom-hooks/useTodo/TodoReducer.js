
export const todoReduce = (state = [], action) => {

    switch (action.type) {
        case 'add Todo':
            return [...state, action.payload]

        case 'remove todo':
            return state.filter(todo => todo.id !== action.payload);

        case 'toggle todo':
            return state.map(todo => {

                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo
            });

        default:
            return state;
    }
}