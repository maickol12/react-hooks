import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
import './examples.css'

export const MultiplesCustomHooks = () => {
    const { counter,increment } = useCounter(1);
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { loading, data } = state;
    const { author, quote } = !!data && data[0];

    
    return (
        <div>
            <h1>Braking Bad Quotes</h1>
            <hr/>
            {
                loading ?
                (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                )
                :
                (
                    <blockquote className='blockquote text-right'>
                        <p className='mb-0'>{ author }</p><br/>
                        <footer className='blockquote-footer'>{ quote   }</footer>
                    </blockquote>
                )
            }
            <button className='btn btn-primary' onClick={()=>increment()}>
                Siguiente Quote
            </button>
        </div>
    )
}
