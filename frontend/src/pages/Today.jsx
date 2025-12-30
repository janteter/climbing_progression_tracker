import "./Today.css";
import { useEffect, useState } from 'react';
import { retrieveClimbs } from '../api/api.js';
import HomeNavigationBar from '../components/HomeNavigationBar.jsx';
import { dateFormat } from "../utils/Utilities.js";

export default function TodaySends() {

    const [sendsData, setSendsData] = useState([]);
    const [errorShow, setErrorShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        let cancelled = false;
        
        const fetchClimbs = async () => {
            
            const currDate = dateFormat();
            const dateObj = {
                target_date: currDate
            };

            console.log(dateObj);
            try {
                const response = await retrieveClimbs(dateObj);
                
                if(!response.ok) {
                    setErrorShow(true);
                    setErrorMessage(`There are no climbs recorded for today ${currDate}`);
                }
                else{
                    const data = await response.json();
                    setSendsData(data);
                }
            }
            catch (error) {
                console.error(error.message);
            }
            
        };

        fetchClimbs();
        
        return () => {
        cancelled = true;
        };

        }, []
    );

    const displaySendList = sendsData.map((climb) => 
        <div className="list" key={climb.sequence}>
            <p className="result" >Style:  <br/>{climb.style}</p>
            <p className="result" >Difficulty: <br/>{climb.difficulty}</p>
            <p className="result" >Type of Holds: <br/>{climb.holds}</p>
        </div>
    );

    return( 
        <>
            <div class="page-container">
                <div>
                    <HomeNavigationBar></HomeNavigationBar>
                </div>
                <h1 class="today-title"> Today's Sends</h1>
                <div> 
                    {sendsData && displaySendList} 
                    {errorShow && errorMessage}
                </div>
            </div>
        </>
    );
}