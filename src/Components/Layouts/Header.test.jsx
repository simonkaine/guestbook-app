import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'
import { UserProvider } from '../../Context-Hooks/UserContext'

it('Should render the header', async () => {
    const {container} = render(

        <UserProvider>
            <Header />
        </UserProvider>

    )
    const header = await screen.findByText(/Welcome to Hotel california!/i)
    expect(header).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})