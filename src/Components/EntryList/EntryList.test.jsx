import React from 'react'
import { render, screen } from '@testing-library/react';
import EntryList from './EntryList';
import { InputProvider } from '../../Context/InputContext';

it('Should render a list of user entries', async() => {
    const {container} = render(
        <InputProvider>
            <EntryList />
        </InputProvider>
    )
    const list = await screen.findByRole(/list/i)
    expect(list).toBeInTheDocument(); 
    expect(container).toMatchSnapshot(); 
}) 