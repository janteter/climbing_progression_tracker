import HomeNavigationBar from '../components/HomeNavigationBar.jsx';
import MyButton from  '../components/MyButton.jsx';
import { useState } from 'react';
import { retrieveClimbs, deleteClimb } from '../api/api.js';
import './PrevSends.css';

export default function PrevSends(){
    
    const [form, setForm] = useState({
        target_date: ''
    });

    const [sendsList, setSendsList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorShow, setErrorShow] = useState(false);



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
            if(!response.ok) {
                setSendsList([]);
                setErrorShow(true);
                setErrorMessage(`No climbs found for ${form.target_date}`);
                throw new Error(`Response Status: ${response}`);
            }
            else {
                const data = await response.json();
                setErrorShow(false);
                setSendsList(data);
            }
            
        }
        catch (error) {
            console.error(error.message);
        }
    };

    const handleDelete = async (e) => {
       // e.preventDefault();

        try{
            const response = await deleteClimb(e);
        }
        catch(error){
            console.error(error.message);
        }

    };

    const displaySendList = sendsList.map((climb) => 
        <div className="list" key={climb.sequence}>
            <p className="result" >Style:  <br/>{climb.style}</p>
            <p className="result" >Difficulty: <br/>{climb.difficulty}</p>
            <p className="result" >Type of Holds: <br/>{climb.holds}</p>
            <div>
                <br/><MyButton text="Delete" onClick={() => handleDelete(climb.sequence)}></MyButton>
            </div>
        </div>
    );


    return(
        <>
            <div><HomeNavigationBar></HomeNavigationBar></div>
            <h1>View Previous Sends</h1>
            <div>
                <p>Please enter a date in the to view climbs from that day</p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="date"> Target Date <br/>(YYYY-MM-DD) <br/></label>
                    <input
                        className="inbox"
                        type="text"
                        id="date"
                        value={form.date}
                        onChange={handleChange}>
                    </input><br/>
                    <MyButton className="retrieve" text="Retrieve"></MyButton> <br/>
                </form>
            </div>
            <div>   
                {sendsList && displaySendList}
            </div> 
            <div><br/>
                {errorShow && errorMessage}
            </div>
        </>
    );
}