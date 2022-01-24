import React from "react"
import {useEffect, useState} from "react"
import {Link} from "react-router-dom";
import "./campusStyle.css"

export default function CampusList(props){
    //Update Header Text
 
    const [campusData, setCampusData] = useState(null);

    useEffect(() => {
        props.updateHeaderMsg({message:"Campus Data"})

        var requestOptions = {
            method: 'GET',
            // redirect: 'follow'
          };
          
          fetch("http://localhost:8080/campuses", requestOptions)
            .then(res => res.json())
            .then(result => setCampusData(result))
            .catch(error => console.log('error', error));

    }, [])

    console.log(campusData);
    function checkData(){
        if(!campusData){
            return (
                <div className="emptyData">There are no campuses registered in the database</div>
            )
        }
    }

    return(
        <div className="campusList-body">
            <div className="campusList-head">
                <h1>All Campuses</h1>
                <button className="addCampus-btn"
                onClick={event =>  window.location.href='/NewCampus'}>Add Campus</button>

            </div>
            <div className="campus-cards">
            
            {checkData()}
            {
                campusData?.map((item, index) =>{
                    return(
                        <div className="campus-card" key={index}>
                            <div className="campus-card-img-div">
                                <img src={item.imageUrl}/>
                            </div>
                            <div>
                            
                            <Link to={`/ShowCampus?id=${item.id}`}><h1 className="campus-card-name">{item.name}</h1></Link>
                                <p>{item.address}</p>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            
        </div>
    )
}

//fetch call to express