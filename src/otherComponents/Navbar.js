import React from "react"
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import "./navbar.css"

export default function Navbar(props){
    //console.log(props)
    const headerMessage = props.message;

    return(
        <div className="nav">
            <h1 className="nav-header-msg">{headerMessage}</h1>
            <div className="nav-menu">
                <button 
                className="nav-btn" id="nav-home-btn"
                onClick={event =>  window.location.href='/'}>Home</button>
            
                <button className="nav-btn" 
                onClick={event =>  window.location.href='/CampusList'}>Campuses</button>

                <button className="nav-btn"
                onClick={event =>  window.location.href='/StudentList'}>Students</button>
               
            </div>
        </div>
    )
}