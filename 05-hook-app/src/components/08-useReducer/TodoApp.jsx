import { useReducer } from "react"
import { todoReduce } from "./TodoReducer";

const initialState = [

    {
        id: 1,
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: 2,
        description: 'Recolectar la piedra del infito',
        done: false,
    },

]


export const TodoApp = () => {

    const [state, dispatch] = useReducer(todoReduce, initialState);

    return (
        <>
            <h1> Todo App</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="aling-self-center"> Item 1 </span> 
                            <button className="btn btn-danger"> borrar </button>
                        </li>
                    </ul>
                </div>

                <div className="col-5">
                    <h4> Agregar TODO</h4>
                    <hr />

                    <form>

                        <input
                            type="text"
                            placeholder="Tarea"
                            className="form-control"
                        />

                        <button type="submit" className="btn btn-primary mt-1"> Agregar</button>

                    </form>
                </div>
            </div>


        </>
    )
}
