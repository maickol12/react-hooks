import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo}) => {
    const [values, handleInputChange, reset] = useForm({ description: '' });

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(values.description.trim().length <= 1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: values.description,
            done: false
        };
    

        handleAddTodo(newTodo);
        reset();
    }
    return (
        <>
           <h4>Agregar todo</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    className='form-control'
                    type='text'
                    value={ values.description }
                    onChange={ handleInputChange }
                    name='description'
                    placeholder='Aprender...'
                    autoComplete='off'></input>
                <button type='submit' className='btn btn-primary mt-1 btn-block'>
                    Agregar
                </button>
            </form>  
        </>
    )
}
