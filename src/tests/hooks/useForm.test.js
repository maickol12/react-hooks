import { renderHook,act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'maickol',
        email: 'maickol@gmail.com'
    };

    test('debe de regresar un formulario por defecto ', () => {
        const { result } = renderHook(() => useForm( initialForm ));
        const [formValues,handleInputChange,reset] = result.current;
        expect(formValues).toEqual(initialForm); 
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook(() => useForm( initialForm ));
        const [ ,handleInputChange] = result.current;
        const newName = 'miguel angel';
        act(() => {
            handleInputChange({
                    target: {

                        name:'name',
                        value:newName
                    }
            });
        });
    
        const [ formValues ] = result.current;
        expect(formValues).toEqual({...initialForm, name:newName});

    });

    test('debe de restablecer el formulario con el reset', () => {
        const { result } = renderHook(() => useForm( initialForm ));
        const [ ,handleInputChange, reset] = result.current;
        const newName = 'miguel angel';
        act(() => {
            handleInputChange({
                    target: {

                        name:'name',
                        value:newName
                    }
            });
            reset();
        });
    
        const [ formValues ] = result.current;
        expect(formValues).toEqual(initialForm);

    });
    
    
    

})
