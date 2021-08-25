import React, { useReducer, useState, useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './styles.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprendiendo react',
    //     done: false
    // }];
}


export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])



    const deleteTodo = (id) => {
        
        const action = {
            type:'delete',
            payload: id
        }

        dispatch(action);

    }

    const handleToggle = (id) => {
        dispatch({type:'toggle',payload:id});
    }
    
    const handleAddTodo = (newTodo) => {
        const action = {
            type:'add',
            payload: newTodo
        }
        dispatch(action);
    }

    return (
        <div>
            <h1>TodoAPP ({ todos.length})</h1>
            <hr />
            <div className='row'>
                <TodoList 
                    todos={todos}
                    handleToggle={handleToggle}
                    deleteTodo={deleteTodo} />
                <div className='col-7'>
                   <TodoAdd handleAddTodo={handleAddTodo} />
                </div>

            </div>
        </div>
    )
}
