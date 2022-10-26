import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/Firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';


const auth = getAuth(app)

export const authContext = createContext();

const AuthContext = ({ children }) => {

    //state for user
    const [user, setUser] = useState({});

    //state for loader
    const [loader, setLoader] = useState(true)

    //google signin
    const googleSignin = (provider) => {
        setLoader(true);
        return signInWithPopup(auth, provider)
    }

    //github signin
    const githubSignin = (provide) => {
        setLoader(true);
        return signInWithPopup(auth, provide)
    }

    //email password signUp
    const emailPassSignup = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }



    //email password login
    const emailPassLogin = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //signout
    const signout = () => {
        setLoader(true);
        return signOut(auth)
    }

    //google verification
    let handleVarificationMail = () => {

        return sendEmailVerification(auth.currentUser)
    }

    //set display name
    const updateUser = (name, photo) => {
        setLoader(true);
        return updateProfile(auth.currentUser, {

            displayName: name, photoURL: photo
        })

    }

    //hold user state
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);
            console.log('User:', currentUser);
            setLoader(false);
        })

        return () => {

            unsubscribe();
        }

    }, [])

    //setting authValue
    const authInfo = { googleSignin, emailPassSignup, emailPassLogin, signout, user, handleVarificationMail, updateUser, githubSignin, loader };
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthContext;