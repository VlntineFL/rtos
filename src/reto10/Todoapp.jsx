export const TodoApp = () => {
    const { todos, handleDelete, handleToggle, handleAddTodo, countTodos, countPendingTodos } = useTODO(initialState);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 0) {
            handleAddTodo({
                id: new Date().getTime(),
                description: inputValue,
                done: false
            });
            setInputValue('');
        }
    }

    return (
        <>
            <h1>TodoApp: {countTodos()}, <small> Pendientes: {countPendingTodos()} </small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ul className='list-group'>
                        {todos.map(todo => (
                            <TodoItem 
                                key={todo.id} 
                                todo={todo} 
                                handleDelete={handleDelete} 
                                handleToggle={handleToggle} 
                            />
                        ))}
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            className='form-control' 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button className='btn btn-outline-primary mt-1'>
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

