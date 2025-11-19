import './App.css'
import Home from "./pages/Home"
import AddSend from "./pages/AddSend"
import PrevSends from "./pages/PrevSends"
import Today from "./pages/Today"
import Login from './pages/Login'
import Register from './pages/Register'
import { Routes, Route } from "react-router"



export default function App() {

  return (
    <>
      <Routes>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="home" element={<Home />} />
            <Route path="newSend" element={<AddSend />}/>
            <Route path="prevSends" element={<PrevSends />}/>
            <Route path="todaySends" element={<Today/>}/>
      </Routes>
      </> 
  )
}


