import React from 'react';

import "./App.css"
import { Person, Country } from "./components/Person"

function App(){

  // creating function in typescript that take name and return age

  // const getAge = (name : string): number =>{
  //   return 99
  // }


    return (
        <div className="classname">
            <Person
                name="Pedro"
                email="yogi.2210@gmail.com"
                age= {21}
                isMarried = {false}
                friends={["khopa", "amy2", "gaj", "abhi"]}
                country= {Country.India}
            />
        </div>
    )
}

export default App