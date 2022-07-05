
export const todoReduce = (state, action) => {

    switch (action.type) {
        case 'ABC':
            throw new Error('la accion ABC no esta definida');

        default:
            return state;
    }
}