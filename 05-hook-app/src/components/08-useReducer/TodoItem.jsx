export const TodoItem = ({ todos, onDeleteTodo, toggleTodo }) => {

    return (
        <>
            <li className="list-group-item d-flex justify-content-between">

                <span
                    onClick={() => toggleTodo(todos.id)}
                    className={`aling-self-center ${ (todos.done) ? 'text-decoration-line-through' : ''}`}>

                    {todos.description}
                </span>
                <button onClick={() => onDeleteTodo(todos.id)} className="btn btn-danger"> borrar </button>

            </li>
        </>
    )
}
