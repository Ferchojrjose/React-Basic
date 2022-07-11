import { useState } from "react"
import { useForm } from "../../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

    const [countId, setCountId] = useState(0); //Contador para ID

    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    })

    const onFormSumit = (event) => {

        event.preventDefault();

        if (description.length <= 1) {
            alert('Ingrese Tarea');
            return;
        }

        setCountId(countId + 1);

        const newTodo = {

            id: countId,
            description,
            done: false

        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (

        <form onSubmit={onFormSumit}>

            <input
                type="text"
                placeholder="description"
                className="form-control"
                name="description"
                onChange={onInputChange}
                value={description}
            />

            <button type="submit" className="btn btn-primary mt-1"> Agregar</button>

        </form>


    )
}
