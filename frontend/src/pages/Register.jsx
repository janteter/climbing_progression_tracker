import { useState } from 'react';
import { newClimber } from '../api/api.js';

export default function Register(){

    const [registerInfo, setRegisterInfo] = useState({
        username: '',
        email: '',
        fullname: '',
        password: '',
    });
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await newClimber(registerInfo);
        }
        catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setRegisterInfo({
            ...registerInfo,
            [e.target.name] : e.target.value
        });
    };

    return(
        <>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}> 
                <label htmlFor="username">New Username: </label>
                <input
                type="text"
                value={registerInfo.username}
                onChange={handleChange}
                >
                </input><br/><br/>
                
                <label htmlFor="password">New Password: </label>
                <input
                type="text"
                value={registerInfo.password}
                onChange={handleChange}
                ></input><br/><br/>

                <label htmlFor="fullanme">Your Full Name: </label>
                <input
                type="text"
                value={registerInfo.fullname}
                onChange={handleChange}
                ></input><br/><br/>

                <label htmlFor="email">Email: </label>
                <input
                type="text"
                value={registerInfo.email}
                onChange={handleChange}
                ></input><br/><br/>

            </form>


        </>
    );
}