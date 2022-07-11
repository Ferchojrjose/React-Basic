import { TodoItem } from './TodoItem';


export const TodoList = ({ todos, onDeleteTodo, toggleTodo }) => {
    return (
        <>
            <ul className="list-group">

                {
                    todos.map(ob => (
                        <TodoItem
                            key={ob.id}
                            todos={ob}
                            onDeleteTodo= {onDeleteTodo}
                            toggleTodo= { toggleTodo}
                        />
                    ))
                }

            </ul>

        </>
    )
}
