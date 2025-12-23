import './Login.css';
import { useState } from 'react';
import MyButton from '../components/MyButton.jsx';
import { NavLink, useNavigate } from "react-router";
import { login } from '../api/api.js';
import { useAuth } from '../utils/AuthProvider.jsx';


export default function Login(){

    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    });
    const { loggedIn } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await login(loginInfo);
            
            if (response.ok) {
                loggedIn();
                console.log("login navigating");
            }

        }
        catch (error){
            console.error(error);
        }

    };

    const handleChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.id] : e.target.value
        });
    };

    return( 
        <>
        <div class="child">
            <h1>Login</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div class="inputs">
                        <input
                        type="text"
                        value={loginInfo.username}
                        onChange={handleChange}
                        id="username"
                        placeholder='Username'
                        >
                        </input>
                    </div>
                    <div class="inputs">
                        <input
                        type="text"
                        value={loginInfo.password}
                        onChange={handleChange}
                        id="password"
                        placeholder='Password'
                        ></input>
                    </div>
                <MyButton text='Login'></MyButton>
                </form>
            </div>
            <p> OR</p>
            <div>
                <nav>    
                    <NavLink to="/register">            
                        <MyButton text="Register" ></MyButton>
                    </NavLink>
                </nav>
            </div>
        </div>
        </>
    );
}
