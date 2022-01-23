import React from "react"
import {Link} from "react-router-dom"
import {useEffect} from "react"

export default function Home(props){
   // console.log(props)
    useEffect(() => {
        props.updateHeaderMsg({message:"Welcome!"})
    }, [])
    
    return(
        <div>
            
        </div>
    )
}