import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export default function UserProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [session_token, setSessionToken] = useState();

    function signIn( tokin ) {
        console.log("tokin", tokin);
        setSessionToken(tokin);
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
                session_token,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
export const useUser = () => {
    return useContext(UserContext);
};