import './AddSend.css';
import MyButton from  '../components/MyButton.jsx';
import HomeNavigationBar from '../components/HomeNavigationBar.jsx';
import { useState, Fragment } from 'react';
import { newSend } from '../api/api.js';
import { dateFormat } from "../utils/Utilities.js";

export default function AddSend(){

    const [form, setForm] = useState({
        style: 'Slab',
        difficulty: 'V0',
        holds: 'Crimps',
        notes: ''
    });

    const [showSuccess, setShowSuccess] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            console.log(form);
            const response = await newSend(form);
            console.log(response.ok);

            if (response.ok) {
                setShowSuccess(true);
                setResponseMessage('Climb successfully added!');
            }

        }
        catch (error) {
            console.error(`Failed to Add Send: ${error}`);
        }
    };

    const numOfDifficulties = 15;
    const difficulties = Array.from({ length: numOfDifficulties}, (v, i) => `V${i}`).map((diff) =>
        <Fragment key={diff}>
            <input 
                type="radio" 
                id={`climbDiff${diff}`}
                name="difficulty"
                value={`${diff}`} 
                checked={form.difficulty === `${diff}`} 
                onChange={handleChange}/>
            <label htmlFor={`climbDiff${diff}`}>{diff}</label>
        </Fragment>
    );

    const listOfStyles = ["Slab", "Overhang", "Incline", "Traverse"];
    const numOfStyles = listOfStyles.length;
    const styles = Array.from({ length: numOfStyles}, (v, i) => listOfStyles[i]).map((style) => 
        <Fragment key={style}>
            <input 
                type="radio" 
                id={style}
                name="style" 
                value={style}
                checked={form.style === style} 
                onChange={handleChange}/>
           <label htmlFor={style}>{style}</label>
        </Fragment>
    );

    return (
        <>
        <div class="page-container">
            <div><HomeNavigationBar></HomeNavigationBar> </div>
            <h1 class="add-send-title">This is where you add a send!</h1>
            <div class="add-inputs">
                <div>
                    <p>
                        Please add information about your send below!
                    </p>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Please select the climb style:</legend>
                            <div>
                                {styles}
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Test of Dynamic list for difficulties</legend>
                            <div>
                                {difficulties}
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Please select the general hold type:</legend>
                            <div>
                                <input type="radio" id="holdsChoice1" name="holds" value="Crimps" checked={form.holds === 'Crimps'} onChange={handleChange}/>
                                <label htmlFor="holdsChoice1">Crimps</label>
                                <input type="radio" id="holdsChoice2" name="holds" value="Jugs" checked={form.holds === 'Jugs'} onChange={handleChange}/>
                                <label htmlFor="holdsChoice2">Jugs</label>
                                <input type="radio" id="holdsChoice3" name="holds" value="Slopers" checked={form.holds === 'Slopers'} onChange={handleChange}/>
                                <label htmlFor="holdsChoice3">Slopers</label>
                                <input type="radio" id="holdsChoice4" name="holds" value="Mixed" checked={form.holds === 'Mixed'} onChange={handleChange}/>
                                <label htmlFor="holdsChoice4">Mixed</label>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div>
                                <legend>Please select the date type:</legend>
                                <div>
                                    <input type="radio" id="dateOption1" name="date" value={dateFormat} checked={form.holds === 'Crimps'} onChange={handleChange}/>
                                    <label htmlFor="dateOption1">Today</label>
                                    <input type="radio" id="dateOption2" name="holds" value="Jugs" checked={form.holds === 'Jugs'} onChange={handleChange}/>
                                    <label htmlFor="dateOption1">Previous Date</label>
                                </div>
                            </div>
                        </fieldset>

                        <MyButton text="Add to Catalogue"></MyButton>

                    </form>
                    <div>
                        {showSuccess && responseMessage}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}