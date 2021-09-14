import { HookApp } from './../HookApp';
const { shallow } = require("enzyme");

describe('Pruebas en <HookApp/>',() => {
    const wrapper = shallow( <HookApp/> );
    test('debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(false);
    });

    test('debe de mostrar el componente <MultipleCustomHooks />', () => {
        wrapper.find('button').simulate('click');
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(true);
    })
    
});