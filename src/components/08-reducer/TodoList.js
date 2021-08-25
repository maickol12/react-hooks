import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({todos,handleToggle,deleteTodo}) => {
    return (
        <div className='col-5'>
            <ul className='list-group list-group-flush'>
            { todos.map((value,indice) => (
                       <TodoItem
                            key={`todoItem${value.id}`}
                            value={value}
                            handleToggle={handleToggle}
                            deleteTodo={deleteTodo}
                            indice={indice} /> 
                    )
                    ) 
                }
            </ul>
        </div>
    )
}
