import React, { useCallback } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    // const incrementar = () => {
    //     setCounter( counter + 1);
    // }

    const increment = useCallback(
        ( num ) => {
            setCounter( c => c + num )
        },
        [ setCounter ],
    )

    return (
        <div>
            <h1>Use callback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={incrementar} />
        </div>
    )
}
