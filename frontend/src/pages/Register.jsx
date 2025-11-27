import { useState } from 'react';
import { newClimber } from '../api/api.js';
import MyButton from '../components/MyButton.jsx';

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

            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
        }
        catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setRegisterInfo({
            ...registerInfo,
            [e.target.id] : e.target.value
        });
    };

    return(
        <>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}> 
                <label htmlFor="username">New Username: </label>
                <input
                required
                type="text"
                id="username"
                value={registerInfo.username}
                onChange={handleChange}
                >
                </input><br/><br/>
                
                <label htmlFor="password">New Password: </label>
                <input
                required
                type="text"
                id="password"
                value={registerInfo.password}
                onChange={handleChange}
                ></input><br/><br/>

                <label htmlFor="fullanme">Your Full Name: </label>
                <input
                required
                type="text"
                id="fullname"
                value={registerInfo.fullname}
                onChange={handleChange}
                ></input><br/><br/>

                <label htmlFor="email">Email: </label>
                <input
                required
                type="text"
                id="email"
                value={registerInfo.email}
                onChange={handleChange}
                ></input><br/><br/>
                <MyButton text="Submit"></MyButton>
            </form>


        </>
    );
}