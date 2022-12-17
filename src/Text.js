import React from "react"
import {useState, useEffect} from "react"

export const Text = ( ) =>{
    const [text, setText] = useState("")

    useEffect(()=>{
        console.log("component mounted")

        return ()=>{
            console.log("component unmounted")
        }
    },[])
    
    const handleChange = (e) =>{
        setText(e.target.value)
    }
    return (
        <>
        <input 
            onChange = {handleChange} 
            type="text" 
            />
            <div>

        {text}
            </div>
            </>
    )
}