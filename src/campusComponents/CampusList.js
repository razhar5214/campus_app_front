import React from "react"
import {useEffect, useState} from "react"
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
          
          fetch("http://localhost:3001/CampusList", requestOptions)
            .then(res => res.json())
            .then(result => setCampusData(result))
            .catch(error => console.log('error', error));

    }, [])

    console.log(campusData);


    return(
        <div className="campusList-body">
            <div className="campusList-head">
                <h1>All Campuses</h1>
                <button className="addCampus-btn"
                onClick={event =>  window.location.href='/NewCampus'}>Add Campus</button>

            </div>
            <div className="campus-cards">
            {
                campusData?.map((item, index) =>{
                    return(
                        <div className="campus-card" key={index}>
                            <div className="campus-card-img-div">
                                <img src={item.imageUrl}/>
                            </div>
                            <div>
                                <h1 className="campus-card-name">{item.name}</h1>
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