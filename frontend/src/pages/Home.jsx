import './Home.css';
import HomeNavigationBar from '../components/HomeNavigationBar';

export default function Home() {

    return(
        <>
        <div class="page-container">
            <div> 
                <HomeNavigationBar></HomeNavigationBar> 
            </div>
            <h1 class="home-title"> Home </h1>
            <div>
                <p class="myIntro">
                    Welcome to the Climbing Progression Tracker <br/>
                    This application allows you to record, add, and review your climbing ascents! <br/>
                </p>
            </div>
        </div>
        </>

    );
}