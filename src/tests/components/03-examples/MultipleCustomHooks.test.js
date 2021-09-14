import { shallow } from "enzyme";
import { MultiplesCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {},
        decrement: () => {},
        reset: () => {}
    });


    test('debe mostrarse correctamente',() =>{
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow( <MultiplesCustomHooks />);
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostar la informacion ', () => {
        useFetch.mockReturnValue({
            data: [{
                author:'maickol',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultiplesCustomHooks /> );

        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('.mb-0').text().trim() ).toBe( 'maickol' ); 
    });
    
})