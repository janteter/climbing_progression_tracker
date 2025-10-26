import './AddSend.css'
import MyButton from  '../components/MyButton.jsx'
import HomeNavigationBar from '../components/HomeNavigationBar.jsx'

export default function AddSend(){

    return (
        <>
        <div className="banner"><HomeNavigationBar></HomeNavigationBar> </div>
        <h1>This is where you add a send!</h1>
        <div>
            <p>
                Please add information about your send below!
            </p>
        </div>
        <div>
            <form id="newSend">
                <label for="style">Send Style <br/></label>
                <input type="text" id="style"></input><br/><br/>
                <label for="diff">Send Send Difficulty <br/></label>
                <input type="text" id="diff"></input><br/><br/>
                <label for="hold">Send Hold Types <br/></label>
                <input type="text" id="hold"></input><br/><br/>
                <MyButton text="Add to Catalogue"></MyButton>

            </form>
        </div>

        </>
    );
}