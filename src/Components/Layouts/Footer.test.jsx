import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'
import { UserProvider } from '../../Context-Hooks/UserContext'

it('Should render the footer', async () => {
    const {container} = render(

        <UserProvider>
            <Footer />
        </UserProvider>

    )
    const footer = await screen.findByText(/Guestbook lab/i);
    expect(footer).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})