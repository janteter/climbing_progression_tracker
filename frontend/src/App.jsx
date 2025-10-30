import './App.css'
import Home from "./pages/Home"
import AddSend from "./pages/AddSend"
import PrevSends from "./pages/PrevSends"
import { Routes, Route } from "react-router"




function App() {
  // const [count, setCount] = useState(0)
  

  return (
    <>
      <Routes>
            <Route index element={<Home />} />
            <Route path="newSend" element={<AddSend />}/>
            <Route path="prevSends" element={<PrevSends />}/>
      </Routes>
      </> 
  )
}

export default App
