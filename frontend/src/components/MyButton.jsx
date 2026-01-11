import './MyButton.css';

export default function MyButton({ text, onClick }) {

    return(
        <button className="text-black 
        bg-gray-100 border-3 border-slate-500
        rounded-lg px-12 py-2 mx-12 my-2 text-base 
        font-medium cursor-pointer hover:bg-zinc-300"
        onClick={onClick}>{text}
        </button>
    );

}