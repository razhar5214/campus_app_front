import React from "react"
import {useEffect} from "react"
import "./campusStyle.css"

export default function CampusList(props){
    //Update Header Text
    useEffect(() => {
        props.updateHeaderMsg({message:"Campus Data"})
    }, [])


    return(
        <div className="campusList-body">
            <div className="campusList-head">
                <h1>All Campuses</h1>
                <button className="addCampus-btn"
                onClick={event =>  window.location.href='/NewCampus'}>Add Campus</button>
                
                
            </div>

            {/* {renderAllCampuses} */}
        </div>
    )
}

//fetch call to express