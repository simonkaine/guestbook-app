import { useState } from 'react';

export function useForm(inputs ={}) {
    const [theFormState, setTheFormState] = useState(inputs);

    const handleFormStateChange = (e) => {
        const { name, value } = e.target;

        setTheFormState((previousSate) => {
            return {...previousSate, [name]: value}
        })
    }
    return { theFormState, handleFormStateChange };
}