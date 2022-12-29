import { createContext, useEffect, useState } from "react";
import React from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init'
const auth = getAuth(app)


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    console.log(user);
    // create user with email and password
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login with email and password
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google signUp
    const loginWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    // logOut
    const logout = () => {
        return signOut(auth);
    }

    // Update user name
    const updateUserName = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    // user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])

    const authInfo = {
        user,
        loader,
        login,
        logout,
        setLoader,
        createUser,
        loginWithGoogle,
        updateUserName
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
