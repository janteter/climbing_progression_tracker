import './Login.css';
import { useState } from 'react';
import MyButton from '../components/MyButton.jsx';
import { NavLink } from "react-router";
import { login } from '../api/api.js';


export default function Login(){

    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    });


    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await login(loginInfo);
            
            if (response.ok) {
                console.log("Successful login");
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
        <h1>Login</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input
                type="text"
                value={loginInfo.username}
                onChange={handleChange}
                id="username"
                >
                </input><br/><br/>
                
                <label htmlFor="password">Password: </label>
                <input
                type="text"
                value={loginInfo.password}
                onChange={handleChange}
                id="password"
                ></input>
                <br/>
            <MyButton text='login'></MyButton>
            </form>
        </div>
        <br/><br/>
        <div>
            <nav>    
                <NavLink to="/register">            
                    <MyButton text="Registration" ></MyButton>
                </NavLink>
            </nav>
        </div>
        </>
    );
}
