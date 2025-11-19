import './Login.css'
import { useState } from 'react'
import MyButton from '../components/MyButton.jsx'
import { NavLink } from "react-router"


export default function Login(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return( 
        <>
        <h1>Login</h1>
        <div>
            <form>
                <label htmlFor="username">Username: </label>
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                >
                </input><br/><br/>
                
                <label htmlFor="password">Password: </label>
                <input
                type="text"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                id="password"
                ></input>
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
    )

}
