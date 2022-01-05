import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth';
import { useForm } from '../../Hooks/useForm';

export default function Login() {
    const history = useHistory();
    const location = useLocation();
    const auth = useAuth();
    const { theFormState, handleFormStateChange } = useForm({username: '', password: ''});
    const [error, setError] = useState(null);
    const { from } = location.state || { from: {pathname: '/'}};

    const handleLogin = (e) => {
        e.preventDefault()
        const loginIsSuccessful = auth.login(theFormState.username, theFormState.password);

        if (loginIsSuccessful) {
            history.replace(from)
          } else {
            setError('Login failed, please try again.')
          }
    };

    return (
        <>
        <fieldset className="w-1/4 border p-4">
            <legend>Sign In</legend>
            <form onSubmit={handleLogin} className="grid grid-cols-[1fr_2fr] grid-rows-3">
                <label htmlFor="username" className="self-center text-right">Username</label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    value={theFormState.username}
                    onChange={handleFormStateChange}
                    className="border p-2 m-3"
                    required
                />
                <label htmlFor="password" className="self-center text-right">Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={theFormState.password}
                    onChange={handleFormStateChange}
                    className="border p-2 m-3"
                    required
                />
                <button
                    type="submit"
                    className="h-12 self-center bg-black text-white p-1 font-bold col-span-2"
                >
                Sign In
                </button>
            </form>
            {error && <p className="text-center text-red-500 font-bold">{error}</p>}
        </fieldset>
        </>
    )
}