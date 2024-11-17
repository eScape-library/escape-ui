import React, { createContext, useState } from 'react';

const MyContext = createContext();

function MyProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return <MyContext.Provider value={{ user, login, logout }}>{children}</MyContext.Provider>;
}

export { MyProvider, MyContext };
