import React, { useState, useEffect, createContext } from "react";
import Fire from "../Components/Fire";

export const AuthContext = createContext({
    isLoggedIn: false,
    token: null,
    login: () => { },
    logout: () => { },
    emailError: "",
    passwordError: "",
    clearErrors: () => { },
    user: "",
    username: ""
});


const AuthProvider = (props) => {
    const getInitialUser = () => {
        const localUser = localStorage.getItem("user");
        return localUser ? localUser : "";
    }
    const [user, setUser] = useState(getInitialUser());
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [username, setUsername] = useState("");
    const [isAdminState, setIsAdmin] = useState(false);

    const handleLogin = (email, password) => {
        Fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const handleLogout = () => {
        Fire.auth().signOut();
        localStorage.removeItem("user");
        setIsAdmin(false);
        setUsername("");
        setUser("");
    };

    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    };

    const authListener = () => {
        Fire.auth().onAuthStateChanged((user) => {
            if (user) {
                user.getIdTokenResult().then(idTokenResult => {
                    const adminClaim = idTokenResult.claims.admin;
                    if (adminClaim !== undefined) {
                        setIsAdmin(true);
                    }
                })
                setUser(user);
                setUsername(user.providerData[0].email.split("@")[0]);
                localStorage.setItem("user", JSON.stringify(user));
            } else {
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();
    }, [user]);

    const isLoggedIn = () => {
        return user !== "";
    }

    const isAdmin = () => {
        return isAdminState;
    }

    const value = {
        isLoggedIn: isLoggedIn(),
        token: null,
        login: handleLogin,
        logout: handleLogout,
        emailError: emailError,
        passwordError: passwordError,
        clearErrors: clearErrors,
        user: user,
        username: username,
        isAdmin: isAdmin(),
    };

    return <AuthContext.Provider value={value} {...props} />
}


const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error(`useAuth must be used within a AuthProvider`);
    }
    return context;
}

export { AuthProvider, useAuth };
