import { shallow } from "enzyme"
import { TodoList } from "../../../../components/08-reducer/TodoList"
import { demosTodos } from "../../../fixtures/demosTodos"

describe('Pruebas en <TodoList />', () => {
    const handleToggle  = jest.fn();
        const deleteTodo    = jest.fn();
        const wrapper = shallow( <TodoList 
            todos = {demosTodos} 
            handleToggle={handleToggle}
            deleteTodo={deleteTodo}
             /> );
    test('Debe de mostrarse correctamente', () => {
    
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de tener dos <TodoList />', () => {
        expect(wrapper.find('TodoItem').length).toBe(demosTodos.length);
        expect(wrapper.find('TodoItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    });
    
})
