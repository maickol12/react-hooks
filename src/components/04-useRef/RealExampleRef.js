import React, { useState }  from 'react';
import './useRef.css';
import { MultiplesCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr/>

            { show && <MultiplesCustomHooks /> }

            <button
                className='btn btn-primary mt-5'
                onClick={ () => setShow(!show) }>
                Show/Hide
            </button>
        </div>
    )
}
