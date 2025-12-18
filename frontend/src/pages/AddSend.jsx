import './AddSend.css';
import MyButton from  '../components/MyButton.jsx';
import HomeNavigationBar from '../components/HomeNavigationBar.jsx';
import { useState } from 'react';
import { newSend } from '../api/api.js';


export default function AddSend(){

    const [form, setForm] = useState({
        style: 'Slab',
        difficulty: 'V0',
        holds: 'Crimps',
        notes: ''
    });

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
                <fieldset>
                    <legend>Please select the climb style:</legend>
                    <div>
                        <input type="radio" id="styleChoice1" name="style" value="Slab" checked={form.style === 'Slab'} onChange={handleChange}/>
                        <label htmlFor="styleChoice1">Slab</label>
                        <input type="radio" id="styleChoice2" name="style" value="Overhang" checked={form.style === 'Overhang'} onChange={handleChange}/>
                        <label htmlFor="styleChoice2">Overhang</label>
                        <input type="radio" id="styleChoice3" name="style" value="Incline" checked={form.style === 'Incline'} onChange={handleChange}/>
                        <label htmlFor="styleChoice3">Incline</label>
                        <input type="radio" id="styleChoice4" name="style" value="Traverse" checked={form.style === 'Traverse'} onChange={handleChange}/>
                        <label htmlFor="styleChoice4">Traverse</label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Please select a climb difficulty</legend>
                    <div>
                        <input type="radio" id="climbDiff0" name="difficulty" value="V0" checked={form.difficulty === 'V0'} onChange={handleChange}/>
                        <label htmlFor="climbDiff0">V0</label>
                        <input type="radio" id="climbDiff1" name="difficulty" value="V1" checked={form.difficulty === 'V1'} onChange={handleChange}/>
                        <label htmlFor="climbDiff1">V1</label>
                        <input type="radio" id="climbDiff2" name="difficulty" value="V2" checked={form.difficulty === 'V2'} onChange={handleChange}/>
                        <label htmlFor="climbDiff2">V2</label>
                        <input type="radio" id="climbDiff3" name="difficulty" value="V3" checked={form.difficulty === 'V3'} onChange={handleChange}/>
                        <label htmlFor="climbDiff3">V3</label>
                        <input type="radio" id="climbDiff4" name="difficulty" value="V4" checked={form.difficulty === 'V4'} onChange={handleChange}/>
                        <label htmlFor="climbDiff4">V4</label>
                        <input type="radio" id="climbDiff5" name="difficulty" value="V5" checked={form.difficulty === 'V5'} onChange={handleChange}/>
                        <label htmlFor="climbDiff5">V5</label>
                        <input type="radio" id="climbDiff6" name="difficulty" value="V6" checked={form.difficulty === 'V6'} onChange={handleChange}/>
                        <label htmlFor="climbDiff6">V6</label>
                        <input type="radio" id="climbDiff7" name="difficulty" value="V7" checked={form.difficulty === 'V7'} onChange={handleChange}/>
                        <label htmlFor="climbDiff7">V7</label>
                        <br/>
                        <input type="radio" id="climbDiff8" name="difficulty" value="V8" checked={form.difficulty === 'V8'} onChange={handleChange}/>
                        <label htmlFor="climbDiff8">V8</label>
                        <input type="radio" id="climbDiff9" name="difficulty" value="V9" checked={form.difficulty === 'V9'} onChange={handleChange}/>
                        <label htmlFor="climbDiff9">V9</label>
                        <input type="radio" id="climbDiff10" name="difficulty" value="V10" checked={form.difficulty === 'V10'} onChange={handleChange}/>
                        <label htmlFor="climbDiff2">V10</label>
                        <input type="radio" id="climbDiff11" name="difficulty" value="V11" checked={form.difficulty === 'V11'} onChange={handleChange}/>
                        <label htmlFor="climbDiff3">V11</label>
                        <input type="radio" id="climbDiff12" name="difficulty" value="V12" checked={form.difficulty === 'V12'} onChange={handleChange}/>
                        <label htmlFor="climbDiff12">V12</label>
                        <input type="radio" id="climbDiff13" name="difficulty" value="V13" checked={form.difficulty === 'V13'} onChange={handleChange}/>
                        <label htmlFor="climbDiff13">V13</label>
                        <input type="radio" id="climbDiff14" name="difficulty" value="V14" checked={form.difficulty === 'V14'} onChange={handleChange}/>
                        <label htmlFor="climbDiff14">V14</label>
                        <input type="radio" id="climbDiff15" name="difficulty" value="V15" checked={form.difficulty === 'V15'} onChange={handleChange}/>
                        <label htmlFor="climbDiff15">V15</label>
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
                <MyButton text="Add to Catalogue"></MyButton>

            </form>
        </div>

        </>
    );
}