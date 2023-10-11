import React from 'react';
import { UFetch } from './Reto 6';
import { useCounter } from './Reto 5';

const Hookmultiple = () => {
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = UFetch(`https://breakingbadapi.com/api/quotes/${counter}`);

    if (isLoading) {
        return (
            <div className="alert alert-info text-center">
                Cargando...
            </div>
        );
    }

    if (hasError) {
        return (
            <div className="alert alert-danger text-center">
                Error al cargar los datos.
            </div>
        );
    }

    return (
        <>
            <h1>Múltiples Hooks Personalizados</h1>
            <hr />
            <blockquote className="blockquote text-end">
                <p className="mb-1">{data[0]?.quote}</p>
                <footer className="blockquote-footer">{data[0]?.author}</footer>
            </blockquote>
            <button className="btn btn-primary" onClick={increment}>Siguiente Cita</button>
        </>
    );
}

export default Hookmultiple;
