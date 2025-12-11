import { useState, useEffect, useContext, createContext } from 'react';
import { useNavigate } from 'react-router';
import { statusCheck } from '../api/api.js';

const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [authenticationStatus, setAuthenticationStatus] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        
        const fetchStatus = async () => {

            try {
                const response = await statusCheck();
                if (response.ok){
                    setAuthenticationStatus(true);
                }
                
            }
            catch (error) {
                console.error(error.message);
            }
            
        };
        
        fetchStatus();
        }, []
    );

    function logOut () {
        setAuthenticationStatus(false);
        navigate("/");
    }

    return (
        <>    
            <AuthContext.Provider value ={{ authenticationStatus, logOut }}>
                {children}
            </AuthContext.Provider>;
        </>
    );   
};

export const useAuth = () => {
    return useContext(AuthContext);
};