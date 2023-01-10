import { useState } from "react"
import { UseContext } from "./UseContext"

// const user = {
//     id: 123,
//     nombre: 'Fernando Serrano'
// }

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

    return (
        // <UseContext.Provider value={{ hola: 'Mundo', user }}>
        <UseContext.Provider value={{ user, setUser }}>
            {children}
        </UseContext.Provider>
    )
}
