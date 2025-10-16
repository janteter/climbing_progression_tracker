import './MyButton.css'

export default function MyButton({ text, onClick }) {

    return(
        <button onClick={onClick}>{text}</button>
    )

}