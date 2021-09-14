import { todoReducer } from '../../../../components/08-reducer/todoReducer';
import { demosTodos } from '../../../fixtures/demosTodos';


describe('Pruebas en todoReduer',() => {
    test('Debe de retornar el estado por defecto ', () => {
        const state = todoReducer(demosTodos,{});

        expect( state ).toEqual( demosTodos );
    });

    test('debe de agregar un TODO ', () => {
        const state = todoReducer(demosTodos,{});
        const length = state.length;
        const newTodo = {
            id: 3,
            desc: 'Aprender React',
            done: false
        };

        const action = {
            type:'add',
            payload: newTodo
        }
        const newState = todoReducer(demosTodos,action);
        

        expect( newState ).toEqual( [...demosTodos, newTodo] );
    });

    test('debe de borrar un TODO ', () => {
        const state = todoReducer(demosTodos,{});
        const length = state.length;
        const deleteTodo = 1;

        const action = {
            type:'delete',
            payload: deleteTodo
        }
        const newState = todoReducer(demosTodos,action);

        expect( length != newState.length ).toBe(true);
    });

    test('debe de hacer el TOGGLE del TODO', () => {
        const state = todoReducer(demosTodos,{});
        const toggleTodo = 1;
        const action = {
            type:'toggle',
            payload: toggleTodo
        };
        const newState = todoReducer(demosTodos,action);
        
        const todo = newState.find(element => element.id === toggleTodo );
        expect( todo.done ).toBe( true );
    });
    
    

    
});