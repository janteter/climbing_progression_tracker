import './MyButton.css';

export default function MyButton({ text, onClick }) {

    return(
        <button className="custom-b" onClick={onClick}>{text}</button>
    );

}