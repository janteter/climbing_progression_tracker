import HomeNavigationBar from '../components/HomeNavigationBar.jsx'
import MyButton from  '../components/MyButton.jsx'
import { useEffect, useState } from 'react'
import { retrieveClimbs } from '../api/api.js';

export default function PrevSends(){
    
    const [form, setForm] = useState({
        target_date: ''
    });

    const [sendsList, setSendsList] = useState([]);


    const handleChange = (e) => {
        setForm({
            ...form,
            target_date: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await retrieveClimbs(form);
            setSendsList(response)
            alert("successfully retrieved climbs for your specified day!")
        }
        catch (error) {
            alert("failed to retrieve climbs!")
        }
    }

    const displaySendList = sendsList.map((climb) => 
        <div key={climb.sequence}>
            <p>{climb.style}</p>
            <p>{climb.difficulty}</p>
            <p>{climb.holds}</p>
        </div>
    )


    return(
        <>
            <div className="banner"><HomeNavigationBar></HomeNavigationBar></div>
            <h1>View Previous Sends</h1>
            <div>
                <p>Please enter a date in the to view climbs from that day</p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="date"> Target Date <br/>(YYYY-MM-DD) <br/></label>
                    <input
                        type="text"
                        id="date"
                        value={form.date}
                        onChange={handleChange}>
                    </input><br/>
                    <MyButton text="Retrieve"></MyButton> <br/>
                </form>
                 <div>
                    {sendsList && displaySendList}
                </div> 
            </div>
        </>
    )
}