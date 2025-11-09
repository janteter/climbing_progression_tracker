import "./Today.css"
import { useEffect, useState } from 'react'
import { retrieveClimbs } from '../api/api.js';

function dateFormat() {
        const currDate = new Date();
        const day = currDate.getDate().toString().padStart(2, "0");
        const year = currDate.getFullYear().toString();;
        const month = (currDate.getMonth()+1).toString().padStart(2, "0");

        return `${year}-${month}-${day}`
    }

export default function TodaySends() {

    const [sendsData, setSendsData] = useState([])

    useEffect(() => {
        let cancelled = false;
        
        const fetchClimbs = async () => {
            try{
                setCurrDate(dateFormat())
                const response = await retrieveClimbs(currData)
            }
            catch (error) {
                alert('Failed to retrieve climb data')
            }
            
            if(!cancelled) {
                setSendsData(response)
            }
          };

          fetchClimbs();
          
          return () => {
            cancelled = true;
          };

        }, []
    );


    return <>

    </>
}