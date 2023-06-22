import React, { useState, useContext } from 'react';
import axios from 'axios';
import './Login.css'
import { SessionContext } from '../../context/SessionContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [session, setSession, login] = useContext(SessionContext);

    const handleLogout = async () => {
        try {
            await axios.post('https://ecom-api-ctiy.onrender.com/api/v1/authentication/logout')
                .then(setSession({ email: null, id: null, loggedIn: false }))

        } catch (err) {
            alert(err.response.data.error)
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {

            await axios.post('https://ecom-api-ctiy.onrender.com/api/v1/authentication/login', { email, password })
                .then((res) => login({ email, id: res.data.id, loggedIn: true }))

            alert("logged in successfully")

            setEmail('')
            setPassword('')

        } catch (error) {
            alert(error.response.data.error)
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            {session?.loggedIn
                ? (
                    <div className='loggedIn'>
                        <div> Hello {session.email} you are already logged in </div>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )
                : (
                    <form onSubmit={handleLogin}>
                        <div>
                            <label>Email : </label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Password : </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Login</button>
                    </form>

                )
            }
        </div>
    );
};

export default Login;