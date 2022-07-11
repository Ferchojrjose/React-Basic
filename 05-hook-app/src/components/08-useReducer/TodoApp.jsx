import { useTodo } from "../../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {

    const { todos, onNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo()

    return (
        <>
            <h1> Todo App</h1>
            <h4> Tareas: {todos.length} Pendientes { todos.filter(todo => !todo.done).length }</h4>

            <hr />

            <div className="row">

                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} toggleTodo={handleToggleTodo} />
                </div>

                <div className="col-5">

                    <h4> Agregar TODO</h4>
                    <hr />

                    <TodoAdd onNewTodo={onNewTodo} />

                </div>

            </div>


        </>
    )
}
