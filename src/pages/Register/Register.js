import React, { useState } from 'react';
import './Register.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://ecom-api-ctiy.onrender.com/api/v1/authentication/register', { email, password })
            .then(res => {
                if (res.data.status === "success") {
                    alert("registrtion succesfull")
                    navigate('/login')
                } else {
                    alert(res.data.error)
                }
            })

        setEmail('');
        setPassword('');
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;