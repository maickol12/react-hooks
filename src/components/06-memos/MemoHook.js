import React,{ useState, useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import { procesoPesado } from '../../helper/procesoPesado';

export const MemoHook = () => {
    const { counter, increment} =  useCounter( 10 );
    const [show, setShow] = useState(true);


    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);


    return (
        <div>
            <h3>Counter: <small> { counter  } </small> </h3>
            <hr />
            <p> { memoProcesoPesado } </p>
            <button 
                className='btn btn-primary'
                onClick={() => increment() }
                >
                +1
            </button>
            <button
                className='btn btn-outline-primary ml-3'
                onClick={() => setShow(!show)}>
                ShowHide { JSON.stringify(show) }
            </button>
        </div>
    )
}
