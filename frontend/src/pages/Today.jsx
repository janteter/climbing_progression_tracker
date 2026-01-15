import "./Today.css";
import { useEffect, useState, useMemo } from 'react';
import { retrieveClimbs } from '../api/api.js';
import { deleteClimb } from '../api/api.js';
import HomeNavigationBar from '../components/HomeNavigationBar.jsx';
import { dateFormat } from "../utils/Utilities.js";
import MyButton from "../components/MyButton.jsx";
import { Drawer } from "@mui/material";
import { ClimbInfo } from "../components/ClimbInfo.jsx";
import { updateSend } from "../api/api.js";


export default function TodaySends() {

    const [sendsData, setSendsData] = useState([]);
    const [errorShow, setErrorShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const currDate = dateFormat();
    const dateObj = useMemo (() => ({
        target_date: currDate
    }), [currDate]);


    useEffect(() => {
        let cancelled = false;
        
        const fetchClimbs = async () => {
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

        }, [currDate, dateObj]
    );

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            console.log(form);
            const response = await updateSend(form);
            console.log(response.ok);

            if (response.ok) {
                setShowSuccess(true);
                setShowFailure(false);
            }
            else if (response.status == 422){
                setShowFailure(true);
                setShowSuccess(false);
            }

        }
        catch (error) {
            console.error(`Failed to Add Send: ${error}`);
        }
    };
    
    const handleDelete = async (e) => {
        try{
            const response = await deleteClimb(e);

            try {
                const response = await retrieveClimbs(dateObj);
                
                if(!response.ok) {
                    setErrorShow(true);
                    setErrorMessage(`There are no climbs recorded for today ${currDate}`);
                    setSendsData([]);
                }
                else{
                    const data = await response.json();
                    setSendsData(data);
                }
            }
            catch (error) {
                console.error(error.message);
            }
        }
        catch(error){
            console.error(error.message);
        }

    };

    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const todayDate = dateFormat();
    const [form, setForm] = useState({
        style: 'Slab',
        difficulty: 'V0',
        holds: 'Crimps',
        send_date: todayDate,
        sequence: ''
    });

    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailure, setShowFailure] = useState(false);

    const displaySendList = sendsData.map((climb) => 
        <div className="list" key={climb.sequence}>
            <p className="result" >Style:<br/>{climb.style}</p>
            <p className="result" >Difficulty:<br/>{climb.difficulty}</p>
            <p className="result" >Type of Holds:<br/>{climb.holds}</p>
            <MyButton text="Delete" onClick={() => {handleDelete(climb.sequence);}}></MyButton>
            <MyButton 
                text="Update" 
                onClick={() =>{
                    setForm({...form, 
                        style: climb.style,
                        difficulty: climb.difficulty,
                        holds: climb.holds,
                        sequence: climb.sequence
                    }); 
                    toggleDrawer(true)();
                }}
            >
            </MyButton>
            <Drawer 
                open={open} 
                onClose={toggleDrawer(false)}
                anchor={'right'}
                sx={{
                    textAlign: "center",
                    '& .MuiDrawer-paper' : {
                        width: '700px'
                    }
                }}
            >
                <ClimbInfo form={form} setForm={setForm} handleSubmit={handleSubmit} showSuccess={showSuccess} showFailure={showFailure} ></ClimbInfo>
            </Drawer>
        </div>
    );

    return( 
        <>
            <div class="page-container">
                <div>
                    <HomeNavigationBar></HomeNavigationBar>
                </div>
                <h1 class="today-title"> Today's Sends</h1>
                    {errorShow && errorMessage}
                <div className="allClimbsToday"> 
                    {sendsData && displaySendList}
                </div>
            </div>
        </>
    );
}