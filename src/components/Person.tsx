// import { useState } from "react";

// interface is a way to define the shape of the object. in this case we will be defining the shape of props.
interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country: Country
}

//enum is a way to create a type that can only be few other option
export enum Country {
    Brazil = "Brazil",
    India = "India",
    Canada = "Canada"
}


export const Person = (props: Props) => {

    // const [name, setName] = useState<string>("")
    // const name: string = "yogi"
    // const rollNumber: number = 2210


    return (
    <div>
        <h1>Name: {props.name}</h1>
        <h1> Email: {props.email} </h1>
        <h1> Age: {props.email} </h1>
        <h1> This Person {props.isMarried ? "is" : "is not"} Married </h1>
         
        {props.friends.map((friend: string)=>{
                return <h1>{friend}</h1> 
        })}

        <h1>Country : {props.country}</h1>
        
    </div>
  )
}