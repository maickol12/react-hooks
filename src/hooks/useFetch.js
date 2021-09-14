import { useState, useEffect, useRef } from 'react';
export const useFetch = (url) => {
    const isMounted = useRef(true);
    const [state, setState] = useState({ data:null, loading:true, error:null});

    useEffect(() => {
        return () => {
            isMounted.current = false;
        } 
    }, [])

    useEffect(() => {
        setState({
            loading: true,
            error:null,
            data:null
        })
        fetch(url)
        .then( resp => resp.json())
        .then(data => {
            setTimeout( () => {
                if(isMounted.current == true){
                    setState({
                        loading: false,
                        error:null,
                        data
                    })
                }else{
                    console.log('setState no se llamo');
                }
            },4000);
        })
        .catch( () => {
            setState({
                loading: false,
                error:'No se pudo cargar la info',
                data: null
            });
        } );
        
    }, [url]);

    return state;
}