import MyButton from "./MyButton";
import { NavLink } from "react-router"
import "./HomeNavigationBar.css"

export default function HomeNavigationBar(){
    return(
        <div className="banner">
            <nav>
                <NavLink to="/Home">
                    <MyButton className="h-button" text="Home Page"></MyButton>
                </NavLink>
                <NavLink to="/todaySends">
                    <MyButton className="h-button" text="Today's Sends"></MyButton>
                </NavLink>
                <NavLink to="/newSend">
                    <MyButton className="h-button" text="Add a Send"></MyButton>
                </NavLink>
                <NavLink to="/prevSends">
                    <MyButton className="h-button" text="Previous Sends"></MyButton>
                </NavLink>
            </nav>
        </div>
    )
}