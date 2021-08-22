import React,{ useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
import './Layout.css'

export const Layout  = () => {
    const { counter,increment } = useCounter(1);
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { data } = state;
    const { author, quote } = !!data && data[0];

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
       setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);
    
    return (
        <div>
            <h1>Layut Effect</h1>
            <hr/>
            {
                <blockquote className='blockquote text-right'>
                    <p 
                        ref={ pTag }
                        className='mb-0'>{ author }</p><br/>                    
                </blockquote>
            }
            <pre>
                { JSON.stringify(boxSize,null,3) }
            </pre>
            <button className='btn btn-primary' onClick={()=>increment()}>
                Siguiente Quote
            </button>
        </div>
    )
}
