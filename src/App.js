import './App.css';
import React from "react"
import {useState} from "react"
import {BrowserRouter as Router} from 'react-router-dom';
import {Link, Routes, Route} from "react-router-dom";
import {Home, Navbar, CampusList, StudentList, NewCampus} from "./allComponents"

export default function App() {
  const [headerMsg, setHeaderMsg] = useState({message:"default"});
  
  function updateHeaderMsg(newMsg){
    setHeaderMsg(prevMsg =>({
      ...prevMsg,
      message:newMsg.message
    }))
  }
  return (
    <div className="App">
      <Navbar {...headerMsg}/>
      <Routes>
          <Route exact path="/" element={<Home {...headerMsg} updateHeaderMsg={updateHeaderMsg}/>}/>
          <Route exact path="/CampusList" element={<CampusList {...headerMsg} updateHeaderMsg={updateHeaderMsg}/>}/>
          <Route exact path="/NewCampus" element={<NewCampus {...headerMsg} updateHeaderMsg={updateHeaderMsg}/>}/>
        </Routes>
    </div>
  );
}


