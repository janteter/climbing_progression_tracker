import { useState, useEffect, useContext, createContext } from 'react';
import { useNavigate } from 'react-router';
import { statusCheck } from '../api/api.js';

const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [authenticationStatus, setAuthenticationStatus] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        
        const fetchStatus = async () => {

            try {
                const response = await statusCheck();
                if (response.ok){
                    setAuthenticationStatus(true);
                }
                else {
                    setAuthenticationStatus(false);
                }
                
            }
            catch (error) {
                console.error(error.message);
                setAuthenticationStatus(false);
            }
            finally{
                setIsLoading(false);
            }
            
        };
        
        fetchStatus();
        }, []
    );

    function logOut () {
        setAuthenticationStatus(false);
        navigate("/");
    }

    function loggedIn () {
        setAuthenticationStatus(true);
        navigate("home");
    }

    return (
        <>    
            <AuthContext.Provider value ={{ authenticationStatus, isLoading, logOut, loggedIn}}>
                {children}
            </AuthContext.Provider>
        </>
    );   
};

export const useAuth = () => {
    return useContext(AuthContext);
};