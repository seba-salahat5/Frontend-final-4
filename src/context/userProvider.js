import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export default function UserProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState();

    function signIn({ email, password }) {
        setUser({
            "email": email,
            "password": password,
        })
    }

    function toggleIsLoggedIn() {
        setIsLoggedIn((prev) => !prev);
    }
    return (
        <UserContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                toggleIsLoggedIn,
                signIn
                /*                 signUp,
                                signIn */
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
export const useUser = () => {
    return useContext(UserContext);
};