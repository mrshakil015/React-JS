
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from './../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password );
    }

    const signinUser = (email, passowrd)=>{
        return signInWithEmailAndPassword(auth, email,passowrd);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    // Observe auth state change

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('Current value of the current user ',currentUser);
            setUser(currentUser);
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {user, createUser, signinUser, logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}

/**
 * 1. create context and export it
 * 2. set provider with value
 * 3. use the Auth provider in the main.jsx file
 * 4. access children in the authprovider component as children and use it in the middle of the provider
 */