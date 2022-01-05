import { useState } from 'react';
import { useInputs } from '../../Context-Hooks/InputContext';
import { useUser } from '../../Context-Hooks/UserContext';

export default function Guestbook() {
    // create state + name + input text / allow contexts
    const [name, setName] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const {inputs, setInputs} = useInputs();
    const {user, setUser} = useUser();

    function updateUserName() {
        if(!userMessage) return;

        setUser(name);
        setInputs([...inputs, {name, message: userMessage}]);
        setUserMessage('');
    }

    const submitHandler = (e) => {
        e.preventDefault();
        updateUserName()
    }

    const userNameInput = (
        <section>
            <label htmlFor='name'>Guest Name: </label>
            <input type='text' placeholder='Enter Name..' id='name' value={name} onChange={(e) => setName(e.target.value)}></input>
        </section>
    )

    const displayedInputCheck = user ? `Thanks for signing, ${user}!` : 'Please sign the ledger :)';

    return (
        <>
        <section style={{height: '20vh'}}>
        <h1>{displayedInputCheck}</h1>
            <form onSubmit={submitHandler}>

                {user ? null : userNameInput}
                <section>
                    <label htmlFor='textfield'>Guest Entry: </label>
                    <textarea 
                        id='textfield' 
                        type='text' 
                        placeholder='Leave a comment!' 
                        value={userMessage} onChange={(e) => setUserMessage(e.target.value)}>
                    </textarea>
                </section>
                <button type='submit'>Sign</button>

                {user && (
                    <button
                        type='button' onClick={() => {
                            setUser('')
                            setName('')
                        }}>
                        Not, {user} ?
                    </button>)}
            </form>
        </section>
        </>
    )
}


