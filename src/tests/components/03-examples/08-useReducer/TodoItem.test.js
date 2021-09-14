import { shallow } from "enzyme"
import { TodoItem } from "../../../../components/08-reducer/TodoItem"

const data = {id:1, done:true, desc:'Realizando pruebas'};

describe('Pruebas en <TodoItem />', () => {
    const handleToggle = jest.fn();
    const handleDelete = jest.fn();
    const wrapper = shallow(
        <TodoItem value={data} handleToggle={handleToggle} deleteTodo={handleDelete} indice={0} />
    );

    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de llamar la funcion borrar ', () => {
        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( 1 );
    });

    test('debe de llamar la funcion toggle ', () => {
        wrapper.find('p').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( 1 );
    });

    test('debe de mostrar el texto correcto', () => {
        const p = wrapper.find('p');
        expect( p.text() ).toBe('1. Realizando pruebas')
    });

    test('debe de tener la clase complete si el todo.done es true', () => {
        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    });
    
    
})
