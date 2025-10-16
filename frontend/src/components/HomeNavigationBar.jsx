import MyButton from "./MyButton";
import { NavLink } from "react-router"
import "./HomeNavigationBar.css"

export default function HomeNavigationBar(){
    return(
        <div>
            <nav>
                    <MyButton text="Today's Sends"></MyButton>
                <NavLink to="/newSend">
                    <MyButton text="Add a Send"></MyButton>
                </NavLink>
                    <MyButton text="Previous Sends"></MyButton>
            </nav>
        </div>
    )
}