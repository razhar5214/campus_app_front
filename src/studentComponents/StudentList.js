import React from "react"
import {useEffect, useState} from "react"
import studentStyle from './studentStyle.css'
export default function StudentList(props){

    const [studentData, setStudentData] = useState(null);

    useEffect(() => {
        props.updateHeaderMsg({message:"Student Data"})

        var requestOptions = {
            method: 'GET',
            // redirect: 'follow'
          };
          
          fetch("http://localhost:3001/StudentList", requestOptions)
            .then(res => res.json())
            .then(result => setStudentData(result))
            .catch(error => console.log('error', error));

    }, [])

    console.log(studentData);
    return(
        <div className="studentList-body">
            <h1>Student List</h1>

            <div className="student-cards">
                {
                    studentData?.map((item,index) =>{
                        return(
                            <div className="student-card" key={index}>
                                <img src={item.imageUrl} />
                                <p>{item.firstName}</p>
                                <p>{item.lastName}</p>
                                <p>{item.email}</p>
                                <p>{item.gpa}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}