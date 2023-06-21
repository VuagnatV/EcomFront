import React, { createContext, useState } from 'react';

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
    const [session, setSession] = useState({ email: null, id: null, loggedIn: false });

    const login = (user) => {
        setSession(user);
    };

    const logout = () => {
        setSession({ email: null, id: null, loggedIn: false });
    };

    return (
        <SessionContext.Provider value={[session, setSession, login, logout]}>
            {children}
        </SessionContext.Provider>
    );
};

export { SessionContext, SessionProvider };