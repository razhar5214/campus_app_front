import React from "react"
import {useState, useEffect} from "react"
import Axios from "axios"

export default function NewStudent(props){
    useEffect(() => {
        props.updateHeaderMsg({message:"New Campus Form"})
    }, [])

    const [firstname, setFirstname] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [imageUrl, setImageUrl] = useState("example.com/image")
    const [gpa, setGpa] = useState("")

    const [redirect, setRedirect] = useState(false)

    async function submitHandler(e){
        e.preventDefault()
        await Axios.post(`http://localhost:8080/students`, {firstname, lastName, email, imageUrl, gpa})
        console.log('did something')
        setRedirect(true)
    }
 
    return(
        <div className="add-campus-body">
        <h1>Add Student</h1>

        <form onSubmit={submitHandler} className="add-campus-form">
            <label className="add-campus-form-labels">
                First Name:
                <input type="text" name="firstname" value={firstname} className="add-campus-input" onChange={(e) => setFirstname(e.target.value)} />
            </label>
            <label className="add-campus-form-labels">
                Last Name:
                <input type="text" name="lastName" value={lastName} className="add-campus-input" onChange={(e) => setLastName(e.target.value)} />
            </label>

            <label className="add-campus-form-labels">
                Email:
                <input type="text" name="email" value={email} className="add-campus-input" onChange={(e) => setEmail(e.target.value)} />
            </label>

            <label className="add-campus-form-labels">
                Image Url:
                    <input type="text" name="imageUrl" value={imageUrl} className="add-campus-input" onChange={(e) => setImageUrl(e.target.value)}/>
            </label>

            <label className="add-campus-form-labels">
                GPA:
                <input type="text" name="gpa" value={gpa} className="add-campus-input" onChange={(e) => setGpa(e.target.value)} />
            </label>

            <input type="submit" value="Add Student" className="addCampus-btn" id="add-campus-submit-btn"/>
        </form>
    </div>
    )
}