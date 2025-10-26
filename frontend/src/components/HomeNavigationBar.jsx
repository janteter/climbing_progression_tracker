import MyButton from "./MyButton";
import { NavLink } from "react-router"
import "./HomeNavigationBar.css"

export default function HomeNavigationBar(){
    return(
        <div>
            <nav>
                <NavLink to="/">
                    <MyButton className="h-button" text="Home Page"></MyButton>
                </NavLink>
                    <MyButton className="h-button" text="Today's Sends"></MyButton>
                <NavLink to="/newSend">
                    <MyButton className="h-button" text="Add a Send"></MyButton>
                </NavLink>
                    <MyButton className="h-button" text="Previous Sends"></MyButton>
            </nav>
        </div>
    )
}