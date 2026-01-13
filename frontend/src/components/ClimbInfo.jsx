import { useState, Fragment } from 'react';
import { dateFormat } from '../utils/Utilities';
import MyButton from  '../components/MyButton.jsx';

export function ClimbInfo({ form, setForm, handleSubmit, showSuccess, showFailure }) {
    
    const todayDate = dateFormat();
    const [dateOption, setDateOption] = useState('predefined');

    function Success ( {status} ){
        if (status) {
            return(
                <>
                    <div>
                        <p className='success'>Climb successfully added!</p>
                    </div>
                </>
            );
        }
    }

    function Failure ( {status} ){
        if (status) {
            return(
                <>
                    <div>
                        <p className='faliure'>Date format invalid<br/>Please make sure the format is YYYY-MM-DD</p>
                    </div>
                </>
            );
        }
    }

    const handleChange = (e) => {
        console.log('handleChange called:', e.target.name, e.target.value);
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
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
                        <label htmlFor="holdsChoice1" >Crimps</label>
                        <input type="radio" id="holdsChoice2" name="holds" value="Jugs" checked={form.holds === 'Jugs'} onChange={handleChange}/>
                        <label htmlFor="holdsChoice2">Jugs</label>
                        <input type="radio" id="holdsChoice3" name="holds" value="Slopers" checked={form.holds === 'Slopers'} onChange={handleChange}/>
                        <label htmlFor="holdsChoice3">Slopers</label>
                        <input type="radio" id="holdsChoice4" name="holds" value="Mixed" checked={form.holds === 'Mixed'} onChange={handleChange}/>
                        <label htmlFor="holdsChoice4">Mixed</label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Please select the date type:</legend>
                    <div>
                        <input 
                            type="radio" 
                            id="dateOption1" 
                            name="send_date" 
                            value={todayDate}
                            onChange={(e) => {
                                handleChange(e);
                                setDateOption("predefined"); 
                            }}
                            checked={dateOption === "predefined"}
                        
                        />
                        <label htmlFor="dateOption1">Today</label>
                        <input 
                            type="radio" 
                            id="dateOption2"
                            name="send_date" 
                            onChange={() => {
                                setDateOption("custom");
                                setForm({
                                    ...form,
                                    send_date: ""
                                });
                            }} 
                            checked={dateOption === "custom"}/>
                        <label htmlFor="dateOption2">Specific Date </label>

                        {dateOption === "custom" && (
                            <input 
                                type="text" 
                                id="customDate" 
                                name="send_date"
                                value={form.send_date}
                                onChange={handleChange} 
                                placeholder="YYYY-MM-DD">
                            </input>)}
                        <label html="customDate"></label>
                    </div>
                </fieldset>

                <MyButton text="Add to Catalogue"></MyButton>

            </form>
            <Success status={showSuccess}></Success>
            <Failure status={showFailure}></Failure>
        </>
    );
}