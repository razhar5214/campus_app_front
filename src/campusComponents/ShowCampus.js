import React from "react"
import {useState, useEffect} from "react"
import {Link, useLocation} from "react-router-dom"

export default function ShowCampus(props){

    const location = useLocation();
    const id = location.search ? location.search.split('=')[1] : null

    const [campusData, setCampusData] = useState(null);

    useEffect(() => {
        props.updateHeaderMsg({message:"Campus Data"})

        var requestOptions = {
            method: 'GET',
            // redirect: 'follow'
          };
          
          fetch(`http://localhost:8080/campuses/${id}`, requestOptions)
            .then(res => res.json())
            .then(result => setCampusData(result))
            .catch(error => console.log('error', error));

    }, [])

    console.log(campusData)
    return(
        <div>
            <h1>Show Campus</h1>
        </div>
    )
}