import { useNavigate } from 'react-router';
import { useAuth } from './AuthProvider.jsx';
import { useEffect } from 'react';



export default function PrivateRoute({ children }) {
    const { authenticationStatus, isLoading} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && !authenticationStatus) {
            navigate("/");
        }

    }, [isLoading, authenticationStatus, navigate]
);

    return children;  
}