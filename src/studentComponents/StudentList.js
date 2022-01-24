import React from "react"
import {useEffect, useState} from "react"
import studentStyle from './studentStyle.css'
import {Link} from "react-router-dom"



export default function StudentList(props){
    console.log(props)
    const [studentData, setStudentData] = useState(null);
 
    useEffect(() => {
        props.updateHeaderMsg({message:"Student Data"})

        var requestOptions = {
            method: 'GET',
            // redirect: 'follow'
          };
          
          fetch("http://localhost:8080/students", requestOptions)
            .then(res => res.json())
            .then(result => setStudentData(result))
            .catch(error => console.log('error', error));

    }, [])

    console.log(studentData);
    function checkData(){
        if(!studentData){
            return (
                <div className="emptyData">There are no students registered in the database</div>
            )
        }
    }

    return(
        <div className="studentList-body">
            <div className="campusList-head">
                <h1>All Students</h1>
                <button className="addCampus-btn"
                onClick={event =>  window.location.href='/NewStudent'}>Add Student</button>
            </div>


            <div className="student-cards">
                {checkData()}
                {
                    studentData?.map((item,index) =>{
                        return(
                            <div className="student-card" key={index}>
                                <img src={item.imageUrl} />
                                
                                    <Link to={`/ShowStudent?id=${item.id}`} className="student-card-name">
                                        <p>{item.firstName}</p>
                                        <p>{item.lastName}</p>
                                    </Link>
                                
                                <p>Campus Name</p>
                                {/* <p>{item.email}</p>
                                <p>{item.gpa}</p> */}
                            </div>
                        )
                    })
                    
                }
            </div>
        </div>
    )
}