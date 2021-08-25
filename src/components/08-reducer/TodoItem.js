import React from 'react'

export const TodoItem = ({value,handleToggle,deleteTodo,indice}) => {
    const { id, done, desc } = value;
    return (
        <li key={id} className='list-group-item'>
            <p 
                className={`${done && 'complete'}`}
                onClick={() => handleToggle(id) }>
                {indice + 1}. {desc}
            </p>
            <button 
                onClick={ () => deleteTodo(id) }
                className='btn btn-danger'>
                Borrar
            </button>
        </li>
        
    )
}
