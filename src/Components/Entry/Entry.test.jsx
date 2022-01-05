import React from 'react'
import { render } from '@testing-library/react';
import EntryInput from './EntryInput';

it('Should render a user input', () => {
    const {container} = render(
        <EntryInput entry={{ name: 'Simon', message: 'I was here!' }}/>
    )
    expect(container).toMatchSnapshot(); 
})
