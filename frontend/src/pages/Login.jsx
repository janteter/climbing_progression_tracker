import './Login.css'
import { useState } from 'react'


export default function Login(){

    const [userParams, setUserParams] = useState({
        username: '',
        password: ''
    })
    
    const handleChange = (e) => {
        setUserParams({
            ...userParams,
            [e.target.id]: e.target    
        })
    };


    return( 
        <>
        <h1>Login</h1>
        <label htmlFor="username">Username: </label>
        <form>
            <input
            type="text"
            value={userParams.username}
            onChange={handleChange}
            id="username"
            >
            </input><br/><br/>
            
            <label htmlFor="password">Password:</label>
            <input
            type="text"
            value={userParams.password}
            onChange={handleChange}
            id="password"
            ></input>
        </form>

        </>
    )

}
