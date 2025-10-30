import HomeNavigationBar from '../components/HomeNavigationBar.jsx'
import { useState } from 'react'
import { retrieveClimbs } from '../api/api.js';

export default function PrevSends(){
    
    const [form, setForm] = useState({
        date: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            date: e.target.id
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await retrieveClimbs(form);
            alert("successfully retrieved climbs for your specified day!")
        }
        catch (error) {
            alert("failed to retrieve climbs!")
        }
    }


    return(
        <>
            <div className="banner"><HomeNavigationBar></HomeNavigationBar></div>
            <h1>View Previous Sends</h1>
            <div>
                <p>Please enter a date to view climbs from that day</p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="date"> Target Date <br/></label>
                    <input
                        type="text"
                        id="date"
                        value={form.date}
                        onChange={handleChange}>
                    </input>
                </form>
            </div>
        </>
    )
}