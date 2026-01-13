import './AddSend.css';
import MyButton from  '../components/MyButton.jsx';
import HomeNavigationBar from '../components/HomeNavigationBar.jsx';
import { useState, Fragment } from 'react';
import { newSend } from '../api/api.js';
import { dateFormat } from "../utils/Utilities.js";
import { ClimbInfo } from '../components/ClimbInfo.jsx';

export default function AddSend(){

    const todayDate = dateFormat();
    const [form, setForm] = useState({
        style: 'Slab',
        difficulty: 'V0',
        holds: 'Crimps',
        send_date: todayDate
    });

    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailure, setShowFailure] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            console.log(form);
            const response = await newSend(form);
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

    return (
        <>
        <div className="page-container">
            <div><HomeNavigationBar></HomeNavigationBar> </div>
            <h1 className="add-send-title">This is where you add a send!</h1>
            <div className="add-inputs">
                <div>
                    <p>
                        Please add information about your send below!
                    </p>
                </div>
                <div>
                    <ClimbInfo form={form} setForm={setForm} handleSubmit={handleSubmit} showSuccess={showSuccess} showFailure={showFailure}></ClimbInfo>
                </div>
            </div>
        </div>
        </>
    );
}