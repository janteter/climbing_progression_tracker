import { useState, Fragment } from 'react';

export function dateFormat() {
        const currDate = new Date();
        const day = currDate.getDate().toString().padStart(2, "0");
        const year = currDate.getFullYear().toString();
        const month = (currDate.getMonth()+1).toString().padStart(2, "0");

        return `${year}-${month}-${day}`;
    }

export function ClimbInfo({form, handleSubmit}) {
    

    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailure, setShowFailure] = useState(false);
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
}