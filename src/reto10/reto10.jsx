const TodoItem = ({ todo, handleDelete, handleToggle }) => {
    return (
        <li key={todo.id} className='align-self-center'>
            <span 
                onClick={() => handleToggle(todo.id)}
                style={{ textDecoration: todo.done ? 'line-through' : 'none', cursor: 'pointer' }}
            >
                {todo.description}
            </span>
            <button 
                className='btn btn-danger'
                onClick={() => handleDelete(todo.id)}
            >
                Borrar
            </button>
        </li>
    );
}
