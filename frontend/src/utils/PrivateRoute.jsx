import { useNavigate, Outlet } from 'react-router';
import { useAuth } from './AuthProvider.jsx';
import { useEffect } from 'react';



export default function PrivateRoute() {
    const { authenticationStatus, isLoading} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && !authenticationStatus) {
            console.log("private navigating");
            navigate("/");

        }

    }, [isLoading, authenticationStatus, navigate]
);

    return (<Outlet/>);  
}