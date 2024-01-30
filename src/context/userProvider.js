import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export default function UserProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState();

    function signIn({ email, password }) {
        setCurrentUser({
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
                signIn,
                currentUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
export const useUser = () => {
    return useContext(UserContext);
};