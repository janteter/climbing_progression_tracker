import './AddSend.css';
import MyButton from  '../components/MyButton.jsx';
import HomeNavigationBar from '../components/HomeNavigationBar.jsx';
import { useState } from 'react';
import { newSend } from '../api/api.js';


export default function AddSend(){

    const [form, setForm] = useState({
        style: '',
        difficulty: '',
        holds: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await newSend(form);
            alert('Send Added Successfully!');
        }
        catch (error) {
            console.error('Failed to Add Send :(');
        }
    };

    return (
        <>
        <div><HomeNavigationBar></HomeNavigationBar> </div>
        <h1>This is where you add a send!</h1>
        <div>
            <p>
                Please add information about your send below!
            </p>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="style">Send Style <br/></label>
                <input 
                    type="text" 
                    id="style" 
                    value={form.style}
                    onChange={handleChange}>
                </input><br/><br/>
                
                <label htmlFor="diff">Send Difficulty <br/></label>
                <input 
                    type="text" 
                    id="difficulty" 
                    value={form.difficulty}
                    onChange={handleChange}>
                </input><br/><br/>
                
                <label htmlFor="hold">Send Hold Types <br/></label>
                <input 
                    type="text" 
                    id="holds" 
                    value={form.holds}
                    onChange={handleChange}>
                </input><br/><br/>
                
                <MyButton text="Add to Catalogue"></MyButton>

            </form>
        </div>

        </>
    );
}