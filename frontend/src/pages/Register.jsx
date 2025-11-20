import { useState } from 'react';


export default function Register(){

    const [registerInfo, setRegisterInfo] = useState({
        username: '',
        password: '',
        fullname: '',
    });
    

    const handleChange = (e) => {
        setRegisterInfo({
            ...registerInfo,
            [e.target.name] : e.target.value
        });
    };

    return(
        <>
            <h1>Registration</h1>
            <form>
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

            </form>


        </>
    );
}