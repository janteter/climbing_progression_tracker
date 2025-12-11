import './App.css';
import Home from "./pages/Home";
import AddSend from "./pages/AddSend";
import PrevSends from "./pages/PrevSends";
import Today from "./pages/Today";
import Login from './pages/Login';
import Register from './pages/Register';
import { Routes, Route } from "react-router";
import AuthProvider from './utils/AuthProvider';
import PrivateRoute from './utils/PrivateRoute';



export default function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path="home" element={<Home />} />
            <Route path="newSend" element={<AddSend />}/>
            <Route path="prevSends" element={<PrevSends />}/>
            <Route path="todaySends" element={<Today/>}/>
          </Route>
        </Routes>
      </AuthProvider>
      </> 
  );
}


