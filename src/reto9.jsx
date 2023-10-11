import React, { useReducer, useState } from 'react';
import { TodoReducer } from './TodoReducer';

const initialState = [{
    id: new Date().getTime(),
    description: 'Hacer challenges',
    done: false
}];

export const TodoApp = () => {
    const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);
    const [inputValue, setInputValue] = useState('');

    const handleDelete = (todoId) => {
        // Logic to delete a todo
    }

    const handleAddTodo = (newTodo) => {
        // Logic to add a new todo
    }

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
            <h1>TodoApp: {todos.length}, <small> Pendientes: {todos.filter(todo => !todo.done).length} </small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ul className='list-group'>
                        {todos.map(todo => (
                            <li key={todo.id} className='align-self-center'>
                                {todo.description}
                                <button 
                                    className='btn btn-danger'
                                    onClick={() => handleDelete(todo.id)}
                                >
                                    Borrar
                                </button>
                            </li>
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
