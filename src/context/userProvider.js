import { createContext, useContext, useState } from "react";
const UserContext = createContext(null);
export default function UserProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    function signIn( tokin ) {
        console.log("tokin", tokin);
        localStorage.setItem("session_token", tokin);
        toggleIsLoggedIn();
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
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
export const useUser = () => {
  return useContext(UserContext);
};
