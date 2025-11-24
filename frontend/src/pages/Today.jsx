import "./Today.css";
import { useEffect, useState } from 'react';
import { retrieveClimbs } from '../api/api.js';
import HomeNavigationBar from '../components/HomeNavigationBar.jsx';

function dateFormat() {
        const currDate = new Date();
        const day = currDate.getDate().toString().padStart(2, "0");
        const year = currDate.getFullYear().toString();
        const month = (currDate.getMonth()+1).toString().padStart(2, "0");

        return `${year}-${month}-${day}`;
    }

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
            <div>
                <HomeNavigationBar></HomeNavigationBar>
            </div>
            <h1> Today's Sends</h1>
            <div> 
                {sendsData && displaySendList} 
                {errorShow && errorMessage}
            </div>
        </>
    );
}