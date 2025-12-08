import { useState, useEffect, useContext } from 'react';
import statusCheck from '../api';


export default function AuthProvider({ children }) {

    const [authenticationStatus, setAuthenticationStatus] = useState(false);
    
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

    return (
            children
    );   
}