import './Home.css'
import HomeNavigationBar from '../components/HomeNavigationBar'

export default function Home() {

    return(
        <>
        <h1> Climbing Progression Tracker </h1>
        <div>
            <p className="myIntro">
                Welcome to the Climbing Progression Tracker <br/>
                This application allows you to record, add, and review your climbing ascents! <br/>
            </p>
        </div>
        <div> 
            <HomeNavigationBar></HomeNavigationBar> 
        </div>
        </>

    );
}