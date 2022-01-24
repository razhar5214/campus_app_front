import React from "react"
import {useState, useEffect} from "react"
import {Link, useLocation} from "react-router-dom"
import {withRouter} from "react-router"


const ShowStudent = (props) => {

    const location = useLocation();
    const id = location.search ? location.search.split('=')[1] : null

    // const [studentData, setStudentData] = useState(null);

    useEffect(() => {
        props.updateHeaderMsg({message:"Student Data"})

        // var requestOptions = {
        //     method: 'GET',
        //     // redirect: 'follow'
        //   };
          
        //   fetch(`http://localhost:8080/students/${id}`, requestOptions)
        //     .then(res => res.json())
        //     .then(result => setStudentData(result))
        //     .catch(error => console.log('error', error));

    }, [])


    const studentData = ({
        "id": 9,
        "firstName": "Courtney",
        "lastName": "Mendez",
        "email": "CourtMendez99@gmail.com",
        "imageUrl": "https://www.kindpng.com/picc/m/21-214439_free-high-quality-person-icon-default-profile-picture.png",
        "gpa": 3.64,
        "createdAt": "2022-01-23T10:45:45.287Z",
        "updatedAt": "2022-01-23T10:45:45.287Z"
    })
    console.log(studentData)
    function checkData(){
        if(!studentData){
            return (
                <div className="emptyData">There is no data for this user</div>
            )
        }
    }

    return(
        
        <div>
            <h1>Show Student</h1>
            {checkData()}
            <div className="student-cards">
                <div className="student-card">
                    {/* <img src={studentData.imageUrl} />
                    <p>{studentData.firstName}</p>
                    <p>{studentData.lastName}</p>
                    <p>{studentData.email}</p>
                    <p>{studentData.gpa}</p> */}
                    <img src={studentData.imageUrl} />
                    <p>{studentData.firstName}</p>
                    <p>{studentData.lastName}</p>
                    <p>{studentData.email}</p>
                    <p>{studentData.gpa}</p>

                    
                    <button>Edit</button>
                    <button>Delete</button>

                </div>
            </div>
        </div>
    )

}

export default ShowStudent