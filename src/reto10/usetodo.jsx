const useTODO = (initialState) => {
    const [todos, dispatch] = useReducer(TodoReducer, initialState);

    const handleDelete = (todoId) => {
        dispatch({
            type: 'delete',
            payload: todoId
        });
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    const countTodos = () => {
        return todos.length;
    }

    const countPendingTodos = () => {
        return todos.filter(todo => !todo.done).length;
    }

    return {
        todos,
        handleDelete,
        handleToggle,
        handleAddTodo,
        countTodos,
        countPendingTodos
    };
}
