import { RealExampleRef } from '../../../../components/04-useRef/RealExampleRef';
const { shallow } = require("enzyme");

describe('Pruebas en <RealExample />', () => {
    test('debe mostrarse correctamente ', () => {
        const wrapper = shallow( <RealExampleRef /> );
        expect( wrapper ).toMatchSnapshot();
    });


    test('debe de mostrar el componente <MultipleCustomHooks />', () => {
        const wrapper = shallow( <RealExampleRef /> );

        console.log(wrapper.html());
    });
    
    
});