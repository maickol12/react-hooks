import { renderHook,act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
    test('debe de retornar valores por defecto', () => {
       const { result } = renderHook(() => useCounter()) ;

       expect(  result.current.counter ).toBe(10);
       expect( typeof result.current.increment ).toBe('function');
       expect( typeof result.current.decrement ).toBe('function');
       expect( typeof result.current.reset ).toBe('function');
    });


    test('debe de tener el counter en 100', () => {
        const counter = 100;
        const { result } = renderHook(() => useCounter(counter)) ;
        expect(  result.current.counter ).toBe(counter);
    
     });

     test('debe de incrementar el counter en 1', () => {
        const _counter = 100;
        const { result } = renderHook(() => useCounter(_counter));
        const { increment } = result.current;
        act(() => {
            increment() 
        });
        const { counter } = result.current;

        expect( counter ).toBe(_counter+1);

    
     });
     test('debe decrementar el counter en 1', () => {
         const _counter = 100;
         const { result } = renderHook(() => useCounter(_counter));
         const { decrement } = result.current;
         act(() => {
            decrement(); 
            
         });
         const { counter } = result.current;

         expect( counter ).toBe( _counter-1 );
     })
     

    
});
