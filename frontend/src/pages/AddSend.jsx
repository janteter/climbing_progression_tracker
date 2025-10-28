import './AddSend.css'
import MyButton from  '../components/MyButton.jsx'
import HomeNavigationBar from '../components/HomeNavigationBar.jsx'
import { useState } from 'react'
import { newSend } from '../api/api.js'


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
        e.preventDdefault();

        try{
            const response = await newSend(form);
            alert('Send Added Successfully!')
        }
        catch (error) {
            alert('Failed to Add Send :(')
        }
    };

    return (
        <>
        <div className="banner"><HomeNavigationBar></HomeNavigationBar> </div>
        <h1>This is where you add a send!</h1>
        <div>
            <p>
                Please add information about your send below!
            </p>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                
                <label for="style">Send Style <br/></label>
                <input 
                    type="text" 
                    id="style" 
                    value={form.style}
                    onChange={handleChange}>
                </input><br/><br/>
                
                <label for="diff">Send Send Difficulty <br/></label>
                <input 
                    type="text" 
                    id="diff" 
                    value={form.difficulty}
                    onChange={handleChange}>
                </input><br/><br/>
                
                <label for="hold">Send Hold Types <br/></label>
                <input 
                    type="text" 
                    id="hold" 
                    value={form.holds}
                    onChange={handleChange}>
                </input><br/><br/>
                
                <MyButton text="Add to Catalogue"></MyButton>

            </form>
        </div>

        </>
    );
}