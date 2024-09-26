import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [User, setUser] = useState(null);

    const CreateUSer = (email, password) => {
        return createUserWithEmailAndPassword (auth, email, password)
    }


    const SignIn  = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = () => {
        return signOut(auth);
    }



    useEffect( () => {
        const Unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state changed', currentUser);
             setUser(currentUser);
        });

        return () => {
            Unsubscribe();
        }


    },[])


    const authInfo = {
        User, 
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