import { types } from "../types/types";


export const authReducer = (state = {}, action) => {

    switch (action.type) {

        case types.login: //* Si el tipo de acción es login
            return { //* Retornamos un nuevo estad, el valor de logged es true y el usuario es el payload
                ...state,
                logged: true,
                user: action.payload
            };

        case types.logout: //* Si el tipo de acción es logout
            return { //* Retornamos un nuevo estado, el valor de logged es false
                logged: false,
            };

        default:
            return state;


    }

}
