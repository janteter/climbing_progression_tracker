import MyButton from "./MyButton";

export default function NavigationBar(){
    return(
        <div>
            <nav>
                    <MyButton text="Today's Sends"></MyButton>
                <Navlink to="/newSend">
                    <MyButton text="Add a Send"></MyButton>
                </Navlink>
                    <MyButton text="Previous Sends"></MyButton>
            </nav>
        </div>
    )
}