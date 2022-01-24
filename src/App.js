import './App.css';
import React from "react"
import {useState} from "react"
import {BrowserRouter as Router} from 'react-router-dom';
import {Link, Routes, Route} from "react-router-dom";
import {Home, Navbar, CampusList, StudentList, ShowStudent, ShowCampus, NewCampus, NewStudent} from "./allComponents"

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
          <Route exact path="/campuses" element={<CampusList {...headerMsg} updateHeaderMsg={updateHeaderMsg}/>}/>   
          <Route exact path="/students" element={<StudentList {...headerMsg}  updateHeaderMsg={updateHeaderMsg} />}/>
          <Route path="/ShowStudent" element={<ShowStudent {...headerMsg} updateHeaderMsg={updateHeaderMsg} />}/>
          <Route path="/ShowCampus" element={<ShowCampus {...headerMsg} updateHeaderMsg={updateHeaderMsg} />}/>
          <Route exact path="/NewCampus" element={<NewCampus {...headerMsg} updateHeaderMsg={updateHeaderMsg}/>}/>
          <Route exact path="/NewStudent" element={<NewStudent {...headerMsg} updateHeaderMsg={updateHeaderMsg}/>}/>
        </Routes>
    </div>
  );
}


