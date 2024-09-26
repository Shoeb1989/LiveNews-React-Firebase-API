import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [User, setUser] = useState(null)

    const CreateUSer = (email, password) => {
        return createUserWithEmailAndPassword (auth, email, password)
    }


    const authInfo = {
        User, 
        CreateUSer

    }

    return (
        <AuthContext.Provider value={authInfo}>


            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;