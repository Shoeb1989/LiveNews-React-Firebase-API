import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [User, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const CreateUSer = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword (auth, email, password)
    }


    const SignIn  = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }



    useEffect( () => {
        const Unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state changed', currentUser);
             setUser(currentUser);
             setLoading(false);
        });

        return () => {
            Unsubscribe();
        }


    },[])


    const authInfo = {
        User, 
        loading,
        CreateUSer,
        SignIn,
        logOut


    }

    return (
        <AuthContext.Provider value={authInfo}>


            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;