import React, { useState } from "react";

export const otroreto = () => {
    // Estado para almacenar la lista de categorías
    const [categories, setCategories] = useState([]);
    
    // Estado para almacenar la categoría actual ingresada en el campo de entrada
    const [category, setCategory] = useState('');
    
    // Estado para almacenar mensajes de error
    const [errorMessage, setErrorMessage] = useState('');

    // Función que se ejecuta al hacer clic en el botón "addList"
    const onAddCategory = () => {
        // Verificar si la categoría no está vacía después de eliminar los espacios en blanco
        if (category.trim() !== '') {
            // Agregar la categoría al estado "categories" usando el spread operator
            setCategories(lista => [...lista, category]);
            // Limpiar el campo de entrada
            setCategory('');
            // Limpiar el mensaje de error
            setErrorMessage('');
        } else {
            // Si la categoría está vacía, establecer un mensaje de error
            setErrorMessage('El campo de categoría está vacío.');
        }
    };

    // Función que se ejecuta al cambiar el valor del campo de entrada
    const onSetCategory = (e) => {
        // Actualizar el estado "category" con el valor del campo de entrada
        setCategory(e.target.value);
        // Limpiar el mensaje de error
        setErrorMessage('');
    };

    // Renderizar los elementos en la interfaz
    return (
        <>
            {/* Encabezado */}
            <h1>Realiza tu lista</h1>
            
            {/* Campo de entrada controlado por el estado "category" */}
            <input type="text" value={category} onChange={(event) => onSetCategory(event)} />
            
            {/* Botón para agregar categoría */}
            <button onClick={() => onAddCategory()}>addList</button>
            
            {/* Mostrar mensaje de error si existe */}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            
            {/* Lista ordenada de categorías */}
            <ol>
                {categories.map((category, key) => {
                    return <li key={key}>{category}</li>;
                })}
            </ol>
        </>
    );
};


