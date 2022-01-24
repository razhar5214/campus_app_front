import React from "react"
import axios from "axios"
import "./campusStyle.css"
import {useEffect, useState} from "react"

export default function NewCampus(props){
    useEffect(() => {
        props.updateHeaderMsg({message:"New Campus Form"})
    }, [])

    const [name, setName] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [address, setAddress] = useState("")
    const [description, setDescription] = useState("") 

    const [redirect, setRedirect] = useState(false)

    async function submitHandler(e){
        e.preventDefault()
        await axios.post(`http://localhost:8080/campuses`, {name, imageUrl, address, description})
        setRedirect(true)
    }
 
    return(
        <div className="add-campus-body">
            <h1>Add Campus</h1>
            <form onSubmit={submitHandler} className="add-campus-form">
                <label className="add-campus-form-labels">
                Name:
                    <input type="text" name="name" value={name} className="add-campus-input" onChange={(e) => setName(e.target.value)}/>
                </label>
                <label className="add-campus-form-labels">
                Image Url:
                    <input type="text" name="imageUrl" value={imageUrl} className="add-campus-input" onChange={(e) => setImageUrl(e.target.value)}/>
                </label>
                <label className="add-campus-form-labels">
                Address:
                    <input type="text" name="address" value={address} className="add-campus-input" onChange={(e) => setAddress(e.target.value)}/>
                </label>
                <label className="add-campus-form-labels">
                Description :
                    <textarea type="text" name="description" value={description} className="add-campus-input" id="add-campus-description" onChange={(e) => setDescription(e.target.value)}/>
                </label>

                <input type="submit" value="Add Campus" className="addCampus-btn" id="add-campus-submit-btn"/>
            </form>
        </div>
    )
}