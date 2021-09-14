import { mount, shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import { TodoApp } from "../../../../components/08-reducer/TodoApp";
import { demosTodos } from "../../../fixtures/demosTodos";

describe('Pruebas en <TodoApp />', () => {
    const wrapper = shallow(<TodoApp /> )
   test('debe de mostrarse correctamente ', () => {
       expect( wrapper ).toMatchSnapshot();
   });
   
   test('debe de agregar un TODO ', () => {
        const wrapper = mount( <TodoApp />  );
        act(() =>{
            wrapper.find('TodoAdd').prop('handleAddTodo')( demosTodos[0] );
            wrapper.find('TodoAdd').prop('handleAddTodo')( demosTodos[1] );
        });


        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp ( 2 )');
        expect( localStorage.setItem ).toHaveBeenCalledTimes( 2 );
    });
    test('debe de elimonar un TODO ', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demosTodos[0]);
        wrapper.find('TodoAdd').prop('handleAddTodo')(demosTodos[0].id);
        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp ( 1 )');
    });
    
});
