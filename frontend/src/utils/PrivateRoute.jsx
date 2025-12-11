import { useNavigate } from 'react-router';
import { useAuth } from './AuthProvider.jsx';
import { useEffect } from 'react';



export default function PrivateRoute({ children }) {
    const user = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.authenticationStatus) {
            navigate("/");
        }

    }, [user.authenticationStatus, navigate]
);

    return children;  
}